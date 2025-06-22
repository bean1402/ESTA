import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Home,
  Calendar,
  Settings,
  User,
  TrendingUp,
  MapPin,
  Plus,
} from "lucide-react";

const Dashboard = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Buyer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  };

  const stats = [
    {
      title: "Saved Properties",
      value: "12",
      icon: Heart,
      color: "text-red-500",
    },
    {
      title: "Property Views",
      value: "48",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      title: "Scheduled Tours",
      value: "3",
      icon: Calendar,
      color: "text-blue-500",
    },
    {
      title: "Messages",
      value: "7",
      icon: MapPin,
      color: "text-purple-500",
    },
  ];

  const savedProperties = [
    {
      id: "1",
      title: "Modern Downtown Apartment",
      price: "$850,000",
      location: "Downtown, New York",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      savedDate: "2 days ago",
    },
    {
      id: "2",
      title: "Luxury Family Villa",
      price: "$1,250,000",
      location: "Beverly Hills, CA",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      savedDate: "1 week ago",
    },
    {
      id: "3",
      title: "Cozy Studio Apartment",
      price: "$2,800/month",
      location: "SoHo, New York",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      savedDate: "2 weeks ago",
    },
  ];

  const recentActivity = [
    {
      action: "Saved property",
      property: "Modern Downtown Apartment",
      time: "2 hours ago",
    },
    {
      action: "Scheduled tour",
      property: "Luxury Family Villa",
      time: "1 day ago",
    },
    {
      action: "Updated search filters",
      property: "Downtown NYC",
      time: "3 days ago",
    },
    {
      action: "Contacted agent",
      property: "Cozy Studio Apartment",
      time: "1 week ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">
            Manage your properties, tours, and account settings
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Saved Properties */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-red-500" />
                    Saved Properties
                  </span>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedProperties.map((property) => (
                    <div
                      key={property.id}
                      className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {property.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {property.location}
                        </p>
                        <p className="text-xs text-gray-500">
                          Saved {property.savedDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">
                          {property.price}
                        </p>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-gray-900">
                          <span className="font-medium">{activity.action}</span>{" "}
                          "{activity.property}"
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {user.name}
                  </h3>
                  <p className="text-gray-600">{user.email}</p>
                  <Badge className="mt-2">{user.role}</Badge>
                  <Button variant="outline" className="w-full mt-4">
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Saved Search
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Tour
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Home className="h-4 w-4 mr-2" />
                  List Property
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </Button>
              </CardContent>
            </Card>

            {/* Placeholder for Budget Calculator */}
            <Card>
              <CardHeader>
                <CardTitle>Budget Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Calculate your home buying budget
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

export default Dashboard;
