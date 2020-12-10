console.log('hello node.js world');

//node.js의 모듈 이해

//방대한 양의 코드보다는 한눈에 보이는 코드가 관리에 용이 도한 블럭으로 묶은 코드는 다른 곳에서 재사용하기 좋아 효율적
//즉 모듈 이란 '코드의 모음' 또는 코드의 블럭이다

// 모듈을 선언할떄는 module.exports를 사용하고 모듈을 로딩할때는 require을 사용

function moduleTest (x, y) {
    return x + y ;
}
module.exports = moduleTest;