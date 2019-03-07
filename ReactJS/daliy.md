# daliy note


### 2019.03.07
공부을 안했다는 것을 증명하는 날이였다.

```cpp
<Test
  key={`${index}`}
  index={index}
  value={test_text}
/>
```
key 값에 변동이 되는 값을 주면 map() 을 할 경우, 모든 데이터가 처음부터 끝까지 렌더링되기 때문에
위와 같이 index 라는 고유 값을 주면, 변동된 데이터만 구분해 수정이 끝나면 렌더링 할 수 있게 된다.
