# NPM사용법
- 작업 패키지가 NPM이 관리하는 패키지란것을 알려주기위해 package.json 파일 필요
  - npm init -y
  - 패키지의 meta-data를 포함하는 파일
  - scripts의 경우 npm run test로 실행 가능
```
{
  "name": "NODEJSSTUDY",  // 패키지 이름
  "version": "1.0.0",
  "description": "",
  "main": "test.js",
  "scripts": { // npm을 사용하며 자주 사용하는 스크립트들을 호출할 수 있는 필드
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

## main.js 실행
- node main.js
```
console.log('HELLO, WORLD')
```

## 노드 런타임에게 코드가 넘어가기전에 문제를 잡을 환경
- formatting, Linting
- formatting : 세미콜론이 붙었는지 등등
   - Prettier : Visual Studio Code Extention 으로 정해진 규칙에 따라 자동으로 코드 스타일을 정리 해주는 도구
   - npm install --save-dev prettier
- Linting : 잘 지키면 좋은 것들
