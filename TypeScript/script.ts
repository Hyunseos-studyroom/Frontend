abstract class Car {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
    abstract drive(): void;
}

class Bmw extends Car {
    constructor(color: string) {
        super(color);
    }
}

const z4 = new Bmw("Black");