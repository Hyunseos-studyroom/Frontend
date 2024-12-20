# 기본타입
```typescript
let age: number = 30;
let isAdult:boolean = true;
let a:number[] = [1, 2, 3];
let a2:Array<number> = [1, 2, 3];

let week1:string[] = ["month", "year", "day"];
let week2:Array<string> = ["month", "year", "day"];
```
이렇게 기본 타입들을 선언할 수 있고,
```typescript
week1.push(3)
```
위에서 week1을 `string[]`으로 선언하였기 때문에 `number`를 넣으면 오류가 난다.
```typescript
let b:[string, number];

b = ['z', 1];

b[0].toLowerCase()
```
이렇게 배열형식으로 사용해서 튜플을 만들 수 있다.
```typescript
function sayHello(): void {
    console.log("Hello!")
}

function infLoop(): never {
    while (true) {
        // Infinite loop
    }
}

function throwError(): never {
    throw new Error("An error occurred");
}
```
함수가 아무것도 반환하지 않을때는 `void` 에러나 무한루프면 `never`을 사용한다.

```typescript
enum PC{
    Window,
    MacOS,
    Android
}

console.log(PC['MacOS']) // 1
console.log(PC[1]) // MacOS
```
`enum`은 자동으로 값을 치환해줌
```typescript
enum PC{
    Window=7,
    MacOS,
    Android
}
```
이렇게 되면 순차적으로 값이 들어가기 때문에 `MacOS`는 `8`, `Android`는 `9`가 됨
```typescript
enum Phone {
    Android = 'and',
    Ios = 'ios',
}

let myPhone:Phone;
myPhone = Phone.Ios;
```
`string`도 `enum`에서 사용할 수 있음
```typescript
let kkk = undefined;
let ggg = null;
```
`undefined`는 말그대로 타입이 정의되지 않은 것 이고, `null`은 비었다는 뜻이다.

# 인터페이스
```typescript
let user:object;

user = {
    name: 'xx',
    age: 30,
}

console.log(user.name);
```
오브젝트는 `object`형으로 선언할 수 있다. 하지만 `object`안에 값을 이야기를 선언하지 않아서 직접 사용할 수 없다.

```typescript
type Score = 'A' | 'B' | 'C' | 'D' | 'E';

interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear : number;
    [grade:number] : Score;
}

let user : User = {
    name: 'xx',
    age: 30,
    birthYear : 2000,
    1:'A',
    2:'B',
    3:'C',
}

user.age = 10
user.gender = 'Poclain'

console.log(user.name);
```
`interface`를 사용해서 `object`안에 데이터의 타입을 선언할 수 있다.<br>
모든 객체에서 필요하지 않은 값은 `key?` 뒤에 `?`을 적어서 `optional`하게 할 수 있다.<br>
`readonly`를 적어 읽기 전용으로 사용할 수 있다.<br>
`type`을 사용해서 리터럴을 정해줄 수 있다.<br>
`[key:type] : type`으로 `map`을 사용할 수 있다.

```typescript
interface Add {
    (num1:number, num2:number): number;
}

const add : Add = function (x, y) {
    return x + y;
}
```
`interface`를 사용해서 함수를 정의 할 수 있다.<br>
`(매개변수:type) : 반환타입`이런식으로 `interface`를 선언할 수 있다.

```typescript
interface Car {
    color: string;
    wheels: number;
    start(): void;
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
```
`interface`를 사용해 `class`를 만들 수 있다.
```typescript
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
```
`extends`를 사용해서 `interface`를 사용해 새로운 `interface`를 만들 수 있다.

```typescript
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
```
두개의 `interface`를 `extends`해서 새로운 `interface`를 만들 수도 있다.

# 함수
```typescript
function hello(name?: string) {
    return `Hello ${name || "world"}`
}

function hello2(name = "world") {
    return `Hello ${name}`
}

const result = hello();
const result2 = hello2();
```
함수도 `optional`이 가능하다. 마찬가지로 `?`를 적어주면 됨

