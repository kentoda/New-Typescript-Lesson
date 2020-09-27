var hasValue = true;
// hasValue = true;と記述しても型推論してくれる
// number型は整数も浮動小数点も、-も同一
var count = 10;
var float = 3.14;
var negative = -0.12;
// string型も'', "", `` 同一
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: 'Jack',
    age: 21
};
console.log(person.gender);
