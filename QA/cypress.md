# Cypress

글쓴이는 Cypress 사용 경험을 시작으로 테스트 코드는 왜 필요한 것이며, 테스트를 통해 무엇을 얻었는지 쓰고싶어졌다.(참고로 글쓴이는 JavaScript를 사용)
첫 회사를 다니며 실무 개발을 처음 접하게 되어, 프로덕트의 코드를 이해하기 위해 시작하게 된것이 테스트 코드이다.

바로 글을 쓰자면, 글쓴이는 E2E 테스트를 2가지로 구분해서 보고있다.
- 로직 테스트(Jest)
- UI 테스트(Cypress, Selenium)
이다. (글쓴이가 사용해본건 세가지가 끝..)

Jest는 구글링하면 잘 정리되었있는 블로그들이 많아서 이 글에서는 다루지 않는다.(많이 사용해본것이 아니라서 잘 모른다)
UI 테스트 중에서
*Cypress* 와 *Selenium* 중 Cypress를 선택하게 된것은 별다른 이유는 없다.
처음 접한것은 *Selenium* 이였지만, 나중에 Cypress가 JS에 최적화된 프레임워크라는 것을 알고 사용하게 되었다.

참고로 이 글은 Cypress를 한번이라도 사용해본 사람들에게 익숙하면서도, "아~ 그렇구만" 하는 반응이 다인 내용이다.


## Test 작성
---

테스트를 어디까지 해야 ""테스트 코드를 다 짰다!" 라고 기준을 잡기가 굉장히 애매하지만 글쓴이는 크게 세 가지로 나누었다.

1. 되야하는 상황
2. 되지 않아야 하는 상황
3. 예외 상황

글쓴이가 위 세 가지 테스트 코드를 작성할 때,
1.번은 본인 혹은 사내 프로덕트를 사용할 떄 그냥 보면서 작성하면 되기때문에 다 작성을 하는 편이다.
2.번은 이슈가 발생할 수 있는 상황을 예측해서 작성해야 하기 때문에 직접 QA를 진행하고 찾아내서 작성하는 편이다.
3.번은 예측하기 어렵기 때문에, 버그 발생, 사용자의 버그 리포팅을 통해 발견되는 경우 버그 해결 후 테스트 코드를 작성한다.


## 프로세스
---
이 부분을 쓰기에 앞서 해당 *프로세스* 는 (첫 회사)사내 특성상 코드 변경이 좀 많이 이루어지는 편이라 직접 QA와 테스트 QA를 나누었다.

테스트를 작성까지의 과정은 대략 이러하다.
1. 테스트 시나리오(사실 잘 안쓴다.. 일이 많아지기도하고, 문서와 상관없이 테스트 코드가 수정되는 일이 많기 때문이다)
2. 되야 하는 상황(테스트 작성)
3. 직접 QA
4. 되면 안되는 상황(테스트 작성)

+. 버그 발생시, 혹은 예상되는 버그에 대한 테스트 작성 (똑같은 실수를 하지 않기 위해서)
+. i18n 확인 코드 작성

어디까지나 객관적이고 회사 혹은 작성자 특성에 따라 가지게된 프로세스이다.


## CircleCi & Local Test
---
Cypress 테스트를 할 때  

(1) cypress open (로컬 - no headless)
(2) cypress run    (로컬 - headless)
(3) cypress run    (CircleCi - headless)

cypress는 "open" 과 "run" 두 가지 방법으로 테스트를 실행한다. (3.은 2.와 환경이 다름)

테스트를 해보면 (1) 방식의 테스트와 (2), (3)의 테스트 실행 결과가 다를 때가 많다.
그래서 (3) CircleCi로 결과를 확인하기 보단, 로컬에서 (2)로 한번 더 테스트 돌려보시는 것을 권장한다.
  (2)와 (3)는 테스트 환경이 다르다보니 역시 테스트 결과가 다를 때가 많았다.

Reference
- [Headless(wait time)](https://www.notion.so/ab180/Cypress-Guideline-39d26b9660d549279363d9ddddd13ca2#08ac0b633b3e406b975075eea6582e38)


## Test Structure
---
EX)
```cpp
  // describe() = context()
  // it() = specity()
  describe('test math functions', () => {
  	context('math', () => {
  		it('can add numbers', () => {
  			expect(add(1, 2)).to.eq(3)
  		})
  		specify('can divide numbers', () => {
  			expect(divide(27, 9)).to.eq(3)
  		})		
  	})
  })
```

cypress에서는 테스트 구분 메소드가 describe()와 it() 외에 context()와 specify()가 있다.
context()는 describe()와 같고, specify()는 it()과 같다. (기능에는 차이가 없는 것으로 알고 있음)

그래서 context()와 specify()를 사용하는 때를 다음과 같이 하면 좋을 것 같다.

- describe() 안에 describe()를 사용해야 하는 경우 ⇒ 자식 describe() 대신 context()를 사용
- 예외 상황(혹은 버그) 테스트인 경우 ⇒ it() 대신 specify()를 사용

EX는 Reference에 나와 있는 예시를 썼으며, 문서에 나와 있는 add(), divide()는 굳이 쓰진 않았다.

Reference ([https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Test-Structure](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Test-Structure))


## Selector
---

