import { useState } from 'react';
import { Search, Filter, Clock, Users, PoundSterling, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { activities } from '@/data/mockData';
import { Link } from '@tanstack/react-router';

const Activities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(activities.map(a => a.category)))];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Activities & Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover our wide range of programs designed for all ages and interests. 
              From fitness classes to creative workshops, there's something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-blue-100 text-blue-700">{activity.category}</Badge>
                    <span className="text-sm font-semibold text-green-600">{activity.price}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{activity.schedule}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} />
                      <span>Instructor: {activity.instructor}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1" asChild>
                      <Link to="/booking">Book Now</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/activities/${activity.id}`}>Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No activities found matching your criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern, accessible spaces designed for community use
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Main Hall",
                capacity: "200 people",
                features: ["Stage", "Sound System", "Projector", "Kitchen Access"],
                image: "https://picsum.photos/400/300?random=facility1"
              },
              {
                name: "Meeting Rooms",
                capacity: "20-30 people",
                features: ["WiFi", "Whiteboard", "Video Conference", "Coffee Station"],
                image: "https://picsum.photos/400/300?random=facility2"
              },
              {
                name: "Sports Hall",
                capacity: "100 people",
                features: ["Basketball Court", "Badminton", "Equipment Storage", "Showers"],
                image: "https://picsum.photos/400/300?random=facility3"
              },
              {
                name: "Art Studio",
                capacity: "15 people",
                features: ["Easels", "Pottery Wheel", "Storage", "Natural Light"],
                image: "https://picsum.photos/400/300?random=facility4"
              },
              {
                name: "Computer Lab",
                capacity: "12 people",
                features: ["12 Computers", "Printer", "Internet", "Software"],
                image: "https://picsum.photos/400/300?random=facility5"
              },
              {
                name: "Garden Area",
                capacity: "50 people",
                features: ["Seating", "BBQ Area", "Playground", "Green Space"],
                image: "https://picsum.photos/400/300?random=facility6"
              }
            ].map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">Capacity: {facility.capacity}</p>
                  <div className="space-y-1">
                    {facility.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link to="/booking">Book This Space</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join an Activity?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become a member today and enjoy exclusive benefits and priority booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link to="/booking">Become a Member</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;