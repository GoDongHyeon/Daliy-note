# Programmers 연습 문제 (Javascript)


### Level 1 K번째 수

[ 문제 ](https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript)

*문제 풀이*
```cpp
function solution(array, commands) {
    var answer = [];
    for(let i in commands) {
        let a = array.slice(commands[i][0]-1, commands[i][1]);
        a.sort();
        answer.push(a[commands[i][2]-1]);
    }
    return answer;
}
```


*코드 채점 결과*
85.7 / 100.0
