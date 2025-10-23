import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data/mockData';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our Community Says
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Hear directly from our members about their experiences at Unity Hall.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "4.9", label: "Average Rating", sublabel: "out of 5 stars" },
              { number: "500+", label: "Reviews", sublabel: "from members" },
              { number: "98%", label: "Satisfaction", sublabel: "rate" },
              { number: "25", label: "Years", sublabel: "of trust" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-4xl font-bold text-blue-600">{stat.number}</p>
                <p className="text-lg font-semibold text-gray-800">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Quote className="text-blue-600 mr-2" size={24} />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-to-r from-blue-50 to-green-50 border-0">
              <div className="text-center space-y-6">
                <Quote className="text-blue-600 mx-auto" size={48} />
                <p className="text-2xl text-gray-700 italic leading-relaxed">
                  "Unity Hall isn't just a building - it's the heart of our community. 
                  It's where friendships are made, skills are learned, and memories are created."
                </p>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://picsum.photos/64/64?random=featured" 
                    alt="Featured member"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Community Member</p>
                    <p className="text-sm text-gray-600">25+ Years at Unity Hall</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Share Your Experience
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have you been part of our community? We'd love to hear your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <a href="/contact">Share Your Story</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="/activities">Join Activities</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;