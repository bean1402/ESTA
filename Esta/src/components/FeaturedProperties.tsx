import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import { ArrowRight } from "lucide-react";

// Sample property data matching the design
const featuredProperties = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    price: "$850,000",
    location: "Downtown, New York",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,200 sq ft",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Apartment",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: "2",
    title: "Luxury Family Villa",
    price: "$1,250,000",
    location: "Beverly Hills, CA",
    bedrooms: 5,
    bathrooms: 4,
    area: "3,500 sq ft",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Villa",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: "3",
    title: "Cozy Studio Apartment",
    price: "$2,800/month",
    location: "SoHo, New York",
    bedrooms: 1,
    bathrooms: 1,
    area: "650 sq ft",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Studio",
    status: "For Rent" as const,
  },
  {
    id: "4",
    title: "Modern Townhouse",
    price: "$750,000",
    location: "Austin, TX",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,100 sq ft",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Townhouse",
    status: "For Sale" as const,
  },
  {
    id: "5",
    title: "Penthouse with City View",
    price: "$3,200,000",
    location: "Manhattan, NY",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,800 sq ft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Penthouse",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: "6",
    title: "Suburban Family Home",
    price: "$485,000",
    location: "Portland, OR",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 sq ft",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "House",
    status: "For Sale" as const,
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Discover our handpicked selection of premium properties
            </p>
          </div>
          <Button variant="outline" size="lg" className="hidden md:flex">
            View All Properties
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-12 md:hidden">
          <Button variant="outline" size="lg">
            View All Properties
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
