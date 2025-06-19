
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import CurriculumSection from "@/components/CurriculumSection";
import TrainerProfile from "@/components/TrainerProfile";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const courses = [
    {
      title: "Complete Data Science Bootcamp",
      description: "Comprehensive 12-week program covering everything from Python basics to advanced machine learning algorithms.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      students: 350,
      rating: 4.9,
      price: "$2,499",
      features: [
        "Live interactive sessions",
        "Hands-on projects",
        "1-on-1 mentorship",
        "Job placement assistance",
        "Lifetime access to materials"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Machine Learning Specialist",
      description: "Deep dive into ML algorithms, feature engineering, and model deployment with real-world projects.",
      duration: "8 weeks",
      level: "Intermediate",
      students: 120,
      rating: 4.8,
      price: "$1,799",
      features: [
        "Advanced ML algorithms",
        "Model deployment on cloud",
        "Industry case studies",
        "Kaggle competition prep",
        "Certificate of completion"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Python for Data Analysis",
      description: "Master Python programming specifically for data science applications and statistical analysis.",
      duration: "6 weeks",
      level: "Beginner",
      students: 280,
      rating: 4.7,
      price: "$999",
      features: [
        "Python fundamentals",
        "Pandas & NumPy mastery",
        "Data visualization",
        "Statistical analysis",
        "Portfolio projects"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Courses Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner-friendly introductions to advanced specializations, we have the perfect course for your career goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>
      
      <CurriculumSection />
      <TrainerProfile />
      <ContactSection />
    </div>
  );
};

export default Index;
