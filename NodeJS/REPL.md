# NodeJs REPL


## REPL(Read Eval Print Loop)
Read - 유저의 값을 입력받아 javaScript 데이터 구조로 메모리에 저장한다.
Eval - 데이터를 처리(Evaluate) 한다.
Print - 결과값을 출력
Loop - Read, Eval, Print 를 유저가 Ctrl + C 를 두번 눌러 종료할때 까지 반복.

## REPL 커맨드
Ctrl + C - 현재 명령어를 종료한다.
Ctrl + C (2번) - Node REPL 을 종료
Ctrl + D - Node REPL 을 종료
위/아래 키 - 명령어 히스토리를 탐색하고 이전 명령어를 수정
Tab - 현재 입력란에 쓴 값으로 시작하는 명령어 / 변수 목록을 확인
.help - 모든 커맨드 목록을 확인
.break - 멀티 라인 표현식 입력 도중 입력을 종료
.clear - .break 와 같음
.save filename - 현재 Node REPL 세션을 파일로 저장
.load filename - Node REPL 세션을 파일에서 불러온다.

### Underscore( _ ) 변수
밑줄( _ ) 변수는 최근 결과 값을 지칭한다.


### 알아봐야 할 것
password 보안에 대해.  
  ㄴEncrypt? Hash?


[출처](https://velopert.com/235)
