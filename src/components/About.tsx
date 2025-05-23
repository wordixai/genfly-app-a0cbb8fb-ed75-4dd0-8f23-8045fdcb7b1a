import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Users } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2018, Brew & Bean started as a dream to create a space where 
              coffee lovers could gather, connect, and enjoy exceptional coffee in a 
              warm, welcoming environment.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We source our beans directly from sustainable farms around the world, 
              ensuring every cup supports both quality and ethical practices. Our 
              skilled baristas craft each drink with precision and passion.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <Coffee className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800">Premium Coffee</h4>
                  <p className="text-sm text-gray-600 mt-2">Ethically sourced beans</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <Heart className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800">Made with Love</h4>
                  <p className="text-sm text-gray-600 mt-2">Crafted with passion</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <Users className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800">Community</h4>
                  <p className="text-sm text-gray-600 mt-2">Bringing people together</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Coffee shop interior"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold">5+</h4>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About