import { PhoneIcon } from './ArrowIcon'

export default function CTA() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="bg-gradient-purple rounded-3xl py-16 px-6 md:px-12 text-center text-white relative overflow-hidden cta-gradient">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-[500px] mx-auto">
              Let's have a conversation about where you are and what might serve you best right now.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-gradient-gold text-text-dark px-10 py-5 rounded-2xl text-lg font-bold shadow-gold hover:shadow-gold-hover hover:-translate-y-1 transition-all duration-300"
            >
              Book a Discovery Call
              <PhoneIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
