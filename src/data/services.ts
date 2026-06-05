export interface Service {
  id: string
  icon: string
  title: string
  description: string
  items: string[]
}

export const services: Service[] = [
  {
    id: 'formation',
    icon: 'Building2',
    title: 'Zakładanie spółek',
    description: 'Kompleksowa obsługa prawna procesu rejestracji i zakładania działalności gospodarczej.',
    items: [
      'Zakładanie i rejestracja spółek',
      'Umowy i statuty spółek',
      'Jednoosobowa działalność gospodarcza',
      'Wybór optymalnej formy prawnej',
      'Zmiany kapitałowe i dokumentacyjne',
    ],
  },
  {
    id: 'corporate',
    icon: 'Briefcase',
    title: 'Obsługa korporacyjna',
    description: 'Bieżące doradztwo prawne i obsługa compliance dla spółek na każdym etapie działalności.',
    items: [
      'Protokoły i uchwały walnych zgromadzeń',
      'Zgłoszenia do CRBR',
      'Zmiany w KRS',
      'Obsługa zarządu i rady nadzorczej',
      'Due diligence prawne',
    ],
  },
  {
    id: 'liquidation',
    icon: 'Archive',
    title: 'Likwidacja spółek',
    description: 'Sprawna i bezpieczna obsługa procesu likwidacji lub przekształcenia spółki.',
    items: [
      'Dokumentacja likwidacyjna',
      'Zawiadomienia wierzycieli',
      'Wykreślenie z rejestru',
      'Przekształcenia spółek',
      'Podziały i połączenia',
    ],
  },
  {
    id: 'contracts',
    icon: 'FileText',
    title: 'Umowy i kontrakty',
    description: 'Przygotowanie, analiza i negocjowanie umów dostosowanych do potrzeb Klienta.',
    items: [
      'Umowy z klientami i kontrahentami',
      'Umowy o pracę i zlecenia',
      'Umowy najmu i dzierżawy',
      'Analiza możliwości zmian umownych',
      'Ocena kar umownych',
    ],
  },
  {
    id: 'debt',
    icon: 'Scale',
    title: 'Windykacja należności',
    description: 'Skuteczna windykacja wierzytelności — od negocjacji po egzekucję komorniczą.',
    items: [
      'Negocjacje z dłużnikami',
      'Harmonogramy spłat',
      'Wezwania przedsądowe',
      'Reprezentacja przed sądem',
      'Nadzór nad egzekucją',
    ],
  },
  {
    id: 'labor',
    icon: 'Users',
    title: 'Prawo pracy',
    description: 'Doradztwo w zakresie stosunków pracy — zarówno dla pracodawców, jak i pracowników.',
    items: [
      'Nawiązywanie stosunku pracy',
      'Zakaz konkurencji',
      'Umowy szkoleniowe',
      'Rozwiązywanie umów o pracę',
      'Regulaminy wewnętrzne',
    ],
  },
]
