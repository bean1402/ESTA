import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";

// Sample map properties data
const mapProperties = [
  {
    id: "1",
    title: "Luxury Apartment",
    price: "$950,000",
    location: "Central Park West",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,100 sq ft",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    coordinates: { lat: 40.7829, lng: -73.9654 },
  },
  {
    id: "2",
    title: "Modern Condo",
    price: "$1,200,000",
    location: "Brooklyn Heights",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,400 sq ft",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    coordinates: { lat: 40.6962, lng: -73.9969 },
  },
  {
    id: "3",
    title: "Penthouse Suite",
    price: "$2,800,000",
    location: "Midtown East",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,200 sq ft",
    image:
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    coordinates: { lat: 40.7589, lng: -73.9441 },
  },
];

const MapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Properties on Map
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore properties in your desired location with our interactive map
            view
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-96 bg-gradient-to-br from-blue-50 to-indigo-100 border-none shadow-lg">
              <CardContent className="h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-600">
                    Map integration with Google Maps or Mapbox will be
                    implemented here
                  </p>
                  <div className="mt-6 flex justify-center space-x-4">
                    {/* Sample map pins */}
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Properties in this area
            </h3>
            {mapProperties.map((property) => (
              <Card
                key={property.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {property.title}
                      </h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-600 mb-2">
                        <div className="flex items-center">
                          <Bed className="h-3 w-3 mr-1" />
                          {property.bedrooms}
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-3 w-3 mr-1" />
                          {property.bathrooms}
                        </div>
                        <div className="flex items-center">
                          <Square className="h-3 w-3 mr-1" />
                          {property.area}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-primary">
                        {property.price}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
