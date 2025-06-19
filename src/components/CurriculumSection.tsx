
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, Database, BarChart3, Brain, Trophy } from "lucide-react";

const CurriculumSection = () => {
  const modules = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: "Foundations of Data Science",
      duration: "Week 1-2",
      topics: [
        "Introduction to Data Science Ecosystem",
        "Statistics and Probability Fundamentals",
        "Data Types and Structures",
        "Research Methodology in Data Science"
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: "Python for Data Science",
      duration: "Week 3-4",
      topics: [
        "Python Programming Essentials",
        "NumPy for Numerical Computing",
        "Pandas for Data Manipulation",
        "Matplotlib & Seaborn Visualization"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Data Collection & Processing",
      duration: "Week 5-6",
      topics: [
        "Web Scraping with Beautiful Soup",
        "API Integration and Data Extraction",
        "SQL for Data Analysts",
        "Data Cleaning and Preprocessing"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: "Data Analysis & Visualization",
      duration: "Week 7-8",
      topics: [
        "Exploratory Data Analysis (EDA)",
        "Statistical Analysis Techniques",
        "Advanced Data Visualization",
        "Dashboard Creation with Plotly"
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-red-500" />,
      title: "Machine Learning",
      duration: "Week 9-11",
      topics: [
        "Supervised Learning Algorithms",
        "Unsupervised Learning Techniques",
        "Feature Engineering and Selection",
        "Model Evaluation and Validation"
      ]
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Capstone Projects",
      duration: "Week 12",
      topics: [
        "Real-world Data Science Projects",
        "Portfolio Development",
        "Presentation and Communication",
        "Career Guidance and Job Preparation"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our structured 12-week program takes you from beginner to job-ready data scientist
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl">
                    {module.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {module.title}
                </CardTitle>
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  {module.duration}
                </Badge>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
