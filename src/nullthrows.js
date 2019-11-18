const nullthrows = function<T>(
    x: ?T,
    message?: string = 'Got unexpected null or undefined',
  ): T {
    if (x != null) {
      return x;
    }
    const error: Error & {framesToPop?: number} = new Error(message);
    error.framesToPop = 1; // Skip nullthrows own stack frame.
    throw error;
  };
  
  module.exports = nullthrows;
  