cypress를 처음 시작해보면 특정 요소를 get하기 위해서 흔히 id, class, tag, attributes, nth-child를 사용하는 경우가 많다.
이러한 get 방식이 나쁜 것은 아니지만, cypress에서 말하듯 data-cy, data-test, data-testid를 사용하는 것을 권장한다.
왜냐하면, 아래와 같이 Element에 직접 data-* 를 넣어주는 작업이 필요하지만, 나중에 selecting이 훨씬 간결하고 유지 보수가 적게 든다.

```cpp
    <button id="main" class="btn btn-large" data-cy="submit">
    	Submit
    </button>
```
물론 배포시에 data-* 가 보이면 이쁘지 않기 때문에 지워주기로 한다.(링크 참고)
[배포시 참고](https://www.npmjs.com/package/babel-plugin-react-remove-properties)

> tip. data-cy는 컴포넌트 elements에 넣을 수 없다.

```cpp
  import Button from 'components/button'; // 버튼 컴포넌트

  <Button
  	data-cy='btn-select'
  />
```
말 그대로 컴포넌트에 data-cy를 넣어도 Selecting 되지 않을 뿐더러 attribution으로 적용되지 않는다.

Reference ([https://docs.cypress.io/api/cypress-api/selector-playground-api.html#Arguments](https://docs.cypress.io/api/cypress-api/selector-playground-api.html#Arguments))


## Unnecessary-Waiting
---

대부분의 프로덕트는 api를 불러오는 시간이 많이 필요할 때가 많다. 예를 들면,  visit() 후 api를 불러올 wait time을 줘야하는 경우가 있다

> request() 불필요한 wait()

```cpp
cy.request('https://localhost:8080/user-site/');
cy.wait(5000);
```
request()는 서버가 응답 할 때까지 다음 명령이 실행되지 않기 때문에 wait()을 쓸 필요가 없다. 이미 응답이 끝난 후 5초를 더 기다리게 된다.


> visit() 불필요한 wait()

```cpp
cy.visit('http://localhost/8080');
cy.wait(5000);
```
visit() 또한 *load* 가 될 때까지 기다렸다가 다음 명령이 실행되기 때문에 역시 wait()을 쓸 필요가 없다.


**이를 해결하기 위한 방법 예시**
```cpp
cy.server()
  .route('GET', /users/, [{ 'name': 'Maggy' }, { 'name': 'Joan' }])
  .as('getUsers')
  .get('#fetch').click()
  .wait('@getUsers')  // <--- wait explicitly for this route to finish
  .get('table tr').should('have.length', 2)
```
기다려야 하는 이벤트에 이름을 주고, 그 이름을 wait('@Name') 이와 같이 사용해 이벤트가 끝날 때까지 기다리는 방법이 있다. (* route() 를 썼을 경우만 해당)

Reference ([https://docs.cypress.io/guides/references/best-practices.html#Unnecessary-Waiting](https://docs.cypress.io/guides/references/best-practices.html#Unnecessary-Waiting))


## cy.wrap()

### (**TypeError: selector.split is not a function**) 에러 참고
---

wrap()과 get()의 다른점은 객체가된 Element를 선택할 수 있는가의 차이.
get()으로 element를 선택할 때는

```cpp
cy.get('div.test_div');
```
위와 같이 선택하지만, cy.wrap()은

```cpp
cy.get('div.test_div')
	.each(($el, index, list) => {
		cy.wrap($el); // get($el)으로는 element를 잡을 수가 없다
  );
```
or
```cpp
    cy.get('div.test_div')
    	.then(($t_div) => { // then에서 $t_div 라고 이름을 정해주었을 때
    		cy.wrap($t_div); // get($t_div)으로는 element를 선택할 수가 없다
    	);
```
위의 경우 wrap()을 사용합니다. 이를 get()으로 selecting하려 할 시,

**TypeError: selector.split is not a function**

이와 같은 에러 메세지가 뜬다.(위 메세지가 떴을 때 한번쯤 get()과 wrap()을 의심해보자)


## Headless 테스트 (circleCi, 로컬 - yarn cypress run)

---

> Render 시간이 짧을 시 기능 누락

테스트 중 일부 기능이 제 역할을 하지 못하는 경우가 있는데,

예로, circleCi로 테스트할 시(or 로컬에서 yarn cypress:run) view의 렌더가 끝나도, API들이 모두 렌더되지 않는 경우가 있다.

예)
테스트 할 때, 서버에서 데이터를 불러오는 Dropdown을 클릭해도 list가 나오지 않는 경우가 있는데,
처음 페이지를 렌더할 때 wait()을 1~2초 정도 넣으니 문제 없이 테스트가 성공되는 경우가 있다.
(이 경우 server().route()로 해결)


## Cypress 지원 예정
---

아래 내용은 현재 Cypress에서 개발 혹은 지원 에정인 기술에 대한 글이다.

- Browser 제한
    Firefox, Edge, IE11 까지 지원하는 개발을 진행 중이다.
    더불어 모바일 테스트 개발도 이루어 지고 있는 것 같다.

    Reference ([https://github.com/cypress-io/cypress/issues/310](https://github.com/cypress-io/cypress/issues/310))

- Action을 통한 테스트

    Reference ([https://www.cypress.io/blog/2018/11/14/testing-redux-store](https://www.cypress.io/blog/2018/11/14/testing-redux-store))

- Copy / Paste 기능 feature
    input 혹은 textarea를 사용하는 경우, 기존 데이터를 건드리지 않으며 테스트를 하기 위해서는 copy/paste 기능이 필요하다고 생각한다
    현재 Cypress에서는 이 기능을 feature 작업 중
