
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              ALL Subtype Prediction
            </h1>
            <p className="text-xl text-muted-foreground">
              Advanced AI-powered platform helping physicians diagnose Acute Lymphoblastic Leukemia subtypes with precision and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Button
  size="lg"
  className="gap-2"
  onClick={() => window.location.href = "http://127.0.0.1:5000"}
>
  Try Prediction Tool <ArrowRight size={16} />
</Button>

              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-muted-foreground text-sm">
                Trusted by leading medical institutions worldwide
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl opacity-50 rounded-full"></div>
            <div className="bg-card shadow-xl rounded-2xl border overflow-hidden">
              <div className="p-4 border-b bg-muted/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-sm font-medium">Prediction Interface</div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="h-2 bg-muted rounded-full animate-pulse-slow w-4/5"></div>
                  <div className="h-2 bg-muted rounded-full animate-pulse-slow w-3/4"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">78%</div>
                    <div className="text-xs text-muted-foreground">B-CELL ALL</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">16%</div>
                    <div className="text-xs text-muted-foreground">ETV6-RUNX1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
