"use strict";

const fs = require('fs');
const path = require('path');


const makeFile = (path, callback) => {
    //makeFile 은 파일을 생성하는 fs.write을 호출
//첫번쨰 인자에 path 경로값을 넣고 두번째 인자에 파일내용을 넣는다 세번째인자에는 파일 인코딩 정보를 넣는다
    fs.writeFile(path, 'New file, New content', 'utf8', (err) => {
        if (err) return callback(err);

        console.log('파일이 생성됐습니다.');
        callback(null);
        //여기로 실행 결과 전달
    });
};

//기존 파일에 내용을 추가하는 함수
const appendFile = (path, callback) => {
    //첫번째 인자 경로 값에 두번쨰 인자 문자열 전달 
    fs.appendFile(path, '\nUpdate file', (err) => {
        if (err) return callback(err);
        //에러 발생시에러 반환

        console.log('파일 내용을 추가합니다.');
        callback(null);
        //에러 없으면 이게 실행
    })
};

//실행 결과를 출력하는 함수== 에러가 잇는 경우만 출력됨
const printErrIfExist = (err) => {
    if (err) console.log(err);
};

//파일 경로 생성  현재 파일이 있는 폴더의 경로 __dirname과 차일이 위치할 폴더명'js200'
//파일 명'hello.txt'을 path.join으로 함수 인자로 넣는다 
//path 모듈의 join함수는 대입된 매개 변수 들을 일관된 구분자 (delimiter)를 두고 순서대로 하나의 문자열로 합칩
//따라서 filePath는 /현재 실행위치/js200/hello.txt 가 반환
const filePath = path.join(__dirname, 'js200', 'hello.txt');

//fs.open 함수 호출 특정 경로의 파일 또는 폴더의 존재 여부를 확인하기 위해 사용  
//flag값을 넣음으로써 파일 접근 권한을 동시에 확인할 수 있다--wx -쓰기 접근 권한을 확인 
//이미 해당 경로로 동일한 파일이 있는경우 에러 반환
fs.open(filePath, 'wx', (err, fd) => {
    //  동일한 파일이 있을때 EXIST 코드의 Error객체를 반환 파일이 이미 있는 경우에 appendFile함수를 호출해 내용만 추가
    if (err && err.code === 'EEXIST') 
        return appendFile(filePath, (err) => printErrIfExist(err));

    if (err) return callback(err);

    return makeFile(filePath, (err) => printErrIfExist(err));
    //파일이 없는 경우 makeFile호출  새로운 파일 생성
});