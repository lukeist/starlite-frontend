import React from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

const defaultMaskOptions = {
  prefix: "$",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 9, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

const CurrencyInput = ({ maskOptions, ...inputProps }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return <MaskedInput mask={currencyMask} {...inputProps} />;
};

CurrencyInput.defaultProps = {
  inputMode: "numeric",
  maskOptions: {},
};

CurrencyInput.propTypes = {
  inputmode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    // includeThousandsSeparator: PropTypes.boolean,
    thousandsSeparatorSymbol: PropTypes.string,
    // allowDecimal: PropTypes.boolean,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    // requireDecimal: PropTypes.boolean,
    // allowNegative: PropTypes.boolean,
    // allowLeadingZeroes: PropTypes.boolean,
    integerLimit: PropTypes.number,
  }),
};

export default CurrencyInput;

// import React, { useEffect, useState } from "react";
// import MaskedInput from "react-text-mask";
// import createNumberMask from "text-mask-addons/dist/createNumberMask";

// const defaultMaskOptions = {
//   prefix: "$",
//   allowDecimal: true,
//   decimalSymbol: ".",
//   decimalLimit: 2, // how many digits allowed after the decimal
//   integerLimit: 7, // limit length of integer numbers
//   allowNegative: false
// };

// const CurrencyInput = ({ ...inputProps }) => {
//   const currencyMask = createNumberMask(defaultMaskOptions);
//   return <MaskedInput mask={currencyMask} {...inputProps} />;
// };

// const App = () => {
//   const [amount, setAmount] = useState("");

//   useEffect(() => {
//     console.log(amount);
//   }, [amount]);

//   return (
//     <CurrencyInput
//       placeholder="$0.00"
//       onChange={(e) => setAmount(e.target.value)}
//     />
//   );
// };

// export default App;
