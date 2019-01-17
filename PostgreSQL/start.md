# PostgreSQL 을 처음 사용하며..(start)


password 인증 부분이 자꾸 막혀 삽질만 이틀째..

이유도 찾지 못한채 설치와 삭제를 반복하는 중이다.

그래서 처음 시작하며 나에게 조금이나마 도움이 되었던 출처를 남길 생각이다.

[늘픔](http://neulpeumbomin.tistory.com/9)

[엄마손파이썬](http://kez1994.tistory.com/330)


## 드디어 PostgreSQL Password 인증 문제를 해결했다..

이틀 삽질한 결과 찾아낸 해결책을 적는다.( vi를 사용한다. 난 처음 접해봄 )


terminal 에서
```cpp
sudo su postgres
```

을 입력한다.


postgres 에 들어갔다면 *bash-3.2$* 이렇게 command line? 이름이 바뀌었을거다.

여기서
```cpp
cd /Library/PostgreSQL/11/data
```

를 입력하고 *ls* 를 입력해보면 *pg_hba.conf* 파일이 보일거다.
(참고로 위 커맨드 명령어 중, *11* 은 버전이다. 본인이 설치한, 또는 설치되어 있는 버전을 입력하면 된다.)


여기서! pg_hba.conf 파일을 수정하기 위해
```cpp
vi pg_hba.conf
```

라고 입력하면 파일을 열 수 있다. (vi 사용법은 구글링하면 널려있으므로 작성하지 않는다, 나도 vi 명령어는 아는게 없다 )

방향키로 아래를 쭉 내리다보 *local* 과 *host* 라고 적혀있고 그 옆을 보면 *md5* 라고 적혀 있는 부분이 있을거다.
여기서 아마 local, host, host 가 세트로 두개가 있을건데 수정할 부분은 IPv4 host 위에 있는 local 을 바꿀거다

```cpp
- local all all md5
+ local all all trust
```

참고로 키보드 *a* 를 누르면 수정이 가능하다. 위와 같이 변경했다면 shift + z 두번 누르면 저장하고 종료할건지 물어보면 엔터!


그 후
```cpp
psql
```

을 치면, 바로 *postgres=#* 이처럼 나올거다. 그럼 여기서
```cpp
ALTER USER postgres WITH ENCRYPTED PASSWORD 'your-password';
```

*your-password* 엔 자신이 쓸 pw를 입력한다.

라고 입력하고 엔터를 누르면! 비밀번호 변경 완료!

그럼 *\q* 를 입력해 postgres에서 나가면 다시 pg_hba.conf 파일을 원래대로 바꾼다.


```cpp
cd /Library/PostgreSQL/11/data
```

pg_hba.conf 파일을 수정하기 위해
```cpp
vi pg_hba.conf
```

```cpp
- local all all trust
+ local all all md5
```

*a* 를 누르면 수정이 가능, shift + z 두번 누르면 저장하고 종료할건지 물어보면 엔터!


그럼 이제 본인이 설정한 비밀번호로 접속이 가능할것이다!! (나와 같은 상황이였다면^^)
