import { Coffee, Instagram, Facebook, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Coffee className="mr-2 text-amber-400" size={24} />
              <span className="text-xl font-bold">Brew & Bean</span>
            </div>
            <p className="text-gray-400 mb-4">
              Crafting exceptional coffee experiences since 2018. 
              Where every cup tells a story.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Dine In</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Takeaway</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Catering</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Coffee Street</p>
              <p>City, State 12345</p>
              <p>(555) 123-4567</p>
              <p>hello@brewandbean.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Brew & Bean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer