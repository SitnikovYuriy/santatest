class Strategy {
  constructor(formula, ...params) {
    this.formula = formula;
    this.params = params;
  }

  calculate(precision = 2) {
    return round(this.formula(...this.params.map(i => i.value)), precision);
  }
}

function round(num, precision) {
  const dirtyPrecision = 10;
  const multiply = Math.pow(10, precision);
  return Math.ceil(+num.toFixed(dirtyPrecision) * multiply) / multiply;
}

class InputParam {
  constructor(name, type, value = null) {
    this.name = name;
    this.type = type;
    this.value = value;
  }
}

export const InputParamTypes = {
  CURRENCY: "CURRENCY",
  PERCENT: "PERCENT",
  INTEGER: "INTEGER"
};

function factor(param) {
  return 1 + param / 100;
}

export class SimpleStrategy extends Strategy {
  constructor() {
    super(
      (V, F) => V * factor(F),
      new InputParam("V", InputParamTypes.CURRENCY),
      new InputParam("F", InputParamTypes.PERCENT)
    );
  }
}

export class AveragingStrategy extends Strategy {
  constructor() {
    super(
      (V, F, N) => V * factor(F) * (N + 1),
      new InputParam("V", InputParamTypes.CURRENCY),
      new InputParam("F", InputParamTypes.PERCENT),
      new InputParam("N", InputParamTypes.INTEGER)
    );
  }
}

export class ArbitrageStrategy extends Strategy {
  constructor() {
    super(
      (V, F, F1, F2) => V * factor(F) * factor(F1) * factor(F2),
      new InputParam("V", InputParamTypes.CURRENCY),
      new InputParam("F", InputParamTypes.PERCENT),
      new InputParam("F1", InputParamTypes.PERCENT),
      new InputParam("F2", InputParamTypes.PERCENT)
    );
  }
}
