# React 3. Rendering Elements

우리는 React 안에서 HTML 요소를 사용할 수 있다.
```cpp
<div id='root'></div>
```
위와 같은 요소에 react를 렌더링 하기 위해 ReactDOM 을 사용한다.

```cpp
const element = <h1>Hello, world</h1>
ReactDOM.render(element, document.getElementById('root'));
```
*root* 라는 이름을 가진 요소에 `<h1>Hello, world</h1>`을 렌더링시킨다.

그리고 *setInterval()* 을 사용해서, 매 초마다 func을 실행시킬 수 있고,
*Date()* 를 사용해 현재 시간을 가져와 *toLocalTimeString()* 으로 원하는 언어 방식의 시간을 표현할 수 있다.

Ex)
```cpp
function tick() {
  element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocalTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```


# React 4. Components and Props

```cpp
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

위의 코드를 *ES6* 를 사용해 아래와 같이 쓸 수 있다.

```cpp
class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

JSX를 사용하여 직접적으로 props 에 값을 주어 나타나게 할 수 있다.
```cpp
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name='Sara' />
ReactDOM.render(
  element,
  document.getElementById('root')
)
```

이와 같이 사용하면 렌더링 코드를 훨씬 간결하고 보기좋게 코드를 쓸 수 있다.


- Props are Read-Only
react 는 props 변수 값에 변화를 주는것에 엄격하기 때문에 새로운 변수나 배열을 만들어 사용해야한다.
