# 2018 - 11 - 07



### selenium nodeJs
Web driver.promise.ControlFlow() : 비동기적인 테스크를 실행시켜줌

비동기에서는 try catch 가 오류를 잡아내지 못하기 때문에 uncaughtException를 사용하여 잡아낸다
*Ex)*
```cpp
//메인(index.js)
 process.on('uncaughtException', function (err) {
   //예상치 못한 예외 처리
   console.log('uncaughtException 발생 : ' + err);
 });

var say = require('./say.js’);

try {
   say.hello();
 }
catch (exception) {
   console.log(exception);
 }
```
