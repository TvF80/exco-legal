import { motion, useInView, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { useRef, useState } from "react";
import { useLangContext } from "../LangContext";
import { translations } from "../translations";

const PHONE = "+48 22 847 61 17";
const EMAIL = "magdalena.vacher-kielak@exco-legal.pl";
const ADDRESS = "ul. rtm. Witolda Pileckiego 67, lok. 200\n02-781 Warszawa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const shakeVariant = {
  shake: {
    x: [0, -8, 8, -6, 6, -3, 3, 0],
    transition: { duration: 0.5 },
  },
  idle: { x: 0 },
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  rodo: boolean;
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLangContext();
  const t = translations[lang];
  const tf = t.contact.form;

  const contactItems = [
    { icon: Phone, label: lang === 'pl' ? 'Telefon' : lang === 'fr' ? 'Téléphone' : lang === 'es' ? 'Teléfono' : 'Phone', value: PHONE, href: `tel:${PHONE.replace(/\s/g, '')}` },
    { icon: Mail, label: 'E-mail', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: lang === 'pl' ? 'Adres' : lang === 'fr' ? 'Adresse' : lang === 'es' ? 'Dirección' : 'Address', value: ADDRESS, href: "https://maps.google.com/?q=ul.+Pileckiego+67+Warszawa" },
    { icon: Clock, label: t.contact.hours, value: t.contact.hoursVal, href: null },
  ];

  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", topic: "", message: "", rodo: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitState, setSubmitState] = useState<"idle" | "shake" | "success">("idle");

  const validate = (): boolean => {
    const next: typeof errors = {};
    const reqName = lang === 'fr' ? 'Le nom est requis' : lang === 'es' ? 'El nombre es requerido' : lang === 'en' ? 'Name is required' : 'Imię jest wymagane';
    const reqEmail = lang === 'fr' ? 'E-mail invalide' : lang === 'es' ? 'E-mail inválido' : lang === 'en' ? 'Enter a valid email' : 'Podaj poprawny e-mail';
    const reqTopic = lang === 'fr' ? 'Choisissez un sujet' : lang === 'es' ? 'Elige un tema' : lang === 'en' ? 'Choose a topic' : 'Wybierz temat';
    const reqMsg = lang === 'fr' ? 'Le message est requis' : lang === 'es' ? 'El mensaje es requerido' : lang === 'en' ? 'Message is required' : 'Wiadomość jest wymagana';
    const reqRodo = lang === 'fr' ? 'Consentement requis' : lang === 'es' ? 'Se requiere consentimiento' : lang === 'en' ? 'Consent is required' : 'Zgoda jest wymagana';

    if (!form.name.trim()) next.name = reqName;
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) next.email = reqEmail;
    if (!form.topic) next.topic = reqTopic;
    if (!form.message.trim()) next.message = reqMsg;
    if (!form.rodo) next.rodo = reqRodo;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setSubmitState("shake");
      setTimeout(() => setSubmitState("idle"), 600);
      return;
    }
    setSubmitState("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputBase = "w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 placeholder-white/30";
  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(248,245,238,0.15)",
    color: "var(--color-cream)",
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ backgroundColor: "var(--color-navy)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-gold) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.div
            custom={0} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="block h-px w-10" style={{ backgroundColor: "var(--color-gold)", opacity: 0.6 }} />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--color-gold)" }}>
              {t.contact.eyebrow}
            </span>
            <span className="block h-px w-10" style={{ backgroundColor: "var(--color-gold)", opacity: 0.6 }} />
          </motion.div>

          <motion.h2
            custom={1} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
            className="font-serif mb-4 text-4xl font-bold text-white lg:text-5xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t.contact.h2}
          </motion.h2>

          <motion.p
            custom={2} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
            className="mx-auto max-w-xl text-base leading-relaxed"
            style={{ color: "var(--color-cream)", opacity: 0.6 }}
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — contact info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-7">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    key={i}
                    custom={i + 3} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
                    style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}
                  >
                    <div style={{
                      width: '2.75rem', height: '2.75rem', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(201,168,76,0.12)',
                      border: '1px solid rgba(201,168,76,0.28)',
                    }}>
                      <Icon size={17} color="var(--color-gold)" strokeWidth={1.5} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6rem', fontWeight: 600,
                        textTransform: 'uppercase', letterSpacing: '0.18em',
                        color: 'var(--color-gold)', opacity: 0.7,
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem', lineHeight: 1.55,
                        whiteSpace: 'pre-line',
                        color: 'var(--color-cream)', opacity: 0.85,
                      }}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );

                if (item.href) {
                  return (
                    <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer" className="block transition-opacity duration-200 hover:opacity-80">
                      {content}
                    </a>
                  );
                }
                return <div key={i}>{content}</div>;
              })}
            </div>

            <motion.div
              custom={8} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
              className="mt-10 rounded-lg px-5 py-4"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(248,245,238,0.08)" }}
            >
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--color-cream)", opacity: 0.4 }}>
                NIP
              </p>
              <p className="mt-1 text-sm font-medium tracking-wider" style={{ color: "var(--color-cream)", opacity: 0.7 }}>
                9512488972
              </p>
            </motion.div>
          </div>

          {/* RIGHT — form */}
          <motion.div custom={3} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
            <AnimatePresence mode="wait">
              {submitState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex h-full min-h-[480px] flex-col items-center justify-center rounded-2xl px-10 text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(248,245,238,0.1)" }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  >
                    <CheckCircle size={56} style={{ color: "var(--color-gold)" }} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-serif mt-6 text-2xl font-bold text-white" style={{ fontFamily: "var(--font-serif)" }}>
                    {tf.success}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-cream)", opacity: 0.6 }}>
                    {tf.successSub}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitState("idle");
                      setForm({ name: "", email: "", phone: "", topic: "", message: "", rodo: false });
                    }}
                    className="mt-8 text-sm underline transition-opacity hover:opacity-70"
                    style={{ color: "var(--color-gold)", textUnderlineOffset: "3px" }}
                  >
                    {tf.reset}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={shakeVariant}
                  animate={submitState === "shake" ? "shake" : "idle"}
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl p-8 lg:p-10"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(248,245,238,0.1)" }}
                >
                  <div className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest"
                          style={{ color: "var(--color-cream)", opacity: 0.5 }}>
                          {tf.name} *
                        </label>
                        <input type="text" name="name" value={form.name} onChange={handleChange}
                          placeholder={tf.namePh} className={inputBase}
                          style={{ ...inputStyle, ...(errors.name ? { borderColor: "#ef4444", backgroundColor: "rgba(239,68,68,0.07)" } : {}) }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(248,245,238,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest"
                          style={{ color: "var(--color-cream)", opacity: 0.5 }}>
                          {tf.email} *
                        </label>
                        <input type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder={tf.emailPh} className={inputBase}
                          style={{ ...inputStyle, ...(errors.email ? { borderColor: "#ef4444", backgroundColor: "rgba(239,68,68,0.07)" } : {}) }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(248,245,238,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone + Topic */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest"
                          style={{ color: "var(--color-cream)", opacity: 0.5 }}>
                          {tf.phone}
                        </label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder={tf.phonePh} className={inputBase} style={inputStyle}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(248,245,238,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest"
                          style={{ color: "var(--color-cream)", opacity: 0.5 }}>
                          {tf.topic} *
                        </label>
                        <select name="topic" value={form.topic} onChange={handleChange}
                          className={inputBase + " cursor-pointer appearance-none"}
                          style={{ ...inputStyle, ...(errors.topic ? { borderColor: "#ef4444", backgroundColor: "rgba(239,68,68,0.07)" } : {}) }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(248,245,238,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
                        >
                          <option value="" style={{ backgroundColor: "var(--color-navy)", color: "var(--color-cream)" }}>
                            {tf.topicPh}
                          </option>
                          {tf.topics.map((opt) => (
                            <option key={opt} value={opt} style={{ backgroundColor: "var(--color-navy)", color: "var(--color-cream)" }}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.topic && <p className="mt-1 text-xs text-red-400">{errors.topic}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest"
                        style={{ color: "var(--color-cream)", opacity: 0.5 }}>
                        {tf.message} *
                      </label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        rows={5} placeholder={tf.messagePh}
                        className={inputBase + " resize-none"}
                        style={{ ...inputStyle, ...(errors.message ? { borderColor: "#ef4444", backgroundColor: "rgba(239,68,68,0.07)" } : {}) }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(248,245,238,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                    </div>

                    {/* RODO */}
                    <div>
                      <label className="flex cursor-pointer items-start gap-3">
                        <div className="relative mt-0.5 shrink-0">
                          <input type="checkbox" name="rodo" checked={form.rodo} onChange={handleChange} className="sr-only" />
                          <div
                            className="flex h-5 w-5 items-center justify-center rounded transition-colors duration-200"
                            style={{
                              backgroundColor: form.rodo ? "var(--color-gold)" : "transparent",
                              border: errors.rodo ? "1.5px solid #ef4444" : form.rodo ? "1.5px solid var(--color-gold)" : "1.5px solid rgba(248,245,238,0.3)",
                            }}
                          >
                            {form.rodo && (
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                                <path d="M1 4L4 7L10 1" stroke="var(--color-navy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-xs leading-relaxed" style={{ color: "var(--color-cream)", opacity: 0.55 }}>
                          {tf.rodo} *
                        </span>
                      </label>
                      {errors.rodo && <p className="mt-1 text-xs text-red-400">{errors.rodo}</p>}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex w-full items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors duration-200"
                      style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}
                    >
                      <Send size={16} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                      {tf.submit}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
