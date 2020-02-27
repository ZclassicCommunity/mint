import SLPSDK from "slp-sdk";

export const getRestUrl = () =>
  process.env.REACT_APP_NETWORK === `mainnet`
    ? window.localStorage.getItem("restAPI") || `https://rest.zslp.org/v2/`
    : window.localStorage.getItem("restAPI") || `https://trest.zslp.org/v2/`;

export default callback => {
  const SLPInstance = new SLPSDK({
    restURL: getRestUrl()
  });

  return (...args) => callback(SLPInstance, ...args);
};
