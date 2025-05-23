import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const menuItems = [
  {
    category: "Signature Coffees",
    items: [
      { name: "Brew & Bean Special", description: "Our signature blend with notes of chocolate and caramel", price: "$4.50" },
      { name: "Golden Latte", description: "Espresso with steamed milk and a touch of turmeric", price: "$5.25" },
      { name: "Cold Brew Delight", description: "Smooth cold brew with vanilla and cream", price: "$4.75" }
    ]
  },
  {
    category: "Fresh Pastries",
    items: [
      { name: "Artisan Croissant", description: "Buttery, flaky pastry baked fresh daily", price: "$3.25" },
      { name: "Blueberry Muffin", description: "Made with organic blueberries and whole wheat", price: "$2.95" },
      { name: "Chocolate Chip Cookie", description: "Warm, gooey cookies with premium chocolate", price: "$2.50" }
    ]
  },
  {
    category: "Light Bites",
    items: [
      { name: "Avocado Toast", description: "Multigrain bread with fresh avocado and herbs", price: "$7.50" },
      { name: "Breakfast Sandwich", description: "Egg, cheese, and bacon on a fresh croissant", price: "$6.75" },
      { name: "Greek Yogurt Bowl", description: "With granola, berries, and honey drizzle", price: "$5.95" }
    ]
  }
]

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted selections made with the finest ingredients and lots of love
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <span className="text-amber-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu