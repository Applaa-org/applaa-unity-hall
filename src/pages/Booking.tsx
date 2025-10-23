import { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { showSuccess } from '@/utils/toast';

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bookingType: 'activity' as 'activity' | 'facility' | 'enquiry',
    activity: '',
    facility: '',
    date: '',
    time: '',
    duration: '',
    participants: '',
    message: '',
    newsletter: false,
    terms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const activities = [
    'Yoga & Wellness Classes',
    'Youth Club',
    'Art & Craft Workshops',
    'Senior Citizens Social Club',
    'Community Kitchen',
    'Toddler Play Group'
  ];

  const facilities = [
    'Main Hall',
    'Meeting Rooms',
    'Sports Hall',
    'Art Studio',
    'Computer Lab',
    'Garden Area'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', 
    '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    showSuccess('Your booking/enquiry has been submitted successfully! We will contact you soon.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      bookingType: 'activity',
      activity: '',
      facility: '',
      date: '',
      time: '',
      duration: '',
      participants: '',
      message: '',
      newsletter: false,
      terms: false
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Book Your Space or Activity
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Reserve your spot in our activities or book our facilities for your events. 
              Easy online booking with instant confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="text-blue-600" size={24} />
                    <span>Personal Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Type */}
              <Card>
                <CardHeader>
                  <CardTitle>Booking Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={formData.bookingType}
                    onValueChange={(value) => handleInputChange('bookingType', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="activity" id="activity" />
                      <Label htmlFor="activity">Activity Registration</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="facility" id="facility" />
                      <Label htmlFor="facility">Facility Booking</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="enquiry" id="enquiry" />
                      <Label htmlFor="enquiry">General Enquiry</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Activity/Facility Selection */}
              {(formData.bookingType === 'activity' || formData.bookingType === 'facility') && (
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {formData.bookingType === 'activity' ? 'Select Activity' : 'Select Facility'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="selection">
                        {formData.bookingType === 'activity' ? 'Activity *' : 'Facility *'}
                      </Label>
                      <Select
                        value={formData.bookingType === 'activity' ? formData.activity : formData.facility}
                        onValueChange={(value) => handleInputChange(formData.bookingType, value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={`Select ${formData.bookingType}`} />
                        </SelectTrigger>
                        <SelectContent>
                          {(formData.bookingType === 'activity' ? activities : facilities).map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.bookingType === 'activity' || formData.bookingType === 'facility' ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="date">Date *</Label>
                            <Input
                              id="date"
                              type="date"
                              value={formData.date}
                              onChange={(e) => handleInputChange('date', e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time">Time *</Label>
                            <Select
                              value={formData.time}
                              onValueChange={(value) => handleInputChange('time', value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="duration">Duration</Label>
                            <Select
                              value={formData.duration}
                              onValueChange={(value) => handleInputChange('duration', value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select duration" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 hour</SelectItem>
                                <SelectItem value="2">2 hours</SelectItem>
                                <SelectItem value="3">3 hours</SelectItem>
                                <SelectItem value="4">4 hours</SelectItem>
                                <SelectItem value="full">Full day</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="participants">Number of Participants</Label>
                            <Input
                              id="participants"
                              type="number"
                              value={formData.participants}
                              onChange={(e) => handleInputChange('participants', e.target.value)}
                              placeholder="Enter number"
                            />
                          </div>
                        </div>
                      </>
                    ) : null}
                  </CardContent>
                </Card>
              )}

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="message">Message or Special Requirements</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please let us know any special requirements or questions..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        I would like to receive the Unity Hall newsletter
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions and privacy policy *
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !formData.terms}
                  className="px-12"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Booking/Enquiry'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <Phone className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">020 7123 4567</p>
                <p className="text-sm text-gray-500">Mon-Fri: 9AM-9PM</p>
              </Card>
              <Card className="text-center p-6">
                <Mail className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-600">info@unityhall.org.uk</p>
                <p className="text-sm text-gray-500">24/7 Response</p>
              </Card>
              <Card className="text-center p-6">
                <MapPin className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Community Street</p>
                <p className="text-sm text-gray-500">London, SE1 2AB</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;