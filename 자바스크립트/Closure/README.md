# Closure
- function + environment
  - closure는 function이 하나 생길 때마다 하나씩 생긴다
  - enviroment는 함수 자신을 둘어싼, 접근할 수 있는 모든 스코프를 뜻한다.

```
function and(x){
    return function print(y){
        return x + ' and ' + y
    }
}

const saltAnd = and('salt')
console.log(saltAnd('paper'))
console.log(saltAnd('sugar'))

--
salt and paper
salt and sugar
```
- and 함수로 만들어진 saltAnd의 closure는 -> 함수 : print , 환경 : x -> "salt"
- closure는 higher-order function을 만드는데 유용하다.

```
function and(x){
    return function print(y){
        return x + ' and ' + y
    }
}

const saltAnd = and('salt')
console.log(saltAnd('paper'))
console.log(saltAnd('sugar'))

const waterAnd = and('water')
console.log(waterAnd('juice'))
```
- saltAnd와 waterAnd는 환경이 다른 서로 다른 closure

- 문제
```
function foo(){
  function bar(){
  }
  function baz(){
  }
}
foo()
```
- 이 코드를 실행 과정에서 closure는 총 몇 개가 생성? = 3개 ( foo, bar, baz)
- foo()를 2번 호출하면? -> 5개 ( foo 1개, bar 2개, baz 2개 )

- 문제
```
function getCounter() {
  var result = {
    count : count, // 선언할 function
    total : 0
  }
  function count(){
    result.total += 1
  }
  return result
}
var counter = getCounter()
counter.count()
counter.count()
console.log(counter.total)
```
- getCounter 실행시 -> result 객체가 만들어지고, count()가 생성됨과 동시에 clouser 생성, counter의 result가 위 result에 바인딩
- 답 : 2


- 문제
```
function getCounter(){
  var result = { count : count, total : 0 }
  function count() { result.total += 1}
  return result
}

var counterA = getCounter()
counterA.count()
counterA.count()

var counterB = getCounter()
counterB.count()
console.log(counterA.total, counterB.total)
```
- 답 : 2 1
- counterA : 첫 getCounter 실행 때 만들어진 total과 count로 이루어진 객체
- counterB : 두번째 getCounter 실행 때 만들어진 total과 count로 이루어진 객체


- 문제
```
var numCounters = 0
function getCounter(){
  numCounters += 1
  var result = { count : count, total : 0, }
  function count() { result.total += 1}
  return result
}

var counterA = getCounter()
counterA.count()
counterA.count()

var counterB = getCounter()
counterB.count()
console.log(counterA.total, counterB.total, numCounters)
```
- 답 : 2 1 2
