import { useState, useEffect } from "react"; // 라이프사이클 이후에 추가할 수 있는 것이 useEffect

// Fetch부분을 재사용하기 위해서 별도로 분리
// custom hook을 use로 시작하도록 만들면 이렇게 같이 라이프사이클을 태우면서 재사용 가능한 로직을 만들 수 있다!
// 여기서 만든 useFetch가 바로 별도의 custom hook!!!
// https://ko.reactjs.org/docs/hooks-custom.html 참조
const useFetch = (callback, url) => {
  const [loading, setLoading] = useState(false); // 로딩 구현

  const fetchInitialData = async () => {
    setLoading(true); // 처음 데이터를 가져온다 - 로딩 시작
    const response = await fetch(url);
    const initialData = await response.json();
    callback(initialData); // initial state값을 그대로 넣어주면 될 것
    setLoading(false); // 데이터를 다 가져왔따 - 로딩 끝
  };

  // 투두리스트 가져오기
  // 비동기 작업을 fetching할 때 useEffect 안에 직접 넣지 말고 그걸 처리하는 함수를 가져와라가 공식 가이드에 나와있다
  useEffect(() => {
    fetchInitialData();
  }, []); // 빈 배열을 넣어주면 아무것도 업데이트 관찰을 하지 않는다 (처음 한번만 실행되고 그 다음에는 관찰해야할 항목이 없기 때문에 더이상 실행되지 않는다)

  return loading;
};

export default useFetch;
