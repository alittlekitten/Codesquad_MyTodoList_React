import React, { useEffect, useReducer } from "react"; // 라이프사이클 이후에 추가할 수 있는 것이 useEffect
import "./App.css";
import List from "./List.jsx";
import useFetch from "./useFetch.js";
import Header from "./Header.jsx";
import Form from "./Form.jsx";

export const TodoContext = React.createContext();

const todoReducer = (todos, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...todos, { title: payload, id: todos.length, status: "todo" }];

    case "SET_INIT_DATA":
      return payload;

    case "CHANGE_TODO_STATUS":
      return todos.map((todo) => {
        if (todo.id === +payload) {
          if (todo.status === "done") todo.status = "todo";
          else todo.status = "done";
        }
        return todo;
      });

    default:
      break;
  }
};

const TodoStore = () => {
  // useState : state를 컴포넌트 내에서 관리하는 것
  // useEffect : ComponentDidMount나 ComponentDidUpdate같은 것들이 라이프사이클 단계에서 렌더링 이후에 일어나는 것들을 useEffect에 넣어서
  //             이 안에서 쉽게 렌더링 이후 사이드이펙트 관련 처리들(log, 서버데이터보내기) 등 후속처리 내용을 담을 수 있다
  //             컴포넌트가 화면에 렌더링될 때 한 번만 실행하고 싶을 때는 2번째 매개변수에 빈 배열을 넣는다
  //             그게 아니라면 리렌더링될 때마다 실행된다!

  // todos: 할 일을 담은 객체들
  // setTodos: 할 일을 담기 위한 메서드
  // newTodo: 새로운 정보를 담은 요소
  // setNewTodo: 새로운 정보를 newTodo에 담기 위한 메서드

  // const [todos, setTodos] = useState([]); // 앞은 상태, 뒤는 메소드 반환 https://ko.reactjs.org/docs/hooks-state.html 참조, todos가 바뀌면 자동으로 다시 렌더링
  // const [newTodo, setNewTodo] = useState();

  const [todos, dispatch] = useReducer(todoReducer, []); // 초기값은 빈값

  const setInitData = (initData) => {
    // 초기데이터 불러오기
    dispatch({ type: "SET_INIT_DATA", payload: initData });
  };

  const loading = useFetch(setInitData, "http://localhost:8080/todo"); // 내용들을 분리해서 넣어줌

  // // 상태를 바꿔주는 부분
  // const changeTodoStatus = (id) => {
  //   const updateTodos = todos.map((todo) => {
  //     if (todo.id === +id) {
  //       if (todo.status === "done") todo.status = "todo";
  //       else todo.status = "done";
  //     }
  //     return todo;
  //   });

  //   // setTodos(updateTodos);
  // };

  useEffect(() => {
    console.log("새로운 내용이 렌더링됐네요", todos);
  }, [todos]); // 새로운 내용이 추가가 됐다는 것을 콜백함수로 추가시켜주고싶으면 todos의 변경을 지켜보면 된다!

  return (
    <>
      <TodoContext.Provider value={{ todos, loading, dispatch }}>
        <Header />
        <Form />
        <List />
      </TodoContext.Provider>
      {/* todos가 상태값을 가지고 있는 정보 */}
      {/* 만약 todos가 List 내에서 변경되면? Header에서도 그 내용이 반영되어야 한다 - 상태관리의 필요성!!! */}
    </>
  );
};

export default TodoStore;
