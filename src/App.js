import React, { Component, useState, useEffect } from 'react'; // 라이프사이클 이후에 추가할 수 있는 것이 useEffect
import './App.css';
import List from './List.jsx';

const App = () => {
  const [todos, setTodos] = useState(['js공부']); // 앞은 상태, 뒤는 메소드 반환 https://ko.reactjs.org/docs/hooks-state.html 참조, todos가 바뀌면 자동으로 다시 렌더링
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) =>{
      setNewTodo(e.target.value); // 새로운 정보를 newTodo에 넣게 되는 것!
  }
    
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  useEffect( () => {
    console.log("새로운 내용이 렌더링됐네요", todos);
  }, [todos]) // 새로운 내용이 추가가 됐다는 것을 콜백함수로 추가시켜주고싶으면 todos의 변경을 지켜보면 된다!

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
