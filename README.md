# 📚 React Hook 이해 영상을 보고 투두리스트 따라만들기

- `Codesquad`에서 프론트엔드 분야를 담당하시는 `Crong`님의 영상을 참조했습니다.
- `21/11/15` 기준 영상의 1편 ~ 6편까지 모두 `완강`하였습니다.
- https://www.youtube.com/watch?v=y52Av3JxNW4

## ⚔ 기술스택

<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github">
 </div>

## 📈 현재까지 진행상황

- `로딩` 구현
- 서버로부터 데이터를 받아오는 부분 구현 (`커스텀 훅` 사용)
- 새로운 데이터를 `state`를 이용해서 관리하는 부분 구현
- 데이터 개수를 나타내는 `Header` 생성
- 클릭하면 항목별 상태가 `todo`에서 `done`, 혹은 반대로 바뀌면서(토글) css가 적용되도록 구현
- Context API와 useContext를 사용해서 props drilling 방지
- useRef를 이용하여 간단하게 onClick 이벤트 처리하기
- useReducer와 dispatch를 사용해서 파일을 기능별로 분리하고 상태관리 처리하기

---

## 🎥 GIF

![Honeycam 2021-11-15 02-28-42](https://user-images.githubusercontent.com/14370441/141691637-cf34fcbe-cf7a-42fb-8265-11a47dad95ad.gif)


## 📸 Image

![image](https://user-images.githubusercontent.com/14370441/141691604-b9fce7f9-e709-4056-b27e-5ea5f538f15a.png)

---

## ✏ 작동 방법

- front-client : root폴더에서 `npm start`를 입력합니다.
- data-server : `cd data-server`를 통해 폴더에 접근한 후에 `node app.js`를 실행합니다.
