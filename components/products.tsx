import { Card } from '@/components/ui/card'

export default function Products() {
  const mushrooms = [
    {
      name: 'Button Mushroom',
      description: 'Classic white mushrooms perfect for everyday cooking. Mild, versatile flavor.',
      icon: '🤍',
      color: 'from-gray-100 to-gray-50'
    },
    {
      name: 'Oyster Mushroom',
      description: 'Delicate texture with subtle seafood notes. Excellent for stir-fries and soups.',
      icon: '🌊',
      color: 'from-blue-100 to-blue-50'
    },
    {
      name: 'Shiitake',
      description: 'Rich, earthy flavor with firm texture. A favorite for Asian cuisine and grilling.',
      icon: '🍂',
      color: 'from-amber-100 to-amber-50'
    },
    {
      name: 'Portobello',
      description: 'Large meaty caps with robust flavor. Perfect for grilling or as a burger substitute.',
      icon: '🤎',
      color: 'from-amber-200 to-amber-100'
    },
    {
      name: 'Enoki',
      description: 'Long, delicate stems with mild taste. Great for salads, soups, and hot pots.',
      icon: '✨',
      color: 'from-yellow-100 to-yellow-50'
    },
    {
      name: 'Lion\'s Mane',
      description: 'Unique appearance with seafood-like texture. Nutty flavor, excellent health benefits.',
      icon: '👑',
      color: 'from-orange-100 to-orange-50'
    },
  ]

  return (
    <section id="products" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Mushroom Varieties
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Discover our selection of premium mushrooms, each with unique flavors and culinary uses.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mushrooms.map((mushroom, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border">
              <div className={`bg-gradient-to-br ${mushroom.color} p-8 text-center`}>
                <div className="text-6xl mb-4">{mushroom.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{mushroom.name}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{mushroom.description}</p>
                <button className="mt-4 w-full py-2 px-4 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-colors">
                  Learn More
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
