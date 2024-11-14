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
