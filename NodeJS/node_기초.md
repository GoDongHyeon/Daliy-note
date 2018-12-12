# Node Js basic

## NodeJs + Express

1. 기본적으로 NodeJs + Express 사용하기 위해 express 를 require 한다.
```cpp
var express = require('express');
var app = express();
```


2. 그리고 아래와 같이 *listen* 를 사용해 port:3000 을 이용하기로 한다.
```cpp
app.listen('3000', () => {
  console.log('Example app listening on port 3000!');
});
```

'3000', 뒤 ()=>{} 은 listen 이 끝나기 전에 내용을 실행시키기 위해 넣는다.
(현재 코드에선 console.log 를 실행)


3. 마지막으로 get 함수로 사용자가 들어가는 페이지에 따라 보여주는 내용도 달리한다.
```cpp
app.get('/', (req, res) => {
// '/'은 기본 main 페이지를 사용한다는 뜻이다. 사용자가 기본 페이지(main)로 접속할 시 'Hello Home!' 이라는 string 을 출력한다.
  res.send('Hello Home!');
});

app.get('/login', (req, res) => {
// '/login' 은 login 페이지가 있고, 사용자가 login 페이지로 접속할 시 'Hello login!' 이라는 string 을 출력한다.
  res.send('Hello login!');
});
```


### 전체 코드는 아래와 같이 정리할 수 있다.
```cpp
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/login', (req, res) => {
  res.send('Hello login!');
});

app.listen('3000', () => {
  console.log('Example app listening on port 3000!');
});
```
