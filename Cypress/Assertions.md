# Asserting About Elements



- 사용하면 유용할 API
```cpp
cy.get(':checkbox').should('be.disabled')

cy.get('form').should('have.class', 'form-horizontal')

cy.get('input').should('not.have.value', 'US')
```


- Settimeout()
```cpp
$('button').on('click', (e) => {
  setTimeout(() => {
    $(e.target).addClass('active')
  }, 2000)
})
```
