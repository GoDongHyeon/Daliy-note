# 2018 - 11 - 13



### redux 문법 중..
State 선언중에
```cpp
// @flow 문법
stateName = {
	app_name?: string,
}
```
State 이름중에 ‘?’ 가 들어가 있는 경우 isRequired 가 옵션이라는 뜻( 써도되고 안써도 된다 )

### cypress
cy.contains() : 내용으로 요소를 찾을 때 사용
click() : 찾은 요소를 클릭
```cpp
cy.contains(’type')
```

cy.get() : css 클래스를 기반으로 요소 선택
cy.type() : 선택된 입력에 텍스트를 입력
cy.should() : 입력 값이 다름 텍스트로 입력 된 텍스트를 반영하는지 확인
```cpp
cy.get('.email')
      .type('gdh145859+1@ab180.co')
      .should('have.value', 'gdh145859+1@ab180.co')
```

cy.exec() : 시스템 커맨드 실행
cy.task() : Node.js via 플러그인 코드 실행
cy.request() : HTTP 요청을 보냄
