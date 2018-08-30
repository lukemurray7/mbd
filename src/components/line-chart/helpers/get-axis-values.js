const getYAxisValue = (num) => {
  switch (true) {
    case (num > 999 && num < 10000): {
      const numStr = num.toString();
      if (numStr.slice(1,2) === '0') return `${numStr.slice(0,1)}k`;
      return `${numStr.slice(0, 1)}.${numStr.slice(1, 2)}k`;
    }
    case (num > 9999 && num < 100000): {
      const numStr = num.toString();
      return `${numStr.slice(0, 2)}k`;
    }
    case (num > 99999): {
      const numStr = num.toString();
      return `${numStr.slice(0, 3)}k`;
    }
    default: {
      return num;
    }
  }
};

export default getYAxisValue;
