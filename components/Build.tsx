import { ArrowRightIcon } from './ArrowIcon'
import Testimonials from './Testimonials'

const features = [
  'Hands-on Workshop',
  'No Code Required',
  '3-5 Hours',
  'Deployed Prototype',
]

export default function Build() {
  return (
    <section className="py-24 bg-gradient-dark text-white relative overflow-hidden build-gradient" id="build">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="relative z-10 text-center max-w-[1000px] mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-2">
            Offering 7
          </p>
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold mb-4">
            Build With AI
          </h2>
          <p className="text-xl text-gold italic mb-6">
            "Create something real"
          </p>
          <p className="text-lg leading-relaxed opacity-90 mb-8">
            You've found your flow. Now bring your vision to life. Learn how to build working tech products using AI tools—no coding experience required. Go from idea to deployed prototype in just 3 hours.
          </p>

          <div className="flex justify-center gap-4 md:gap-8 mb-10 flex-wrap">
            {features.map((feature, index) => (
              <span
                key={index}
                className="bg-white/10 py-3 px-6 rounded-xl font-semibold text-sm transition-[transform,background-color] duration-300 hover:bg-white/20 hover:-translate-y-0.5 cursor-default"
              >
                {feature}
              </span>
            ))}
          </div>

          <a
            href="https://buildwithai.nichuzz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-gold text-text-dark px-10 py-5 rounded-2xl text-lg font-bold shadow-gold hover:shadow-gold-hover hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
          >
            Join Next Hackathon
            <ArrowRightIcon />
          </a>

          <Testimonials />
        </div>
      </div>
    </section>
  )
}
