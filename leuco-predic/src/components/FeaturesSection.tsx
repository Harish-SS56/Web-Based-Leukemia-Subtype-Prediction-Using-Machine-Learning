
import { 
  BarChart3, 
  FileText, 
  Lock, 
  Activity, 
  Clock, 
  Database 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Accurate Predictions",
    description: "Advanced machine learning algorithms trained on thousands of patient records for high accuracy prediction."
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Secure & Private",
    description: "HIPAA compliant platform with enterprise-grade security for patient data protection."
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Detailed Reports",
    description: "Comprehensive reports with subtype probability distribution and confidence metrics."
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Evidence-Based",
    description: "Model trained on clinically validated datasets with peer-reviewed methodologies."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Rapid Results",
    description: "Get prediction results in seconds, expediting the diagnostic process."
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Data Integration",
    description: "Seamlessly integrates with hospital EMR systems and laboratory databases."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Advanced Features for Medical Professionals
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform combines cutting-edge AI with clinically validated methodologies
            to deliver accurate leukemia subtype predictions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-card transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
