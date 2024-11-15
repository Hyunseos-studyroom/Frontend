interface Car {
    name: string;
    start(): void;
}

interface Toy {
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy & Car = {
    name: "ToyCar",
    start: () => console.log("ToyCar started"),
    color: "Red",
    price: 10000,
}