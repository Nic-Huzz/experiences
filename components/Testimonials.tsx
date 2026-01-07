import Image from 'next/image'

interface ProductShowcase {
  name: string
  description: string
  builderName: string
  builderTitle: string
  builderInitials: string
  testimonial: string
  image: string
}

const products: ProductShowcase[] = [
  {
    name: 'Build Your Bottles',
    description: 'A custom water bottle e-commerce configurator with real-time pricing.',
    builderName: 'Sydney',
    builderTitle: 'Founder',
    builderInitials: 'S',
    testimonial: "It's hard to believe but I legitimately built something in 5 hours that I thought would take over a year.",
    image: '/buildwaterbottle.jpg',
  },
  {
    name: 'Gardening Portal',
    description: "A portal for a landscaping business to track all client's gardens.",
    builderName: 'Tim',
    builderTitle: 'Small Business Owner',
    builderInitials: 'T',
    testimonial: "My mind is exploding with opportunities and possibilities now. What this has made possible is crazy.",
    image: '/Gardeningportal.png',
  },
]

export default function Testimonials() {
  return (
    <div className="mt-16 pt-16 border-t border-white/10">
      <h3 className="text-3xl font-extrabold text-white text-center mb-4">
        Built With This Program
      </h3>
      <p className="text-white/70 text-center mb-12">
        Real products shipped by real builders — none of them had coding experience before starting.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((product, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 overflow-hidden shadow-medium transition-all duration-300 hover:-translate-y-1.5 hover:shadow-heavy">
            {/* Screenshot */}
            <div className="aspect-video bg-gray-100 -mx-6 -mt-6 mb-4 overflow-hidden border-b border-gray-100 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <h4 className="font-bold text-text-dark mb-1">{product.name}</h4>
            <p className="text-text-medium text-sm mb-3">{product.description}</p>
            <div className="border-t border-gray-100 pt-3 mt-3">
              <p className="text-text-medium text-sm italic mb-3">"{product.testimonial}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {product.builderInitials}
                </div>
                <div>
                  <p className="text-sm font-medium text-text-dark">{product.builderName}</p>
                  <p className="text-xs text-purple">{product.builderTitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
