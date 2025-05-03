
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-16 md:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Predict ALL Subtypes?
          </h2>
          <p className="text-lg text-muted-foreground">
            Try our tool now with your gene expression data or view a sample prediction to see how it works.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2">
              Start Prediction <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline">
              View Sample Result
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
