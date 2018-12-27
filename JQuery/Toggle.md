# JQuery Toggle?



## Toggle이 뭔지 찾아보고자 했다

### toggle()은 어떤 요소의 보임을 조절하는 함수이다. (T/F 같은 느낌)

Ex)
```cpp
<!DOCTYPE html>
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
  <button>Toggle</button>
  <p>Hello</p>
  <p style="display: none">Good Bye</p>
</body>

<script>
$("button").click(function() {
  $("p").toggle("slow");
});
</script>
</html>
```

위 코드를 실행시키면 나오는 버튼을 클릭 시, "Good Bye" 의 속성이 none 과 display를 조절한다. (Toggle로)
toggle() 안에 있는 "slow" 는 말그대로 속도! (fast : slow = 600 : 200 Milliseconds)

정말 간단하게만 찾아봤다..


[출저](http://findfun.tistory.com/366)
