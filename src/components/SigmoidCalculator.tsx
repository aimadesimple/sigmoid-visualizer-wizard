
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
      <Card className="p-6 bg-white shadow-lg border-2 border-gray-200">
        <div className="max-w-md mx-auto text-center">
          <Label htmlFor="input-value" className="text-lg font-semibold text-black block mb-3">
            Enter a number (x):
          </Label>
          <Input
            id="input-value"
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            className="text-lg text-center border-2 border-gray-300 focus:border-blue-500"
            placeholder="Enter any real number..."
            step="any"
          />
        </div>
      </Card>

      {/* Enhanced Result Summary */}
      <Card className="p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden" style={{ backgroundColor: '#55B685' }}>
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <span className="text-2xl">📊</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 tracking-wide">Sigmoid Result</h3>
          
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-extrabold mb-2 drop-shadow-lg">
              <InlineMath math={`\\sigma(${inputValue || "0"}) = ${result.toFixed(6)}`} />
            </div>
            <div className="text-lg opacity-90 font-medium">
              Input: {inputValue || "0"} → Output: {result.toFixed(6)}
            </div>
          </div>
          
          {/* Progress indicator showing the sigmoid value */}
          <div className="mt-6">
            <div className="text-sm opacity-80 mb-2">Sigmoid Range (0 to 1)</div>
            <div className="w-full bg-white/20 rounded-full h-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/60 rounded-full"></div>
              <div 
                className="bg-white h-full rounded-full transition-all duration-500 relative z-10 shadow-lg" 
                style={{ width: `${result * 100}%` }}
              ></div>
              <div 
                className="absolute top-0 w-1 h-3 bg-yellow-300 shadow-lg transition-all duration-500" 
                style={{ left: `${result * 100}%`, transform: 'translateX(-50%)' }}
              ></div>
            </div>
            <div className="flex justify-between text-xs opacity-70 mt-1">
              <span>0.0</span>
              <span>0.5</span>
              <span>1.0</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Results Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Mathematical Workings */}
        <Card className="p-6 bg-white shadow-lg border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-black mb-4">
            Mathematical Working
          </h2>
          <MathWorkings inputValue={parseFloat(inputValue) || 0} result={result} />
        </Card>

        {/* Graph Visualization */}
        <Card className="p-6 bg-white shadow-lg border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-black mb-4">
            Sigmoid Function Graph
          </h2>
          <SigmoidGraph inputValue={parseFloat(inputValue) || 0} result={result} />
        </Card>
      </div>
    </div>
  );
};

export default SigmoidCalculator;
