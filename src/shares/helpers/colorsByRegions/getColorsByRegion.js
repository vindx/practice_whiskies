import colors from "./colors";

const setupColorsByRegions = colors => region => {
  const defaultColor = ["#0663AE", "#174272"];

  if (Object.keys(colors).includes(region)) {
    return colors[region];
  } else {
    return defaultColor;
  }
};

const getColorByRegion = setupColorsByRegions(colors);
export default getColorByRegion;
