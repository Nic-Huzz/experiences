import Image from 'next/image'
import { ArrowRightIcon } from './ArrowIcon'

const features = [
  'Daily quests to build momentum',
  'Weekly challenges across 4 pillars',
  'Track your progress visually',
  '7-day challenge to kickstart your flow',
]

const screenshots = [
  { src: '/demo0.png', alt: 'Find My Flow App - Welcome Screen' },
  { src: '/demo1.png', alt: 'Find My Flow App - Daily Mastery' },
  { src: '/demo2.png', alt: 'Find My Flow App - Your Voices' },
  { src: '/Demo3.png', alt: 'Find My Flow App - Archetypes' },
]

export default function FlowCompass() {
  return (
    <section className="py-24 bg-bg-light" id="flow-compass">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple mb-2">
              Offering 6
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-text-dark mb-2">
              Find My Flow App
            </h2>
            <p className="text-xl text-purple italic mb-6">
              "Gamify your ambitions"
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6 max-w-[700px] mx-auto">
              Find My Flow turns your goals into a game—with daily quests, weekly challenges, and a clear path to making progress feel like play.
            </p>

            <ul className="flex flex-wrap justify-center gap-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 py-2 px-4 bg-bg-light rounded-full text-sm text-text-dark">
                  <span className="w-5 h-5 feature-check-gradient text-white rounded-full flex items-center justify-center text-[0.7rem] font-bold">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://findmyflow.nichuzz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-purple text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-purple hover:shadow-purple-hover hover:-translate-y-1 transition-all duration-300 mb-12"
            >
              Start Your Quest
              <ArrowRightIcon />
            </a>
          </div>

          {/* App Preview */}
          <div className="bg-gradient-purple rounded-3xl p-8 md:p-12 relative overflow-hidden app-preview-gradient">
            <h3 className="text-white text-2xl font-bold mb-8 relative z-10">
              Here's a sneak peek 👀
            </h3>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 relative z-10">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-heavy transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={250}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
