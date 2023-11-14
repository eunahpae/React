/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['동네 맛집 추천', '노원 맛집 추천', '서울 맛집 추천']);
  let [좋아요, 좋아요변경] = useState(0);

  // function 제목바꾸기(){
  //   var newArray = [...글제목];
  //   newArray[0] = '집근처 맛집 추천';
  //   글제목변경( newArray );
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ 제목바꾸기 }>변경</button> */}
      <div className="list">
        <h3> {글제목[0]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h3>
        <p>11월 5일 발행</p>
        <hr />
      </div>
      {/* <button onClick={()=>{}}>버튼</button> */}
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>11월 6일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>11월 7일 발행</p>
        <hr />
      </div >

      <Modal />    

    </div >
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;