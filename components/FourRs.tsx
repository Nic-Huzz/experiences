type RCardProps = {
  type: 'recognise' | 'release' | 'rewire' | 'reconnect'
  offering: string
  icon: string
  title: string
  tagline: string
  description: string
  buttonText: string
}

const rCards: RCardProps[] = [
  {
    type: 'recognise',
    offering: 'Offering 2',
    icon: '🪞',
    title: 'Recognise',
    tagline: '"Know your limits"',
    description: "Walk away knowing exactly how much money you feel safe earning and the safety contracts subconsciously self-sabotaging you.",
    buttonText: 'Nervous System Mapping',
  },
  {
    type: 'release',
    offering: 'Offering 3',
    icon: '🔓',
    title: 'Release',
    tagline: '"Release parts of yourself no longer serving you"',
    description: 'Your body holds stories your mind has forgotten. Use the breath to move energy and release stored tension.',
    buttonText: 'Breathwork',
  },
  {
    type: 'rewire',
    offering: 'Offering 4',
    icon: '🧠',
    title: 'Rewire',
    tagline: '"Build new patterns"',
    description: 'Transform limiting beliefs into empowering ones. Rewire your subconscious and the beliefs subconsciously self sabotaging you.',
    buttonText: 'Rewire Limiting Beliefs',
  },
  {
    type: 'reconnect',
    offering: 'Offering 5',
    icon: '💃',
    title: 'Reconnect',
    tagline: "\"We're in Bali, let's celebrate\"",
    description: 'Move your body, free your mind. Express, release, and connect through the universal language of dance.',
    buttonText: 'Dance',
  },
]

const typeStyles = {
  recognise: {
    hoverBorder: 'hover:border-recognise-primary',
    hoverShadow: 'hover:shadow-recognise-hover',
    iconGradient: 'recognise-gradient',
    titleColor: 'text-recognise-primary',
    buttonGradient: 'recognise-gradient',
  },
  release: {
    hoverBorder: 'hover:border-release-primary',
    hoverShadow: 'hover:shadow-release-hover',
    iconGradient: 'release-gradient',
    titleColor: 'text-release-primary',
    buttonGradient: 'release-gradient',
  },
  rewire: {
    hoverBorder: 'hover:border-rewire-primary',
    hoverShadow: 'hover:shadow-rewire-hover',
    iconGradient: 'rewire-gradient',
    titleColor: 'text-rewire-primary',
    buttonGradient: 'rewire-gradient',
  },
  reconnect: {
    hoverBorder: 'hover:border-reconnect-primary',
    hoverShadow: 'hover:shadow-reconnect-hover',
    iconGradient: 'reconnect-gradient',
    titleColor: 'text-reconnect-primary',
    buttonGradient: 'reconnect-gradient',
  },
}

function RCard({ type, offering, icon, title, tagline, description, buttonText }: RCardProps) {
  const styles = typeStyles[type]

  return (
    <div
      className={`bg-white rounded-3xl p-8 border border-border shadow-medium transition-all duration-300 text-center flex flex-col hover:-translate-y-1.5 ${styles.hoverBorder} ${styles.hoverShadow}`}
    >
      <a
        href="#"
        className={`inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 mx-auto mb-4 ${styles.buttonGradient}`}
      >
        {buttonText}
      </a>
      <div className={`w-[70px] h-[70px] rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-light ${styles.iconGradient}`}>
        {icon}
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide opacity-70 mb-1">
        {offering}
      </p>
      <h3 className={`text-xl font-extrabold mb-2 ${styles.titleColor}`}>
        {title}
      </h3>
      <p className="text-sm italic text-text-medium mb-4">
        {tagline}
      </p>
      <p className="text-sm text-text-medium leading-relaxed flex-1 whitespace-pre-line">
        {description}
      </p>
    </div>
  )
}

export default function FourRs() {
  return (
    <section className="py-24" id="four-rs">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block section-tag-gradient text-purple py-2 px-6 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Offerings 2-5
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-text-dark mb-4 leading-tight">
            The 4R's of Transformation
          </h2>
          <p className="text-lg text-text-medium max-w-[600px] mx-auto leading-relaxed">
            Personal development follows four pillars of change:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {rCards.map((card) => (
            <RCard key={card.type} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
