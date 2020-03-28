const setColors = colors => {
  let colorsByRegions = { ...colors };
  if (!colorsByRegions.defaultColors) {
    colorsByRegions.defaultColors = ["#0663AE", "#174272"];
  }
  return region => {
    if (Object.keys(colorsByRegions).includes(region)) {
      return colorsByRegions[region];
    } else {
      return colorsByRegions.defaultColors;
    }
  };
};

let getColorsByRegion;

const setColorsByRegions = colors => {
  getColorsByRegion = setColors(colors);
};

export { getColorsByRegion, setColorsByRegions };
