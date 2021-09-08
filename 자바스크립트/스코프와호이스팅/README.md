# Hoisting
## Hoisting - var
```
var x = 1
console.log(x)
-> 1

console.log(x)
var x = 1
-> undefined
-> 같은 스코프에 선언되어 참조는 가능하지만, 초기화는 되어있지 않다
```
## Hoisting - function
```
function foo() {
  return 'foo'
}
console.log(foo())

console.log(foo())
function foo() {
  return 'foo'
}

-> 둘다 foo
-> 선언이 아래 있던 위에있던 같지만, 함수의 선언과 값의 초기화는 서로 다르다
-> 변수는 선언과 초기화가 별개이지만, 함수는 선언밖에 없다
```


## Scope
```
// OuterScope
function foo() {
  let x = 1
  
  // InnerScope
  function bar(){
    console.log(x)
  }
}
-> x처럼 묶어지는 것을 binding -> lexical scope를 통해 binding
-> lexical scope : 안쪽에서 바깥쪽 변수에 접근할 수 있는 것
```

## Function, lexical scope
```
function foo(){
  var x = 'Hello'
  console.log(x) // Hello
}

console.log(x) // ReferenceError
```

## Function, block scoping
```
var x = 1
if(true) {
  var x = 2
}
console.log(x) // 2
-> var은 block scoping의 대상이 아니므로 x는 합체하여 같은 객체가 됨 -> 즉, 2가됨
```