```typescript
function hello(age?:number, name:string): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}.`
    } else {
        return `Hello, ${name}`
    }
}
```
`optional`한 매개변수를 앞에 쓰면 안됨

```typescript
function add(...nums:number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

add(1, 2, 3, 4, 5);
```
나머지 매개변수도 결국엔 배열형이니까 배열을 매개변수의 타입으로 지정한다.

```typescript
interface User {
    name: string;
}

const Sam: User = {name: "Sam"};

function showName(this:User){
    console.log(this.name)
}

const a = showName.bind(Sam);
a(); // Sam
```
`this`의 타입은 매개변수가 있어도 가장 앞에 적어주면 된다. ~~`event`도 마찬가지이지 않을까..~~

```typescript
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
```
타입에 대해서 동기처리를 해주어도 매개변수와 리턴 타입이 확정된 것이 아니기 때문에 함수를 오버로드 해주어야한다.

# 리터럴, 유니온/교차 타입
```typescript
const userName1 = "Bob";
let userName2 = "Tom";

type Job = "police" | "developer" | "teacher";

interface User {
    name : string;
    job: Job;
}

const user : User = {
    name : "Bob",
    job: "developer"
}
```
리터럴은 문자 그 자체라는 뜻이다. 변수의 값이 값 그대로 이런거

```typescript
interface Car {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    if (gift.name === "car") {
        gift.start()
    } else {
        gift.call()
    }
}
```
유니온 타입(Union Type)이란 자바스크립트의 OR 연산자(||)와 같이 A이거나 B이다 라는 의미의 타입이다.<br>
그래서 둘다 `color`를 가지고있어서 확인을 안해줘도 사용할 수 있지만 각각의 인터페이스가 다르게 가지고 있는 타입은 확인을 해줘야한다.

```typescript
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
```
교차타입은 여러개의 타입을 하나로 묶어주는 것 이다.<br>
즉 유니온은 `or`, 교차는 `and`이다.

# 클래스
```typescript
class Car {
    // color: string;
    constructor(public color: string){
        this.color = color;
    }
    start() {
        console.log('start');
    }
}

const bmw = new Car("red");
```
타입스크립트에서 클래스에 매개변수를 사용하려면 무조건 위에서 선언을 해주거나 `public`, `readonly`를 앞에 붙여줘야한다.

```typescript
class Car {
    private name: string = "Car";
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
}
```
`private`를 사용하면 자식객체에서 사용할 수 없게된다.

```typescript
class Car {
    protected name: string = "Car";
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
}
```
`protected`는 자식클래스에선 참조할 수 있으나 다른 곳에서 참조할 수 없다.

| 참조 | public | private | protected |
|----|--------|---------|-----------|
| 부모 | O      | O       | O         |
| 자식 | O      | X       | O         |
| 변수 | O      | X       | X         |

```typescript
class Car {
    protected name: string = "Car";
    color: string;
    static wheels = 4;
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
        console.log(Car.wheels)
    }
}
```
`static`은 정적 타입이기 때문에 본인에서도 `this`가 아닌 클래스명을 적어야한다.

```typescript
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
    drive() {
        console.log("drvie");
    }
}
```
`abstract`를 사용하면 추상화를 할 수 있다.<br>
추상화는 추상적으로 클래스를 선언하고, 자식 클래스에서 각 property에서 구현을 해줘야한다

# 제네릭
```typescript
function getSize<T>(arr: T[]): number {
    return arr.length;
}

const arr = [1,2,3];
getSize<number>(arr);

const arr2 = ["a","b","c"]
getSize<string>(arr2);
```
만약 들어오는 파라미터의 타입이 계속 바뀌면 제네릭 타입을 써주면 된다.<br>
`<타입>(파라미터: 타입)`이렇게 적어주면 함수를 호출하는 쪽에서 파라미터의 타입을 정해줄 수 있다.

```typescript
interface Mobile<T> {
    name: string;
    price: number;
    option: T;
}

const m1: Mobile<string> = {
    name: 'iPhone 12',
    price: 1000000,
    option: 'A15 Bionic',
}

const m2: Mobile<object> = {
    name: 'Samsung Galaxy S21',
    price: 800000,
    option: {
        screenSize: '6.7 inch',
        camera: '12 MP',
    },
}
```
`interface`에서도 사용할 수 있다.

```typescript
function showName<T extends { name: string }>(data: T): string {
    return data.name;
}

showName(user);
showName(car);
```
`extends`를 사용해서 객체 안에 데이터를 참조해올 수 있다.

# 유틸리티 타입
```typescript
interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}

type UserKey = keyof User;

const uk: UserKey = "age";
```
`keyof`는 인터페이스에 있는 키의 값들을 불러올 수 있다.

```typescript
let admin: Partial<User> = {
    id: 1,
    name: "Bob"
}
```
`Partial`은 모든 키를 `optional`로 바꿔준다.

```typescript
let admin: Required<User> = {
    id: 1,
    name: "Bob",
    age: 20,
    gender: "m"
}
```
`Required`는 모든 키를 필수로 바꿔준다.

```typescript
let admin: Readonly<User> = {
    id: 1,
    name: "admin",
    age: 30,
    gender: "m",
}

admin.id = 4;
```
`Readonly`는 처음에 선언한 다음 값을 변경할 수 없게된다.

```typescript
type Grade = 1|2|3|4;
type Score = "A" | "B" | "C" | "D";

const score: Record<Grade, Score> = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
};
```
`Record<K, T>`를 사용하면 새로운 객체에 `Key`와 `Type`을 따로 지정해주고 선언할 수 있다.

```typescript
interface User {
    id: number;
    name: string;
    age: number;
    gender: "M" | "W";
}

const admin: Pick<User, "id" | "name"> = {
    id: 1,
    name: "admin"
}
```
`Pick<T, K>`를 사용하면 `interface`에 특정 프로퍼티만 사용할 수 있다.

```typescript
interface User {
    id: number;
    name: string;
    age: number;
    gender: "M" | "W";
}

const admin: Omit<User, "age" | "gender"> = {
    id: 1,
    name: "admin"
}
```
반대로 `Omit`을 사용하면 `interface`에서 특정 프로퍼티만 제외할 수 있다.

```typescript
type T1 = string | number | boolean;
type T2 = Exclude<T1, number>;
```
`Exclude`를 사용하면 특정 타입만 제외하고, 타입을 넣을 수 있다.

```typescript
type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>
```
`NonNullable`를 사용하면 `null`, `undefined`, `void` 같은 안정해져있거나 값이 비어있는 타입들을 지워준다.