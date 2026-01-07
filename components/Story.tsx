import { ArrowRightIcon } from './ArrowIcon'

const offerings = [
  { number: 1, label: 'Flow Finder', href: '#flow-finder' },
  { number: 2, label: "The 4R's", href: '#four-rs' },
  { number: 3, label: 'Find My Flow App', href: '#flow-compass' },
  { number: 4, label: 'Build', href: '#build' },
]

export default function Story() {
  return (
    <section className="py-24 bg-white" id="story">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-lg md:text-xl text-text-medium leading-relaxed mb-6">
            Ever since I quit my job two and half years ago I've developed an unwavering belief in <strong>'Flow'</strong>.
          </p>

          <p className="text-lg md:text-xl text-text-medium leading-relaxed mb-6 font-bold text-text-dark">
            The idea that there's a unique path that only you could walk due to your combination of skills, experiences and circumstances.
          </p>

          <p className="text-lg md:text-xl text-text-medium leading-relaxed mb-6">
            I believe the universe communicates with us every day about what this path is. The problem is it can't talk to us directly, so it uses what I like to call <strong>'Ease and Resistance'</strong>.
          </p>

          <p className="text-lg md:text-xl text-text-medium leading-relaxed mb-6">
            Ease being when serendipities drop in making progress fast.
          </p>

          <p className="text-lg md:text-xl text-text-medium leading-relaxed mb-6">
            Resistance is when no matter what you do, nothing goes to plan.
          </p>

          <p className="text-lg md:text-xl text-text-medium leading-relaxed mb-6">
            As an acronym 'Ease and Resistance' spells 'Ear' - coincidence?
          </p>

          <p className="text-lg md:text-xl text-text-medium leading-relaxed mb-6 font-bold italic">
            I believe when you find your flow — aligning what gives you flow internally, with what's flowing externally (ease) — life becomes a magical adventure.
          </p>

          <div className="inline-flex items-center gap-2 bg-gradient-purple text-white py-4 px-8 rounded-2xl font-bold text-base md:text-lg my-6 text-center leading-relaxed">
            🎧 From 13 headsets dancing on beaches in Thailand → 350 headsets hosting events at Bali Beach clubs
          </div>

          <p className="text-lg md:text-xl font-bold italic text-text-dark leading-relaxed mb-6">
            In less than 12 months of quitting my job.
          </p>

          <p className="text-lg md:text-xl text-text-medium leading-relaxed mb-6">
            Flow is the only way I can describe that journey.
          </p>

          <p className="text-2xl font-bold text-purple mt-8 mb-2">
            I'm now on a mission to support others find their flow.
          </p>

          <p className="text-xl font-semibold text-text-dark mt-4 mb-8">
            Here's how:
          </p>

          <div className="flex justify-center gap-3 flex-wrap mt-6">
            {offerings.map((offering) => (
              <a
                key={offering.number}
                href={offering.href}
                className="flex items-center gap-2 py-3 px-5 rounded-full bg-white border-2 border-border text-text-medium font-semibold text-sm hover:-translate-y-0.5 hover:shadow-medium hover:border-purple transition-all duration-300"
              >
                <span className="w-6 h-6 rounded-full pill-number-gradient text-white flex items-center justify-center font-bold text-xs">
                  {offering.number}
                </span>
                {offering.label}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
