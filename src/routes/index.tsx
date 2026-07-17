import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  Scissors,
  Heart,
  Flower2,
  Hand,
  Star,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Menu,
  X,
  ArrowRight,
  Quote,
  Check,
} from "lucide-react";

import heroImg from "@/assets/hero-salon.jpg";
import aboutImg from "@/assets/about-salon.jpg";
import facialImg from "@/assets/service-facial.jpg";
import bridalImg from "@/assets/service-bridal.jpg";
import hairImg from "@/assets/service-hair.jpg";
import nailsImg from "@/assets/service-nails.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://id-preview--d6ae0f2a-4885-4793-a91c-a372c4f88edd.lovable.app/og-image.jpg",
      },
    ],
  }),
  component: Home,
});

const PHONE = "+92 300 0554008";
const PHONE_HREF = "tel:+923000554008";
const WHATSAPP_HREF = "https://wa.me/923000554008";
const INSTAGRAM_HREF = "https://instagram.com";
const MAPS_HREF = "https://maps.google.com/?q=Anam+Ismail+Signature+Salon+Okara";

const services = [
  {
    icon: Flower2,
    title: "Hydra Facial",
    desc: "Deep-cleansing hydrating facial for a luminous, refreshed complexion.",
    img: facialImg,
  },
  {
    icon: Sparkles,
    title: "Bridal & Party Makeup",
    desc: "Signature bridal looks and elegant party glam by our senior artists.",
    img: bridalImg,
  },
  {
    icon: Scissors,
    title: "Keratin & Hair Care",
    desc: "Smoothing keratin, cuts, colour and treatments tailored to your hair.",
    img: hairImg,
  },
  {
    icon: Hand,
    title: "Mani, Pedi & Nails",
    desc: "Refined manicures, pedicures and nail art in a spotless studio.",
    img: nailsImg,
  },
];

const testimonials = [
  {
    name: "Faryal Safdar",
    quote:
      "Absolutely loved my experience at this salon! I always come here for all my services and they never disappoint. Staff is professional, friendly and attentive every single time.",
    tag: "Regular Client",
  },
  {
    name: "Hamna Sehar",
    quote:
      "The experience at Anam Ismail has been very good. Rimshah attended me — such nice manners and her skills are excellent. I will definitely visit again very soon.",
    tag: "Facial & Makeup",
  },
  {
    name: "Aisha K.",
    quote:
      "Booked bridal makeup for my sister — the team went above and beyond. Clean environment, calming vibe and results that turned every head at the wedding.",
    tag: "Bridal Client",
  },
];

