# JSX 사용하기


## Import
```cpp
import React from 'react';
```

## Nested Elements

### Element 를 렌더딩 해야 할 때
```cpp
return (
  <div>
    <h1> Hello </h1>
    <h2> Welcome </h2>
  </div>
);
```

렌더링 할때는 위와 같이 div 로 wrap 해주면 빌드 오류가 발생하지 않는다.


## JavaScript Expression
JSX 내 Javascript 사용은 단순히 {} 로 감싸면 된다.
```cpp
render() {
  let text = 'dev-server'
  return (
    <div>
      <h1> Hello </h1>
      <h2> Welcome {text}</h2>
    </div>
  )
}
```

{text} 처럼 사용한다.


### method 사용
```cpp
alertHi() {
  alert('hey');
}

render() {
  let text = 'dev-server'
  return (
    <div>
      <h1> Hello </h1>
      <h2> Welcome {text} </h2>
      <button onClick={this.alertHi}>Click</button>
    </div>
  );
}
```


### if-else 문 사용 X
JSX 내에서는 if-else 문을 대신해 Ternary 표현식을 사용한다.
```cpp
{alertStatus ? true : false}
```

참고로 classnames 를 사용하면
```cpp
classnames(
  padding-top, // css
  {true : alertStatus} // ternary 표현식 응용
)
```

위와 같이 사용 가능하다.


## Inline Style
React의 Inline Style 에서는, string 형식이 사용되지 않고 key 가 camelCase 인 Object 가 사용된다.
```cpp
render() {
  let text = 'dev-server';

  let alStyle = {
    color: 'blue',
    backgroundColor: 'red',
  };

  return (
    <div>
      <h1> Hello </h1>
      <h2> Welcome </h2>
      <button onClick={this.alertHi}>Click</button>
      <p style={alStyle}>{1 == 1 ? 'true' : 'false'}></p>
    </div>
  );
}
```

p 태그에 alStyle 이 적용되었다.


## 주석
```cpp
{/* comments */}
```


[출저](https://velopert.com/867)
