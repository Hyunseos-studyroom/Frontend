interface User {
    name: string;
    age: number;
}

interface Car {
    name: string;
    color: string;
}

interface Book {
    price: number;
}

const user: User = { name: "a", age: 10};
const car: Car = { name: "bmw", color: "red"}
const book: Book = { price: 3000 }

function showName<T extends { name: string }>(data: T): string {
    return data.name;
}

showName(user);
showName(car);
showName(book);
