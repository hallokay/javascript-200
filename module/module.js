

  //모듈 시스템
  // 하나의 파일이 하나의 모듈이라고 볼수 있음
  // es6의 모듈은 엄격한 모드의 코드이고 import 와 export키워드 사용
  
// import {hello} from '/hello.js';

//   hello('es6 module');



    //모듈을 여러이름으로 내보내고 가져오기
// import Hello from '/hello.js';

// const koreanHi = new Hello('안녕하세요');
// koreanHi.hi('kay');

// import {add, Person, version} from '/hello.js';

// const result = add(1,2);
// const kay = new Person('kay');

// console.log(result);
// console.log(kay.name);
// console.log(version);

//모듈을 다양한방식으로 사용하기

// import {version as moduleVersion} from '/hello.js';
 
// const version = 'v0';
// console.log(moduleVersion);

import * as add from '/add.js';
import '/hello.js';

console.log(add.version);
const added = add.default(1, 2);
console.log(added);

hello('kay');