
# Blog 메인페이지 만들기 (with 기본문법)

**src >** **App.js** 파일에 코드 작성하기 / CSS는 상단에 import되어있는 App.css 파일을 열어서 코드 작성

```jsx
function App() {
  return (
    <div className="App">			
			(/* react에서는 태그에 class를 주고싶으면 **JSX문법**을 사용해야함, class X, className O */}
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>     
    </div >
  );
}
```

## React(JSX문법 사용)의 가장 큰 장점

- 리액트에서 데이터바인딩을 쉽게 할 수 있음 (Angular, Vue 도 가능)
- 데이터바인딩 - 화면상에 보여지는 데이터(View)와 브라우저 메모리에 있는 데이터(Model)를 묶어서(Binding) 서로 간의 데이터를 동기화하는 것을 의미
- **중괄호 { }** 를 활용하여 안에 변수명, 함수 등 다양한 것들을 넣어서 사용가능

### ➢ 데이터를 넣는 방법은 2가지가 있다.

1. **변수에 넣기**

```jsx
{/* 중괄호 문법을 통해 원하는 것을 뭐든지 넣을 수 있음 */}

{/* 원하는 내용을 변수에 넣고, 원하는 곳으로 HTML에 꽂을 수 있음 */}
let posts = '서울시 노원구 공릉동';
<h4> { posts } </h4>

{/* 함수도 만들어서 원하는 곳에 넣을 수 있음 */}
function 함수(){
     return 100
}
<h4> { 함수() } </h4>

{/* style 적용 */}
{/* 1. style을 직접 줄 떄는 object형식으로 중괄호안에 중괄호로 { { 코드 } } 작성해야함 */}
<div style={ { color : 'blue', fontSize : '30px' } }>개발 Blog</div>

{/* 2. 변수에 스타일을 넣고, 해당 변수명으로 적용시킬 수도 있음 */}
let posts = { color : 'blue', fontSize : '30px' }
<div style = { posts } >개발 Blog</div>

{/* 이미지 삽입은 상단에 해당파일을 import하고 */} 
import logo from './logo.svg';
{/* 원하는 위치에 아래와 같이 작성 */}
<img src = { logo } />
```

1. **state에 넣기**
    - **useState 를 사용하는 이유 :**
        - state 는 내용이 변경되면 HTML이 자동으로 재렌더링이 됨 (새로고침 없이 스무스하게 변경됨)
        - 자주 바뀌는, 중요한 데이터는 변수 말고 꼭 state 로 저장해서 쓸 것


---



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
