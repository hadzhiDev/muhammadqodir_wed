import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getWeddingDateParts } from '../lib/config'

const target = new Date(`${getWeddingDateParts().iso}T00:00:00`).getTime()

function calc() {
  const distance = target - Date.now()
  if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  }
}

const Dot = () => <div className="h-[10px] w-[10px] rounded-full bg-dot" />

// A single number that flips up when its value changes.
function Flip({ value, className }) {
  return (
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: '60%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-60%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// Countdown overlaid on the decorative frame image (".block_2").
export default function Countdown() {
  const [t, setT] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative my-[50px] w-full max-w-[440px] overflow-hidden rounded-[24px] bg-[#FFFDF4] shadow-[0_16px_44px_-14px_rgba(120,100,60,0.4)] ring-1 ring-black/5">
      <img
        src="/img/block_2.png"
        alt=""
        width="416"
        height="660"
        loading="lazy"
        decoding="async"
        className="w-full"
      />

      <motion.div
        className="absolute bottom-[31.5%] left-0 right-0 mx-auto w-full max-w-[60%] text-graphite"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* days */}
        <div className="flex w-full flex-col items-center justify-center">
          <Flip
            value={t.days}
            className="numeral-soft font-display text-[4.75rem] italic leading-none text-graphite max-[400px]:text-[2.7rem] max-[440px]:text-[3rem]"
          />
          <p className="font-cormorant text-[1.625rem] font-medium uppercase tracking-[0.18em] max-[400px]:text-[1.2rem]">Кун</p>
        </div>

        {/* hours / minutes / seconds */}
        <div className="mt-[10px] flex w-full items-center justify-between gap-[7px] max-[360px]:justify-center max-[360px]:gap-[10px] max-[400px]:justify-around">
          <div className="flex flex-col items-center justify-center">
            <Flip
              value={t.hours}
              className="numeral-soft font-display text-[3em] italic leading-none text-graphite max-[400px]:text-[2rem] max-[440px]:text-[2.4rem]"
            />
            <div className="font-cormorant text-[1rem] font-medium uppercase tracking-[0.14em] max-[400px]:text-[1rem]">Соат</div>
          </div>
          <Dot />
          <div className="flex flex-col items-center justify-center">
            <Flip
              value={t.minutes}
              className="numeral-soft font-display text-[3rem] italic leading-none text-graphite max-[400px]:text-[2rem] max-[440px]:text-[2.4rem]"
            />
            <div className="font-cormorant text-[1rem] font-medium uppercase tracking-[0.14em] max-[400px]:text-[1rem]">Минут</div>
          </div>
          <Dot />
          <div className="flex flex-col items-center justify-center">
            <Flip
              value={t.seconds}
              className="numeral-soft font-display text-[3rem] italic leading-none text-graphite max-[400px]:text-[2rem] max-[440px]:text-[2.4rem]"
            />
            <div className="font-cormorant text-[1rem] font-medium uppercase tracking-[0.14em] max-[400px]:text-[1rem]">Секунд</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
