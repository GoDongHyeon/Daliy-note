# jest 를 사용하면서 느낀점


예외상황이 얼마든지 있다

wrapper.prop() 로 찾을 수 없는 상황이 생기기도한다.
이때

```cpp
wrapper.instance().prop.ValueName
```
으로 찾을 수 있다.
