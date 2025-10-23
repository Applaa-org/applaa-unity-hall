import { Award, Users, Heart, Target, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const About = () => {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Centre Director",
      bio: "Leading Unity Hall for 8 years with a passion for community development.",
      image: "https://picsum.photos/200/200?random=team1"
    },
    {
      name: "James Wilson",
      role: "Activities Coordinator",
      bio: "Creating engaging programs for all age groups and interests.",
      image: "https://picsum.photos/200/200?random=team2"
    },
    {
      name: "Emma Thompson",
      role: "Youth Services Manager",
      bio: "Dedicated to providing safe and enriching experiences for young people.",
      image: "https://picsum.photos/200/200?random=team3"
    },
    {
      name: "Michael Roberts",
      role: "Facilities Manager",
      bio: "Ensuring our spaces are welcoming, safe, and well-maintained.",
      image: "https://picsum.photos/200/200?random=team4"
    }
  ];

  const milestones = [
    { year: "1999", event: "Unity Hall founded by local community members" },
    { year: "2005", event: "Major renovation and expansion completed" },
    { year: "2012", event: "Reached 1,000 active members milestone" },
    { year: "2018", event: "Launched youth mentorship program" },
    { year: "2022", event: "Awarded 'Community Centre of the Year'" },
    { year: "2024", event: "Celebrating 25 years of service to the community" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              About Unity Hall
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Building Community Since 1999
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We are a vibrant community hub dedicated to bringing people together, 
              fostering connections, and creating opportunities for growth and engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="text-blue-600" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide a welcoming, inclusive space where community members can connect, 
                learn, and grow together through diverse programs, activities, and events that 
                enrich lives and strengthen community bonds.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <Users className="text-blue-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-2xl text-gray-800">500+</p>
                  <p className="text-sm text-gray-600">Active Members</p>
                </Card>
                <Card className="p-4 text-center">
                  <Calendar className="text-green-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-2xl text-gray-800">20+</p>
                  <p className="text-sm text-gray-600">Weekly Programs</p>
                </Card>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="text-green-600" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the heart of our community - a place where everyone feels welcome, 
                valued, and empowered to contribute to a stronger, more connected neighborhood 
                where diversity is celebrated and potential is nurtured.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <Award className="text-yellow-500 mx-auto mb-2" size={32} />
                  <p className="font-bold text-2xl text-gray-800">25</p>
                  <p className="text-sm text-gray-600">Years of Service</p>
                </Card>
                <Card className="p-4 text-center">
                  <MapPin className="text-red-500 mx-auto mb-2" size={32} />
                  <p className="font-bold text-2xl text-gray-800">1</p>
                  <p className="text-sm text-gray-600">Central Location</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Inclusivity",
                description: "Everyone is welcome regardless of background, age, or ability"
              },
              {
                icon: Heart,
                title: "Community",
                description: "Building strong connections and supportive relationships"
              },
              {
                icon: Target,
                title: "Excellence",
                description: "Delivering high-quality programs and services"
              },
              {
                icon: Award,
                title: "Growth",
                description: "Encouraging personal and community development"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <value.icon className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              25 years of serving our community
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2"></div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                  <div className="w-1/2 px-8">
                    <Card className="p-6">
                      <Badge className="mb-2">{milestone.year}</Badge>
                      <p className="text-gray-700">{milestone.event}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to serving our community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <Badge className="mb-3">{member.role}</Badge>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Community Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Making a difference in people's lives every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "10,000+",
                label: "People Served Annually",
                description: "From toddlers to seniors, we serve all age groups"
              },
              {
                number: "500+",
                label: "Weekly Activities",
                description: "Diverse programs for every interest and ability"
              },
              {
                number: "50+",
                label: "Community Partners",
                description: "Working together to strengthen our neighborhood"
              }
            ].map((impact, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold mb-2">{impact.number}</p>
                <p className="text-xl font-semibold mb-2">{impact.label}</p>
                <p className="text-blue-100">{impact.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;