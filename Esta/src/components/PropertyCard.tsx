import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    image: string;
    type: string;
    status: "For Sale" | "For Rent" | "Sold";
    featured?: boolean;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Status Badge */}
        <Badge
          className={`absolute top-4 left-4 ${
            property.status === "For Sale"
              ? "bg-green-500"
              : property.status === "For Rent"
                ? "bg-blue-500"
                : "bg-gray-500"
          }`}
        >
          {property.status}
        </Badge>

        {/* Featured Badge */}
        {property.featured && (
          <Badge className="absolute top-4 right-16 bg-orange-500">
            Featured
          </Badge>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 bg-white/80 hover:bg-white ${
            isWishlisted ? "text-red-500" : "text-gray-600"
          }`}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>

        {/* Quick View Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="h-4 w-4 mr-1" />
          Quick View
        </Button>
      </div>

      <CardContent className="p-6">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {property.type}
          </Badge>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              {property.bedrooms}
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              {property.bathrooms}
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              {property.area}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            {property.price}
          </div>
          <Link to={`/property/${property.id}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
