
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Star } from "lucide-react";

const TrainerProfile = () => {
  const achievements = [
    { icon: <Users className="w-5 h-5" />, label: "500+ Students Trained", value: "500+" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Years of Experience", value: "8+" },
    { icon: <Award className="w-5 h-5" />, label: "Industry Certifications", value: "12" },
    { icon: <Star className="w-5 h-5" />, label: "Average Rating", value: "4.9/5" }
  ];

  const expertise = [
    "Machine Learning", "Deep Learning", "Python", "R", "SQL", 
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "Tableau", "Power BI", "AWS", "Azure", "Big Data"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Your Instructor
          </h2>
          <p className="text-xl text-gray-600">
            Learn from an industry expert with proven track record
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Dr. Sarah Johnson</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Senior Data Scientist with 8+ years of experience at Fortune 500 companies including Google, Microsoft, and Amazon. PhD in Computer Science with specialization in Machine Learning from Stanford University.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-800">Background</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Former Lead Data Scientist at Google AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Published 25+ research papers in top-tier conferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Keynote speaker at international AI conferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Mentor to 100+ data science professionals</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 text-center border-0 bg-gradient-to-br from-blue-50 to-green-50">
                  <CardContent className="p-0 space-y-2">
                    <div className="flex justify-center text-blue-600">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{achievement.value}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Data Science Trainer"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Technical Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1 text-blue-600 border-blue-200 hover:bg-blue-50 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;
