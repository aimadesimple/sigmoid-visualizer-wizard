
/**
 * Calculate the sigmoid function for a given input
 * σ(x) = 1 / (1 + e^(-x))
 */
export const calculateSigmoid = (x: number): number => {
  return 1 / (1 + Math.exp(-x));
};

/**
 * Calculate the derivative of the sigmoid function
 * σ'(x) = σ(x) * (1 - σ(x))
 */
export const sigmoidDerivative = (x: number): number => {
  const sigmoid = calculateSigmoid(x);
  return sigmoid * (1 - sigmoid);
};
