# Cypress Setting

*package.json*
```cpp
"scripts": {
    "cypress": "cypress open",
    "cypress:all": "cypress run”,
}
```


*start code*

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
