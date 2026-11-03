import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/design-system";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "WhatsApp POS Privacy Policy",
  "How NileBit Labs processes information for its Retail and Production WhatsApp POS service, including account linking, messages, records and deletion requests.",
  "/whatsapp-pos-privacy",
);

const sections = [
  [
    "About this service",
    "NileBit Labs operates NileBit POS on WhatsApp for Retail and Production businesses. This policy covers the WhatsApp POS service and its account-linking pages. The website’s NileBot is a separate service; its browser-session and AI processing description does not apply to the POS WhatsApp bot."
  ],
  [
    "Information processed",
    "When you message the POS bot, we receive your WhatsApp phone number, message identifiers, timestamps, message text and button selections. We store conversation and delivery records, selected businesses, your POS user and business identifiers and role, connection credentials, draft actions and operation results. Depending on what you enter or request, this can include products, stock, recipes, production batches, sales, expenses, payment methods and amounts, customer or supplier names and phone numbers, balances and receipts. Do not send card numbers, mobile-money PINs, one-time codes or passwords in WhatsApp."
  ],
  [
    "Connecting and using your business",
    "You connect an existing POS account through a secure web linking page. Your login details are sent to the selected NileBit POS system to authenticate you; the bot does not intentionally store your POS password. It stores an encrypted, limited-access connection token. The existing POS system remains the authoritative business database: confirmed bot actions can update the same records you see on the web. The bot records how a sale was paid; it does not itself collect card or mobile-money funds."
  ],
  [
    "Why information is used",
    "We use this information to identify your chat, connect your authorized businesses, carry out the actions you choose, return requested information and receipts, maintain transaction continuity, prevent duplicate submissions and investigate service or security problems. The current POS bot uses programmed workflows; it does not send your POS conversations to a generative-AI provider."
  ],
  [
    "Service providers and international processing",
    "WhatsApp and Meta process messages through the WhatsApp Business Platform under their own applicable policies. Render hosts the bot and the connected POS APIs; Neon stores the bot’s gateway data. These providers and authorized NileBit operators may process information as needed to operate, maintain and secure the service. The bot database is configured in Frankfurt, Germany; messages, provider operations and POS data may also be processed in other countries. This location statement does not mean that all information remains in Germany."
  ],
  [
    "Storage and security",
    "We use HTTPS connections, access controls, expiring linking actions and encryption for stored connection tokens, chat payloads and operation state. Phone numbers, identifiers, roles and some operational metadata are not individually encrypted by the application. Authorized operators can access information when necessary to support or secure the service. Chat copies on your devices and information retained by WhatsApp or other providers are governed by those systems as well."
  ],
  [
    "Retention",
    "The current pilot does not automatically erase gateway chat history when you disconnect or when a task expires. Gateway records remain until removed through an authorized deletion process. The records are used for service continuity, troubleshooting, security and transaction reconciliation. Business records in the linked POS have their own retention needs. Before introducing an automatic retention schedule, we will update this notice to describe the schedule actually applied."
  ],
  [
    "Disconnecting, access and deletion",
    "You can disconnect a linked account through the bot or revoke its WhatsApp connection in POS Settings. Disconnecting revokes future bot access; it does not delete completed sales, customer balances, business records or existing chat copies. For access, correction or deletion requests, contact info@nilebitlabs.com and identify the service and relevant WhatsApp number or business. We may verify your identity and authority over the business before acting. Requests involving a business’s records may require that business owner’s involvement; some records may need to remain for legitimate legal, accounting or security purposes. Deleting gateway data does not delete copies held by WhatsApp or another person."
  ],
  [
    "Business responsibilities and contact",
    "Only enter information you are authorized to use and share. Business owners should inform their staff and customers about the use of this service where appropriate. Questions and requests about NileBit POS WhatsApp can be sent to info@nilebitlabs.com. We will update this section when the service or its data practices change."
  ],
  [
    "Changes to this policy",
    "We will publish updates on this page with a revised effective date when the service or its data practices change."
  ]
] as const;

export default function WhatsAppPosPrivacyPage() {
  return (
    <div>
      <Section spacing="lg">
        <Container size="content">
          <p className="text-eyebrow text-primary">NileBit POS · WhatsApp</p>
          <h1 className="mt-6 text-heading-1 text-heading">WhatsApp POS Privacy Policy</h1>
          <p className="mt-6 text-body-lg text-muted">
            How we handle information when you use Retail and Production POS through WhatsApp.
          </p>
          <p className="mt-5 text-caption text-muted">Effective November 3, 2026</p>
        </Container>
      </Section>
      <Section tone="surface" spacing="lg">
        <Container size="content">
          <div className="space-y-10">
            {sections.map(([heading, body]) => (
              <section key={heading}>
                <h2 className="text-heading-3 text-heading">{heading}</h2>
                <p className="mt-4 text-body-lg text-muted">{body}</p>
              </section>
            ))}
            <section id="data-deletion">
              <h2 className="text-heading-3 text-heading">Request help or data deletion</h2>
              <p className="mt-4 text-body-lg text-muted">
                Email <a href="mailto:info@nilebitlabs.com" className="text-heading underline underline-offset-4 hover:text-primary">info@nilebitlabs.com</a> with
                the subject “WhatsApp POS privacy request.” Identify the relevant WhatsApp number
                and business, and tell us whether you want access, correction or deletion.
                Do not include your password, PIN or verification codes. We may need to verify
                your identity and authority before acting. Disconnecting an account alone does
                not erase its history or completed POS transactions.
              </p>
            </section>
            <p className="text-body-sm text-muted">
              For the NileBit Labs website and website NileBot, see our{' '}
              <Link href="/privacy" className="text-heading underline underline-offset-4 hover:text-primary">website privacy policy</Link>.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
