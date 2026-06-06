export type Lang = 'pl' | 'en' | 'fr' | 'es'

export const translations: Record<Lang, {
  nav: { services: string; team: string; about: string; contact: string; cta: string }
  hero: { eyebrow: string; h1: string; h1gold: string; subtitle: string; btn1: string; btn2: string; stat1: { val: string; lbl: string }; stat2: { val: string; lbl: string }; stat3: { val: string; lbl: string } }
  services: { eyebrow: string; h2: string; subtitle: string }
  team: { eyebrow: string; h2: string; subtitle: string; board: string; legal: string; email: string }
  about: { eyebrow: string; h2line1: string; h2gold: string; p1: string; p2: string; since: string; stat1: { val: string; lbl: string }; stat2: { val: string; lbl: string }; stat3: { val: string; lbl: string }; stat4: { val: string; lbl: string } }
  contact: { eyebrow: string; h2: string; subtitle: string; phone: string; email: string; address: string; hours: string; hoursVal: string; form: { name: string; namePh: string; email: string; emailPh: string; phone: string; phonePh: string; topic: string; topicPh: string; topics: string[]; message: string; messagePh: string; rodo: string; submit: string; success: string; successSub: string; reset: string } }
  footer: { desc: string; network: string; links: string; legal: string; copyright: string }
}> = {

  // ─────────────────────────────────────────────────────────────────────────
  // POLSKI
  // ─────────────────────────────────────────────────────────────────────────
  pl: {
    nav: {
      services: 'Usługi',
      team:     'Zespół',
      about:    'O Kancelarii',
      contact:  'Kontakt',
      cta:      'Umów konsultację',
    },
    hero: {
      eyebrow: 'Kancelaria Radców Prawnych',
      h1:      'Kompleksowe wsparcie prawne',
      h1gold:  'dla Twojego biznesu',
      subtitle:
        'Obsługujemy przedsiębiorców krajowych i zagranicznych w zakresie prawa gospodarczego, korporacyjnego i pracy.',
      btn1: 'Nasze usługi',
      btn2: 'Skontaktuj się',
      stat1: { val: '25+', lbl: 'lat EXCO w Polsce' },
      stat2: { val: '150+', lbl: 'specjalistów' },
      stat3: { val: '108', lbl: 'krajów — sieć' },
    },
    services: {
      eyebrow:  'Zakres działalności',
      h2:       'Nasze usługi',
      subtitle:
        'Oferujemy kompleksową obsługę prawną dla przedsiębiorstw — od zakładania spółek po bieżące doradztwo korporacyjne i rozwiązywanie sporów.',
    },
    team: {
      eyebrow:  'Ludzie',
      h2:       'Nasz Zespół',
      subtitle:
        'Doświadczeni prawnicy z wieloletnią praktyką w obsłudze podmiotów gospodarczych, inwestorów zagranicznych i instytucji finansowych.',
      board:    'Zarząd EXCO A2A Polska',
      legal:    'Kancelaria Radców Prawnych',
      email:    'Napisz wiadomość',
    },
    about: {
      eyebrow:  'O Kancelarii',
      h2line1:  'Prawo. Precyzja.',
      h2gold:   'Partnerstwo.',
      p1:
        'EXCO Poland Legal to kancelaria radców prawnych działająca w strukturach międzynarodowej grupy EXCO — jednej z największych sieci doradczych na świecie, zrzeszającej ponad 150 specjalistów w Polsce i obecnej w 108 krajach.',
      p2:
        'Nasi prawnicy łączą głęboką znajomość polskiego prawa z praktycznym rozumieniem potrzeb biznesu. Obsługujemy zarówno polskie przedsiębiorstwa, jak i zagranicznych inwestorów wchodzących na rynek polski — zapewniając ciągłość, rzetelność i skuteczność na każdym etapie współpracy.',
      since: 'Na rynku od',
      stat1: { val: '2000', lbl: 'Rok założenia' },
      stat2: { val: '500+', lbl: 'Obsłużonych klientów' },
      stat3: { val: '98%', lbl: 'Satysfakcji klientów' },
      stat4: { val: '108', lbl: 'Krajów w sieci EXCO' },
    },
    contact: {
      eyebrow:  'Kontakt',
      h2:       'Umów konsultację',
      subtitle:
        'Skontaktuj się z nami telefonicznie, mailowo lub wypełnij formularz — odpowiemy w ciągu jednego dnia roboczego.',
      phone:    '+48 22 123 45 67',
      email:    'legal@exco.pl',
      address:  'ul. Złota 59, 00-120 Warszawa',
      hours:    'Godziny pracy',
      hoursVal: 'Pn–Pt, 9:00–18:00',
      form: {
        name:       'Imię i nazwisko',
        namePh:     'Jan Kowalski',
        email:      'Adres e-mail',
        emailPh:    'jan.kowalski@firma.pl',
        phone:      'Telefon (opcjonalnie)',
        phonePh:    '+48 500 000 000',
        topic:      'Temat zapytania',
        topicPh:    'Wybierz temat',
        topics:     [
          'Zakładanie spółki',
          'Obsługa korporacyjna',
          'Umowy',
          'Windykacja',
          'Prawo pracy',
          'Inne',
        ],
        message:    'Treść wiadomości',
        messagePh:  'Opisz swoje potrzeby prawne...',
        rodo:
          'Wyrażam zgodę na przetwarzanie moich danych osobowych przez EXCO Poland Legal w celu obsługi niniejszego zapytania, zgodnie z RODO.',
        submit:     'Wyślij wiadomość',
        success:    'Wiadomość wysłana!',
        successSub: 'Odpowiemy w ciągu jednego dnia roboczego.',
        reset:      'Wyślij kolejną wiadomość',
      },
    },
    footer: {
      desc:      'Kancelaria radców prawnych świadcząca kompleksową obsługę prawną dla przedsiębiorców krajowych i zagranicznych.',
      network:   'Członek sieci Kreston International',
      links:     'Nawigacja',
      legal:     'Informacje prawne',
      copyright: `© ${new Date().getFullYear()} EXCO Poland Legal. Wszelkie prawa zastrzeżone.`,
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENGLISH
  // ─────────────────────────────────────────────────────────────────────────
  en: {
    nav: {
      services: 'Services',
      team:     'Team',
      about:    'About',
      contact:  'Contact',
      cta:      'Book a consultation',
    },
    hero: {
      eyebrow: 'Legal Counsel',
      h1:      'Comprehensive legal support',
      h1gold:  'for your business',
      subtitle:
        'We serve domestic and international businesses in the areas of commercial, corporate, and employment law.',
      btn1: 'Our services',
      btn2: 'Get in touch',
      stat1: { val: '25+', lbl: 'years EXCO in Poland' },
      stat2: { val: '150+', lbl: 'specialists' },
      stat3: { val: '108', lbl: 'countries — network' },
    },
    services: {
      eyebrow:  'Areas of practice',
      h2:       'Our services',
      subtitle:
        'We provide end-to-end legal services for businesses — from company formation to ongoing corporate advisory and dispute resolution.',
    },
    team: {
      eyebrow:  'People',
      h2:       'Our Team',
      subtitle:
        'Experienced attorneys with extensive track records advising companies, foreign investors, and financial institutions.',
      board:    'Board of EXCO A2A Poland',
      legal:    'Legal Counsel Office',
      email:    'Send a message',
    },
    about: {
      eyebrow:  'About the Firm',
      h2line1:  'Law. Precision.',
      h2gold:   'Partnership.',
      p1:
        'EXCO Poland Legal is a legal counsel firm operating within the international EXCO group — one of the largest advisory networks worldwide, with over 150 specialists in Poland and a presence in 108 countries.',
      p2:
        'Our lawyers combine deep knowledge of Polish law with a practical understanding of business needs. We advise both Polish companies and foreign investors entering the Polish market, delivering consistency, integrity, and effectiveness at every stage of our engagement.',
      since: 'In business since',
      stat1: { val: '2000', lbl: 'Year founded' },
      stat2: { val: '500+', lbl: 'Clients served' },
      stat3: { val: '98%', lbl: 'Client satisfaction' },
      stat4: { val: '108', lbl: 'Countries in EXCO network' },
    },
    contact: {
      eyebrow:  'Contact',
      h2:       'Book a consultation',
      subtitle:
        'Reach us by phone, email, or by filling in the form below — we respond within one business day.',
      phone:    '+48 22 123 45 67',
      email:    'legal@exco.pl',
      address:  'ul. Złota 59, 00-120 Warsaw, Poland',
      hours:    'Office hours',
      hoursVal: 'Mon–Fri, 9:00 AM–6:00 PM',
      form: {
        name:       'Full name',
        namePh:     'John Smith',
        email:      'Email address',
        emailPh:    'john.smith@company.com',
        phone:      'Phone (optional)',
        phonePh:    '+48 500 000 000',
        topic:      'Subject',
        topicPh:    'Select a topic',
        topics:     [
          'Company formation',
          'Corporate services',
          'Contracts',
          'Debt recovery',
          'Employment law',
          'Other',
        ],
        message:    'Message',
        messagePh:  'Describe your legal needs...',
        rodo:
          'I consent to the processing of my personal data by EXCO Poland Legal for the purpose of handling this enquiry, in accordance with GDPR.',
        submit:     'Send message',
        success:    'Message sent!',
        successSub: 'We will respond within one business day.',
        reset:      'Send another message',
      },
    },
    footer: {
      desc:      'A legal counsel firm providing comprehensive legal services to domestic and international businesses.',
      network:   'Member of Kreston International network',
      links:     'Navigation',
      legal:     'Legal information',
      copyright: `© ${new Date().getFullYear()} EXCO Poland Legal. All rights reserved.`,
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FRANÇAIS
  // ─────────────────────────────────────────────────────────────────────────
  fr: {
    nav: {
      services: 'Services',
      team:     'Équipe',
      about:    'À propos',
      contact:  'Contact',
      cta:      'Prendre rendez-vous',
    },
    hero: {
      eyebrow: 'Cabinet d\'avocats',
      h1:      'Un accompagnement juridique complet',
      h1gold:  'pour votre entreprise',
      subtitle:
        'Nous conseillons les entreprises nationales et internationales en droit des affaires, droit des sociétés et droit du travail.',
      btn1: 'Nos services',
      btn2: 'Nous contacter',
      stat1: { val: '25+', lbl: 'ans d\'EXCO en Pologne' },
      stat2: { val: '150+', lbl: 'spécialistes' },
      stat3: { val: '108', lbl: 'pays — réseau' },
    },
    services: {
      eyebrow:  'Domaines d\'activité',
      h2:       'Nos services',
      subtitle:
        'Nous proposons une assistance juridique complète aux entreprises — de la création de sociétés au conseil corporate et à la résolution des litiges.',
    },
    team: {
      eyebrow:  'L\'équipe',
      h2:       'Notre équipe',
      subtitle:
        'Des avocats expérimentés disposant d\'une solide pratique dans le conseil aux entreprises, aux investisseurs étrangers et aux institutions financières.',
      board:    'Direction d\'EXCO A2A Pologne',
      legal:    'Cabinet de conseil juridique',
      email:    'Envoyer un message',
    },
    about: {
      eyebrow:  'Le cabinet',
      h2line1:  'Droit. Précision.',
      h2gold:   'Partenariat.',
      p1:
        'EXCO Poland Legal est un cabinet de conseil juridique intégré au groupe international EXCO — l\'un des plus grands réseaux de conseil au monde, fort de plus de 150 spécialistes en Pologne et présent dans 108 pays.',
      p2:
        'Nos avocats allient une connaissance approfondie du droit polonais à une compréhension pragmatique des besoins des entreprises. Nous accompagnons aussi bien les sociétés polonaises que les investisseurs étrangers s\'implantant sur le marché polonais, en garantissant continuité, rigueur et efficacité à chaque étape.',
      since: 'Sur le marché depuis',
      stat1: { val: '2000', lbl: 'Année de création' },
      stat2: { val: '500+', lbl: 'Clients accompagnés' },
      stat3: { val: '98%', lbl: 'Satisfaction client' },
      stat4: { val: '108', lbl: 'Pays dans le réseau EXCO' },
    },
    contact: {
      eyebrow:  'Contact',
      h2:       'Prendre rendez-vous',
      subtitle:
        'Contactez-nous par téléphone, par e-mail ou via le formulaire ci-dessous — nous répondons dans un délai d\'un jour ouvré.',
      phone:    '+48 22 123 45 67',
      email:    'legal@exco.pl',
      address:  'ul. Złota 59, 00-120 Varsovie, Pologne',
      hours:    'Horaires d\'ouverture',
      hoursVal: 'Lun–Ven, 9h00–18h00',
      form: {
        name:       'Nom et prénom',
        namePh:     'Jean Dupont',
        email:      'Adresse e-mail',
        emailPh:    'jean.dupont@entreprise.fr',
        phone:      'Téléphone (facultatif)',
        phonePh:    '+48 500 000 000',
        topic:      'Objet de la demande',
        topicPh:    'Choisir un sujet',
        topics:     [
          'Création de société',
          'Services corporate',
          'Contrats',
          'Recouvrement de créances',
          'Droit du travail',
          'Autre',
        ],
        message:    'Message',
        messagePh:  'Décrivez vos besoins juridiques...',
        rodo:
          'Je consens au traitement de mes données personnelles par EXCO Poland Legal aux fins du traitement de cette demande, conformément au RGPD.',
        submit:     'Envoyer le message',
        success:    'Message envoyé !',
        successSub: 'Nous vous répondrons dans un délai d\'un jour ouvré.',
        reset:      'Envoyer un autre message',
      },
    },
    footer: {
      desc:      'Cabinet de conseil juridique offrant des services juridiques complets aux entreprises nationales et internationales.',
      network:   'Membre du réseau Kreston International',
      links:     'Navigation',
      legal:     'Mentions légales',
      copyright: `© ${new Date().getFullYear()} EXCO Poland Legal. Tous droits réservés.`,
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ESPAÑOL
  // ─────────────────────────────────────────────────────────────────────────
  es: {
    nav: {
      services: 'Servicios',
      team:     'Equipo',
      about:    'Sobre nosotros',
      contact:  'Contacto',
      cta:      'Reservar consulta',
    },
    hero: {
      eyebrow: 'Despacho de abogados',
      h1:      'Asesoramiento jurídico integral',
      h1gold:  'para su empresa',
      subtitle:
        'Asesoramos a empresas nacionales e internacionales en derecho mercantil, societario y laboral.',
      btn1: 'Nuestros servicios',
      btn2: 'Contactar',
      stat1: { val: '25+', lbl: 'años de EXCO en Polonia' },
      stat2: { val: '150+', lbl: 'especialistas' },
      stat3: { val: '108', lbl: 'países — red global' },
    },
    services: {
      eyebrow:  'Áreas de práctica',
      h2:       'Nuestros servicios',
      subtitle:
        'Ofrecemos una asistencia jurídica completa a las empresas — desde la constitución de sociedades hasta el asesoramiento corporativo continuo y la resolución de conflictos.',
    },
    team: {
      eyebrow:  'Personas',
      h2:       'Nuestro equipo',
      subtitle:
        'Abogados con amplia experiencia en asesoría a empresas, inversores extranjeros e instituciones financieras.',
      board:    'Dirección de EXCO A2A Polonia',
      legal:    'Despacho de asesores jurídicos',
      email:    'Enviar mensaje',
    },
    about: {
      eyebrow:  'Sobre el despacho',
      h2line1:  'Derecho. Precisión.',
      h2gold:   'Asociación.',
      p1:
        'EXCO Poland Legal es un despacho de asesoría jurídica integrado en el grupo internacional EXCO — una de las mayores redes de consultoría del mundo, con más de 150 especialistas en Polonia y presencia en 108 países.',
      p2:
        'Nuestros abogados combinan un profundo conocimiento del derecho polaco con una comprensión práctica de las necesidades empresariales. Asesoramos tanto a empresas polacas como a inversores extranjeros que acceden al mercado polaco, garantizando continuidad, rigor y eficacia en cada etapa de la colaboración.',
      since: 'En el mercado desde',
      stat1: { val: '2000', lbl: 'Año de fundación' },
      stat2: { val: '500+', lbl: 'Clientes atendidos' },
      stat3: { val: '98%', lbl: 'Satisfacción del cliente' },
      stat4: { val: '108', lbl: 'Países en la red EXCO' },
    },
    contact: {
      eyebrow:  'Contacto',
      h2:       'Reservar consulta',
      subtitle:
        'Comuníquese con nosotros por teléfono, correo electrónico o a través del formulario — respondemos en un día hábil.',
      phone:    '+48 22 123 45 67',
      email:    'legal@exco.pl',
      address:  'ul. Złota 59, 00-120 Varsovia, Polonia',
      hours:    'Horario de atención',
      hoursVal: 'Lun–Vie, 9:00–18:00',
      form: {
        name:       'Nombre y apellidos',
        namePh:     'Juan García',
        email:      'Correo electrónico',
        emailPh:    'juan.garcia@empresa.es',
        phone:      'Teléfono (opcional)',
        phonePh:    '+48 500 000 000',
        topic:      'Asunto de la consulta',
        topicPh:    'Seleccionar tema',
        topics:     [
          'Constitución de sociedad',
          'Servicios corporativos',
          'Contratos',
          'Recuperación de deudas',
          'Derecho laboral',
          'Otro',
        ],
        message:    'Mensaje',
        messagePh:  'Describa sus necesidades jurídicas...',
        rodo:
          'Consiento el tratamiento de mis datos personales por parte de EXCO Poland Legal a efectos de gestionar esta consulta, de conformidad con el RGPD.',
        submit:     'Enviar mensaje',
        success:    '¡Mensaje enviado!',
        successSub: 'Le responderemos en un plazo de un día hábil.',
        reset:      'Enviar otro mensaje',
      },
    },
    footer: {
      desc:      'Despacho de asesoría jurídica que presta servicios legales integrales a empresas nacionales e internacionales.',
      network:   'Miembro de la red Kreston International',
      links:     'Navegación',
      legal:     'Información legal',
      copyright: `© ${new Date().getFullYear()} EXCO Poland Legal. Todos los derechos reservados.`,
    },
  },
}
