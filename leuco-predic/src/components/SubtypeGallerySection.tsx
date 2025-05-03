
import { FileText, Heart, Shield, FlaskConical, TestTube, CircleCheck, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const subtypes = [
  {
    name: "B-CELL ALL",
    icon: <FileText className="h-10 w-10" />,
    description: "The most common form of ALL, affecting B-lymphocytes in the bone marrow.",
    treatment: "Standard chemotherapy protocols with targeted therapies."
  },
  {
    name: "B-CELL ALL TCF3-PBX1",
    icon: <Heart className="h-10 w-10" />,
    description: "Features a fusion of TCF3 and PBX1 genes, with distinctive response patterns.",
    treatment: "Intensive chemotherapy with specific fusion protein inhibitors."
  },
  {
    name: "B-CELL ALL HYPERDIP",
    icon: <Shield className="h-10 w-10" />,
    description: "Characterized by hyperdiploid chromosome count (>50), generally favorable prognosis.",
    treatment: "Moderate-intensity chemotherapy with good outcomes."
  },
  {
    name: "B-CELL ALL HYPO",
    icon: <FlaskConical className="h-10 w-10" />,
    description: "Features hypodiploid chromosome count (<44), may be more challenging to treat.",
    treatment: "Intensive therapy often including stem cell transplantation."
  },
  {
    name: "B-CELL ALL MLL",
    icon: <TestTube className="h-10 w-10" />,
    description: "Involves rearrangements in the MLL gene, often seen in infants.",
    treatment: "Specialized infant ALL protocols and targeted therapies."
  },
  {
    name: "B-CELL ALL T-ALL",
    icon: <CircleCheck className="h-10 w-10" />,
    description: "Affects T-lymphocytes instead of B-cells, requires different approach.",
    treatment: "T-cell specific protocols with enhanced CNS directed therapy."
  },
  {
    name: "B-CELL ALL ETV6-RUNX1",
    icon: <Layers className="h-10 w-10" />,
    description: "Features ETV6-RUNX1 gene fusion, typically has favorable outcomes.",
    treatment: "Standard therapy with excellent response rates and survival."
  },
];

const SubtypeGallerySection = () => {
  return (
    <section id="subtype-gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Acute Lymphoblastic Leukemia Subtypes
          </h2>
          <p className="text-muted-foreground text-lg">
            Each ALL subtype has unique genetic characteristics that influence treatment decisions
            and prognosis. Our tool specializes in accurately identifying these subtypes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subtypes.map((subtype, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardHeader className="bg-secondary/50 pb-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {subtype.icon}
                  </div>
                  <CardTitle className="text-lg leading-tight">{subtype.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground mb-4">
                  {subtype.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Treatment Approach:</p>
                  <p className="text-sm text-muted-foreground">{subtype.treatment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubtypeGallerySection;
