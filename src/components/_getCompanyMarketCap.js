import numberWithCommas from "./_getCommasAsThousandsSeparators ";

const companyMarketCap = (company) => {
  const million = "M";
  const billion = "B";
  const marketCapLength = Math.round(company.marketCapitalization).toString()
    .length;
  const marketCapMillion = Math.round(company.marketCapitalization) + million;
  const marketCapBillion =
    +(Math.round((company.marketCapitalization * 100) / 1000) + "e-2") +
    billion;
  const marketCapTrillion =
    numberWithCommas(Math.round(company.marketCapitalization)).slice(0, -4) +
    billion;

  //   marketCapLength > 3
  //     ? marketCapLength > 6
  //       ? marketCapTrillion
  //       : marketCapBillion
  //     : marketCapMillion;

  if (marketCapLength > 3) {
    return marketCapBillion;
  } else if (marketCapLength > 6) {
    return marketCapTrillion;
  } else {
    return marketCapMillion;
  }
};

export default companyMarketCap;
