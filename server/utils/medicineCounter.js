export const convertToPieces = (quantity, unit, conversionRates) => {
    switch (unit) {
      case 'box':
        return quantity * conversionRates.boxToPieces;
      case 'carton':
        return quantity * conversionRates.boxToPieces * conversionRates.cartonToBoxes;
      default:
        return quantity; // assume 'piece'
    }
  };
  
  export const convertFromPieces = (quantity, unit, conversionRates) => {
    switch (unit) {
      case 'box':
        return quantity / conversionRates.boxToPieces;
      case 'carton':
        return quantity / (conversionRates.boxToPieces * conversionRates.cartonToBoxes);
      default:
        return quantity; // assume 'piece'
    }
  };
  