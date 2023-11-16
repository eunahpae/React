/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['동네 맛집 추천', '노원 맛집 추천', '서울 맛집 추천']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function 글수정() {
    let copy = [...글제목];
    copy[0] = '집근처 맛집 추천';
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              {/* <h3> {a} </h3> */}
              <h3 onClick={() => { setModal(true); setTitle(i) }}> {글제목[i]}
                <span onClick={(e) => {
                  // 이벤트 버블링 막기 
                  e.stopPropagation();

                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  좋아요변경(copy)
                }}>👍</span> {좋아요[i]}
              </h3>
              <p>11월 6일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1)
                글제목변경(copy);
              }}>삭제</button>
              <hr />
            </div>
          )
        })
      }
      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} />
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
      }}>글발행</button>

      {
        modal == true
          ? <Modal 글수정={글수정} 글제목={글제목} title={title} /> : null
      }
      <Modal2 />
    </div >
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.글제목[props.title]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글수정}>글수정</button>
    </div>
  )
}


class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name : 'PAE',
      age : 20
    }
  }
  render() {
    return (
      <div>안녕, {this.state.name}
      <button onClick={()=>{
        this.setState({name : 'Kim'})
      }}>변경</button></div>
    )
  }
}

export default App;