const stats = [
  { value: "4.8★", label: "Google Rating" },
  { value: "387+", label: "Verified Reviews" },
  { value: "10+", label: "Signature Services" },
  { value: "100%", label: "Women-Owned" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
        <span className="font-display text-lg leading-none">A</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg tracking-wide text-primary">
          Anam Ismail
        </span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Signature Salon
        </span>
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#visit", label: "Visit" },
  ];
  return (
    <header
      id="top"
      className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:flex sm:justify-between sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" /> Book Now
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Interior of Anam Ismail Signature Salon in Okara"
          width={1600}
          height={1200}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="lg:col-span-8 lg:col-start-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-white/90 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Okara's Signature Beauty Studio
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Beauty crafted with <em className="not-italic text-[color:var(--gold-soft)]">care</em>,
            <br />
            designed for <span className="italic">you</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
            Bridal makeup, hydra facials, keratin treatments and expert hair care —
            delivered in a serene, women-owned studio in the heart of Okara.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-primary shadow-luxe transition-transform hover:-translate-y-0.5"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Explore Services
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[color:var(--gold-soft)] text-[color:var(--gold-soft)]"
                  />
                ))}
              </div>
              <span>
                <strong className="text-white">4.8</strong> · 387+ Google reviews
              </span>
            </div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>Women-owned · Est. Okara</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-border bg-[color:var(--cream)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl text-primary sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">
        <span className="h-px w-8 bg-[color:var(--gold)]" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{desc}</p>
      )}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
          <SectionHeading
            eyebrow="Signature Services"
            title={
              <>
                A studio built for <em className="italic">every</em> occasion.
              </>
            }
            desc="From your everyday glow-up to your wedding day, our team blends technique, premium products and warm hospitality."
          />
          <a
            href={WHATSAPP_HREF}
            className="hidden shrink-0 items-center gap-2 rounded-full border border-primary/20 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            Chat on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-luxe"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--blush)] text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl text-primary">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const bullets = [
    "Trained senior stylists and makeup artists",
    "Hygienic, single-use tools & premium products",
    "Calm, women-owned space designed for comfort",
    "Personalised consultations for every client",
  ];
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[color:var(--cream)] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-luxe">
            <img
              src={aboutImg}
              alt="Elegant vanity detail inside Anam Ismail Signature Salon"
              loading="lazy"
              width={1400}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden max-w-[240px] rounded-2xl bg-primary p-6 text-primary-foreground shadow-luxe sm:block">
            <div className="font-display text-4xl leading-none text-[color:var(--gold-soft)]">
              4.8★
            </div>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Rated by 387+ happy clients on Google.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="About the Salon"
            title={
              <>
                A signature approach to modern beauty in Okara.
              </>
            }
          />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Anam Ismail Signature Salon is a women-owned studio dedicated to
            crafting beauty experiences that feel personal, refined and truly
            relaxing. Every service is delivered by a trained team using
            high-quality products in a clean, welcoming environment.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-sm text-foreground/90"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
            <a
              href={INSTAGRAM_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" /> Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Loved by our clients"
          title={
            <>
              Real stories from
              <br className="hidden sm:block" /> the chair.
            </>
          }
          desc="A few of the 387+ verified reviews shared by our clients on Google."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-[color:var(--gold-soft)]" />
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-display text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate font-medium text-primary">
                    {t.name}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t.tag}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="visit" className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground shadow-luxe sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              <span className="h-px w-8 bg-[color:var(--gold-soft)]" /> Book Your Visit
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              Ready to feel like the
              <br />
              best version of you?
            </h2>
            <p className="mt-5 max-w-lg text-primary-foreground/80">
              Slots fill quickly on weekends. Reserve a chair with a quick call or
              WhatsApp — we'll take care of the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-primary shadow-luxe transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-2xl bg-white/5 p-6 backdrop-blur ring-1 ring-white/10 sm:p-8">
            <InfoRow icon={MapPin} label="Visit">
              Opposite Zellbury, Mohammad Ali Jinnah Rd, Okara, 56300, Pakistan
            </InfoRow>
            <InfoRow icon={Clock} label="Hours">
              Open daily · Closes 12:00 AM
            </InfoRow>
            <InfoRow icon={Phone} label="Call / WhatsApp">
              {PHONE}
            </InfoRow>
            <InfoRow icon={Heart} label="Identifies as">
              Women-owned business
            </InfoRow>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-[color:var(--gold-soft)]"
            >
              Get Directions <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--gold)]/20 text-[color:var(--gold-soft)]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.28em] text-primary-foreground/60">
          {label}
        </div>
        <div className="mt-1 text-sm text-primary-foreground/95">{children}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--cream)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A premium, women-owned signature salon serving Okara with love, care
            and craft.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs uppercase tracking-[0.24em] text-primary">
            Visit
          </div>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Opposite Zellbury,
            <br /> Mohammad Ali Jinnah Rd,
            <br /> Okara, 56300, Pakistan
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs uppercase tracking-[0.24em] text-primary">
            Contact
          </div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <a href={PHONE_HREF} className="hover:text-primary">
                {PHONE}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                @anamismailsalon on Instagram
              </a>
            </li>
            <li>Open daily · Closes 12:00 AM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <span>
            © {new Date().getFullYear()} Anam Ismail Signature Salon. All rights reserved.
          </span>
          <span>Crafted with care in Okara, Pakistan.</span>
        </div>
      </div>
    </footer>
  );
}
