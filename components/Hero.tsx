import Image from 'next/image'
import CheckIcon from './CheckIcon'
import { ArrowUpRightIcon } from './ArrowIcon'

const credentials = [
  '10+ Years Facilitation Experience',
  'Certified NLP Practitioner',
  'Certified Breathwork Practitioner',
]

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-purple relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay pointer-events-none" />

      {/* Content */}
      <div className="flex flex-col justify-center p-8 lg:p-16 text-white relative z-10 animate-fade-in-up text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
        <span className="inline-block bg-gold/20 text-gold px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border border-gold/40 mb-6 w-fit">
          ✨ Nichuzz
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight mb-8">
          Creating Transformational Experiences
        </h1>

        <div className="flex flex-col gap-3 mb-10 items-center lg:items-start">
          {credentials.map((credential, index) => (
            <div key={index} className="flex items-center gap-3 text-lg font-medium">
              <span className="w-6 h-6 bg-gold rounded-md flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-3.5 h-3.5 text-text-dark" />
              </span>
              {credential}
            </div>
          ))}
        </div>

        <a
          href="#story"
          className="inline-flex items-center gap-3 bg-gradient-gold text-text-dark px-10 py-5 rounded-2xl text-lg font-bold shadow-gold hover:shadow-gold-hover hover:-translate-y-1 transition-all duration-300 w-fit"
        >
          Discover My Journey
          <ArrowUpRightIcon />
        </a>
      </div>

      {/* Image */}
      <div className="relative flex items-center justify-center overflow-hidden h-[50vh] lg:h-auto order-1 lg:order-2">
        <Image
          src="/huzz-photo_copy.jpg"
          alt="Huzz - Transformational Experience Guide"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient overlay - changes direction based on screen size */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-purple to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
