
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathWorkingsProps {
  inputValue: number;
  result: number;
}

const MathWorkings = ({ inputValue, result }: MathWorkingsProps) => {
  const expValue = Math.exp(-inputValue);
  const denominator = 1 + expValue;

  return (
    <div className="space-y-4">
      {/* Formula */}
      <div className="bg-palette-light-blue/10 p-4 rounded-lg border border-palette-light-blue/30">
        <h3 className="font-bold text-gray-800 mb-2">Sigmoid Function Formula:</h3>
        <div className="text-center">
          <BlockMath math="\sigma(x) = \frac{1}{1 + e^{-x}}" />
        </div>
      </div>

      {/* Step-by-step calculation */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-800">Step-by-step calculation:</h3>
        
        <div className="bg-palette-gray p-3 rounded border">
          <strong>Step 1:</strong> Substitute <InlineMath math={`x = ${inputValue}`} />
          <div className="mt-2 text-center">
            <BlockMath math={`\\sigma(${inputValue}) = \\frac{1}{1 + e^{-(${inputValue})}}`} />
          </div>
        </div>

        <div className="bg-palette-gray p-3 rounded border">
          <strong>Step 2:</strong> Calculate <InlineMath math={`e^{-(${inputValue})}`} />
          <div className="mt-2">
            <InlineMath math={`e^{-(${inputValue})} = e^{${-inputValue}} = ${expValue.toFixed(6)}`} />
          </div>
        </div>

        <div className="bg-palette-gray p-3 rounded border">
          <strong>Step 3:</strong> Calculate denominator
          <div className="mt-2">
            <InlineMath math={`1 + e^{-(${inputValue})} = 1 + ${expValue.toFixed(6)} = ${denominator.toFixed(6)}`} />
          </div>
        </div>

        <div className="bg-palette-green/10 p-3 rounded border border-palette-green/30">
          <strong>Step 4:</strong> Final result
          <div className="mt-2 text-center">
            <BlockMath math={`\\sigma(${inputValue}) = \\frac{1}{${denominator.toFixed(6)}} = ${result.toFixed(6)}`} />
          </div>
        </div>
      </div>

      {/* Properties */}
      <div className="bg-palette-teal/10 p-4 rounded-lg border border-palette-teal/30">
        <h3 className="font-bold text-gray-800 mb-2">Properties:</h3>
        <ul className="text-sm space-y-2">
          <li>• Range: <InlineMath math="(0, 1)" /> - always between 0 and 1</li>
          <li>• <InlineMath math="\sigma(0) = 0.5" /> - symmetric around the origin</li>
          <li>• <InlineMath math="\sigma(-x) = 1 - \sigma(x)" /> - antisymmetric property</li>
          <li>• As <InlineMath math="x \to \infty" />, <InlineMath math="\sigma(x) \to 1" /></li>
          <li>• As <InlineMath math="x \to -\infty" />, <InlineMath math="\sigma(x) \to 0" /></li>
        </ul>
      </div>
    </div>
  );
};

export default MathWorkings;
