
import { DnaIcon, Microscope, Activity } from "lucide-react";

const AboutALLSection = () => {
  const infoCards = [
    {
      icon: <DnaIcon className="h-8 w-8" />,
      title: "What is ALL?",
      description:
        "Acute Lymphoblastic Leukemia (ALL) is a type of cancer that affects the blood and bone marrow. It's characterized by an overproduction of immature white blood cells called lymphoblasts."
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Why Subtyping Matters",
      description:
        "ALL has multiple genetic subtypes that respond differently to treatments. Accurate subtyping leads to tailored therapy plans with improved outcomes and reduced side effects."
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Early Prediction Impact",
      description:
        "Early and accurate subtype prediction can significantly improve treatment efficacy, reduce unnecessary treatments, and increase survival rates by up to 30%."
    }
  ];

  return (
    <section id="about-all" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Understanding Acute Lymphoblastic Leukemia
          </h2>
          <p className="text-muted-foreground text-lg">
            Knowledge is power in the fight against leukemia. Learn why identifying the specific 
            genetic subtype is crucial for effective treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <div 
              key={index}
              className="bg-card shadow-md rounded-xl p-6 border hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutALLSection;
