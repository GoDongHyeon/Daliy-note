# jest 예외 상황



- test 코드를 작성 중, prop을 찾을 때 *wrapper.prop()* 로 찾을 수 없는 상황이 생기기도한다.

이때,
```cpp
wrapper.instance().props.ValueName
```
으로 찾을 수 있다.(최선의 방법이라고 한다.)
