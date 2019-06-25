# Basis

### 배열과 문자열 메소드
- concat() : 배열합치기, 문자열도 가능
- join() : 배열을 문자열로 바꿀 때 사용
- indexOf, lastindexOf : 배열이나 문자열안의 원소를 가지고 인덱스를 찾을 수 있음
- slice(s_index, e_index) : 기존 배열을 잘라서 새 배열을 만듬(기존 배열은 변하지 않음/ e_index 직전의 위치까지만 자름)
- splice(s_index, numelement) : s_index 부터 numElement 갯수만큼 자라냄
- split : 문자열을 배열로 나누고 싶을 때 사용하는 메소드

- drop
- drag
- preventDefault : 이벤트 동작중 다른이벤트가 발생하지 않도록 다른 기능을 정지
- dataTransfer : 드래그 앤 드롭 동작중 끌고있는 데이터를 보유
- (dataTransfer).dropEffect : 끌어 놓기 작업중 커서에 발생하는 표시
- appendchild() : 노드를 노드의 마지막 자식으로 추가
- constructor : 클래스가 오브젝트로 생성되고 초기되기 위한 특별한 메소드
- addeventlistener('event', event_nm) : 지정된 요소에 이벤트 처리기를 연결
- extends : 클래스를 다른 클래스의 자식으로 만들기 위함 class 선언 (ex - class folder extends desktop)
- super : 객체의 부모 기능에 액세스 및 호출 하는데 사용


### 변수 등록
- Scope : 변수의 유효범위
- 전역변수: 전역에서 쓸 수 있는 변수(가급적 안쓰는게 좋음)
- 지역변수 : 한 구간('{}') 안에서만 사용가능한 변수

- const
  1. 값을 바꿀 수 없다.

- let
  1. 값을 바꿀 수 없다
  2. 블록스코프이다 : 한 블록 안에서만 사용 가능하다.

  - 일단 변수 선언은 const로 해라.
  - const로 안되는 경우 let 사용

> 재귀 : 함수가 함수 안에서 자신을 호출하는 것
  - 재귀하기 위해서는 매개변수가 달라져야한다.
  - 재귀하면 종료 시킬 수 있는 조건이 필요하다.
```cpp
ex)
var rsum = function(a,b){
    if(a==b){
        return a;
    }
    return b + rsum(a, b-1);
}

var x = rsum(1,10);
console.log(x);
```

> - 피보나치 수열 : f(0)=0 , f(1)=1, f(1)+f(0)= 1, f(2)+f(1)=2;
  - ex) var fibo = function(n){
    if(n ==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        return fibo(n-1) + fibo(n-2);
    }
};
*위 방법은 반복하는 계산이 많아 오래걸림*

> *두번째 방법 빠름..*
```cpp
var arr =[0, 1];

function fibo_d(n) {
    if(arr[n] == undefined) {
        arr[n] = fibo_d(n - 1) + fibo_d(n - 2);
        }
    return arr[n];
}
```

> Date.now() : 수행시간  측정
  - ex) var t1 = Date.now();
```cpp
foo(); //some code to measure time
var t2 = Date.now();

var time = t2 - t1;
console.log(time);
```

> Math 객체
  - Math.E
  - Math.PI
  - Math.SQRT2
```cpp
 Math.abs(x); 정수
Math.sin(x); 싸인
Math.floor(x); 바닥
Math.ceil(x); 천장
Math.round(x) 반올림
Math.max(a, b); 최대
Math.min(a, b); 최소
등등

- Math.random();
  ex) Math.floor(Math.random() * 5)+1  (1~4까지 나옴)
```
