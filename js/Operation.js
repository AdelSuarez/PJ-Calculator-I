class Operation {
    constructor(num1, num2, result, operation) {
        this._num1 = num1;
        this._num2 = num2;
        this._result = result;
        this._operation = operation;
    }

    get num1() {
        return this._num1;
    }

    get num2() {
        return this._num2;
    }

    get result() {
        return this._result;
    }

    get operation() {
        return this._operation;
    }

    get todo() {
        return `operacion ${this._num1}, ${this._num2} = ${this._result}`;
    }
}