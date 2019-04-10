export const numberizePixels = (value) => {
  return ~~value.substr(0, value.length - 2);
};

export const numberizeRem = (value) => {
  return ~~value.substr(0, value.length - 1);
};

export const numberizePercentage = (value) => {
  return ~~value.substr(0, value.length - 1);
};

export const trimUnits = (value, units) => {
  return ~~value.substr(0, value.length - units.length);
};