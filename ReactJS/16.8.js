# [State Hook](https://deploy-preview-133--ko-reactjs-org.netlify.com/docs/hooks-overview.html)

## Hook?
- 함수 컴포넌트에서 React state와 생명주기(listcycle features)을 연동(hook into) 할 수 있게 해주는 함수
- 'class' 안에서는 동학하지 않음. 대신 class없이 React를 사용할 수 있게 해줌.

## Hook 사용 규칙

## import
```cpp
  import React, { useState, useEffect } form 'react';
```

## useState
변수 선언 (state 선언)

특징 : 이전 state와 새로운 state를 합치지 않음

```cpp
  const [count, setCount] = useState(0);
  const [isCheck, setIsCheck] = useState(false);
  const [isText, setIsText] = useState([ text: 'Example text']);
```

## useEffect
- componentDidMount, componentDidUpdate, componentWillUnMount가 하나로 통합된 API

```
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'You clicked ${count} times';
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
