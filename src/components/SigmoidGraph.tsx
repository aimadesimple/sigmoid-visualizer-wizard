
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, ReferenceLine } from "recharts";
import { calculateSigmoid } from "@/utils/sigmoidUtils";

interface SigmoidGraphProps {
  inputValue: number;
  result: number;
}

const SigmoidGraph = ({ inputValue, result }: SigmoidGraphProps) => {
  // Calculate dynamic range based on input value
  const getDynamicRange = (input: number) => {
    const absInput = Math.abs(input);
    // Base range is 10, but expand if input is larger
    const baseRange = Math.max(10, absInput + 5);
    return { min: -baseRange, max: baseRange };
  };

  const { min, max } = getDynamicRange(inputValue);

  // Generate data points for the sigmoid curve with dynamic range
  const generateData = () => {
    const data = [];
    const step = (max - min) / 200; // More points for smoother curve
    
    for (let x = min; x <= max; x += step) {
      data.push({
        x: parseFloat(x.toFixed(2)),
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

  // Custom label component for y-axis
  const createYLabel = (value: string) => (props: any) => (
    <text 
      x={props.viewBox.x - 10} 
      y={props.viewBox.y + 4} 
      textAnchor="end" 
      fontSize="12" 
      fill="#6b7280"
      fontFamily="sans-serif"
    >
      {value}
    </text>
  );

  return (
    <div className="space-y-4">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis 
              dataKey="x" 
              type="number" 
              domain={[min, max]}
              stroke="#6b7280"
              fontSize={12}
            />
            <YAxis 
              domain={[0, 1]}
              stroke="transparent"
              fontSize={12}
              tick={false}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Y-axis line at x = 0 */}
            <ReferenceLine 
              x={0} 
              stroke="#6b7280" 
              strokeWidth={2}
            />
            
            {/* Horizontal reference lines for major y-values */}
            <ReferenceLine y={0} stroke="#e0e7ff" strokeDasharray="2 2" strokeWidth={1} />
            <ReferenceLine y={0.5} stroke="#e0e7ff" strokeDasharray="2 2" strokeWidth={1} />
            <ReferenceLine y={1} stroke="#e0e7ff" strokeDasharray="2 2" strokeWidth={1} />
            
            {/* Y-axis labels and tick marks */}
            <ReferenceLine 
              y={0} 
              stroke="transparent" 
              label={createYLabel("0.0")}
            />
            <ReferenceLine 
              y={0.25} 
              stroke="transparent" 
              label={createYLabel("0.25")}
            />
            <ReferenceLine 
              y={0.5} 
              stroke="transparent" 
              label={createYLabel("0.5")}
            />
            <ReferenceLine 
              y={0.75} 
              stroke="transparent" 
              label={createYLabel("0.75")}
            />
            <ReferenceLine 
              y={1} 
              stroke="transparent" 
              label={createYLabel("1.0")}
            />
            
            {/* Small tick marks on y-axis */}
            <ReferenceLine x={0} y={0} stroke="#6b7280" strokeWidth={1} />
            <ReferenceLine x={0} y={0.25} stroke="#6b7280" strokeWidth={1} />
            <ReferenceLine x={0} y={0.5} stroke="#6b7280" strokeWidth={1} />
            <ReferenceLine x={0} y={0.75} stroke="#6b7280" strokeWidth={1} />
            <ReferenceLine x={0} y={1} stroke="#6b7280" strokeWidth={1} />
            
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
        <p className="mt-1 text-xs text-gray-500">
          X-axis range: {min} to {max}
        </p>
      </div>
    </div>
  );
};

export default SigmoidGraph;
