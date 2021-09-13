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
- setTimeout(콜백함수 , 밀리초) : 주어진 밀리초(1000분의 1초) 이후에 콜백 함수를 실행
- setInterval(콜백함수 , 밀리초) : 주어진 밀리초마다 콜백함수를 반복 실행
- setImmediate(콜백함수) : 콜백함수 즉시 실행
- clearTimeout(아이디) : setTimeout 취소
- clearInterval(아이디)
- clearImmediate(아이디) 
- timer.js
```
const timeout = setTimeout(() => {
    console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
    console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
    console.log("실행되지 않습니다.");
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2)
    clearInterval(interval)
}, 2500);

const immediate = setImmediate(() => {
    console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
    console.log("실행되지 않습니다.");
});

clearImmediate(immediate2)
```

# __filename, __dirname
- 경로에 대한 정보 제공

# module, exports, require
- module 객체 말고 exports 객체로도 모듈을 만들 수 있다.
- module.export와 exports는 같은 객체를 참조
- module.exports에는 어떤 값이든 대입가능하지만, exports에는 반드시 객체러럼 속성명과 속성값을 대입해야한다.
- exports에 다른 값을 대입하면 객체의 참조 관계가 끊겨 더 이상 모듈로 기능하지 않는다.
- exports를 사용시 객체만 사용할 수 있으므로, module.exports에 함수를 대입한 경우 exports로 바꿀수 없다
```
exports.odd = ""
exports.even = ""
```

# process
- process 객체는 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있다.
- process.env
    - 시스템의 환경변수를 알 수 있다.   
    - process.env는 서비스의 중요한 키를 저장하는 공간으로 사용횐다.
    - 서버나 db의 비밀번호와 각종 API 키를 코드에 직접 입력하는 것은 위험하기 때문에 PROCESS.ENV의 속성으로 대체
    ```
    const secretId = process.env.SECRET_ID;
    const secretCode = process.env.SECRET_CODE;
    ```
- process.nextTick(콜백)
    - 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선으로 처리하도록 만든다.
    ```
    process.nextTick( () => {
        console.log("nextTick");
    }
    ```
- process.exit(코드)
    - 실행 중인 노드 프로세스를 종료
    - 서버환경에서 사용시 서버가 멈추므로 잘 사용하지은 않음.

# 노드 내장 모듈
```

```
