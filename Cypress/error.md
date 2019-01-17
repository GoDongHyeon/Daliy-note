# Cypress Error


- 예외 상황의 에러 핸들링 끄기
```cpp
Cypress.on('uncaught:exception', (err, runnable) => {
    // 예외 상황의 에러 핸들링 끄기
    return false
 })
```
