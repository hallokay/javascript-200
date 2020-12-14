"use strict";

const fs = require('fs');
const path = require('path');

const fileName = 'hello.txt';
const targetPath = path.join(__dirname, 'js200');

const filePath = path.join(targetPath, fileName);
console.log(path.parse(filePath));
//path 모듈의 parse함수를 통해 특정 경로의 파일 정보를 확인할수 있다
//이 정보는 파일 세부 정보가 아닌 파일명 확장자명 파일의 절대경로와 같은 단순 정보만 알수 있다


//특정 경로 내 특정 파일여부를 확인하는 함수 정의 
//이 함수는 첫번쨰 매개변수 path경로 값을 받아 파일 정보를 탐색하고, 
//두번째 매개변수 fileName문자열과 일히하는 파일명을 callback 으로 반환
const isFileInPath = (path, fileName, callback) => {
    //fs.readdir함수는 특정 경로 안에 있는 모든 파일명을 콜백 함수의 매개 변수로 전달
    //인자로 대입하는 path경로는 반드시 디렉터리 (폴더)를 가리켜야한다
    fs.readdir(path, (err,files) => {
        if(err) return callback(err);

        let isHere = false;
        //만일 대입된 fileName 문자열과 동일한 파일명이 있으면 isHere함수에 true 대입
        files.forEach(f => {
            if (f === fileName) isHere = true;
        });
        return callback(null, isHere);
        //동일한 파일을 찾지 못하면 false 콜백함수 결과 값으로 isHere리턴
    });
};

isFileInPath(path.join(__dirname,'js200'), fileName, (err, isTrue) => {
    if(err || !isTrue) return console.log('파일을 읽을 수 없습니다');

    fs.stat(filePath, (err, fileInfo) => {
        if(err) return console.log(err);

        return console.log(fileInfo);
    });
});
//위에서 정의한 isFileInPath함수 호출 js200폴더 안에서hello.txt 파일을 탐색
//파일이 잇는 경우  에러 예외 처리를 통과하여 fs.stat 함수를 실행  파일의 상세정보 확인 가능
