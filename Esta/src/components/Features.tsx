import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Search,
  MapPin,
  Calculator,
  MessageSquare,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Property Management",
    description:
      "Complete property lifecycle management from listing to closing with advanced tools and analytics.",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Find exactly what you're looking for with our powerful search filters and AI-powered recommendations.",
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description:
      "Interactive maps with neighborhood insights, school ratings, and local amenities information.",
  },
  {
    icon: Calculator,
    title: "Budget Calculator",
    description:
      "Calculate mortgage payments, property taxes, and total ownership costs with our built-in tools.",
  },
  {
    icon: MessageSquare,
    title: "Messaging System",
    description:
      "Direct communication between buyers, sellers, and agents through our secure messaging platform.",
  },
  {
    icon: Shield,
    title: "Booking System",
    description:
      "Schedule viewings and manage property bookings with our integrated calendar system.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to buy, sell, or rent properties with confidence
            and ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
