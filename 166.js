// Node.js예외처리

//두가지의 에러 처리 방법이 있다
// 첫번째 == 비동기async 모듈 또는 함수의 콜백에서 첫번째 매개 변수로 에러 정보를 반환
//이에 따라 비동기 모듈 또는 함수를 호출할때에는 먼저 첫번째 매개변수인 에러 정보를 우선적으로 확인해야함 
//에러 정보가 빈 값인 것을 확인한 이후 다음 작업을 수핼하는 것을 권장

//두번째 == try-catch, throw이다
//자스 예외 처리 방식과 동일  주의할점은 비동기에서 이걸 적용하는 것은 잘못된 방법이다.
//무조건 비동기 함수의 에러처리는 콜백함수를 활용해야함
//반대로 콜백함수로 처리하지 않는 그외 패턴 동기 - sync 패턴 등 에대해서는 적용하여 에러 처리함

'use strict';
//비동기 함수에서 콜백으로 사용할 함수 cb함수 정의 첫번째 매개변수는 err변수 두번째는 결과값을 정의
const cbFunc = (err,result) => {
    if(err && err instanceof err) return console.error(err.message);
    //만일 err에 값이 있으면서 동시에 err가 Error객체인지 확인 
    //이경우 Error객체의 message속성을 콘솔로 출력하고 반환으통해 함수 종료시킴
    if(err) return console.error(err);
    //만일err에 값이 있으면서 Error객체가 아닌 경우 이 구문 실행 콘솔에러로 err변수 출력후 종료

    console.log('에러를 반환하지 않습니다', result);
    //err를 모두 확인해도 없으면 이게 출력 에러가 없기때문에 정상이라는 의미 변수 값을 콘솔로 출력
};

//비동기 함수를 직접 선언 첫번째 매개변수로 불리언 자료형이 고려된 변수를 두번째에는 콜백변수를 정의
const asyncFunction = (isTrue, callback) => {
    const err = new Error('this is error');
    //new Error를 통해 객체를 생성 하여 변수를 err에 대입 
    // Error객체 생성시 대입된 문자열은 Error객체의 message속성으로 값이 할당됨
    if(isTrue) return callback(null, isTrue);
    //첫번째 매개변수로 대입된 값에 따라 콜백으로 반환되는 값이 달라짐 
    //isTrue가 true이면 callback인자에 null이 들어가고  추가로 전달할 값은 두번째 인자에 들어감
    else return callback(err);
    //false이면 에러 정보를 첫번째 callback에 넣는다

};

asyncFunction(true, cbFunc);
asyncFunction(false, cbFunc);



// ============================================================================================================
const fs = require('fs');
//이번에는 비동기가 아닌 내장 모듈 내장 모듈 가져온다 


try {
    const fileList = fs.readdirSync('/undifined/');
    //fs.readdirSync는 파일 시스템fs에서 동기패턴으로 실행되는 함수 --별도의 콜백함수 없이 진행됨
    fileList.forEach(f => console.log(f));
    //결과 값이 바로 fileList변수에 대입되고  다음줄에서 파일 정보를 콘솔로 출력
} catch (err) {
    if(err) console.error(err);
}
//try에서 에러 발생시 catch로 넘어옴 ('/undifined/');경로는 누가 만들어 두지 않았다면 해당 경로가 없다고 에러 반환
//에러 발생한 경우 한번더 에러 정보 여부를 확인하고 console.error로 에러정보 출력