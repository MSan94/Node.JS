# Event Loop
- 자바 스크립트의 실행 모델은 event loop, call stack, callback queue 개념으로 이루어진다.
- 이벤트 루프모델은 여러개의 스레드를 사용하며, 우리가 작성한 자바스크립트 코드가 실행되는 스레드가 ***메인스레드***
- 한 Node.js 프로세스에서 메인 스레드는 하나이며, 한 순간에 한 줄씩만 실행
- 그러나 그 외의 일(file / I/O, network..)을 하는 워커 스레드는 여러개가 있을 수 있다.

# Call Stack
```
function f3(){}
function f2(){ f3() }
function f1(){ f2() }
f1()
```
![image](https://user-images.githubusercontent.com/81352078/131073401-24bd45f5-5764-43ed-85bf-6ef2bec9069a.png)
- 콜스택이란, 지금 시점에서 불린 함수들의 스택
- 함수가 호출될 때 쌓이고, 리턴할 때 빠진다. -> 그냥 내가아는 스택임
- Run-to-Completion
  - 이벤트 루프가 다음 콜백을 처리하려면, 지금 처리하고 있는 콜백의 실행이 완전히 끝나야 한다.
  - 즉, call stack이 완전히 빌 때까지 처리한다는 것과 동일

# Callback Queue
![image](https://user-images.githubusercontent.com/81352078/131073966-3ce593fd-29e5-48c5-922a-1e507642812f.png)
- 콜백 큐(메시지 큐)는 앞으로 실행할 콜백(함수와 그 인자)들을 쌓아두는 큐
- 콜백은 브라우저나 Node가 어떤 일이 발생하면(event) 메인 스레드에 이를 알려주기 위해 (callback) 사용
- 이벤트 파일 처리의 완료, 네트워크 작업의 완료, 타이머 호출 등등



###  Quiz
Q.실행순서 출력
```
console.log('1')
setTimeout( () => {
  console.log('2')
}, 0)
console.log('3')
```
-> 1,3,2 // setTimeout의 0가 노드에 넘어가고, 노드가 setTime을 처리(일정시간후)후 콜백안에 집어넣는다, -> 콜스택이 1,3을 실행하고 콜스택이 비어있으니 콜백을 실행

Q.5초동안 메시지가 몇번 출력?
```
setInterval( () => {
  console.log('Hey!')
  while(true){}
}
```
-> 1번 ->  콜스택은 일단 비어있음 -> 노드는 내부적으로 timer를 들고있다가 1초후 함수 안에 콜백을 콜백큐에 넣는다. -> 콜스택이 비어있으므로 하나를 꺼내서(해당코드) 실행 -> 2초가지나면 또다시 setInterval()을 콜백 큐에 넣는다 (반복) 
-> while(true) 가 계속 돌고있기 때문에 콜스택이 비어있지 않음 -> return이 필요
-> 즉,
  - while loop가 도는 동안 call stack이 절대 비지 않기때문에 이동안은 callback queue에서 콜백을 꺼낼 수가 없다.
  - 그래서 setInterval 아무리 콜백을 쌓아도 메인 스레드에서 실행할 수가 없다.
  - 이런 경우를 event loop를 block 한다고 한다.

# Non-Blocking I/O & Offloading
```
// 여기서 Node에게 파일을 읽어달라고 요청하고, 워커 스레드에서 파일을 읽기 시작
fs.readFile(fileName, (err, data) => {
  // Node가 파일을 다 읽고 나면
  // 1. callback queue에 이 함수에 err, data 인자를 채워 넣고
  // 2. callback queue에서 꺼내질 때 이부분이 실행
})
// readFile의 호출이 끝난 직후 바로 이 함수를 실행하게 된다
// 이는 여전히 같은 콜백을 처리하는 중이기 때문
someTast()
```
- 브라우저나 nodejs에서나.web api 혹은 node api의 동작이 끝나면 callback queue에 등록
- 브라우저나 Node가 요청 받은 일을 하고 있는 동안 메인 스레드와 이벤트 루프는 영향을 받지 않고 계속 실행
- 이를 offloading이라 하며, Node 서버의 메인 스레드가 하나임에도 불구하고 빠르게 동작할 수 있는 이유
- 메인 스레드가 오래 걸리는 일을 기다리지 않기 때문
