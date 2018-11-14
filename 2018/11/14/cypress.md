# 2018 - 11 - 14



### cypress
```cpp
cy.server()
cy.route(‘GET’, ‘/api/todos’, [
	{id: 1, name: ’One’, isComplete: false},
	{id: 2, name: ’Two’, isComplete: false},
	{id: 3, name: ’Three’, isComplete: false},
	{id: 4, name: ’Four’, isComplete: false},
])
```

*package.json*
```cpp
"scripts": {
    "cypress": "cypress open",
    "cypress:all": "cypress run”,
}
```

*commands*
as() : get() or wati() 의 ele에 이름을 정해주고, @로 불러와 사용할 수 있다.
and() : should() 에 이어서 확인할 내용을 담음
Invoke() : function 또는 func 의 값을 가짐
trigger(eventName) : event on link
