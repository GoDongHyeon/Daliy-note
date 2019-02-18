# jest로 file 에 대한 test



```cpp
it('call props.image with file', () => {
    const wrapper = shallow(<TestForm {...requiredProps} />);
    const spy = spyOn(wrapper.instance(), 'testChangeImgFile');
    const file = new File(['(⌐□-□)'], 'test.png', { type: 'image/png' });
    const changeEvent = { target: { files: [file] } };
  });
```

'png' 파일만 받아서 파일을 upload하는 테스트 코드를 작성했다.(완벽한건 아니다.)
