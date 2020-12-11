const Emitter = require('./emitter1');
//app.js와 같은 경로의 emitter1파일을 찾고 모듈을 가져온다
const em = new Emitter();
//emitter모듈로 가져온 Emitter클래스의 인스턴스 생성

em.on('greet', () => {
    console.log('Hello First');
});

em.on('greet', () => {
    console.log('Hello Second');
});
// on메소드에 greet문자열과 콜백 함수를 넣어 이벤트 등록 -- on은 리스너 들을 모아놓는 형태
//여기서 등록을 해야 emit에다 타입을 넣었을때 꺼내다 쓸수 있음

em.emit('greet');
//this.events에서 'greet'속성을 찾고 해당 속성의 배열 값을 forEach로 돌면서 콜백 함수들을 모두 실행