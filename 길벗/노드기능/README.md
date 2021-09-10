# REPL 
- 입력한 코드를 읽고(Read), 해석하고(Eval), 결과물을 반환하고(Print), 종료할 때까지 반복(Loop) -> REPL

# 모듈생성
- 노드는 코드를 모듈ㄹ 만들 수 있다는 점에서 브라우저의 자바스크립트와 다르다.
- 모듈이란 -> 특정한 기능을 하는 함수나 변수들의 집합
- 모듈로 만들어두면 여러 프로그램에 해당 모듈을 재사용할 수 있다.

- var.js
```
const odd = '홀수입니다.';
const even = '짝수입니다.';

module.exports = {
    odd,
    even,
};
```
- func.js
```
const { odd, even } = require('./var')

function checkOddOrEven(num){
    if(num % 2) {
        return odd;
    }
    return even
}

module.exports = checkOddOrEven

console.log(checkOddOrEven(9))
```

# 내장객체
- 따로 설치하지 않고 바로 사용할 수 있는 내장 모듈
## global
- 브라우저의 window와 같은 전역 객체
- 전역 객체이므로 모든 파일에서 접근 가능
- window.open에서 그냥 open으로 호출하는 것 처럼 global도 생략가능
- globalA.js
```
module.exports = () => global.message;
```
- globalB.js
```
const A = require('./globalA')

global.message = '안녕하세요'
console.log(A())
```

## console
- 보통 디버깅을 위해 사용
- console.time(레이블) : time과 timeEnd 사이의 시간 측정
- console.log(내용) : -
- console.error
- console.table(배열) : 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현
- console.dir(객체,옵션) : 객체를 콘솔에 표시
- console.trace(레이블) : 에러가 어디서 발생했는지 추적 가능

## 타이머
- 
