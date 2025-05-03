
import { Heart } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">ALL-Predict</span>
            </div>
            <p className="text-muted-foreground">
              Advanced AI-powered ALL subtype prediction platform for precision medicine.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Home</a></li>
              <li><a href="#about-all" className="text-muted-foreground hover:text-foreground">About ALL</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</a></li>
              <li><a href="#subtype-gallery" className="text-muted-foreground hover:text-foreground">Subtypes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} ALL-Predict. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-accent" /> for healthcare professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
