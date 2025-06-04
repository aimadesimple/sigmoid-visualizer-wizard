
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import MathWorkings from "./MathWorkings";
import SigmoidGraph from "./SigmoidGraph";
import { calculateSigmoid } from "@/utils/sigmoidUtils";

const SigmoidCalculator = () => {
  const [inputValue, setInputValue] = useState<string>("0");
  const [result, setResult] = useState<number>(0.5);

  useEffect(() => {
    const numValue = parseFloat(inputValue) || 0;
    setResult(calculateSigmoid(numValue));
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Input Section */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-200">
        <div className="max-w-md mx-auto text-center">
          <Label htmlFor="input-value" className="text-lg font-semibold text-gray-700 block mb-3">
            Enter a number (x):
          </Label>
          <Input
            id="input-value"
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            className="text-lg text-center border-blue-300 focus:border-blue-500"
            placeholder="Enter any real number..."
            step="any"
          />
        </div>
      </Card>

      {/* Result Summary */}
      <Card className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Result</h3>
          <div className="text-3xl font-bold">
            <InlineMath math={`\\sigma(${inputValue || "0"}) = ${result.toFixed(6)}`} />
          </div>
        </div>
      </Card>

      {/* Results Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Mathematical Workings */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Mathematical Working
          </h2>
          <MathWorkings inputValue={parseFloat(inputValue) || 0} result={result} />
        </Card>

        {/* Graph Visualization */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sigmoid Function Graph
          </h2>
          <SigmoidGraph inputValue={parseFloat(inputValue) || 0} result={result} />
        </Card>
      </div>
    </div>
  );
};

export default SigmoidCalculator;
