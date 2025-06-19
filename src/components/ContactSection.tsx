
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "Email",
      details: "contact@datasciencetraining.com",
      subtitle: "Get in touch anytime"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Call for immediate assistance"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: "Location",
      details: "San Francisco, CA",
      subtitle: "Online & In-person training"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Office Hours",
      details: "Mon-Fri: 9AM-6PM PST",
      subtitle: "Weekend support available"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join hundreds of successful data scientists. Contact us today to discuss your learning goals and find the perfect program for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-2xl">
                    {item.icon}
                  </div>
                </div>
                <CardTitle className="text-white text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-white font-semibold mb-1">{item.details}</div>
                <div className="text-blue-200 text-sm">{item.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Start Your Data Science Career Today</h3>
            <p className="text-blue-100 text-lg">
              Limited seats available for our next cohort starting January 2025
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
