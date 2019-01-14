# Sequelize Query
[출처](http://blog.jeonghwan.net/sequalize-%EC%BF%BC%EB%A6%AC/)


### like

```cpp
models.Foo.findAll({
  where: { name: { like: '%keyword%' }}
});

models.Foo.findAll({
  where: ['name like \?', '%keyword%']
});

```
like 조건절은 위와 같이 두 가지 방법으로 사용.


### lt, gt, lte, gte, between

```cpp
models.Foo.findAll({
  where: {createAt: {lt: new Date()}}
});

models.Foo.findAll({
  where: {createAt: {gt: Date.parse('2019-01-01')}}
});

models.Foo.findAll({
  where: {createAt: {between: [new Date(), Date.parse('2019-01-01')]}}
});
```

값의 대소를 비교하는 경우 lt, gt, lte, gte를 사용한다. Date.parse() 같은 날짜 함수를 사용한다.
만약 구간을 검색할 경우 between 을 사용한다.


### join

```cpp
models.Foo.find({
  include: [models.boo]
});

models.Foo.find({
  include: [{
    model: models.boo
    where: {}
  }]
});
```

조인할 대상을 *include* 에 배열로 넘겨준다(배열이기 때문에 가능).
조인 조건은 테이블 스키마 작성시 설정한 Association 관계에 따라 알아서 선택된다.
외래키 이외 조건을 추가할 시 *{model: , where: }* 객체에 조인 조건을 설정하여 배열에 추가한다.


### orderby, limit

```cpp
models.Foo.findAll({
  offset: 0,
  limit: 100,
  order: 'createAt desc'
});
```

페이징 기능을 구현할 때 많이 사용하는 쿼리다.


### groupby, count()

```cpp
models.User.findAll({
  attributes: ['GroupId', [models.sequelize.fn('count', '*'), 'count']],
  group: 'GroupId'
})
```

특정 키로 그룹핑하고 결과를 카운팅하여 *count* 로 이름 붙인다.


### attrubutes, alias, left()

```cpp
models.Foo.findAll({
  attributes: [
    'id',
    ['name', 'userName'],
    [models.sequelize.fn('left', models.sequelize.col('createAt'), 10), 'date'],
  ],
  where: {}
});
```

특정 필드만 얻고자 할 경우 *attributes* 에 배열로 필드명을 넘겨준다.
배열안에 ['필드명', 'alise명'] 배열로 alise 를 설정할 수도 있다. 필드명에 함수를 적용할 때는 *models.sequelize.fn()* 을 사용한다.
배열의 세번째 코드는 *createAt* 필드 값의 좌측 10자리 문자열을 반환하여 *date* 로 이름 붙인 예제이다.


### Raw Query

```cpp
var query = 'select * from Foo where name = :name';
var values = {
  name: 'chris'
};

models.sequelize.query(query, {replacements: values}).spread((results, metadata) => {
  // 쿼리 실행 성공
}, (err) => {
  // 쿼리 실행 레어
});
```

직접 쿼리를 돌려야 할때는 *models.sequelize.query()* 함수를 사용한다.
쿼리문에 *:name* 으로 설정한 뒤 replacements 에 해당 name 키가 있는 객체를 넘겨주면 쿼리의 *:name* 을 replacements 에 있는 값으로 치환하여 쿼리를 실행한다.


### findOrCreate()

```cpp
models.User.findOrCreate({
  where: {id: req.user.id}
}).spread((user, created) => {
  if(created) {
    // create 실행됨
  }

  // user 객체
});
```

테이블의 특정 로우를 찾는 것, If 없을 경우 insert 구문을 실행하여 로우를 생성한다.( 몽고db의 upsert()와 비슷 )


### literal()

```cpp
User.findAll({
  attributes: [
    ['name', 'username'],
    [Sequelize.literal('age' + 1), 'age']
  ]
});
```

쿼리 문자열을 추가해 주는 기능



### Sequelize 장점
  1. 쿼리를 길게 입력하지 않아도 알아서 보내준다.
  2. 자바스크립트 코드로 테이블을 디자인하면 자동으로 쿼리가 실행되어 테이블을 만든다.
  3. 테이블 컬럼별로 검증자(validator)을 설정하여 CRUD(Create, Read, Update, Delete) 작업시
     맞지 않는 컬럼 값을 입력하면 에러 메세지를 띄워준다.
