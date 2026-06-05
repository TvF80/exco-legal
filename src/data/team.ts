export interface TeamMember {
  id: string
  name: string
  title: string
  role: 'partner' | 'attorney' | 'apprentice' | 'board'
  bio: string
  specializations: string[]
  email?: string
  photo?: string
  linkedin?: string
}

export const team: TeamMember[] = [
  {
    id: 'raphael',
    name: 'Raphaël Vieuxmaire',
    title: 'Członek Zarządu EXCO A2A Polska',
    role: 'board',
    bio: 'Członek Zarządu EXCO A2A Polska — jednej z wiodących firm doradczych w Polsce, działającej w ramach globalnej sieci EXCO/Kreston obecnej w 108 krajach. Odpowiada za rozwój strategiczny grupy i współpracę z klientami zagranicznymi.',
    specializations: ['Strategia biznesowa', 'Obsługa klientów zagranicznych', 'Sieć EXCO International'],
    email: 'war@exco.pl',
  },
  {
    id: 'laurent',
    name: 'Laurent Le Pajolec',
    title: 'Członek Zarządu EXCO A2A Polska',
    role: 'board',
    bio: 'Członek Zarządu EXCO A2A Polska. Odpowiada za nadzór nad działalnością doradczą grupy oraz koordynację usług dla klientów korporacyjnych. Wieloletnie doświadczenie w zarządzaniu i doradztwie biznesowym.',
    specializations: ['Zarządzanie grupą', 'Doradztwo korporacyjne', 'Koordynacja usług'],
    email: 'war@exco.pl',
  },
  {
    id: 'magdalena',
    name: 'Magdalena Vacher-Kielak',
    title: 'Radca Prawny',
    role: 'partner',
    bio: 'Radca prawny z bogatym doświadczeniem w obsłudze przedsiębiorców krajowych i zagranicznych. Specjalizuje się w prawie spółek, obsłudze korporacyjnej oraz prawie kontraktowym. Partnerka kancelarii EXCO Poland Legal.',
    specializations: ['Prawo spółek', 'Obsługa korporacyjna', 'Prawo kontraktowe', 'Windykacja'],
    email: 'magdalena.vacher-kielak@exco-legal.pl',
    photo: '/photos/magdalena.jpg',
  },
  {
    id: 'karolina',
    name: 'Karolina Kanclerz',
    title: 'Radca Prawny',
    role: 'attorney',
    bio: 'Radca prawny specjalizująca się w prawie pracy i obsłudze bieżącej przedsiębiorstw. Świadczy kompleksowe usługi z zakresu prawa zatrudnienia, sporządzania i analizy umów oraz reprezentacji przed sądem.',
    specializations: ['Prawo pracy', 'Umowy handlowe', 'Reprezentacja sądowa'],
    email: 'karolina.kanclerz@exco-legal.pl',
  },
  {
    id: 'natalia',
    name: 'Natalia Wesołowska',
    title: 'Aplikant Radcowski',
    role: 'apprentice',
    bio: 'Aplikant radcowski odbywający aplikację przy Okręgowej Izbie Radców Prawnych w Warszawie. Wspiera zespół w bieżącej obsłudze klientów, przygotowaniu dokumentacji korporacyjnej i sprawach sądowych.',
    specializations: ['Dokumentacja korporacyjna', 'Prawo spółek', 'Wsparcie procesowe'],
    email: 'natalia.wesolowska@exco-legal.pl',
  },
]
