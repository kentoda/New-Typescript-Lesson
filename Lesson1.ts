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
 
// enum 特定のまとまったグループのみを受け入れる
enum CoffeeSize {
  // =で値を代入しない場合、0,1...のような数字になる
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI ='VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;

// anyなんでも入れられる
let anything: any = true;
anything = 'hello',
anything = 3333,
anything = ['hoge', 'bananan', 'apple']

// union srtingもnumber入れたい時など
let unionType: number | string  = 10;
unionType = 'hello'
unionType = 333

//literal 決まった値のみしか入れられなくなる
// constは最初からliteralと型推論する
const apple: 'apple' = 'apple'

// literalとunion型を組み合わせるとenumのような使用になる
let clothSize:  'small' | 'medeum' | 'large' = 'small';

// 実践的な使い方
const cloth: {
  size: 'small' | 'medeum' | 'large',
  color: string
} = {
  size: 'large',
  color: 'black'
}

// alias型名をつけて　既存の型名はつけられない
type clothSize = 'small' | 'medeum' | 'large'

// 関数に型をつける
// 戻り値に型を記述しなくても、型推論してくれるがつけた方が親切
function add(num1: number, num2: number): number {
  return num1 + num2
}

// 戻り値がない場合
// void　何も返さない型
function sayHello(): void {
  console.log('hello');
}