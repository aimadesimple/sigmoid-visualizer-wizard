
import SigmoidCalculator from "@/components/SigmoidCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-palette-green">Sigmoid</span>{" "}
            <span className="text-black">Function</span>{" "}
            <span className="text-palette-light-blue">Calculator</span>
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
