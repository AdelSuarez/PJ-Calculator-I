class Operation {
    constructor(numUno, numDos, result, operation) {
        this._numUno = numUno;
        this._numDos = numDos;
        this._result = result;
        this._operation = operation;
    }

    get numUno() {
        return this._numUno;
    }

    get numDos() {
        return this._numDos;
    }

    get result() {
        return this._result;
    }

    get operation() {
        return this._operation;
    }

    get todo() {
        return `operacion ${this._numUno}, ${this._numDos} = ${this._result}`;
    }
}