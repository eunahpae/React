# React 시작하기
 
## React 란?

사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리

### 1. **Node.js  /  Visual Studio Code 설치하기**

[Node.js](https://nodejs.org/en)

Node.js는 브라우저 밖에서도 자바스크립트를 실행할 수 있는 환경을 의미함

[VS Code](https://code.visualstudio.com/download)

마이크로소프트에서 개발한 텍스트 에디터

### 2. React 실행하기

원하는 위치에 폴더 생성하고 해당 위치에서 VS code 열기

터미널 열고 아래 명령어 입력 (맨 마지막은 원하는 폴더명)

```bash
npm create-react-app blog
```

설치가 완료되면 생성된 폴더로 이동

```bash
cd blog
```

react 실핼 (미리보기 띄우기)

```bash
npm start
```

## 3. 상세설명

1. **Node.js 설치 이유 : npm이라는 툴이 설치됨 → Create React App 이라는 라이브러리를 사용하기 위함**
2. 생성된 폴더(blog) 구성 : 
    1. node_modules 폴더 - 라이브러리를 모은 폴더
    2. public 폴더 - static 파일 보관함
    3. src 폴더 - 소스코드 보관함
    4. package.json 파일 - 설치한 라이브러리 목록(이름, 버전 등 설치시마다 자동기록됨)
    
     ****