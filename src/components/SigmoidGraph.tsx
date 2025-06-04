
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from "recharts";
import { calculateSigmoid } from "@/utils/sigmoidUtils";

interface SigmoidGraphProps {
  inputValue: number;
  result: number;
}

const SigmoidGraph = ({ inputValue, result }: SigmoidGraphProps) => {
  // Generate data points for the sigmoid curve
  const generateData = () => {
    const data = [];
    for (let x = -10; x <= 10; x += 0.2) {
      data.push({
        x: parseFloat(x.toFixed(1)),
        y: calculateSigmoid(x),
      });
    }
    return data;
  };

  const data = generateData();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{`x = ${label}`}</p>
          <p className="text-blue-600">{`σ(x) = ${payload[0].value.toFixed(4)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis 
              dataKey="x" 
              type="number" 
              domain={[-10, 10]}
              stroke="#6b7280"
              fontSize={12}
            />
            <YAxis 
              domain={[0, 1]}
              stroke="#6b7280"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="y" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: "#3b82f6" }}
            />
            {/* Highlight the current input point */}
            <ReferenceDot 
              x={inputValue} 
              y={result} 
              r={8} 
              fill="#ef4444" 
              stroke="#dc2626"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-center text-sm text-gray-600">
        <p>
          <span className="inline-block w-3 h-3 bg-blue-500 rounded mr-2"></span>
          Sigmoid function curve
        </p>
        <p className="mt-1">
          <span className="inline-block w-3 h-3 bg-red-500 rounded mr-2"></span>
          Your input point: ({inputValue.toFixed(2)}, {result.toFixed(4)})
        </p>
      </div>
    </div>
  );
};

export default SigmoidGraph;
