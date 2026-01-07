import Image from 'next/image'
import { ArrowRightIcon } from './ArrowIcon'

const processItems = [
  "Problems you're passionate about solving",
  "People you're passionate about serving",
  "Skills you're passionate about using",
]

export default function FlowFinder() {
  return (
    <section className="py-24 bg-gradient-purple relative overflow-hidden flow-finder-gradient" id="flow-finder">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80 mb-2">
              Offering 1
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-white mb-2">
              Flow Finder Workshop
            </h2>
            <p className="text-xl text-white/90 italic mb-8">
              "Keen to start your own business? Here's how:"
            </p>

            <p className="text-xl md:text-[1.35rem] font-bold text-white mb-3">
              What does a business do?
            </p>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              It solves a problem, for a person, using a set of skills.
            </p>

            <div className="mb-8">
              <p className="text-base text-white mb-4">
                The Flow Finder Process helps you identify:
              </p>
              <ul className="flex flex-col gap-3">
                {processItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-base font-medium text-white">
                    <span className="w-6 h-6 bg-gold text-text-dark rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-gradient-gold text-text-dark px-10 py-5 rounded-2xl text-lg font-bold shadow-gold hover:shadow-gold-hover hover:-translate-y-1 transition-all duration-300"
            >
              Join the Workshop
              <ArrowRightIcon />
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-heavy transition-all duration-300 hover:shadow-gold hover:scale-[1.02]">
            <Image
              src="/20241202-DSC09783.jpg"
              alt="Flow Finder Workshop in action"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
