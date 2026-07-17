'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { business } from '@/data/business'

type ServiceKey = 'interior' | 'exterior' | 'cabinet' | 'deck' | 'drywall'

const SERVICES: Array<{ key: ServiceKey; label: string }> = [
  { key: 'interior', label: 'Interior Painting' },
  { key: 'exterior', label: 'Exterior Painting' },
  { key: 'cabinet', label: 'Cabinet Refinishing' },
  { key: 'deck', label: 'Deck Staining' },
  { key: 'drywall', label: 'Drywall Repair' },
]

/**
 * Client-side calculator that produces a typical 2026 MetroWest Massachusetts
 * MARKET RANGE for the selected service + inputs. This is NOT a quote — the
 * UI makes that obvious and links to the free written-quote form.
 *
 * All math is best-effort heuristics based on the citable ranges already
 * documented on /blog/ — see posts.ts for the underlying numbers.
 */
export function QuoteCalculator() {
  const [service, setService] = useState<ServiceKey>('interior')

  // Per-service input state
  const [interiorRooms, setInteriorRooms] = useState(3)
  const [interiorCeilings, setInteriorCeilings] = useState(false)
  const [interiorTrim, setInteriorTrim] = useState(true)
  const [interiorColorChange, setInteriorColorChange] = useState(false)
  const [interiorPre1978, setInteriorPre1978] = useState(false)

  const [exteriorSize, setExteriorSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [exteriorStories, setExteriorStories] = useState<1 | 2 | 3>(2)
  const [exteriorPre1978, setExteriorPre1978] = useState(false)
  const [exteriorWoodRepair, setExteriorWoodRepair] = useState(false)

  const [cabinetDoors, setCabinetDoors] = useState(20)
  const [cabinetColorChange, setCabinetColorChange] = useState(false)
  const [cabinetHardware, setCabinetHardware] = useState(false)

  const [deckSqft, setDeckSqft] = useState(250)
  const [deckRepair, setDeckRepair] = useState(false)

  const [drywallType, setDrywallType] = useState<'patch' | 'water' | 'sheet'>('patch')
  const [drywallSheets, setDrywallSheets] = useState(2)

  const estimate = useMemo(() => {
    if (service === 'interior') {
      // Base per room ranges; trim/ceilings/color-change/lead-safe add multipliers
      let low = interiorRooms * 450
      let high = interiorRooms * 700
      if (interiorTrim) {
        low *= 1.25
        high *= 1.35
      }
      if (interiorCeilings) {
        low *= 1.2
        high *= 1.25
      }
      if (interiorColorChange) {
        low *= 1.15
        high *= 1.25
      }
      if (interiorPre1978) {
        low += 300
        high += 900
      }
      return { low: Math.round(low / 50) * 50, high: Math.round(high / 50) * 50 }
    }
    if (service === 'exterior') {
      const base = exteriorSize === 'small'
        ? { low: 4500, high: 6500 }
        : exteriorSize === 'medium'
        ? { low: 6500, high: 9500 }
        : { low: 9500, high: 14000 }
      const storyMult = exteriorStories === 1 ? 0.9 : exteriorStories === 2 ? 1.0 : 1.25
      let low = base.low * storyMult
      let high = base.high * storyMult
      if (exteriorPre1978) {
        low += 500
        high += 1500
      }
      if (exteriorWoodRepair) {
        low *= 1.15
        high *= 1.3
      }
      return { low: Math.round(low / 100) * 100, high: Math.round(high / 100) * 100 }
    }
    if (service === 'cabinet') {
      // Base: ~$150 per door at low end, ~$280 per door at high end
      let low = cabinetDoors * 150
      let high = cabinetDoors * 280
      if (cabinetColorChange) {
        low *= 1.15
        high *= 1.25
      }
      if (cabinetHardware) {
        low += 400
        high += 900
      }
      return { low: Math.round(low / 50) * 50, high: Math.round(high / 50) * 50 }
    }
    if (service === 'deck') {
      // ~$2.50-$6 per sqft for stain + prep
      let low = deckSqft * 2.5
      let high = deckSqft * 6
      if (deckRepair) {
        low *= 1.3
        high *= 1.5
      }
      // Floor at $400 minimum
      low = Math.max(low, 400)
      high = Math.max(high, 600)
      return { low: Math.round(low / 25) * 25, high: Math.round(high / 25) * 25 }
    }
    // drywall
    if (drywallType === 'patch') {
      return { low: 150, high: 350 }
    }
    if (drywallType === 'water') {
      return { low: 400, high: 900 }
    }
    // sheet
    const low = drywallSheets * 250
    const high = drywallSheets * 450
    return { low, high }
  }, [
    service,
    interiorRooms,
    interiorCeilings,
    interiorTrim,
    interiorColorChange,
    interiorPre1978,
    exteriorSize,
    exteriorStories,
    exteriorPre1978,
    exteriorWoodRepair,
    cabinetDoors,
    cabinetColorChange,
    cabinetHardware,
    deckSqft,
    deckRepair,
    drywallType,
    drywallSheets,
  ])

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Service selector */}
      <div className="border-b border-gray-200 bg-gray-50 p-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Step 1 — Service</p>
        <div role="radiogroup" aria-label="Select service" className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <button
              key={s.key}
              type="button"
              role="radio"
              aria-checked={service === s.key}
              onClick={() => setService(s.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary ${
                service === s.key
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs per service */}
      <div className="p-6 border-b border-gray-200">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Step 2 — Project Details</p>

        {service === 'interior' && (
          <div className="space-y-5">
            <div>
              <label htmlFor="rooms" className="block text-sm font-semibold text-secondary mb-2">
                Number of rooms: <span className="text-primary">{interiorRooms}</span>
              </label>
              <input
                id="rooms"
                type="range"
                min={1}
                max={12}
                value={interiorRooms}
                onChange={(e) => setInteriorRooms(parseInt(e.target.value, 10))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 room</span>
                <span>12+ rooms</span>
              </div>
            </div>
            <div className="space-y-2">
              <Toggle label="Include trim & doors" checked={interiorTrim} onChange={setInteriorTrim} />
              <Toggle label="Include ceilings" checked={interiorCeilings} onChange={setInteriorCeilings} />
              <Toggle label="Color change (light over dark or vice-versa)" checked={interiorColorChange} onChange={setInteriorColorChange} />
              <Toggle label="Home was built before 1978 (lead-safe scope required)" checked={interiorPre1978} onChange={setInteriorPre1978} />
            </div>
          </div>
        )}

        {service === 'exterior' && (
          <div className="space-y-5">
            <div>
              <p className="block text-sm font-semibold text-secondary mb-2">Home size</p>
              <div className="grid grid-cols-3 gap-2">
                {(['small', 'medium', 'large'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setExteriorSize(s)}
                    className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition ${
                      exteriorSize === s
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {s === 'small' ? 'Small (<1,800 sqft)' : s === 'medium' ? 'Medium (1,800–2,500)' : 'Large (>2,500)'}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="block text-sm font-semibold text-secondary mb-2">Stories</p>
              <div className="grid grid-cols-3 gap-2">
                {([1, 2, 3] as const).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setExteriorStories(n)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-semibold border transition ${
                      exteriorStories === n
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {n === 1 ? '1 story' : n === 2 ? '2 stories' : '3+ stories'}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Toggle label="Home was built before 1978 (lead-safe scope required)" checked={exteriorPre1978} onChange={setExteriorPre1978} />
              <Toggle label="Visible wood rot, trim damage, or carpentry needed" checked={exteriorWoodRepair} onChange={setExteriorWoodRepair} />
            </div>
          </div>
        )}

        {service === 'cabinet' && (
          <div className="space-y-5">
            <div>
              <label htmlFor="doors" className="block text-sm font-semibold text-secondary mb-2">
                Number of cabinet doors + drawer fronts: <span className="text-primary">{cabinetDoors}</span>
              </label>
              <input
                id="doors"
                type="range"
                min={5}
                max={50}
                value={cabinetDoors}
                onChange={(e) => setCabinetDoors(parseInt(e.target.value, 10))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5</span>
                <span>Small kitchen ~15–18 · Average ~20–25 · Large ~30+</span>
              </div>
            </div>
            <div className="space-y-2">
              <Toggle label="Color change (white over stain or stain over paint)" checked={cabinetColorChange} onChange={setCabinetColorChange} />
              <Toggle label="Include new hardware (knobs, pulls, hinges)" checked={cabinetHardware} onChange={setCabinetHardware} />
            </div>
          </div>
        )}

        {service === 'deck' && (
          <div className="space-y-5">
            <div>
              <label htmlFor="deck-sqft" className="block text-sm font-semibold text-secondary mb-2">
                Deck size: <span className="text-primary">{deckSqft} sqft</span>
              </label>
              <input
                id="deck-sqft"
                type="range"
                min={50}
                max={800}
                step={25}
                value={deckSqft}
                onChange={(e) => setDeckSqft(parseInt(e.target.value, 10))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50 sqft</span>
                <span>Typical residential 150–350 · Large 400+ sqft</span>
              </div>
            </div>
            <div className="space-y-2">
              <Toggle label="Damaged boards or balusters need replacement" checked={deckRepair} onChange={setDeckRepair} />
            </div>
          </div>
        )}

        {service === 'drywall' && (
          <div className="space-y-5">
            <div>
              <p className="block text-sm font-semibold text-secondary mb-2">Type of repair</p>
              <div className="grid sm:grid-cols-3 gap-2">
                {(['patch', 'water', 'sheet'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setDrywallType(t)}
                    className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition text-left ${
                      drywallType === t
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {t === 'patch' ? 'Small patch (hole, nail pop)' : t === 'water' ? 'Water damage section' : 'Full sheet replacement'}
                  </button>
                ))}
              </div>
            </div>
            {drywallType === 'sheet' && (
              <div>
                <label htmlFor="sheets" className="block text-sm font-semibold text-secondary mb-2">
                  Number of sheets (4x8): <span className="text-primary">{drywallSheets}</span>
                </label>
                <input
                  id="sheets"
                  type="range"
                  min={1}
                  max={20}
                  value={drywallSheets}
                  onChange={(e) => setDrywallSheets(parseInt(e.target.value, 10))}
                  className="w-full accent-primary"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Result */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
          MetroWest Massachusetts market-range estimate
        </p>
        <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">
          ${estimate.low.toLocaleString('en-US')}<span className="text-primary mx-2">–</span>${estimate.high.toLocaleString('en-US')}
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Typical 2026 range for the inputs above across Hudson, Marlborough, Worcester, Framingham, and surrounding MetroWest cities.
        </p>

        {/* Honesty disclaimer — clearly visible */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 mb-5 text-sm text-gray-800">
          <p className="font-bold mb-1">⚠️ This is an estimate, not a quote</p>
          <p>
            These numbers reflect typical 2026 MetroWest market ranges for similar scope — they are <strong>not a quote or pricing commitment from {business.name}</strong> or any other contractor. Real pricing depends on your home's specific prep needs, paint choices, finish quality, access, and site conditions.
          </p>
          <p className="mt-2">
            For a real, written, fixed-price estimate from {business.name}, schedule a free in-home walk-through — we respond within 24 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-600 transition shadow-md text-center"
          >
            Get a Real Written Quote in 24h
          </Link>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition text-center"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </div>
  )
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <span
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        onClick={() => onChange(!checked)}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault()
            onChange(!checked)
          }
        }}
        className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition ${
          checked ? 'bg-primary border-primary' : 'bg-white border-gray-300 group-hover:border-primary'
        }`}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  )
}
