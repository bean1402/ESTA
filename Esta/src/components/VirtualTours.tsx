import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Clock, Star } from "lucide-react";

const virtualTours = [
  {
    id: "1",
    title: "Luxury Modern Living Room",
    description:
      "Experience the elegance of contemporary design with panoramic city views",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "3:45",
    views: "12.4K",
    rating: 4.9,
    type: "360° Tour",
  },
  {
    id: "2",
    title: "Cozy Bedroom Retreat",
    description:
      "Discover the perfect blend of comfort and style in this serene bedroom",
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "2:30",
    views: "8.7K",
    rating: 4.8,
    type: "Video Tour",
  },
];

const VirtualTours = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Virtual Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take immersive virtual tours of properties from the comfort of your
            home
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {virtualTours.map((tour) => (
            <Card
              key={tour.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16 bg-white/90 text-primary hover:bg-white"
                  >
                    <Play className="h-6 w-6 ml-1" />
                  </Button>
                </div>

                {/* Tour Type Badge */}
                <Badge className="absolute top-4 left-4 bg-primary">
                  {tour.type}
                </Badge>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {tour.duration}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {tour.views} views
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {tour.rating}
                    </div>
                  </div>
                </div>

                <Button className="w-full">Start Virtual Tour</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualTours;
