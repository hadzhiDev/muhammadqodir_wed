import RevealText from './RevealText'
import { getWeddingDateParts } from '../lib/config'

// Greeting block (".section_2_title") with the invitation prose.
export default function Greeting({ name }) {
  const { day, monthName } = getWeddingDateParts()

  const greeting = name
    ? `Ассалому алайкум, ҳурматли меҳмонимиз “${name}”!`
    : 'Ассалому алайкум, ҳурматли азиз меҳмонимиз!'

  const body = name
    ? `Сизни никоҳ тўйимиз муносабати билан ${day}-${monthName} куни бўлиб ўтадиган   наҳорги нонуштага таклиф киламиз`
    : `Сизларни ${day} ${monthName} куни фарзандларимизнинг никоҳ тўйи муносабати билан бўлиб ўтадиган наҳорги нонуштага самимий таклиф қиламиз.`

  return (
    <div className="w-full">
      <RevealText
        as="h1"
        gradient
        className="mb-[26px] font-display text-[clamp(2rem,8.5vw,2.75rem)] font-semibold leading-[1.18] tracking-[0.005em] max-[400px]:mb-5"
        text={greeting}
      />
      <RevealText
        as="p"
        stagger={0.03}
        className="mb-[30px] font-body text-[clamp(1rem,4.2vw,1.125rem)] font-normal leading-[1.6] text-parchment/90 max-[400px]:mb-5"
        text={body}
      />
    </div>
  )
}
