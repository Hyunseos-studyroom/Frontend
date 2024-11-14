enum PC{
    Window,
    MacOS,
    Android
}

console.log(PC['MacOS']) // 1
console.log(PC[1]) // MacOS

enum Phone {
    Android = 'and',
    Ios = 'ios',
}

let myPhone:Phone;
myPhone = Phone.Ios;