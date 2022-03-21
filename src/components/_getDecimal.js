const decimalConverter = (convertingNumber, convertingGoal) => {
  return (
    Math.round((convertingNumber + Number.EPSILON) * convertingGoal) /
    convertingGoal
  ); //to be more specific and to ensure things like 1.005 round correctly, use Number.EPSILON : https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
};

export default decimalConverter;
