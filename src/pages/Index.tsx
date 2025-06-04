
import SigmoidCalculator from "@/components/SigmoidCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Sigmoid Function Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Explore the mathematics behind the sigmoid activation function
          </p>
        </div>
        <SigmoidCalculator />
      </div>
    </div>
  );
};

export default Index;
