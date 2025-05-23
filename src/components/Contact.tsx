import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience the perfect cup in our cozy, welcoming space
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <MapPin className="mr-3" size={24} />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  123 Coffee Street<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <Clock className="mr-3" size={24} />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <Phone className="mr-3" size={24} />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="mr-3" size={18} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="mr-3" size={18} />
                  <span>hello@brewandbean.com</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Cafe exterior"
              className="rounded-lg shadow-xl w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-800 mb-2">Ready to visit?</h4>
                  <p className="text-gray-600 mb-4">Get directions or place your order ahead</p>
                  <div className="flex gap-3">
                    <Button className="bg-amber-600 hover:bg-amber-700 flex-1">
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Order Ahead
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact