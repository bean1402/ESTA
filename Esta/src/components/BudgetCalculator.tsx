import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, PieChart, Download } from "lucide-react";

const BudgetCalculator = () => {
  const [formData, setFormData] = useState({
    landCost: "",
    constructionCostPerSqFt: "",
    totalArea: "",
    numRooms: "",
    furnishingBudget: "",
    locationTax: "",
  });

  const [result, setResult] = useState<{
    total: number;
    breakdown: {
      land: number;
      construction: number;
      furnishing: number;
      tax: number;
    };
  } | null>(null);

  const calculateBudget = () => {
    const land = parseFloat(formData.landCost) || 0;
    const constructionPerSqFt =
      parseFloat(formData.constructionCostPerSqFt) || 0;
    const area = parseFloat(formData.totalArea) || 0;
    const furnishing = parseFloat(formData.furnishingBudget) || 0;
    const tax = parseFloat(formData.locationTax) || 0;

    const construction = constructionPerSqFt * area;
    const total = land + construction + furnishing + tax;

    setResult({
      total,
      breakdown: {
        land,
        construction,
        furnishing,
        tax,
      },
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Home Budget
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan your dream home with our comprehensive budget calculator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-primary" />
                Budget & Construction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="landCost">Land Cost ($)</Label>
                  <Input
                    id="landCost"
                    type="number"
                    placeholder="150,000"
                    value={formData.landCost}
                    onChange={(e) =>
                      handleInputChange("landCost", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="constructionCost">
                    Construction Cost per sq ft ($)
                  </Label>
                  <Input
                    id="constructionCost"
                    type="number"
                    placeholder="120"
                    value={formData.constructionCostPerSqFt}
                    onChange={(e) =>
                      handleInputChange(
                        "constructionCostPerSqFt",
                        e.target.value,
                      )
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="totalArea">Total Area (sq ft)</Label>
                  <Input
                    id="totalArea"
                    type="number"
                    placeholder="2000"
                    value={formData.totalArea}
                    onChange={(e) =>
                      handleInputChange("totalArea", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="numRooms">Number of Rooms</Label>
                  <Select
                    value={formData.numRooms}
                    onValueChange={(value) =>
                      handleInputChange("numRooms", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select rooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Room</SelectItem>
                      <SelectItem value="2">2 Rooms</SelectItem>
                      <SelectItem value="3">3 Rooms</SelectItem>
                      <SelectItem value="4">4 Rooms</SelectItem>
                      <SelectItem value="5">5+ Rooms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="furnishing">Furnishing Budget ($)</Label>
                  <Input
                    id="furnishing"
                    type="number"
                    placeholder="30,000"
                    value={formData.furnishingBudget}
                    onChange={(e) =>
                      handleInputChange("furnishingBudget", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="tax">Location Tax & Fees ($)</Label>
                  <Input
                    id="tax"
                    type="number"
                    placeholder="15,000"
                    value={formData.locationTax}
                    onChange={(e) =>
                      handleInputChange("locationTax", e.target.value)
                    }
                  />
                </div>
              </div>

              <Button onClick={calculateBudget} className="w-full" size="lg">
                Calculate Total Budget
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2 text-primary" />
                Budget Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      ${result.total.toLocaleString()}
                    </div>
                    <p className="text-gray-600">Total Estimated Cost</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Land Cost</span>
                      <span className="font-semibold">
                        ${result.breakdown.land.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Construction Cost</span>
                      <span className="font-semibold">
                        ${result.breakdown.construction.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Furnishing</span>
                      <span className="font-semibold">
                        ${result.breakdown.furnishing.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">Tax & Fees</span>
                      <span className="font-semibold">
                        ${result.breakdown.tax.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Budget Report
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Fill in the form to calculate your budget
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BudgetCalculator;
