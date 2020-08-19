/**
 * exalt-grade
 * @description Boost grades while keeping order
 * @version 1
 * @author adzaria
 */

export {exaltGrade};

/**
 * Checks if the exaltation rate is reasonable
 */
const isExaltationReasonable = (value: number): boolean => {
  
  const isValueBigEnough: boolean = value >= -100;
  const isValueSmallEnough: boolean = value <= 100;
  
  return isValueBigEnough && isValueSmallEnough;
  
}

/**
 * Checks if the given grade is in the given range
 */
const isGradeInRange = (oldGrade: number, minimum: number, maximum: number): boolean => {
  
  const isGradeBigEnough: boolean = oldGrade >= minimum;
  const isGradeSmallEnough: boolean = oldGrade <= maximum;
  
  return isGradeBigEnough && isGradeSmallEnough;
  
}

/**
 * Checks if order is respected between minimum and maximum
 */
const isOrderRespected = (minimum: number, maximum: number): boolean => {
  
  return minimum < maximum;
}

/**
 * Checks if a given value is a number
 */
const isValueNumber = (value: unknown): value is number => {
  
  return typeof value === "number";
}

/**
 * Given 3 points (x1, y1), (x2, y2), (x3, y3), give coefficients a, b and c  so y = ax^2 + bx + c
 */
const getCoefficients = (exaltation: number = 28, minimum: number = 0, maximum: number = 5): { a: number, b: number, c: number } => {
  
  const x1 = minimum;
  const x2 = (maximum - minimum) / 2;
  const x3 = maximum;
  
  const y1 = minimum;
  const y2 = ((maximum - minimum) / 2) + (exaltation / 100) * ((maximum - minimum) / 2);
  const y3 = maximum;
  
  const a = (x1 * (y3 - y2) + x2 * (y1 - y3) + x3 * (y2 - y1)) / ((x1 - x2) * (x1 - x3) * (x2 - x3));
  const b = ((y2 - y1) / (x2 - x1)) - a * (x1 + x2);
  const c = y1 - a * x1 * x1 - b * x1;
  
  return {
    a: a,
    b: b,
    c: c
  };
}

/**
 * @param oldGrade
 * @param exaltation = extra % to give to the average grade, default = 14 (transforms a 2.5 to 3.2)
 * @param minimum default = 0
 * @param maximum default = 5
 */
const exaltGrade = (oldGrade: number, exaltation: number = 28, minimum: number = 0, maximum: number = 5) => {
  
  try {
    
    if(!isValueNumber(oldGrade)) {
      return ({
        status: "error",
        message: "oldGrade must be a number",
      });
    }
    
    if(!isValueNumber(exaltation)) {
      return ({
        status: "error",
        message: "exaltation must be a number",
      });
    }
    
    if(!isValueNumber(minimum)) {
      return ({
        status: "error",
        message: "minimum must be a number",
      });
    }
    
    if(!isValueNumber(maximum)) {
      return ({
        status: "error",
        message: "maximum must be a number",
      });
    }
    
    if(!isExaltationReasonable(exaltation)) {
      return ({
        status: "error",
        message: "exaltation is not in the range [-100; +100]",
      });
    }
    
    if(!isOrderRespected(minimum, maximum)) {
      return ({
        status: "error",
        message: "Given minimum must be inferior to given maximum",
      });
    }
    
    if(!isGradeInRange(oldGrade, minimum, maximum)) {
      return ({
        status: "error",
        message: "Given grade must be in given range [minimum, maximum]",
      });
    }
    
    const {a, b, c} = getCoefficients(exaltation, minimum, maximum);
    
    return {
      status: "ok",
      value: a * oldGrade * oldGrade + b * oldGrade + c
    };
    
  } catch (error) {
    
    throw error;
  }
  
}
