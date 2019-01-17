# Cypress Commands

*commands*

as() : get() or wati() 의 ele에 이름을 정해주고, @로 불러와 사용할 수 있다.

and() : should() 에 이어서 확인할 내용을 담음

Invoke() : function 또는 func 의 값을 가짐

trigger(eventName) : event on link

each(() => {}) : 선택한 Elements 의 작업을 반복한다.

filter(조건) : 조건에 합당한 Elements 만 통과시킨다.

find() : Elements의 tagName을 찾음 (div, footer, nav 등등)

eq(num) : num 번째에 있는 Elements를 선택

within() : 요소 내의 Elements를 찾을 수 있음.
```cpp
cy.get(‘.list’).within(($list) => {})
```

hash() : 새로 로딩된 페이지의 url을 가져옴
