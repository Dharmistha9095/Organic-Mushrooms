export default function About() {
  const features = [
    {
      title: 'Organic & Sustainable',
      description: 'All our mushrooms are grown using certified organic methods without harmful pesticides.',
      icon: '🌱'
    },
    {
      title: 'Locally Grown',
      description: 'Fresh from our farm to your doorstep. Minimal transport time ensures peak freshness.',
      icon: '🚚'
    },
    {
      title: 'Year-Round Harvest',
      description: 'Our controlled growing environment allows us to provide fresh mushrooms every season.',
      icon: '📅'
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            About Our Mushroom Farm
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            With over a decade of experience in organic mushroom cultivation, we're committed to delivering 
            the highest quality, freshest mushrooms to our community while maintaining sustainable farming practices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mt-16 bg-primary/5 p-8 md:p-12 rounded-xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
          <p className="text-foreground/80 leading-relaxed">
            Founded in 2015, our mushroom farm started as a passion project to bring fresh, organic mushrooms 
            to local communities. What began in a small greenhouse has grown into a thriving sustainable farm, 
            serving hundreds of families and restaurants across the region. We believe that quality matters, 
            and every mushroom we grow reflects our commitment to excellence and environmental responsibility.
          </p>
        </div>
      </div>
    </section>
  )
}
