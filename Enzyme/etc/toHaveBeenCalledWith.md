# toHaveBeencalledWith



```cpp
// onToggle에 mockFunction이 들어있고 onToggle이 false 를 가지고 호출이 되는지 확인
it('should isChecked change when checkbox changed', () => {
  const mockFunction = jest.fn();
  const wrapper = shallow(<Toggler isChecked onToggle={mockFunction} />);
  expect(wrapper.state('isChecked')).toBe(true);
  const clickEvent = { target: {checked: false} };
  wrapper.find('.Toggler-checkbox').simulate('change', clickEvent);
  expect(wrapper.state('isChecked')).toBe(false);
  expect(mockFunction).toHaveBeenCalledWith(false);
});
```

toHaveBeenCalledWith() 괄호 안에는 인자가 들어감
인자로 ( 위 코드중 )
```cpp
const clickEvent = { target: {checked: false}}
```

*clickEvent* 가 들어갈 수 있고



```cpp
(etc value) number, string, boolean
```

등이 들어갈 수 있다.
