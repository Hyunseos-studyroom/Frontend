interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Benz extends Car {
    door: number,
    stop(): void;
}

const benz : Benz = {
    color : "silver",
    wheels : 4,
    start() {
        console.log("Benz started");
    },
    stop() {
        console.log("Benz stopped");
    },
    door: 2,
}

class Ferrari implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
        this.color = c;
    }
    start() {
        console.log("Ferrari started");
    }
}

const f = new Ferrari("red");
f.start()


interface Car {
    color: string,
    wheels: number,
    start(): void,
}

interface Toy {
    name: string;
    company: string;
}

interface ToyCar extends Toy, Car {
    price: number
}