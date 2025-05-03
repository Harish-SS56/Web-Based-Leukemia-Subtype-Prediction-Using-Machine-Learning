
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const subtypes = [
  {
    id: "aml",
    name: "Acute Myeloid Leukemia (AML)",
    description: "AML is a cancer of the myeloid line of blood cells, characterized by the rapid growth of abnormal white blood cells that build up in the bone marrow and interfere with the production of normal blood cells.",
    symptoms: ["Fatigue and weakness", "Shortness of breath", "Pale skin", "Frequent infections", "Unusual bleeding or bruising", "Weight loss"],
    treatment: "Treatment typically involves chemotherapy in two phases: induction therapy to achieve remission, followed by consolidation therapy. Stem cell transplantation may be considered for eligible patients."
  },
  {
    id: "all",
    name: "Acute Lymphoblastic Leukemia (ALL)",
    description: "ALL is a cancer of the lymphoid line of blood cells characterized by the development of large numbers of immature lymphocytes. It affects both children and adults, although it is the most common childhood cancer.",
    symptoms: ["Fatigue", "Fever", "Bone and joint pain", "Easy bruising or bleeding", "Enlarged lymph nodes", "Frequent infections"],
    treatment: "Treatment typically involves long-term chemotherapy regimens, sometimes with radiation therapy. Targeted therapy and CAR-T cell therapy are newer approaches being used for certain types of ALL."
  },
  {
    id: "cml",
    name: "Chronic Myeloid Leukemia (CML)",
    description: "CML is a cancer of the white blood cells characterized by increased and unregulated growth of myeloid cells in the bone marrow and their accumulation in the blood. It is associated with a genetic abnormality called the Philadelphia chromosome.",
    symptoms: ["Fatigue", "Weight loss", "Night sweats", "Abdominal discomfort due to an enlarged spleen", "Easy bleeding"],
    treatment: "Treatment primarily involves targeted therapy with tyrosine kinase inhibitors (TKIs) such as imatinib, dasatinib, or nilotinib. Stem cell transplantation may be an option for some patients."
  },
  {
    id: "cll",
    name: "Chronic Lymphocytic Leukemia (CLL)",
    description: "CLL is a cancer of the lymphocytes (a type of white blood cell) characterized by the progressive accumulation of functionally incompetent lymphocytes. It mainly affects older adults and is the most common type of leukemia in Western countries.",
    symptoms: ["Painless swelling of lymph nodes", "Fatigue", "Night sweats", "Weight loss", "Frequent infections", "Easy bruising"],
    treatment: "For many patients with early-stage CLL, treatment may not be necessary immediately (watch and wait approach). When needed, treatment may include chemotherapy, targeted therapy, immunotherapy, or a combination of these approaches."
  }
];

const LeukemiaInfoSection = () => {
  return (
    <section id="leukemia-info" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Understanding Leukemia Subtypes
          </h2>
          <p className="text-muted-foreground text-lg">
            Leukemia is not a single disease but a group of blood cancers with distinct characteristics. 
            Accurate subtype classification is crucial for effective treatment.
          </p>
        </div>

        <Tabs defaultValue="aml" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {subtypes.map((subtype) => (
                <TabsTrigger key={subtype.id} value={subtype.id} className="text-sm md:text-base">
                  {subtype.name.split('(')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {subtypes.map((subtype) => (
            <TabsContent key={subtype.id} value={subtype.id}>
              <Card className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{subtype.name}</h3>
                    <p className="text-muted-foreground mb-6">{subtype.description}</p>
                    
                    <h4 className="text-lg font-semibold mb-3 text-primary">Common Symptoms</h4>
                    <ul className="list-disc list-inside space-y-1 mb-6 text-muted-foreground">
                      {subtype.symptoms.map((symptom, i) => (
                        <li key={i}>{symptom}</li>
                      ))}
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-primary">Treatment Approaches</h4>
                    <p className="text-muted-foreground">{subtype.treatment}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">{subtype.name} Cell Illustration</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default LeukemiaInfoSection;
