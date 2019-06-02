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
- useEffect는 componentDidUpdate 역할을 가지고 있어, state를 변경시 useEffect가 실행된다.

```cpp
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

## Custom Hook
- 이름이 "use"로 시작하고, 안에서 다른 Hook을 호출한다면 그 함수를 custom hook이라고 부른다.
- useSomething이라는 네이밍 컨벤션은 linter 플러그인이 hook을 인식하고 버그를 찾을 수 있도록 해줌

예)
```cpp
  function Form() {
    // 1. name이라는 state 변수 사용
    const [name, setName] = useState('Mary');

    // 2. Effect를 사용해 폼데이터를 저장
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });

    // 3. surname이라는 state 변수 사용
    const [surname, setSurname] = useState('Poppins');

    // 4. Effect를 사용해서 제목을 업데이트
    useEffect(function updateTitle() {
      document.title = name + ' ' + surname;
    });
  }
```


## 그외 hook

> useContext
  - 컴포넌트를 중첩하지 않고 React Context를 구독할 수 있음.
 ```cpp
   function Example() {
     const locale = useContext(LocaleContext);
     const theme = useContext(ThemeContext);
   }
 ```

> useReducer
  - 복잡한 컴포넌트들의 state를 reducer로 관리할 수 있게 해줌
  ```cpp
  function Todos() {
    const [todos, dispatch] = useREducer(todosReducer);
  }
  ```
