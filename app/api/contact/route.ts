import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  summary: string;
  budget?: string;
  timeline?: string;
  website?: string;
  consent: boolean;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedProjectTypes = new Set(["Web or software engineering", "Mobile application", "Artificial intelligence or machine learning", "Blockchain or Web3", "Cloud infrastructure", "UI/UX design", "Technology consulting", "Not sure yet"]);

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

function parseRequest(value: unknown): ContactRequest | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Record<string, unknown>;
  const request: ContactRequest = {
    name: text(input.name, 100), email: text(input.email, 254).toLowerCase(), company: text(input.company, 120),
    projectType: text(input.projectType, 80), summary: text(input.summary, 3000), budget: text(input.budget, 80),
    timeline: text(input.timeline, 80), website: text(input.website, 200), consent: input.consent === true,
  };
  if (request.website) return null;
  if (request.name.length < 2 || !emailPattern.test(request.email) || !allowedProjectTypes.has(request.projectType) || request.summary.length < 20 || !request.consent) return null;
  return request;
}

export async function POST(request: Request) {
  let payload: ContactRequest | null;
  try { payload = parseRequest(await request.json()); } catch { return NextResponse.json({ error: "The request must contain valid JSON." }, { status: 400 }); }
  if (!payload) return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });

  const smtpHost = process.env.CONTACT_SMTP_HOST;
  const smtpPort = Number(process.env.CONTACT_SMTP_PORT || "587");
  const smtpUser = process.env.CONTACT_SMTP_USER;
  const smtpPass = process.env.CONTACT_SMTP_PASS;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || smtpUser;
  if (!smtpHost || !Number.isInteger(smtpPort) || !smtpUser || !smtpPass || !recipient || !from) {
    return NextResponse.json({ error: "The contact service is not configured. Please email info@nilebitlabs.com." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({ host: smtpHost, port: smtpPort, secure: smtpPort === 465, auth: { user: smtpUser, pass: smtpPass } });
  const fields = [
    ["Name", payload.name], ["Email", payload.email], ["Company", payload.company || "Not provided"],
    ["Project type", payload.projectType], ["Budget", payload.budget || "Not provided"], ["Timeline", payload.timeline || "Not provided"], ["Summary", payload.summary],
  ];
  try {
    await transporter.sendMail({
      from: `NileBit Labs Website <${from}>`, replyTo: payload.email, to: recipient,
      subject: `Project inquiry: ${payload.projectType}`,
      text: fields.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
      html: `<h2>New project inquiry</h2>${fields.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`).join("")}`,
    });
    return NextResponse.json({ message: "Thank you. Your inquiry has been sent." });
  } catch {
    return NextResponse.json({ error: "We could not send your inquiry. Please email info@nilebitlabs.com." }, { status: 502 });
  }
}
