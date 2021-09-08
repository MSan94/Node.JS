# 서버 생성
```
const http = require('http'); // 서버를 만드는 모듈 불러옴
http.createServer((request, response) => { // 서버생성
	console.log("server start");
}).listen(3000);
```
- http 서버가 필요하여, http 모듈을 require 메소드를 통해 불러와 http 변수에 저장
- http 패키지는 Node.js 자체에서 기본적으로 제공하는 패키지이기 때문에 npm install http가 따리 필요없다
- 서버가 실행된 후의 동작을 콜백 함수로 등록
- request, response를 http 패키지의 createServer 메소드의 인자로 넣어주면 된다.
- xxxx포트에 연결

# Request, Response
- request는 요청담당
  - 즉, 서버로 보내는 요청에 대한 정보가 들어있다.
- response는 클라이언트로 돌려줄 응답 담당
- request -> 서버처리 -> response 흐름

# 참고
- https://www.zerocho.com/category/NodeJS/post/57774a8eacbd2e9803de0195



# 채팅서버
```
//express 
npm install express --save
//socket.io
npm install socket.io --save
```
- package.json파일에 dependencies에 설치확인
```
const express = require('express') // express 모듈 call
const socket = require('socket.io') // socket.io 모듈 call
const http = require('http') // Nodejs 기본 내장 모듈 call
const app = express() // express 객체 생성
const server = http.createServer(app) // express http 서버 생성
const io = socket(server) // 생성된 서버를 socket.io에 바인딩

// 서버를 8080 포트로 listen
server.listen(8080, function() {
	...
})
```
