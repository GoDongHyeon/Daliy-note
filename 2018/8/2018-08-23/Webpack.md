웹 팩

서로 연관 관계가 있는 웹 자원들을 js css img와 같은 static한 자원으로 변환해주는 모듈 번들러
모듈의 연관성을 가지고 정리해 모듈 의존성 관리

code based Modules 관리
   - 모듈화의 필요성 : AMD, Commmon js, ES6 를 통합

js 모듈화 문제?
  - 상기 모듈 로딩 방식의 문제 : 전역변수 충돌, 스크립트 로딩 순서, 복잡한 관리
  - 이를 위해 AMD, Webpack 이 등장

Webpack 의 철학
  - Everything is Module ( js, css, html 모든 형태 모듈 형태로 로딩가능)
  - Load only 'what' you need and 'when' you need
    - 필요한 모듈만 로딩 가능
