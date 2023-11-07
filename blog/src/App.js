import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('동네 맛집 추천');
  let [글제목2, 글제목변경2] = useState('노원 맛집 추천');
  let [글제목3, 글제목변경3] = useState('서울 맛집 추천', '동네 우동 맛집');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> {글제목} </h3>
        <p>11월 5일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목2} </h3>
        <p>11월 6일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목3} </h3>
        <p>11월 7일 발행</p>
        <hr />
      </div >
    </div >
  );
}

export default App;