
interface MathWorkingsProps {
  inputValue: number;
  result: number;
}

const MathWorkings = ({ inputValue, result }: MathWorkingsProps) => {
  const expValue = Math.exp(-inputValue);
  const denominator = 1 + expValue;

  return (
    <div className="space-y-4 font-mono">
      {/* Formula */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-bold text-gray-800 mb-2">Sigmoid Function Formula:</h3>
        <div className="text-lg text-center">
          <span className="text-blue-600">σ(x) = </span>
          <span className="border-b border-gray-400 px-2">1</span>
          <br />
          <span className="ml-12">1 + e⁻ˣ</span>
        </div>
      </div>

      {/* Step-by-step calculation */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-800">Step-by-step calculation:</h3>
        
        <div className="bg-gray-50 p-3 rounded border">
          <strong>Step 1:</strong> Substitute x = {inputValue}
          <div className="ml-4 mt-1">
            σ({inputValue}) = <span className="border-b border-gray-400 px-2">1</span>
            <br />
            <span className="ml-12">1 + e⁻⁽{inputValue}⁾</span>
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded border">
          <strong>Step 2:</strong> Calculate e⁻⁽{inputValue}⁾
          <div className="ml-4 mt-1">
            e⁻⁽{inputValue}⁾ = e^({-inputValue}) = {expValue.toFixed(6)}
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded border">
          <strong>Step 3:</strong> Calculate denominator
          <div className="ml-4 mt-1">
            1 + e⁻⁽{inputValue}⁾ = 1 + {expValue.toFixed(6)} = {denominator.toFixed(6)}
          </div>
        </div>

        <div className="bg-green-50 p-3 rounded border border-green-200">
          <strong>Step 4:</strong> Final result
          <div className="ml-4 mt-1">
            σ({inputValue}) = <span className="border-b border-gray-400 px-2">1</span> = <span className="border-b border-gray-400 px-2">1</span> = <strong className="text-green-700">{result.toFixed(6)}</strong>
            <br />
            <span className="ml-12">{denominator.toFixed(6)}</span>
            <span className="ml-8">{denominator.toFixed(6)}</span>
          </div>
        </div>
      </div>

      {/* Properties */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-bold text-gray-800 mb-2">Properties:</h3>
        <ul className="text-sm space-y-1">
          <li>• Range: (0, 1) - always between 0 and 1</li>
          <li>• σ(0) = 0.5 - symmetric around the origin</li>
          <li>• σ(-x) = 1 - σ(x) - antisymmetric property</li>
          <li>• As x → ∞, σ(x) → 1</li>
          <li>• As x → -∞, σ(x) → 0</li>
        </ul>
      </div>
    </div>
  );
};

export default MathWorkings;
