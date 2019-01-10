# express


### 세션 초기 설정
```cpp
app.get('/', function(req, res){
    sess = req.session;
});
```

### 세션 변수 설정
```cpp
app.get(‘/login’, (req, res) {
	less = req.session;
	sess.username = ‘velopert’
});
```

### 세션 변수 사용
```cpp
app.get(‘/‘, (req, res) {
	sess = req.session;
	console.log(sess.username);
});
```

### 세션 제거
```cpp
rea.session.destory((err) => {
	// cannot access session here
});
```

destroy() 메서드의 콜백함수에서는 세션에 접근할 수 없다.


[출처](https://velopert.com/406)
