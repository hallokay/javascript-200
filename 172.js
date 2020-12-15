
//파일 읽기
"use strict";

const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'js200', 'hello.txt');

//파일 입출력에서는 동일한 파일 존재 여부와 접근 권한을 확인해야한다
// r flag를 활용하여 특정파일을 읽는 것이 가능한지 확인 
//만일 파일이 존재하지 않으면 에러 반환
fs.open(filePath, 'r', (err, fd) => {
    if(err && err.code === 'ENOENT') 
    return console.log('읽을 수 없는 파일 입니다.');
    //에러로 반환된 Error객체의 'ENOENT' 코드는 찾는 파일이 없다는 것을 의미
    //조건식성립과 동시에 콘솔 ㅡ출력후 작업 종료

    if(err) return console.log(err);
    //그외의 에러처리

    console.log('파일을 정상적으로 읽을 수 있습니다.');
    //에러가 없는 정상 파일의 경우 실행

    //fs.readFile을 통해 실제로 파일을 읽어온다
    //첫번째 인자에 읽을 대상 파일의 경로를 넣고 두번째에 인코딩 정보를 넣는다 
    //세번째에 콜백함수의 매개변수로 에러와 결과값을 넣음
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) return console.log(err);

        console.log(data);
    });

    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log(data);
        //readFileSync는 동기패턴 함수 함수 이름에 sync가 붙은 게 동기패턴 함수 아닌게 비동기
        //동기패턴함수는 콜백함수 없이 결과값 반환

    } catch (err) {
        console.log(err);
    }
    //try- catch 구문이 없다면 동기 패턴 함수의 예외처리는 무방비 상태가 된다
    // 비동기에서 에러를 반환하고 예외 처리 했든 것과 달리, 동기 패턴은 짧은 문장으로 값을 반환하지만 
    //에러에 대한 값이 반환 되는 것은 아니다. try-catch없이 동기에서 에러가 나면 작업은 즉시 중단되고 idle상태에 빠져 작동 안됨
});
