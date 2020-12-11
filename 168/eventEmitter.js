
//node.js 내장 모듈 ㄷevents를 사용해서 167과 동일하게 구현
const Emitter = require('events');
const eventsConfig = require('config').events;
const em = new Emitter();
// 내장 모듈 events불러 온다 events의 종류를 모아둔 config모듈을 불러온다
//노드 js에서도 events는 클래스라서 new키워드 필요

em.on(eventsConfig.GREET, () => {
    console.log('somewhere, some said heelo');
});

em.on(eventsConfig.GREET, () =>{
    console.log('a greeting occurred!');
});
//이벤트 종류를 직접 문자열로 대입했던 부분을 config파일로 별도관리하도록 수정

em.emit(eventsConfig.GREET);
