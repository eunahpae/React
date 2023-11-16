/* eslint-disable */

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['동네 맛집 추천', '노원 맛집 추천', '서울 맛집 추천']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function 글수정(){
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
              <h3 onClick={() => { setModal(!modal) }}> {글제목[i]}
                <span onClick={() => {
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  좋아요변경(copy)
                }}>👍</span> {좋아요[i]}
              </h3>
              <p>11월 6일 발행</p>
              <hr />
            </div>
          )
        })
      }

      {
        modal == true ? <Modal 글수정={글수정} title={글제목}/> : null
      }

    </div >
  );
}



function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.title[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글수정}>글수정</button>
    </div>
  )
}

export default App;