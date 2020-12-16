//특정 폴더 내 모든 파일 삭제하기

'use strict';

const fs = require('fs');
const path = require('path');


//특정 경로의 파일 또는 폴더를 삭제하는 함수
const removePath = (p, callback) => {
    // fs.stat로 해당 경로가 파일인지 폴더인지 확인
    fs.stat(p,(err,stats) => {
        if(err) return callback(err);

        //파일인경우 unlink로 해당 파일 삭제 삭제후 함수종료시킴
        if(!stats.isDirectory()) {
            console.log('이 경로는 파일 입니다');
            return fs.unlink(p, err => err ? callback(err) : callback(null, p));

        }

        //경로가 폴더인 경우  rmdir함수를 사용하여 해당 폴더를 삭제
        console.log('이 경로는 폴더 입니다');
        fs.rmdir(p, (err) => {
            if(err) return callback(null, p);
        });
    });
};

const printResult = (err, result) => {
    if(err) return console.log(err);
    console.log(`${result}를 정상적으로 삭제했습니다`);
};

const p = path.join(__dirname, 'js200');


try {
    const files = fs.readdirSync(p);
//동기 패턴 함수 fs.readdirSync 호출 특정 폴더 안의 파일을 배열로 반환

    if(files.length)
    files.forEach(f => removePath(path.join(p, f),printResult));
//함수로 전달된 files배열의 값 먼저 확인 
//배열의 요소가 없다는 것은 폴더가 비었다는 뜻 
//그래서 file.length가 존재할 경우 각각의 파일을 removePath함수로 제거 
} catch {
    if(err) return console.log(err);
}

removePath(p, printResult);
//폴더안의 파일 삭제후 함수 호출해서 폴더도 삭제

 