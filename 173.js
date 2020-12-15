
//파일 삭제

//fs모듈에서 파일을 삭제하는 것과 폴더를 삭제하는 방법은 다르다
//fs.unlink는 파일 또는 심볼릭 링크를 삭제한다
//삭제전에는 반드시 fs.access를 통해 파일에 접근 할수 있는지 확인해야한다
"use strict";

const { F_OK } = require('constants');
const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'js200', 'hello.txt');

//fs.access를 호출 filePath 경로에 대한 접근 가능 여부 확인
//두번째 인자 는 접근과 관련된 mode정보이다 fs.constants는 파일 시스템과 관련된 상수들을 그룹으로 모아놓은 상수
// 그 안에서 F_OK 는 파일의 존재 여부를 확인할 수있는 상수
fs.access(filePath, fs.constants.F_OK, (err) => {
    if(err) return console.log('삭제할수 없는 파일 입니다');
    //해당 파일이 mode의 상수 값을 충족하지 않은 경우 

    fs.unlink(filePath, (err) => err ?
    console.log(err) : console.log(`${filePath}를 정상적으로 삭제했습니다`));
    //에러가 없으면 상수값을 충족한다는 말 fs.unlink를 통해 filePath경로의 파일 삭제


});


