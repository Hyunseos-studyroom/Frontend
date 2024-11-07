let a:string = "hello";
let b: number = 123;
let c: boolean = true;
// 기본 타입
let d: any = "world";
let e: any[] = [1, 2, 3];

let f: object = { name: "John", age: 30 };
f.name = "John";
// f가 object형이라고만 명시되어 있어 name라는 속성이 없을 수 도 있으니 오류가 발생함

let g : {
    name: string,
    age?: number,
} = {
    name: "John",
}

if (g.age < 10) {

}
if (g.age && g.age < 10) {

}

type Age = number
type Player = {
    name: string,
    age?: Age,
}

const playerHyunseo : Player = {
    name: "Hyunseo",
    age: 25,
}

function playerMaker(name: string): Player {
    return {
        name
    }
}

const playerMaker = (name: string) : Player => ({name})
const nico = playerMaker("Nico")
nico.age = 12