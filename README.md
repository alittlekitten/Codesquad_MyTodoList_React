# ๐ React Hook ์ดํด ์์์ ๋ณด๊ณ  ํฌ๋๋ฆฌ์คํธ ๋ฐ๋ผ๋ง๋ค๊ธฐ

- `Codesquad`์์ ํ๋ก ํธ์๋ ๋ถ์ผ๋ฅผ ๋ด๋นํ์๋ `Crong`๋์ ์์์ ์ฐธ์กฐํ์ต๋๋ค.
- `21/11/15` ๊ธฐ์ค ์์์ 1ํธ ~ 6ํธ๊น์ง ๋ชจ๋ `์๊ฐ`ํ์์ต๋๋ค.
- https://www.youtube.com/watch?v=y52Av3JxNW4

## โ ๊ธฐ์ ์คํ

<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github">
 </div>

## ๐ ํ์ฌ๊น์ง ์งํ์ํฉ

- `๋ก๋ฉ` ๊ตฌํ
- ์๋ฒ๋ก๋ถํฐ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ค๋ ๋ถ๋ถ ๊ตฌํ (`์ปค์คํ ํ` ์ฌ์ฉ)
- ์๋ก์ด ๋ฐ์ดํฐ๋ฅผ `state`๋ฅผ ์ด์ฉํด์ ๊ด๋ฆฌํ๋ ๋ถ๋ถ ๊ตฌํ
- ๋ฐ์ดํฐ ๊ฐ์๋ฅผ ๋ํ๋ด๋ `Header` ์์ฑ
- ํด๋ฆญํ๋ฉด ํญ๋ชฉ๋ณ ์ํ๊ฐ `todo`์์ `done`, ํน์ ๋ฐ๋๋ก ๋ฐ๋๋ฉด์(ํ ๊ธ) css๊ฐ ์ ์ฉ๋๋๋ก ๊ตฌํ
- Context API์ useContext๋ฅผ ์ฌ์ฉํด์ props drilling ๋ฐฉ์ง
- useRef๋ฅผ ์ด์ฉํ์ฌ ๊ฐ๋จํ๊ฒ onClick ์ด๋ฒคํธ ์ฒ๋ฆฌํ๊ธฐ
- useReducer์ dispatch๋ฅผ ์ฌ์ฉํด์ ํ์ผ์ ๊ธฐ๋ฅ๋ณ๋ก ๋ถ๋ฆฌํ๊ณ  ์ํ๊ด๋ฆฌ ์ฒ๋ฆฌํ๊ธฐ

---

## ๐ฅ GIF

![Honeycam 2021-11-15 02-28-42](https://user-images.githubusercontent.com/14370441/141691637-cf34fcbe-cf7a-42fb-8265-11a47dad95ad.gif)


## ๐ธ Image

![image](https://user-images.githubusercontent.com/14370441/141691604-b9fce7f9-e709-4056-b27e-5ea5f538f15a.png)

---

## โ ์๋ ๋ฐฉ๋ฒ

- front-client : rootํด๋์์ `npm start`๋ฅผ ์๋ ฅํฉ๋๋ค.
- data-server : `cd data-server`๋ฅผ ํตํด ํด๋์ ์ ๊ทผํ ํ์ `node app.js`๋ฅผ ์คํํฉ๋๋ค.
