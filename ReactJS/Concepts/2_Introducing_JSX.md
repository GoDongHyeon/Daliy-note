# JSX - Introducing JSX

### Embedding Expressions in JSX

```cpp
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```


### JSX is an Expression Too
```cpp
function getGreeting(user) {
  if(user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### Specifying Attributes with JSX
```cpp
const element = <div tabIndex="0"></div>;
or
const element = <img src={user.avatarUrl}></img>;
```

### JSX Prevents Injection Attacks
```cpp
const title = response.potentiallyMaliciousInput;

const element = <h1>{title}</h1>;
```

### JSX Represents Objects
```cpp
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
아래와 같이 사용 가능

```cpp
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello,world!'
);
```

```cpp
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world1'
  }
};
```
