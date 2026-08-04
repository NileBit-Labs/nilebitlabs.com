import Image from "next/image";
import Link from "next/link";
import type { ComponentType, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Tone = "default" | "muted" | "primary" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

export const typography = {
  displayXl: "text-display-xl",
  displayLg: "text-display-lg",
  displayMd: "text-display-md",
  h1: "text-heading-1",
  h2: "text-heading-2",
  h3: "text-heading-3",
  h4: "text-heading-4",
  bodyLg: "text-body-lg",
  body: "text-body",
  bodySm: "text-body-sm",
  caption: "text-caption",
  eyebrow: "text-eyebrow",
  cta: "text-cta",
  code: "text-code",
} as const;

export const iconRules = {
  library: "lucide-react",
  sizes: {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  },
  strokeWidth: 1.75,
  spacing: "gap-2",
  hover: "transition-colors duration-200",
} as const;

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "content" | "page" | "wide";
}

export function Container({
  children,
  className,
  size = "page",
}: ContainerProps) {
  const sizes = {
    content: "max-w-readable",
    page: "max-w-page",
    wide: "max-w-wide",
  };

  return (
    <div className={cn("mx-auto w-full px-layout-sm md:px-layout-md lg:px-layout-lg", sizes[size], className)}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light" | "surface";
  spacing?: "sm" | "md" | "lg";
}

export function Section({
  children,
  className,
  tone = "dark",
  spacing = "md",
}: SectionProps) {
  const tones = {
    dark: "bg-background text-heading",
    light: "bg-heading text-background",
    surface: "bg-surface text-heading",
  };
  const spacings = {
    sm: "py-section-sm",
    md: "py-section-md",
    lg: "py-section-lg",
  };

  return <section className={cn(tones[tone], spacings[spacing], className)}>{children}</section>;
}

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return <div className={cn("min-h-screen bg-background text-body-color page-enter", className)}>{children}</div>;
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-readable", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className={cn(typography.eyebrow, "mb-4 text-primary")}>{eyebrow}</p> : null}
      <h2 className={cn(typography.h2, "text-heading")}>{title}</h2>
      {description ? <p className={cn(typography.bodyLg, "mt-5 text-muted")}>{description}</p> : null}
    </div>
  );
}

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: Size;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  className,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex min-h-touch items-center justify-center rounded-button font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
    secondary: "border border-border bg-surface text-heading hover:bg-surface-elevated",
    ghost: "text-heading hover:bg-surface",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

interface TextLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}

export function TextLink({ children, href, className, external = false }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn("font-medium text-heading underline decoration-border underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: Tone;
}

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  const tones = {
    default: "border-border bg-surface text-muted",
    muted: "border-border bg-surface-elevated text-muted",
    primary: "border-primary/30 bg-primary-light text-primary",
    success: "border-success/30 bg-success/10 text-success",
    warning: "border-warning/30 bg-warning/10 text-warning",
    error: "border-error/30 bg-error/10 text-error",
  };

  return (
    <span className={cn("inline-flex items-center rounded-pill border px-3 py-1 text-caption font-medium", tones[tone], className)}>
      {children}
    </span>
  );
}

export function Tag(props: BadgeProps) {
  return <Badge {...props} />;
}

export function Pill(props: BadgeProps) {
  return <Badge {...props} />;
}

interface CardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
}

export function Card({ children, className, elevated = false }: CardProps) {
  return (
    <div className={cn("rounded-card border border-border bg-surface p-card text-body-color", elevated && "bg-surface-elevated shadow-soft", className)}>
      {children}
    </div>
  );
}

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return <div className={cn("h-px w-full bg-border", className)} />;
}

interface StatProps {
  label: string;
  value: string;
  detail?: string;
}

export function Stat({ label, value, detail }: StatProps) {
  return (
    <div className="space-y-2">
      <p className={cn(typography.displayMd, "text-heading")}>{value}</p>
      <p className={cn(typography.bodySm, "font-medium text-heading")}>{label}</p>
      {detail ? <p className={cn(typography.caption, "text-muted")}>{detail}</p> : null}
    </div>
  );
}

interface FeatureProps {
  title: string;
  description: string;
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>;
}

export function Feature({ title, description, icon: Icon }: FeatureProps) {
  return (
    <Card>
      {Icon ? <Icon className="mb-6 h-5 w-5 text-primary" strokeWidth={iconRules.strokeWidth} /> : null}
      <h3 className={cn(typography.h4, "text-heading")}>{title}</h3>
      <p className={cn(typography.body, "mt-3 text-muted")}>{description}</p>
    </Card>
  );
}

interface CtaProps {
  title: string;
  description?: string;
  action: ReactNode;
}

export function CTA({ title, description, action }: CtaProps) {
  return (
    <Card elevated className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="max-w-readable">
        <h2 className={cn(typography.h3, "text-heading")}>{title}</h2>
        {description ? <p className={cn(typography.body, "mt-3 text-muted")}>{description}</p> : null}
      </div>
      <div className="shrink-0">{action}</div>
    </Card>
  );
}

interface FormFieldProps {
  children: ReactNode;
  className?: string;
}

export function Field({ children, className }: FormFieldProps) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}

interface LabelProps {
  children: ReactNode;
  htmlFor: string;
}

export function Label({ children, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={cn(typography.bodySm, "block font-medium text-heading")}>
      {children}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn("min-h-touch w-full rounded-input border border-border bg-surface px-4 py-2.5 text-body text-heading placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", props.className)}
    />
  );
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn("min-h-32 w-full rounded-input border border-border bg-surface px-4 py-3 text-body text-heading placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", props.className)}
    />
  );
}

interface SelectProps {
  children: ReactNode;
  id: string;
  name?: string;
  required?: boolean;
  className?: string;
}

export function Select({ children, id, name, required, className }: SelectProps) {
  return (
    <select
      id={id}
      name={name}
      required={required}
      className={cn("min-h-touch w-full rounded-input border border-border bg-surface px-4 py-2.5 text-body text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", className)}
    >
      {children}
    </select>
  );
}

interface CheckboxProps {
  id: string;
  name?: string;
  checked?: boolean;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
}

export function Checkbox({ id, name, checked, onChange }: CheckboxProps) {
  return (
    <input
      id={id}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="mt-1 h-5 w-5 rounded border-border bg-surface text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    />
  );
}

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  open: boolean;
  onToggle: () => void;
}

export function AccordionItem({ title, children, open, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-touch w-full items-center justify-between gap-4 py-4 text-left text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-expanded={open}
      >
        <span className={typography.h4}>{title}</span>
        <span className="text-primary">{open ? "-" : "+"}</span>
      </button>
      {open ? <div className="pb-5 text-muted">{children}</div> : null}
    </div>
  );
}

interface QuoteProps {
  quote: string;
  author?: string;
}

export function Quote({ quote, author }: QuoteProps) {
  return (
    <blockquote className="border-l border-primary pl-6">
      <p className={cn(typography.bodyLg, "text-heading")}>{quote}</p>
      {author ? <footer className={cn(typography.caption, "mt-4 text-muted")}>{author}</footer> : null}
    </blockquote>
  );
}

export function Metric(props: StatProps) {
  return <Stat {...props} />;
}

interface AvatarProps {
  name: string;
  src?: string;
}

export function Avatar({ name, src }: AvatarProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={48}
        height={48}
        className="h-12 w-12 rounded-full object-cover"
      />
    );
  }

  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-elevated text-sm font-semibold text-heading">
      {name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)}
    </span>
  );
}
