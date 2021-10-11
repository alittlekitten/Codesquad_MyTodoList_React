import React, { Component, useState, useEffect } from 'react'; // 라이프사이클 이후에 추가할 수 있는 것이 useEffect
import './App.css';
import List from './List.jsx';

const App = () => {
  // useState : state를 컴포넌트 내에서 관리하는 것
  // useEffect : ComponentDidMount나 ComponentDidUpdate같은 것들이 라이프사이클 단계에서 렌더링 이후에 일어나는 것들을 useEffect에 넣어서
  //             이 안에서 쉽게 렌더링 이후 사이드이펙트 관련 처리들(log, 서버데이터보내기) 등 후속처리 내용을 담을 수 있다

  const [todos, setTodos] = useState(['js공부']); // 앞은 상태, 뒤는 메소드 반환 https://ko.reactjs.org/docs/hooks-state.html 참조, todos가 바뀌면 자동으로 다시 렌더링
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) =>{
      setNewTodo(e.target.value); // 새로운 정보를 newTodo에 넣게 되는 것!
  }
    
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  const fetchInitialData = async () => {
    const response = await fetch('http://localhost:8080/todo');
    const initialData = await response.json();
    console.log(initialData);
  }

  useEffect( () => {
    console.log("새로운 내용이 렌더링됐네요", todos);
  }, [todos]) // 새로운 내용이 추가가 됐다는 것을 콜백함수로 추가시켜주고싶으면 todos의 변경을 지켜보면 된다!

  // 투두리스트 가져오기 
  // 비동기 작업을 fetching할 때 useEffect 안에 직접 넣지 말고 그걸 처리하는 함수를 가져와라가 공식 가이드에 나와있다
  useEffect( () => {
    fetchInitialData();
  })

  return (
    <>
    <h1>todo 애플리케이션</h1>
    <form action = "">
      <input type="text" name="" onChange={changeInputData}/>
      <button onClick={addTodo}>할일추가</button>
    </form>

    <List todos={todos}/>  {/* todos가 상태값을 가지고 있는 정보 */}
    
    </>
  )
}

export default App;
