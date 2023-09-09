
class Calculator {
    calcPercent = (originalPrice: number, overwritePrice: number) => {
        // method to calculate percent of price difference 
        return Number((((originalPrice - overwritePrice) / originalPrice) * 100).toFixed(1))
    }
};

const calculator = new Calculator();
export default calculator;