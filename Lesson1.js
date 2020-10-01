"use strict";
let hasValue = true;
// hasValue = true;と記述しても型推論してくれる
// number型は整数も浮動小数点も、-も同一
let count = 10;
let float = 3.14;
let negative = -0.12;
// string型も'', "", `` 同一
let single = 'hello';
let double = "hello";
let back = `hello`;
const person = {
    //   name: string;
    //   age: number;
    // } = {
    name: {
        first: 'Jack',
        last: 'oda',
    },
    age: 21
};
// array
const fruits = ['apple', 'banana', 'grape'];
// tuple(配列の強化版)を宣言したい場合、型推論してくれないので、型注釈で明示的に宣言する必要がある
const book = ['business', 1500, false];
// enum 特定のまとまったグループのみを受け入れる
var CoffeeSize;
(function (CoffeeSize) {
    // =で値を代入しない場合、0,1...のような数字になる
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
// anyなんでも入れられる
let anything = true;
anything = 'hello',
    anything = 3333,
    anything = ['hoge', 'bananan', 'apple'];
// union srtingもnumber入れたい時など
let unionType = 10;
unionType = 'hello';
unionType = 333;
//literal 決まった値のみしか入れられなくなる
// constは最初からliteralと型推論する
const apple = 'apple';
// literalとunion型を組み合わせるとenumのような使用になる
let clothSize = 'small';
// 実践的な使い方
const cloth = {
    size: 'large',
    color: 'black'
};
// 関数に型をつける
// 戻り値に型を記述しなくても、型推論してくれるがつけた方が親切
function add(num1, num2) {
    return num1 + num2;
}
// 戻り値がない場合
// void　何も返さない型
function sayHello() {
    // console.log('hello');
}
// 関数が保持する変数に型をつける
const anotherAdd = add;
// アロー関数　複数の場合のみ引数に()をつける
const doubleNumber = num => num * 2;
// コールバック関数に型をつける
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
// never型(決して何も返さない)
function error(message) {
    throw new Error(message);
}
