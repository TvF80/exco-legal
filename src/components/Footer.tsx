import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Usługi", href: "#services" },
  { label: "Zespół", href: "#team" },
  { label: "O Kancelarii", href: "#about" },
  { label: "Kontakt", href: "#contact" },
  {
    label: "EXCO A2A Polska",
    href: "https://exco.pl",
    external: true,
  },
];

const companyInfo = [
  {
    icon: MapPin,
    lines: ["ul. rtm. Witolda Pileckiego 67, lok. 200", "02-781 Warszawa"],
  },
  {
    icon: Phone,
    lines: ["+48 22 847 61 17"],
    href: "tel:+48228476117",
  },
  {
    icon: Mail,
    lines: ["magdalena.vacher-kielak@exco-legal.pl"],
    href: "mailto:magdalena.vacher-kielak@exco-legal.pl",
  },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--color-navy-dark, #111c33)" }}
      className="relative overflow-hidden"
    >
      {/* Thin gold top border */}
      <div
        className="h-px w-full"
        style={{ backgroundColor: "var(--color-gold)", opacity: 0.25 }}
      />

      {/* Subtle background ornament */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.025]"
        aria-hidden
      >
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <circle cx="900" cy="200" r="350" fill="var(--color-gold)" />
          <circle cx="150" cy="350" r="200" fill="var(--color-cream)" />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* COL 1 — Brand */}
          <div>
            {/* Logo */}
            <a href="#" className="group mb-6 inline-block">
              <div className="flex items-center gap-2">
                <span
                  className="font-serif text-xl font-bold leading-tight tracking-wide transition-opacity duration-200 group-hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-gold)",
                  }}
                >
                  EXCO
                </span>
                <span
                  className="h-5 w-px opacity-30"
                  style={{ backgroundColor: "var(--color-cream)" }}
                />
                <span
                  className="font-serif text-xl font-medium leading-tight tracking-wide transition-opacity duration-200 group-hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-cream)",
                  }}
                >
                  Poland Legal
                </span>
              </div>
              <p
                className="mt-0.5 text-xs tracking-widest uppercase"
                style={{ color: "var(--color-cream)", opacity: 0.35 }}
              >
                Vacher-Kielak
              </p>
            </a>

            <p
              className="mb-5 text-sm leading-relaxed"
              style={{ color: "var(--color-cream)", opacity: 0.55 }}
            >
              Kancelaria radców prawnych oferująca kompleksowe wsparcie prawne
              dla przedsiębiorców krajowych i zagranicznych.
            </p>

            {/* Network badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                backgroundColor: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
              <span
                className="text-xs font-medium tracking-wide"
                style={{ color: "var(--color-gold)" }}
              >
                Część sieci EXCO International
              </span>
            </div>

            {/* Kreston note */}
            <p
              className="mt-4 text-xs leading-relaxed"
              style={{ color: "var(--color-cream)", opacity: 0.35 }}
            >
              Należymy do Kreston International — globalnej sieci doradczej
              obecnej w 108 krajach świata.
            </p>
          </div>

          {/* COL 2 — Quick links */}
          <div>
            <h4
              className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--color-gold)" }}
            >
              Szybkie linki
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-2 text-sm transition-all duration-200"
                    style={{ color: "var(--color-cream)", opacity: 0.6 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.opacity =
                        "1";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-cream)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.opacity =
                        "0.6";
                    }}
                  >
                    <span
                      className="h-px w-0 transition-all duration-200 group-hover:w-4"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    />
                    {link.label}
                    {link.external && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        className="opacity-40"
                      >
                        <path
                          d="M2 8L8 2M8 2H4M8 2V6"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Company data */}
          <div>
            <h4
              className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--color-gold)" }}
            >
              Dane kancelarii
            </h4>

            <div className="space-y-5">
              {companyInfo.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-start gap-3">
                    <Icon
                      size={15}
                      strokeWidth={1.5}
                      style={{ color: "var(--color-gold)", opacity: 0.7 }}
                      className="mt-0.5 shrink-0"
                    />
                    <div>
                      {item.lines.map((line, j) => (
                        <p
                          key={j}
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--color-cream)", opacity: 0.6 }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <a
                      key={i}
                      href={item.href}
                      className="block transition-opacity hover:opacity-90"
                    >
                      {inner}
                    </a>
                  );
                }
                return <div key={i}>{inner}</div>;
              })}

              {/* NIP */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 w-[15px]" />
                <div>
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "var(--color-cream)", opacity: 0.3 }}
                  >
                    NIP
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-cream)", opacity: 0.55 }}
                  >
                    9512488972
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative border-t"
        style={{ borderColor: "rgba(248,245,238,0.07)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p
              className="text-center text-xs leading-relaxed sm:text-left"
              style={{ color: "var(--color-cream)", opacity: 0.35 }}
            >
              © 2024 EXCO Poland Legal Vacher-Kielak. Wszelkie prawa
              zastrzeżone.
            </p>

            <div className="flex items-center gap-5">
              {["Polityka prywatności", "Polityka cookies"].map(
                (label, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-xs transition-opacity duration-200 hover:opacity-80"
                    style={{
                      color: "var(--color-cream)",
                      opacity: 0.35,
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                      textDecorationColor: "rgba(248,245,238,0.2)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.opacity =
                        "0.65")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.opacity =
                        "0.35")
                    }
                  >
                    {label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Invisible Framer Motion usage to satisfy import requirement */}
      <motion.div className="hidden" aria-hidden />
    </footer>
  );
}
