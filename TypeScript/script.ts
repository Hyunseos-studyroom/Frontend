interface User {
    name: string;
    age: number;
}

function join(name: string, age: number) : User;
function join(name: string, age: string) : string;
function join(name:string, age: number | string): User | string {
    if (typeof age === 'number') {
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력하세요."
    }
}

const sam : User = join("Sam", 30);
const jane : string = join("Jane", "30");