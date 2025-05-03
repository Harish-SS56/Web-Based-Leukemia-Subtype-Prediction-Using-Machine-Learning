
import { Circle, Upload, Database, LineChart, BookOpen } from "lucide-react";

const steps = [
  {
    icon: <Upload className="h-8 w-8" />,
    number: "01",
    title: "Submit Gene Data",
    description: "Securely upload or paste your patient's gene expression data from standard microarray or RNA-seq platforms."
  },
  {
    icon: <Database className="h-8 w-8" />,
    number: "02",
    title: "ML Processing",
    description: "Our machine learning model analyzes the expression patterns across key genomic markers specific to ALL subtypes."
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    number: "03",
    title: "Subtype Classification",
    description: "The system identifies the most likely ALL subtype from the seven major classes with confidence scores."
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    number: "04",
    title: "Treatment Guidance",
    description: "Receive subtype-specific treatment recommendations based on current clinical guidelines and research."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            How Our Tool Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform uses state-of-the-art machine learning to analyze gene expression data
            and predict ALL subtypes with high accuracy.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-muted -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} relative`}>
                  <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 items-center justify-center">
                    <Circle className={`h-8 w-8 ${index % 2 === 0 ? '-left-4' : '-right-4'} absolute text-primary fill-background`} />
                    <Circle className="h-4 w-4 absolute text-primary fill-primary" />
                  </div>
                  <div className="bg-card shadow-md rounded-xl p-6 md:mx-8 border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <div className="inline-block text-sm font-bold text-primary">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} hidden md:block`}>
                  {/* Step illustration */}
                  <div className="h-48 bg-muted/30 rounded-xl flex items-center justify-center border border-muted">
                    <p className="text-muted-foreground">Step {parseInt(step.number)} Illustration</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
