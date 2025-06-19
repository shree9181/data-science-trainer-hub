
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";
import CoursePreview from "./CoursePreview";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  price: string;
  features: string[];
  image: string;
}

const CourseCard = ({ title, description, duration, level, students, rating, price, features, image }: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden">
      <div className="relative">
        <img 
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
          {level}
        </Badge>
      </div>
      
      <CardHeader className="space-y-4">
        <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </CardTitle>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CoursePreview 
          title={title}
          description={description}
          duration={duration}
          level={level}
          students={students}
          rating={rating}
          features={features}
          image={image}
        />
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between pt-6">
        <div className="text-3xl font-bold text-gray-800">{price}</div>
        <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-2 rounded-xl transition-all duration-300">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
