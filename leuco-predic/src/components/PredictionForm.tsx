
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { AlertCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const PredictionForm = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<null | {
    predictedType: string;
    confidence: number;
    probabilities: { type: string; value: number }[];
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock result
      const mockResult = {
        predictedType: "AML",
        confidence: 0.87,
        probabilities: [
          { type: "AML", value: 0.87 },
          { type: "ALL", value: 0.09 },
          { type: "CML", value: 0.03 },
          { type: "CLL", value: 0.01 }
        ]
      };
      
      setResults(mockResult);
      setLoading(false);
      toast.success("Prediction completed successfully!", {
        description: "Leukemia subtype prediction results are ready for review."
      });
    }, 2500);
  };

  const resetForm = () => {
    setResults(null);
    toast.info("Prediction form has been reset.");
  };

  return (
    <section id="prediction" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Leukemia Subtype Prediction Tool
          </h2>
          <p className="text-muted-foreground text-lg">
            Enter patient data to receive an AI-powered leukemia subtype prediction. 
            The more complete information you provide, the more accurate the prediction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Patient Data Input</CardTitle>
              <CardDescription>
                Enter blood test results and cytometry data for analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patientId">Patient ID</Label>
                    <Input id="patientId" placeholder="Enter patient ID" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patientAge">Patient Age</Label>
                    <Input id="patientAge" type="number" min="0" max="120" placeholder="Age" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wbc">WBC Count (×10⁹/L)</Label>
                    <Input id="wbc" type="number" step="0.01" placeholder="e.g. 15.2" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rbc">RBC (×10¹²/L)</Label>
                    <Input id="rbc" type="number" step="0.01" placeholder="e.g. 4.2" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hgb">Hemoglobin (g/dL)</Label>
                    <Input id="hgb" type="number" step="0.1" placeholder="e.g. 12.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plt">Platelets (×10⁹/L)</Label>
                    <Input id="plt" type="number" step="1" placeholder="e.g. 150" />
                  </div>
                </div>

                <div>
                  <Label>Blast Percentage in Bone Marrow</Label>
                  <div className="pt-2 pb-4">
                    <Slider defaultValue={[20]} max={100} step={1} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cytogenetics">Cytogenetic Abnormalities</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select if applicable" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="t(9;22)">t(9;22) Philadelphia chromosome</SelectItem>
                      <SelectItem value="t(15;17)">t(15;17)</SelectItem>
                      <SelectItem value="t(8;21)">t(8;21)</SelectItem>
                      <SelectItem value="inv(16)">inv(16)</SelectItem>
                      <SelectItem value="normal">Normal karyotype</SelectItem>
                      <SelectItem value="complex">Complex karyotype</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="molecular">Molecular Markers</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select if applicable" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flt3">FLT3 mutation</SelectItem>
                      <SelectItem value="npm1">NPM1 mutation</SelectItem>
                      <SelectItem value="cebpa">CEBPA mutation</SelectItem>
                      <SelectItem value="idh1">IDH1/IDH2 mutation</SelectItem>
                      <SelectItem value="runx1">RUNX1 mutation</SelectItem>
                      <SelectItem value="tp53">TP53 mutation</SelectItem>
                      <SelectItem value="none">None detected</SelectItem>
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <textarea
                    id="additionalNotes"
                    rows={3}
                    className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Any additional clinical information..."
                  ></textarea>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={resetForm} disabled={loading}>
                Reset
              </Button>
              <Button onClick={handleSubmit} disabled={loading}>
                {loading ? "Processing..." : "Generate Prediction"}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prediction Results</CardTitle>
              <CardDescription>
                AI-generated leukemia subtype prediction based on patient data
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex flex-col items-center justify-center h-80 space-y-4">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-muted-foreground">Analyzing patient data...</p>
                </div>
              ) : results ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold">Predicted Subtype</h3>
                    <div className="text-4xl font-bold text-primary mt-2">{results.predictedType}</div>
                    <p className="text-muted-foreground mt-1">
                      Confidence: {Math.round(results.confidence * 100)}%
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Probability Distribution</h4>
                    <div className="space-y-3">
                      {results.probabilities.map((item) => (
                        <div key={item.type} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{item.type}</span>
                            <span className="font-medium">{Math.round(item.value * 100)}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${item.value * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      This prediction is a diagnostic aid and should be used in conjunction with clinical judgment. 
                      Further laboratory testing is recommended to confirm the diagnosis.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-80 text-center space-y-4 text-muted-foreground">
                  <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center">
                    <AlertCircle className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="mb-2">No predictions generated yet</p>
                    <p className="text-sm">Complete the form on the left and click "Generate Prediction"</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PredictionForm;
