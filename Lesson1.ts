let hasValue: boolean = true;
// hasValue = true;と記述しても型推論してくれる

// number型は整数も浮動小数点も、-も同一
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

// string型も'', "", `` 同一
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person = {
//   name: string;
//   age: number;
// } = {
  name: {
    first: 'Jack',
    last:   'oda',
  },
  age: 21
}

// array
const fruits = ['apple', 'banana', 'grape']

// tuple(配列の強化版)を宣言したい場合、型推論してくれないので、型注釈で明示的に宣言する必要がある
const book: [string, number, boolean] = ['business', 1500, false];
