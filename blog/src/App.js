import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('동네 맛집 추천');
  let [글제목2, 글제목변경2] = useState('노원 맛집 추천');
  let [글제목3, 글제목변경3] = useState('서울 맛집 추천','동네 우동 맛집');

  let posts = '서울시 노원구 공릉동';
  // let posts = { color : 'blue', fontSize : '30px' }
  
  // function 함수(){
  //   return 100
  // }

  return (
    <div className="App">
      <div className="black-nav">
        {/* <div style={ { color : 'blue', fontSize : '30px' } }>개발 Blog</div> */}
        {/* <div style={ posts }>개발 Blog</div>
      </div>  */}

      {/* 중괄호 문법을 통해 원하는 것을 넣을 수 있음 */}
      {/* <h4> { posts } </h4> */}
      {/* <h4> { 함수() } </h4> */}

      {/* 이미지 삽입은 상단에 해당파일을 import하고 원하는 위치에 아래와 같이 작성 */}
      {/* <img src= { logo } /> */}


        <div>개발 Blog</div>
      </div> 
      <div className="list">
        {/* <h3> { posts }</h3> */}
        <h3> { 글제목 }</h3>
        <p>11월 7일 발행</p>
        <hr/>
        <h3> { 글제목2 }</h3>
        <p>11월 7일 발행</p>
        <hr/>
        <h3> { 글제목3 }</h3>
        <p>11월 7일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
