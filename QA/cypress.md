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
