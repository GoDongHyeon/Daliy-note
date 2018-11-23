# 2018 - 11 - 16



### cypress
```cpp
Cypress.on('uncaught:exception', (err, runnable) => {
    // 예외 상황의 에러 핸들링 끄기
    return false
 })
```

*시작 코드*
```cpp
before(() => {
    cy.login();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });
```
