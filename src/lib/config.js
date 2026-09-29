// ============================================================
//  Wedding settings — edit these to update the whole invitation
// ============================================================

// Wedding date in ISO format: YYYY-MM-DD (drives the big date block,
// the prose date, and the countdown timer)
export const WEDDING_DATE = '2026-08-29'

// Venue coordinates (lat, lon).
export const LOCATION_COORDS = { lat:40.530214, lon: 72.808588 }

// Embedded map — OpenStreetMap renders keyless with real streets + a pin.
// (Google/2GIS both require a paid API key to embed a live map.)
export const LOCATION_MAP_URL =
  'https://2gis.kg/osh/firm/70000001040806856/72.808588%2C40.530214?m=72.808969%2C40.530199%2F19.96'
  
// "Open in Google Maps" button target (opens the native app/site for navigation).
export const LOCATION_GOOGLE_URL =
  'https://2gis.kg/osh/firm/70000001040806856/72.808588%2C40.530214?m=72.808969%2C40.530199%2F19.96'

// Address title shown above the map (\n becomes a line break)
export const LOCATION_TITLE = 'Манзил: "Нооруз" Ресторани\nАскар Шакиров, 240а/1'

// Program of the day (label + time). Edit / add / remove freely.
export const STAGES = [
  { label: 'Нахорги нонушта', time: '06:00', side: 'left' },
  { label: 'Аёллар учун:\n(Тугунсиз)', time: '10:00', side: 'right' },
  { label: 'Куёв Навкар', time: '13:00', side: 'left' },
  // { label: 'Фуршет\nманзил: Исхака Раззакова, 23\n“Орто Азия”', time: '16:00', side: 'right' },
]

// Cyrillic month names, indexed 1..12
const MONTHS = [
  '',
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
]

// Derived date parts used across the UI.
export function getWeddingDateParts() {
  const [year, month, day] = WEDDING_DATE.split('-').map(Number)
  const pad = (n) => String(n).padStart(2, '0')
  return {
    iso: WEDDING_DATE,
    day, // 7
    monthName: MONTHS[month], // июль
    dateDay: pad(day), // 07
    dateMonth: pad(month), // 07
    dateYear: String(year).slice(-2), // 25
  }
}
