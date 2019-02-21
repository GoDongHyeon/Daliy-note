# Test Structure



```cpp
// describe() = context()
// it() = specify()
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
위 코드 주석에 나와있는 것과 같이 describe() 와 context()는 동일한 역할을 하고,
it() 과 specity()는 동일한 역할을 한다.

사실 context()와 specify()를 아예 안써도 되지만,
테스트 코드 구문과 테스트 상황을 구별할 수 있는 좋은 API라고 생각한다.

예를 들어,
- describe() 안에 describe()를 사용해야 할 경우, 자식 describe() 대신 context()를 사용
- 예외 상황을 테스트하는 코드는 it() 대신 specify()를 사용
하는게 가독성을 높이는 방법이라고 생각한다.
