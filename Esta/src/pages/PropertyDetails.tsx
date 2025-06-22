import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Sample property data
  const property = {
    id: id || "1",
    title: "Luxury Modern Apartment with City View",
    price: "$850,000",
    location: "Downtown, New York, NY 10001",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,200 sq ft",
    parking: 2,
    yearBuilt: 2020,
    type: "Apartment",
    status: "For Sale",
    description:
      "Stunning modern apartment featuring floor-to-ceiling windows, premium finishes, and breathtaking city views. Located in the heart of downtown with easy access to transportation, dining, and entertainment. This spacious 3-bedroom unit offers luxury living at its finest.",
    features: [
      "Central Air Conditioning",
      "Hardwood Floors",
      "In-Unit Laundry",
      "Gym/Fitness Center",
      "Roof Deck",
      "Doorman",
      "Pet Friendly",
      "Storage Unit",
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    agent: {
      name: "Sarah Wilson",
      phone: "+1 (555) 123-4567",
      email: "sarah@realestate.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Property Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-500">{property.status}</Badge>
                <Badge variant="outline">{property.type}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                {property.location}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 lg:mt-0">
              <div className="text-3xl font-bold text-primary">
                {property.price}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isWishlisted ? "fill-current text-red-500" : ""
                    }`}
                  />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={property.images[activeImageIndex]}
                    alt={property.title}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index === activeImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                        onClick={() => setActiveImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2">
                    {property.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Property ${index + 1}`}
                        className={`w-full h-20 object-cover rounded cursor-pointer ${
                          index === activeImageIndex
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                        onClick={() => setActiveImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Bed className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">
                      {property.bedrooms}
                    </div>
                    <div className="text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <Bath className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">
                      {property.bathrooms}
                    </div>
                    <div className="text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <Square className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{property.area}</div>
                    <div className="text-gray-600">Area</div>
                  </div>
                  <div className="text-center">
                    <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{property.parking}</div>
                    <div className="text-gray-600">Parking</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {property.description}
                </p>

                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Agent */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
                <div className="flex items-center mb-4">
                  <img
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {property.agent.name}
                    </div>
                    <div className="text-gray-600">Real Estate Agent</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    {property.agent.phone}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Agent
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Tour */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Schedule a Tour</h3>
                <Button className="w-full mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Viewing
                </Button>
                <Button variant="outline" className="w-full">
                  Virtual Tour
                </Button>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Mortgage Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Calculate your monthly payments
                </p>
                <Button variant="outline" className="w-full">
                  Open Calculator
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
