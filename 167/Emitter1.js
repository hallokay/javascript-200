
//event Emitter 이해

// 간단히 이벤트라는 용어가 어떤 의미로 다가오는지 떠올려 보자
//어떤 사건이 예외적이거나 중요하게 발생되는 것을 이벤트라고 명칭
//발생된 이벤트에 대한 응답으로 반응 하는 것을 리스너라고 한다 
//event emitter는 바로 이 이벤트 -- 리스너 패턴으로 구현됨
class Emitter {
    constructor(){
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }
    //메소드 on은 매개 변수로 type과 listener를 전달 받는다. events에 키key로 type을 지정
    //해당 키 값에 listener추가 이는 어떤 종류의 이벤트인 경우, 해당 이벤트의 listener들을 모아 놓는 형태로 보면 됨
    
    emit(type) {
        if(this.events[type]) {
            this.events[type].forEach((listener) => {
                listener();
            });
        }
    }
    //메소드 emit은 매개 변수로 type을 받는다 따라서 events에 type으로 저장된 값이 있는지 확인하고 
    //값이 유효한 경우 해당 이벤트의 listener들을 forEach로 순차적으로 돌아가면서 실행

}

module.exports = Emitter;
//emitter클래스를 모듈로 선언

