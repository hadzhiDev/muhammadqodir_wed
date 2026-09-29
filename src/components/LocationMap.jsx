import { useEffect, useRef } from 'react'
import RevealText from './RevealText'
import { LOCATION_GOOGLE_URL, LOCATION_TITLE, LOCATION_COORDS } from '../lib/config'

const DGIS_KEY = 'ВАШ_ДЕМО_КЛЮЧ' // platform.2gis.ru → Create a Demo Key

export default function LocationMap() {
  const mapRef = useRef(null)

  useEffect(() => {
    let map
    const script = document.createElement('script')
    script.src = `https://maps.api.2gis.ru/2.0/loader.js?pkg=full&key=${DGIS_KEY}`
    script.onload = () => {
      window.DG.then(() => {
        map = window.DG.map(mapRef.current, {
          center: [LOCATION_COORDS.lat, LOCATION_COORDS.lon],
          zoom: 16,
        })
        window.DG.marker([LOCATION_COORDS.lat, LOCATION_COORDS.lon]).addTo(map)
      })
    }
    document.body.appendChild(script)

    return () => {
      if (map) map.remove()
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <RevealText
        as="div"
        gradient
        className="text-center font-display text-[clamp(1.6rem,7vw,2.125rem)] font-semibold leading-[1.25] tracking-[0.015em]"
        text={LOCATION_TITLE}
      />

      <div className="mx-auto my-[40px] w-full max-w-[440px] overflow-hidden rounded-[16px] shadow-[0_10px_30px_-8px_rgba(120,100,60,0.35)] ring-1 ring-black/5">
        <div ref={mapRef} className="h-[clamp(260px,72vw,360px)] w-full" />

        <a
          href={LOCATION_GOOGLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-t border-gold/20 bg-[#FFFDF4] py-4 font-body text-[15px] font-medium tracking-[0.08em] text-graphite transition-colors hover:bg-[#f3ecd7]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
              fill="#b0873f"
            />
          </svg>
          Открыть в 2GIS
        </a>
      </div>
      </>
  )
}