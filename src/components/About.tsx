import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    icon: "🏛️",
    value: "25+ lat",
    label: "EXCO działa w Polsce od 1999 roku",
  },
  {
    icon: "🌍",
    value: "108 krajów",
    label: "Sieć Kreston International",
  },
  {
    icon: "👥",
    value: "150+ specjalistów",
    label: "Eksperci z wielu dziedzin",
  },
  {
    icon: "⚖️",
    value: "Pełna obsługa",
    label: "Od umów po reprezentację sądową",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {/* Subtle background ornament */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.03]"
        aria-hidden
      >
        <svg viewBox="0 0 400 600" fill="none" className="h-full w-full">
          <circle cx="300" cy="200" r="300" fill="var(--color-navy)" />
          <circle cx="200" cy="450" r="200" fill="var(--color-gold)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT COLUMN — text */}
          <div className="flex flex-col justify-center">
            {/* Label line */}
            <motion.div
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <span
                className="block h-px w-10"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
              <span
                className="font-sans text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--color-gold)" }}
              >
                O Kancelarii
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-serif mb-8 text-4xl font-bold leading-tight lg:text-5xl"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-navy)",
              }}
            >
              Prawo. Precyzja.
              <br />
              <span style={{ color: "var(--color-gold)" }}>Partnerstwo.</span>
            </motion.h2>

            {/* Decorative rule */}
            <motion.div
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mb-8 h-px w-16"
              style={{ backgroundColor: "var(--color-navy)", opacity: 0.15 }}
            />

            {/* Paragraphs */}
            <motion.p
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mb-6 text-base leading-relaxed lg:text-[17px]"
              style={{ color: "var(--color-navy)", opacity: 0.82 }}
            >
              EXCO Poland Legal Vacher-Kielak to kancelaria radców prawnych
              oferująca kompleksowe wsparcie prawne dopasowane do potrzeb
              Klientów. Obsługujemy zarówno przedsiębiorców krajowych, jak i
              zagranicznych na każdym etapie prowadzenia działalności.
            </motion.p>

            <motion.p
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mb-8 text-base leading-relaxed lg:text-[17px]"
              style={{ color: "var(--color-navy)", opacity: 0.82 }}
            >
              Działamy w ramach{" "}
              <a
                href="https://exco.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="relative font-medium transition-all duration-200"
                style={{
                  color: "var(--color-navy)",
                  textDecoration: "underline",
                  textDecorationColor: "var(--color-gold)",
                  textUnderlineOffset: "3px",
                  textDecorationThickness: "2px",
                }}
              >
                EXCO A2A Polska
              </a>{" "}
              — jednej z wiodących grup doradczych w Polsce, należącej do
              globalnej sieci Kreston International obecnej w 108 krajach
              świata. To gwarancja wiedzy, doświadczenia i standardów na
              najwyższym poziomie.
            </motion.p>

            {/* Signature ornament */}
            <motion.div
              custom={5}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ backgroundColor: "var(--color-gold)", opacity: 0.5 }}
              />
              <span
                className="font-serif text-sm italic"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-navy)",
                  opacity: 0.5,
                }}
              >
                od 1999 roku
              </span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — stat cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:content-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariant}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 40px rgba(27,42,74,0.12), 0 0 0 1px rgba(201,168,76,0.2)",
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-xl bg-white p-6"
                style={{
                  boxShadow: "0 4px 24px rgba(27,42,74,0.07)",
                }}
              >
                {/* Gold accent line on top */}
                <motion.div
                  className="absolute left-0 top-0 h-[3px] w-0 rounded-t-xl"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />

                {/* Icon */}
                <span className="mb-4 block text-3xl leading-none">
                  {stat.icon}
                </span>

                {/* Value */}
                <p
                  className="font-serif mb-2 text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-navy)",
                  }}
                >
                  {stat.value}
                </p>

                {/* Label */}
                <p
                  className="text-sm leading-snug"
                  style={{ color: "var(--color-navy)", opacity: 0.65 }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
