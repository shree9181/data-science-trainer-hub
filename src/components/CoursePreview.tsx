
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, Star, CheckCircle } from "lucide-react";

interface CoursePreviewProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  features: string[];
  image: string;
}

const CoursePreview = ({ title, description, duration, level, students, rating, features, image }: CoursePreviewProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mb-4">
          <Play className="w-4 h-4 mr-2" />
          Preview Course
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Course Image */}
          <div className="relative">
            <img 
              src={image}
              alt={title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
              {level}
            </Badge>
          </div>
          
          {/* Course Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{students} students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
          </div>
          
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Course Overview</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
          
          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">What You'll Get</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sample Curriculum */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Sample Curriculum</h3>
            <div className="space-y-2">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Module 1: Introduction & Setup</h4>
                <p className="text-sm text-gray-600">Getting started with the fundamentals</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Module 2: Core Concepts</h4>
                <p className="text-sm text-gray-600">Deep dive into essential topics</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Module 3: Hands-on Projects</h4>
                <p className="text-sm text-gray-600">Apply your knowledge with real projects</p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
              Enroll Now
            </Button>
            <Button variant="outline" className="flex-1">
              Download Syllabus
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoursePreview;
