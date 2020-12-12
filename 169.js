
//폴더 생성하기
//fs모듈은 파일의 입출력과 관련된 파일 시스템 모듈로 , 서버의 정적 파일을 다루는데 가장 많이 사용되는 모듈


//&& || == 이런것 주의!!!! 두번 들어감
'use strict';

const fs = require('fs');

//checkDir함수 작성 명시한 경로릐 파일 또는 폴더의 정보(상태)를 확인하는 함수 
//첫번째 매개변수로 path 경로값을 가져오고 두번째 callback 변수로 경과를 리턴
const checkDir = (path, callback) => {
    
    fs.stat(path, (err, stats) => {
            //fs.stat은 대입된 path경로 값의 파일 존재 여부를 확인할수 있다.
    //확인된 결과 값은 fs.Stats클래스로 래핑되어 콜백 함수로 전달됨
    //이 클래스는 해당 경로의 파일이isFile(), isDirectory(), isFIFO()등 간단한 함수로 파일 정보를 제공
        if(err && err.code === 'ENOENT') return callback(null, true);
        //해당 경로에 어떤 파일도 존재하지 않은 경우, fs.stat모듈은 상태정보가 없어 에러 반환
        //이 에러는 Error객체로 code정보가 'ENOENT'로 정의 되어 전달 
        //그러나 checkDir함수에서 이상태가 새로운 파일을 만들기에 적합하기 떄문에 true 전달
        if(err) return callback(err);

        return callback(null, !stats.isDirectory());
        //에러 없이 파일 정보를 가져온 뒤 stats.isDirectory()를 확인 한다 
        //checkDir 함수의 의도는 현제 경로에서 정상적으로 새로운 폴더를 생성 가능한지 확인하는 함수
        //stats.isDirectory()로 true가 반환되면 이미 동일한 폴더가 있다는 뜻이기떄문에 checkDir 함수는 false를 리턴해야 한다
        // !stats.isDirectory()로 결과의 반댓값 리턴
    });


    //
};

const currentPath = __dirname;
//현재 위치 경로 가져옴 
//__dirname 노드 명령어로 실행된 파일의 직접 경로 정보를 반환 경로에는 파일 이름이 포함되지 않음
let path = `${currentPath}/js200`;
//현제 경로에서 /js200붙혀서 경로 정의

//checkDir함수 실행
//폴더를 정상적으로 생성할 수 있는 경로임이 확인되면 true를 이미 동일한 폴더가 존재하거나 에러가 있으면false반환
checkDir(path, (err, isTrue) => {
    if(err) return console.log(err);

    if(!isTrue) {
        console.log('이미 동일한 디렉터리가 있습니다. 디렉터리 명을 변경합니다.');
        path = `${currentPath}/js200-new`;
    }
    //동일한 이름의 폴더가 있는 경우 폴더 명을 다른 이름으로 변경

    // fs.mkdir 모듈은 새로운 폴더를 생성 인자로 넣은 경로로 폴더를 생성하고 에러가 발생하면 콜백함수로 에러정보 반환
    fs.mkdir(path, (err) => {
        if(err) console.log(err);

        console.log(`${path}경로로 디렉터ㅣ를 생성했습니다`);
    });
});


//예제로 간단하게fs.stat를 사용했다 그러나 fs.open(), fs.readFile(), fs.write()와 같이 파일을ㄹ 직접 접근 할때에는 권장안함
//이경우 fs.access모듈 사용권장

// 