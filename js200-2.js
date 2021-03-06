
    //표준 내장 객체의 이해
    //전역스코프 안에 있는 객체 참조 자스흫 실행할때 어쩐 환경 (브라우저, 서버) 이라도 전역에서 사용가능

    const str = new String('자바 스크립트');
    const num = new Number(200);
    const bool = new Boolean(true);
    const date =  new Date();
    const map = new Map();
    //키: 값 데이터 구조를 지닌 데이터 집합체
    const set = new Set();
    //오직 값으로 이루어진 데이터 집합체

    console.log(Math.PI);
    console.log(Date.parse('2020=10-01'));
    console.log(JSON.parse('{}'));


    const str1 = 'js 200제';
    const str2 = new String('자바 스크립트 200제');

    // console.log(typeOf str1);
    // console.log(typeOf str2);

    console.log(str1 === 'js 200제');
    console.log(str2 === new String('자바 스크립트 200제'));

    console.log(str1.valueOf());
    console.log(str2.valueOf());

console.clear();

{
    //자료형 확인
    // typeof는 특정 원시 자료형 확인 원시자료형과 객체형을 구분하기 위해
    // instanceof 는 객체 확인을 위해 어떤 종류의 객체인지

    // NaN(Not a Number)숫자가 아님 값 확인하기
    console.log(Number.isNaN(NaN));
    // NaN이면 true 아니면 false

//  음수는 숫자 자료형 그래서 false 반환
//0을 0으로 나누는 것은 숫자가 아님 true
console.log(Number.isNaN(new Date()));
//날짜는 숫자임으로 false
console.log(Number.isNaN(new Date().toString));
//문자열은 NaN이 아니기때문에 false
console.log(Number.isNaN('infinity'));
//무한대는 숫자형으로 구분됨 false

function verifyNumber(n){
    if(!n || Number.isNaN(n)) return 0;
    return n;
}
//함수에 대입된 값이 빈 값이거나 숫자가 아니면 0리턴
//그대로이면 그대로 반환
const num1 = verifyNumber(15); 
const num2 = verifyNumber(undefined); 
const num3 = verifyNumber(null); 
const num4 = verifyNumber(NaN); 
console.log(num1 + num2 + num3 + num4);
}

{
    //정수 확인 isInteger
    console.log(Number.isInteger(-1));
    //정수이면 true 0 -1 77777777 은 정수 true
    //null 0/0 'infinity' true {} 는 false 반환

    function verifyInteger(n){
        if(!Number.isInteger(n)) return 0;
        return n;
    }
    const num1 = verifyInteger(15); 
    const num2 = verifyInteger(Infinity); //0
    const num3 = verifyInteger(0.05); //0
    console.log(num1, num2, num3);
}
{
    //배열 자료형 확인 isArray
    function callRoll(students) {
        if(!Array.isArray(students)) return;
        //만약 students 변수가 배열이 아니면 빠져나가기

        students.forEach((student) => {
            console.log(` 여기있닝? ${student}`);
        });

    }
    const students = ['kay', 'bungbung', 'hungnyang', 'zzizzi'];
    callRoll(students);
}

{
//문자열 양끝 공백 없에기 trim
const sentences = ['      ABC  abc', 'ABC  abc    ', `first second third

      forth
      sentence
      
`];

const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        filtered.push(s.trim());
    });
    return filtered;

}
 console.log(filterSentence(sentences));
}
{
    //문자열 자르기 slice
    // '문자열'.slice(시작인덱스, 종료인덱스)
    const sentence = 'the sun will shine on us again';
    console.log(sentence.slice(13));
    //종료를 정하지 않았기때문에 13번째 인덱스부터 마지막까지 반환됨
    console.log(sentence.slice(13,24));
    console.log(sentence.slice(0));
    //0은 첫번째 인덱스 처음부터 전체문장 출력
    console.log(sentence.slice(0, -23));
    //-23은 뒤에서부터 23번째 문자를 의미 
    console.log(sentence.slice(50));
    //길이를 뛰어넘으면 빈값이 나옴
    console.log(sentence.slice(7,2));
    //첫번째인자가 두번째 인자보다 크면 출력되지 않음
}

{
    //문자열 자르기 2 substring
    // '문자열'.substring(시작인덱스, 종료인덱스)
    const sentence = 'this will be the end of Wakanda';
    console.log(sentence.substring(13));
       //종료를 정하지 않았기때문에 13번째 인덱스부터 마지막까지 반환됨
    console.log(sentence.substring(13,20));
    console.log(sentence.substring(0));
    //0은 첫번째 인덱스 처음부터 전체문장 출력
    console.log(sentence.substring(0, -23));
    //음수는 정상 출력되지 않음 
    console.log(sentence.substring(50));
    //길이를 뛰어넘으면 빈값이 나옴
    console.log(sentence.substring(7,2));
    //(2,7)과 같은 값이 나옴
}
{
        //문자열 자르기 2 substr
    // '문자열'.substr(시작인덱스, 길이)
    const sentence = 'Wakanda forever!!!';
    console.log(sentence.substr(8));
       //종료를 정하지 않았기때문에 13번째 인덱스부터 마지막까지 반환
    console.log(sentence.substr(8,7));
    //8부터 7개 인덱스 불러짐
    console.log(sentence.substr(0));
    //0은 첫번째 인덱스 처음부터 전체문장 출력
    console.log(sentence.substr(-10));
    //음수는 뒤에서부터 출력 끝까지
    console.log(sentence.substr(0,-3));
    //두번째 인자에 음수를 넣으면 정상출력이 안됨
    console.log(sentence.substr(30));
    //길이를 뛰어넘으면 빈값이 나옴
    console.log(sentence.substr(0,30));
    //0부터 끝가지 출력됨
}

{
    // 문자열 길이 구하기 length
    // 문자열.length
    const arr = ['short', 'long sentence, it is not appropriate'];

    arr.forEach(str => {
        if(str.length < 10) console.log(str);
    });
    //arr를 각각의내부요소로 접근 그때 인자의 길이가 10보다 작으면 출력 
}
{
    //문자열로 반환 toString
    const num = 5;
    const bool = true;
    const str = '문자열 값';
    const arr = [1,2,3];
    const obj = {a: 15};

    console.log(num.toString());
    console.log(bool.toString());
    console.log(str.toString());
    console.log(arr.toString());
    console.log(obj.toString());

    // num.__proto__.toString = () => {
    //     return 'toString 덮어쓰기';
    // };
    //num에서 __proto__ f를 통해 toString 메소드 직접재정의
    console.log(num.toString());
}

{
    // 두개의 문자열 하나로 합치기 concat
    const str1 = 'good afternoon';
    const str2 = ', good evening';
    const str3 = ', and good night!';
    const str4 = ' - the truman Show, 1998';
    console.log(str1.concat(str2, str3, str4));
    //concat보다 연산자가 더 많이 사용됨
}
console.clear();
{
    //특정위치 문자 반환 charAt
    const str = 'good afternoon, good evening, and good night!' 
                + ' - the truman Show, 1998';

    console.log(str.charAt(0));
    console.log(str.charAt(5));
    console.log(str.charAt(14));
    console.log(str.length);
    console.log(str.charAt(500));
    //존재하지 않기에 빈값 출력
}

{
    //특정 문자열 위치 확인 indexOf
    const str = 'Carpe diem, seize the day';
    console.log(`e는 ${str.indexOf('e')}에 있습니다`);
    console.log(`대문자 C는 ${str.indexOf('C')}에 있습니다`);
    console.log(`소문자 c는 ${str.indexOf('c')}에 있습니다`);
    //소문자 c는 없기때문에 -1반환
    console.log(`문자열 ", se"는 ${str.indexOf(', se')}에 있습니다`);

    const arr = ['Carpe', 'diem', 'seize', 'the','day'];
    const howManyHasE = (arr) => {
        let count = 0
        arr.forEach((str) => {
            if(str.indexOf('e') > -1) count++;
        });
        return count;
    }

    console.log(`${arr}에 e가 있는 요소는 모두 ${howManyHasE(arr)}개 있습니다`);
}

{
    //특정 문자열 위치 확인 lastIndexOf
    //뒤에서부터 위치 확인 뒤에서부터 0번인덱스 
    const str = 'Carpe diem, seize the day';
    console.log(`e는 ${str.lastIndexOf('e')}에 있습니다`);
    console.log(`대문자 C는 ${str.lastIndexOf('C')}에 있습니다`);
    console.log(`소문자 c는 ${str.lastIndexOf('c')}에 있습니다`);
    //소문자 c는 없기때문에 -1반환
    console.log(`문자열 ", se"는 ${str.lastIndexOf(', se')}에 있습니다`);
}

{
    //특정 문자열 포함여부 알아보기 includes
    // 문자열.includes(문자열, 인덱스)
    //두번째 인자는 필수값이 아님 지정하면 해당 인덱스 위치부터 문자열 확인
    //true/ false반환

    const str = 'Make your lives extraordinary';

    console.log(str.includes('Make'));
    console.log(str.includes('Make', 1));
}

{
 //문자열 대소문자 변환
 console.log('find your one voice'.toLowerCase());
 console.log('find your one voice'.toUpperCase());

 const value = 'find your one voice';
 console.log(value.toLowerCase() === value.toUpperCase());
}

{
    //배열요소 분할/ 변환하기 from
    // Array.from(배열로 변환될 값, 반환될 배열내부 요소에 대한 callback함수)
    // 두번쨰인자는 필수값이 아님-callback 함수를 대입하면 분할과 동시에 각 값을 변환시킬수 있음
    
    const str = '123456';

    const distributedArr = Array.from(str);
    console.log(distributedArr);

    const modifiedArr = Array.from(distributedArr, el => el*2 );
    console.log(modifiedArr);
}
console.clear();

{
    // 문자열을 특정 구분자에 의해 배열로 나누기 split
    const capitals = `prague, czeco Republic
    Copenhagen, Denmark
    Paris, France
    Madrid, Spain
    Rome, Italy`

    capitals.split('\n').forEach(s => {
        const capital = s.split(',')[0];
        const country = s.split(',')[1];
        console.log(`${capital} is in ${country}`);
    });
// capitals 의 문자열 값을 줄바꿈으로 분리
//배열로 변환된 값은 forEach로 접근
//각 문장을 다시 split로 배열로 변환 구분자는 ,로 분리된 배열 0 인덱스요소는 캐피탈에
//1인덱스는 컨츄리에 대입 
}

{
    //배열뒤에 요소 추가 push
//자바스크립트 배열 자료형은 Linked List 자료구조형태를 가지고 잇다
//따라서 앞뒤에 요소추가하는 것이 가능
const festa = ['mang'];
festa.push('chimmy');
festa.push('tata');
festa.push('cooky');
festa.push('shooky');
festa.push('koya');
festa.push('rj');

festa.forEach(name => {
    console.log(name);
});
}

{
    //배열 앞에 요소 추가 unshift
    const festa = ['mang'];
festa.unshift('chimmy');
festa.unshift('tata');
festa.unshift('cooky');
festa.unshift('shooky');
festa.unshift('koya');
festa.unshift('rj');

festa.forEach(name => {
    console.log(name);
});
}
{
    //배열 길이 구하기 length
    const ship = {
        max: 4,
        passengers: [],
        onBoard: function(name){
            if (this.passengers.length === 4) {
                console.log(`this ship is full. ${name} can not board this ship.`);
            } else {
                this.passengers.push(name);
                console.log(`${name} boarded`);
            }
        }
    }

    ship.onBoard('kay');
    ship.onBoard('bomi');
    ship.onBoard('suk');
    ship.onBoard('jay');
    ship.onBoard('chole');
    ship.onBoard('daniel');
}
console.clear();

{
    //배열 합치기 concat

    const prevList = [1,2,3];
    const currList = [4,5,6];
    const nextList = [7,8,9];

    console.log(prevList.concat(currList));
    console.log(prevList.concat(currList,nextList));

    console.log(['배열'].concat('합치기'));
    console.log(['배열'].concat('합치기','js200'));
} 
{
//배열에 특정 구분자를 넣어 문자형으로 변환하기 join
const dialog = [
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you'
];
console.log(dialog.join('.'));
//구분자 .을 넣어서 합친다
console.log(dialog.join('.\n'));
//구분자 .과 줄바꿈을 이용해 합친다
}

{
    // 배열 마지막 요소 추출 pop
    const arr = [1,2,3];
    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr.pop());
    //개수보다 많이 호출되면 undefined
    //마지막 요소가 추출되면서 원본 배열도 수정됨

}
{
    // 배열 맨앞 요소 추출 shift
    const arr = [1,2,3];
    console.log(arr.shift());
    console.log(arr.shift());
    console.log(arr.shift());
    console.log(arr.shift());
    //개수보다 많이 호출되면 undefined
    //호출과 동시에 원본 배열도 수정됨
}

{
// 배열의 특정 위치의 요소 추출 slice
//시작 인덱스 부터 끝 인덱스 지정 단, 끝 인덱스의 요소는 포함이 안됨 끝번호의 이전까지
// 배열.slice(시작 인덱스, 끝 인덱스)

const arr = ['멜론','레몬','소스', '사과', '쥬스'];
console.log(`과일이 아닌 요소는 ${arr.slice(2,3)}와 ${arr.slice(4,5)}`);
console.log(arr.slice(0,10));
//더 큰 값을 넣으면 배열 가장 마지막까지 반환

}

{
    // 배열 인덱스로 특정 요소 수정 splice
    // 배열.splice(시작 인덱스,삭제할 요소 개수 , 추가 요소)
    // 시작 인덱스부터 삭제하고자 하는 개수만큼 삭제되고 시작인덱스부터 추가됨
    const fruits =  ['멜론','레몬','소스', '사과', '쥬스'];

    fruits.splice(4,1);
    fruits.splice(4, 0, '포도');
    fruits.splice(2, 1, '귤', '바나나','딸기');
    console.log(fruits);
}

console.clear();

{
    // 배열의 특정 요소 위치 확인indexOf
    // 배열.indexOf(검색할 값, 시작 인덱스);

    const arr = ['spring','summer','fall', 'winter', 'is', 'down'];

    console.log(`winter is in this index ${arr.indexOf('winter')}`);
    console.log(`winter is not in here, look this value ${arr.indexOf('winter', 4)}`);
}
{
    // 배열 순환하기 forEach
    // 배열.forEach(callback함수)
    const arr = [
        {id: 0, name: '혜림', age: 4},
        {id: 1, name: '현일', age: 6},
        {id: 2, name: '지숙', age: 5},
        {id: 3, name: '두식', age: 3},

    ];

    arr.forEach((el) => {
        console.log(el.name);
    });
    //arr는각각 el로 받아오고 el의 name속성 출력
}

{
    // 배열 정렬 sort

    // 배열.sort(function(a,b){
    //     return 비교값;
    // })
//  비교값 > 0 a가 b보다 작은 숫자 인덱스를 가진다 작은 인덱스란 배열 앞에 위치 
//  비교값 < 0 b가 작은 숫자 인덱스를 가짐 b가 앞에 위치
//  비교값 = 0 a와 b의 위치를 변경하지 않음

const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    {id: 2, name: 'leo'},
    {id: 0, name: 'kay'},
    {id: 3, name: 'bomi'},
    {id: 1, name: 'jason'},
    {id: 4, name: 'lena'},
];

numArr1.sort(function(a, b){
    return a - b;
    //a-b를 리턴 오름차순 정렬
});
    
numArr2.sort(function(a, b){
    return b - a;
    //b-a를 리턴 내림차순 정렬
});
objArr.sort(function(a, b){
    if(a.name > b.name) return 1;
    //a의 이름이 b이름보다 크면 1반환  즉 a를 b앞에 정렬시킴
    else if (b.name > a.name) return -1;
    //반대의 경우 b가 a앞에 정렬됨
    else return 0;
    //속성값이 같으면 0반환
});

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);
}

{
    //reverse 배열순서 반대로 나열하기

 const str = 'abcdefghijklmnopqrstuvwxyz';
 const arr = str.split('');
 //문자열을 배열로 변환 
 arr.reverse();
 //반대로 나열

 console.log(arr.join(''));
 //배열arr은 구분자 없이 한 문자열로 병합됨
}

{
    //배열 요소가 특정 조건을 만족하는지 확인 some
    // some메소드는 callback함수의 리턴값이 트루를 반환할때까지만 배열 요소 순환
    // 마지막 요소까지 순환해도 트루가 없으면 false반환
    //중간에 true가 나오면 거기서 정지됨

    const arr = [
        {id: 0, name: '혜림', age: 4},
        {id: 1, name: '현일', age: 6},
        {id: 2, name: '지숙', age: 5},
        {id: 3, name: '두식', age: 3},
    ];

    const isjisuk = arr.some(el => el.name === '지숙');
    const olderThanSix = arr.some(el => el.age >6);
    //ㅂ6보다 큰 나이가 있는지 확인후 false반환

    console.log(isjisuk);
    console.log(olderThanSix);

}

{
    //모든 배열의 요소가 특정 조건을 만족하는지 확인 --every

    const arr = [
        {id: 0, name: '혜림', age: 4},
        {id: 1, name: '현일', age: 6},
        {id: 2, name: '지숙', age: 5},
        {id: 3, name: '두식', age: 3},
    ];

    const isAlljisuk = arr.every(el => el.name === '지숙');
    const olderThanSix = arr.every(el => el.age < 7);
    //모두가 7보다 작은 나이인지 확인후 반환

    console.log(isAlljisuk);
    console.log(olderThanSix);
}

{
    //배열의 특정 조건을 기준으로 필터링하기 filter
    const arr = [1,2,3,4,5,6,7,8,9,10];
    
    const filteredTwo = arr.filter(a =>{
        console.log(`현재 위치의 값은${a}`);
        return a % 2 === 0;
    });
    // arr의 내부 요소가 각각a변수로 할당
    //a를 2로 나누어지는 값을 리턴
    //리턴된 값으로 새로운 배열로 반환

    console.log(filteredTwo);

    const filteredThree = arr.filter(a => a % 3 == 0);
    console.log(filteredThree);

}

{
    //특정 조건을 만족하는 요소 찾기 find

    const arr = [
        {name: '혜림', age: 4},
        {name: '현일', age: 30},
        {name: '지숙', age: 5},
        {name: '두식', age: 3}
    ];

    const myFriend = arr.find(a => a.age === 30);
    console.log(myFriend);
}

{
    //배열요소 일괄 변경 map
    const arr = [
        {name: '혜림', age: 4},
        {name: '현일', age: 6},
        {name: '지숙', age: 5},
        {name: '두식', age: 3}
    ];

    const arr2 = arr.map(el => {
        el.age = el.age + 1;
        return el;
        //map메소드는 콜백함수의 리턴값에 따라 반환되는 배열 값이 바뀜
        // 속성만 변경해서 객체를 다시 반환했기때문에 arr2는 객체요소로 구성된 배열 할당
    });

    const arr3 = arr.map(el => el.name);
//콜백함수는 전달된 요소의 이름속성만 반환 따라서 문자열로 된 새로운 배열 할당
// return el; 을 안해줫기때문
    console.log(arr2);
    console.log(arr3);
}

{
    // 배열 내 값을 누적시키기 reduce

    // 배열.reduce((누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열) => {
    //     return 누적 값으로 반환되는 값
    // }, 초기값);

    //누적된 값과 현재 요소값은 필수

    const numArr = [1,2,3,4,5];

    const result = numArr.reduce((acc,el) => {
        return acc + el
    }, 0);

    console.log(result);
    //acc는 0부터 들어온다. el은 numArr의 배열 인자 받아와서 1부터
    // 0 + 1 은 1이므로 1반환되어서 acc에 1이 들어감  
    // 더해진 리턴 값은 계속 acc에 들어간다
    // 1 + 2 ,3 + 3, 6 + 4, 10 + 5

}

console.clear();
{
    //중첩된 배열을 단일하게 만들기 reduce
    const arr = [1,[2,3],[4,5,6], ['배열', '나열하기'],'자스'];

    const result = arr.reduce((acc,el) => {
        return acc.concat(el);
    }, []);
    //배열에 reduce 누적하기 메소드를 호출 요소 순환 결과값은 result변수로 다시 대입
    // acc는 빈배열이 초기값으로 할당
    // 빈배열부터 [1], [1,2,3]이런식으로 내부요소들을 연속으로 차곡차곡 병합

    console.log(result);
}

{
    //객체에서 키만 추출 keys

    const obj = {
        movie: 'Sunny',
        music: 'Like Sugar',
        style: 'Retro',
        price: Infinity
    };

    const arr = Object.keys(obj);
    //arr에 Object의 키를 호출하고 인자를 obj 넣음
    // obj의 키 속성만 배열로 담아짐

    console.log(arr);
}

{
    //객체에서 값만 추출 values 

    const obj = {
        movie: 'Sunny',
        music: 'Like Sugar',
        style: 'Retro',
        price: Infinity
    };

    const arr = Object.values(obj);
    //arr에 Object의 values를 호출하고 인자를 obj 넣음
    // obj의 속성값만 배열로 담아짐

    console.log(arr);
}

{
    //객체를 배열로 변환 entries

    const obj = {
        movie: 'Sunny',
        music: 'Like Sugar',
        style: 'Retro',
        price: Infinity
    };

    const modifiedObj = Object.entries(obj);
    //arr에 Object의 values를 호출하고 인자를 obj 넣음
    // obj의 속성값만 배열로 담아짐

    console.log(modifiedObj);
}

{
    //객체가 변경되지 않도록 하기 freeze
    //객체를 동결한다. 동결이후 추가하거나 제거하기 불가능

    let obj = {};

    obj.title = 'Idol';
    obj = Object.freeze(obj);
    obj.title = 'singer';

    console.log(obj);
//바뀌지 않는다 그리고 이떄는 'use strict'; 선언 전이라 에러가 나지 않는다


    const changeUntilNum = (obj, num) => {
        'use strict';

        while(true) {
            console.log(obj);
            
            if(obj.age >= num){
                obj = Object.freeze(obj);
            }
            obj.age += 1;
        }
        //반복문 내부가 true일때만 순환 에러 발생하면 반복문은 멈춘다.
        // 나이값이  넘버값보다 큰거나 같은지 확인 크거나 같으면 동결 아니면 +1해서 재할당

    }

    let profile = {name: '이지은', age: 28};
    // changeUntilNum(profile, 35);
}

console.clear();
{
    //객체에 속성 추가 못하게 만들기 seal
//seal은 객체를 밀봉 봉인된 객체이므로 속성을 추가/ 삭제 불가능 기존속성은 변경 가능

const album = {
    name: 'LOVE YOURSELF'
};

album.song = 'Euphoria';
album.singer = 'Rm';

console.log(album);

Object.seal(album);

album.comment = 'answer';
//추가 불가능
album.singer = 'jk';
//기존 속성이라 변경 가능
delete album.name;
//삭제 불가능

console.log(album);
}

{
    //객체 병합 확장하기 assign
    //인자로 대입된 객체를 하나로 병합
    //첫번째 인자를 기준으로 병합됨 이 객체를 기준으로 병합되기 때문에 첫번째 인자는 원본이 수정되어서 반환됨

    const obj1 = {one: 1, two:2, three: 3};
    const obj2 = {name: '탄이', age:2, address: 'Seoul'};
    const obj3 = {friends: ['혜림', '케이', '뿡뿡이', '나래']};

    const newObj1 = Object.assign({}, obj1);
    const newObj2 = Object.assign({}, obj1, obj2);
    newObj1.four = 4;

    console.log(obj1);
    console.log(newObj1);
    console.log(newObj2);

    console.log('\n');

    const newObj3 = Object.assign(obj1, obj3); 
    //obj1를 기준으로 합쳤기 때문에 원본객체에 적접적 영향을 미침 변경됨
    // obj1 newObj3은 같은 값을 가짐
    console.log(obj1);
    //

    console.log(newObj1);
    console.log(newObj2);
    console.log(newObj3);
}

console.clear();
{
    // 진수 변환 toString
// 지정된 객체 문자열을 출력
//10진수의 숫자를 다른 진법으로 변환
    const dec = 531;


    const binByDex = dec.toString(2);
    const octByDex = dec.toString(8);
    const hexByDex = dec.toString(16);


    console.log(binByDex);
    console.log(octByDex);
    console.log(hexByDex);

    //2는 2진수로 변환
    //8은 8진수
    //16은16진수
}

{
    //10진수 아닌 집법을 10 진법으로 변환 parseInt
    const bin = 1000010011;
    const oct = 1023;
    const hex = 213;

    const dexBybin = parseInt(bin, 2);
    const dexByoct = parseInt(oct, 8);
    const dexByhex = parseInt(hex, 16);
    const hexByOct = parseInt(oct, 8).toString(16);
    //8진수 값인 oct변수를 10진수로 변환 후 toString으로 16진수로 변환


console.log(dexBybin);
console.log(dexByoct);
console.log(dexByhex);
console.log(hexByOct);    
}

{
    //랜덤값 구하기 random
    //무작위의 실수형 값을 반환

    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    for (let i = 0; i < 5; i++){
        console.log(generateRandom(1, 10));
    }
    //테스트를 5번 순환하는 반복문 1-10 까지의 랜덥값을 5회반환

    
    for (let i = 0; i < 5; i++){
        console.log(generateRandom(10, 100));
    }
//10에서 100까지를 5회반환
}

{
    //특정자리수에서 반올림 round
    
    const val = 573.926;

    console.log(Math.round(val));
    console.log(Math.round(val * 10) / 10);
    // 소수점 둘째자리에서반올림
    //10을 곱해서 소수점두번째 숫자 2앞으로 점을 옮기고 라운드 메소드 적용후 다시 소수점을 한칸 앞으로
    console.log(Math.round(val * 100) / 100);
    console.log(Math.round(val / 10) * 10);
    //1의자리에서 반올림
    console.log(Math.round(val / 100) * 100);
    //10의 자리에서 반올림

}

{
    //특정자리수에서 올림하기 ceil --높은 숫자로 만들기
    const positiveNum = 93.54;
    const negativeNum = -39.27;

    
    console.log(Math.ceil(positiveNum));
    console.log(Math.ceil(negativeNum));
    //-39 -39.27을 올림하면 -39가 큰숫자 이기때문
    console.log(Math.ceil(positiveNum * 10) / 10);
    //10곱하면 935.4 가됨 올림하면 936 그리고 다시 소수점 앞으로 땡김
    console.log(Math.ceil(positiveNum / 10) * 10);
    //9.354에서소수점 뒷자리 올림하면 10 10에서 10곱하면 100
    console.log(Math.ceil(negativeNum * 10) / 10);
       //- 392.7 에서 올림 392 에서 10나누면 39.2
    console.log(Math.ceil(negativeNum / 10) * 10);
    //-3.927 올림하면 -3 10곱하면 -30
}

{
    // 특정자리에서 내립 floor--낮은 숫자로 만들기
    const positiveNum = 93.54;
    const negativeNum = -39.27;

    
    console.log(Math.floor(positiveNum));
    console.log(Math.floor(negativeNum));
    //-39 에서 내림하면 -40
    console.log(Math.floor(positiveNum * 10) / 10);
    //10곱하면 935.4 가됨 4버리고 935 소수점 앞으로 땡김 93.5
    console.log(Math.floor(positiveNum / 10) * 10);
    //9.354에서소수점 뒷자리 내림하면 9 10에서 10곱하면 90
    console.log(Math.floor(negativeNum * 10) / 10);
       //- 392.7 에서 내림 393 에서 10나누면 39.3
    console.log(Math.floor(negativeNum / 10) * 10);
    // -3.927 에서 내임 -4 소수점 뒤로 -40
    
}
console.clear();

{
     //현재 시간을 원하는 포맷으로 출력
//getFullYear getMonth getDate

Date.prototype.yyyymmdd = function() {
    const yyyy = this.getFullYear();
    const mm = this.getMonth() < 9 ?
                `0${this.getMonth() + 1}` : this.getMonth() + 1;
                //getMonth는 기본적으로 0부터 시작그래서 +1
                //  두자리를 맞춰주기 위해 9보다 작은 숫자 8까지는 앞에 0 붙음

    const dd = this.getDate() < 10 ?
                `0${this.getDate()}` : this.getDate();
    return '' + yyyy + mm + dd;              
            // 빈 문자열과 숫자값의 덧셈 연산은 숫자형 값을 문자형으로 반환 년월일 정보가 문자열로 반환
}

const date = new Date();
console.log(date.yyyymmdd());

}

{

    //UTC 기준 날짜 출력 Date.UTC
    //세계표준시

    const date = new Date();
    const dateUTC = Date.UTC(
        date.getUTCFullYear(),date.getUTCMonth(), date.getUTCDate(),
        date.getUTCHours(),date.getUTCMinutes(), date.getUTCSeconds()
    );

    console.log(new Date(dateUTC));
}

{
    //두개의 날짜 시이의 경과 시간 계산
    Date.daysDiff = (date1,date2) => {
        if (!(date1 instanceof Date) || (date2 instanceof Date)) return '';

        const d1 = date1.getTime();
        const d2 = date2.getTime();

        let diff = d2 - d1;
        //변수 d2와 d1의 값을 뺄셈 연산하여 diff변수에 대입 -  밀리 초단위

        const sec = Math.floor((diff = diff / 1000) % 60);
        const min = Math.floor((diff = diff / 60) % 60);
        const hours = Math.floor((diff = diff / 60) % 24);
        const days = Math.floor(diff / 24);

        return `${days} days, ${hours} hours , ${min} minutes and ${sec} seconds`;

    }

    var from = new Date(2000, 0, 1);
    var to = new Date(from.getFullYear() + 1, from.getMonth() + 3, from.getDate() + 5, from.getHours() + 4,
     from.getMinutes() + 30, from.getSeconds() + 50);

console.log(`from  ${from}`);     
console.log(`to   ${to}`);
console.log(Date.daysDiff(from, to));     
     
}

console.clear();
{
    //json을 문자열로 변환 stringify
// JSON.stringify(값, 리플레이서, 공백 개수)
//첫번째 인자는 제이슨 문자열로 반환할 대상의 값
// 두번째 replacer는 문자열로 변환하기 전에 값을 변경하는 인자 콜백함수나 특정키정보를 담은 배열
//세번째 들여쓰기시 공백의 개수 1-10까지 null이나 음수 0 안됨

const testStringify = {
    stringifiedNum: JSON.stringify(13.1),
    stringifiedStr: JSON.stringify('Kiss Carnival'),
    stringifiedBln: JSON.stringify(false),
    stringifiedArr: JSON.stringify([2003, 2018])
};

//testStringify 객체 속성 값으로 JSON.stringify메소드와 숫자 문자 불리언 배열자료형을 인자로

for (let key in testStringify) {
    
console.log(`-------${key}--------`);
    console.log(typeof testStringify[key]);
    console.log(testStringify[key]);
}
// 인자를 돌면서 키와 동일한 키이름의 속성값이 어떤 타입인지 확인 ㄴㅅ갸ㅜ햐료는 머든 제이슨 값을 문자로 만듬
//키의 속성값확인 전부 문자형으로 변환

console.log(`----------------------stringifyObj----------`);
const obj = {
    drama: 'PET',
    season: 2017,
    castiong: ['koyuki', 'bomi'],
    charactor: ['응꼬', '김뿡뿌']
};

console.log(typeof JSON.stringify(obj));
//obj가 JSON.stringify에 넣어 문자 자료형인지 확인
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj,['drama','season']));
// obj에서 드라마와 시즌만 속성만 담은 객체가 제이슨 문자열로 반환
console.log(JSON.stringify(obj, null, 4));
// 세번째 인자 들여쓰기 4번 적용  두번째는 null이라서 스킵
console.log(JSON.stringify(obj,(key, val) => {
    if(key === 'season') return 2003;
    return val;
}, 4));
// 들여쓰기 4번에 키의 값이 시즌이면 시즌의 내용을 2003으로 바꿔줌 아니면 그냥 값출력
}

console.clear();
{
    //JSON 문자열을 JSON으로 변환 parse

    // JSON.parse(값, 리플레이서);
// 첫번쨰 인자는 stringify로 변환할 대상 값
//두번쨰 리플레이서는 제이슨으로 변환하기 전에 값을 변경하는 인자 필수값아님
// 콜백함수나 특정키정보를 담은 배열

const jsonStr = '{"drama":"PET","season":2017,"castiong":["koyuki","bomi"],"charactor":["응꼬","김뿡뿌"]}'
console.log(JSON.parse(jsonStr));
// 문자열 값을 그대로 제이슨으로 변환
console.log(JSON.parse(jsonStr, (key, val) => {
    if(key === 'season') val = 2003;
    return val;
}));
//두번째 콜백함수 추가 시즌이 있으면 값을 2003으로 바꿈


console.log(JSON.parse('13.1'));
console.log(typeof JSON.parse('13.1'));
console.log(JSON.parse('false'));
console.log(typeof JSON.parse('false'));
// 원시형 값중  제이슨 문자열이 아니어도 오류없이 parse메소드가 실행됨 불리언과 숫자

// console.log(JSON.parse('Kiss Carnival'));
// console.log(JSON.parse('[2003, 2018]'));
//특정 원시 자료형을 나타내지 않는 문자형 배열형태의 문자형은 에러발생
}

{
    // 정규 표현식으로 대응되는 문자열 위치 확인 1 search
    //정규 표현식이란 특정 규칙을 가진 문자열의 집합을 의미 
    //간단히 regexp or regex라고도 부르는데, 특수문자 / 와 /를 사이에 두는 표현식을 통해 
    // 일치하는 문자열을 찾거나 반환또는 일괄치환
    // 자바스크립트에는 두가지 방법이 있다 string객체의 메소드를 활용하여 정규표현식을 통해 문자열을 처리하는 방법
    const str = 'To lose your path is the way to find that path';

    const  regex1 = /path/,
            regex2 = /q /,
            regex3 = /t/g,
            regex4 = /t/ig;
//g플래그를 추가하면 대상 문자열의 전역범위에서 일치하는 모든 문자를 찾는다 모든 소문자t를 가리킴
//i 는 대소문자 구분하지 않는 플래그
//m 주로 ^와 $ 문자와 같이 비교 다중 행에서 ^와 $은 각각 문자열의 처음과 끝을 의미 m이 없으면 다중행과 관계없이 문자열의 가장 처음과 끝을 가르킴
//y 문자열의 라스트 인덱스속성을 설정한 이후 사용가능 라스트 인덱스 지정 위치부터 표현식에 일치하는 문장 찾음


console.log(str.search(regex1));
console.log(str.search(regex2));
//없는것은 -1표시
console.log(str.search(regex3));
//search는 인덱스 가장 첫번째 값만 찾음
console.log(str.search(regex4));            
//인덱스 가장첫번째 대문자 t가르킴 그래서 인덱스 번호 0
}

console.clear();
{
    
    // 정규 표현식으로 대응되는 문자열 위치 확인2 match
const str = 'To lose your path is the way to find that path';

const  sensitiveRegex = /to/,
        ignoreAllCaseRegex = /to/gi,
        //i 플래그 -- 대소문자 구분없이 찾음
        findRangeRegex = /([a-f])\w+/i,
        //[a-f]는 a부터 f사이의 문자를 찾는것 
        // \w+는 해당문자부터 whitespace가 나타날때 까지의 단어 반환 
        //g플래그가 없어서 첫번째 일치하는 값만 반환 대소문자 없이
        findAllRangeRegex = /([a-f])\w+/gi;

        // \w 모든단어문자 와 일치여부 확인
        //\W 단어문자가 아닌 문자와 불일치 확인
        // \d 임의의 숫자 0부터 9와 일치 여부
        // \D 숫자가 아닌 모든 문자를 확인 숫자가 아닌 값만 반환하거나 true반환
        // \s 공백 문자 일치여부
        // \S 공백문자가 아닌 문자 확인
    
console.log(str.match(sensitiveRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));

}

{
    //정규 표현식으로 특정 문자의 포함 여부 확인 test

    //이번에는 RegEx 객체의 함수로 정규표현식을 통해 문자열을 처리하는 방법 
    //true false반환

    const numRegExp = /[0-9]+/,
    //[]로 둘러싼 표현식은 선택 패턴 이안에 넣은 문자들에서 매칭되는 값을 확인 
    // +한정 기호는 표현식 패턴에 하나 이상 일치하는 모든 문자열 확인
    //따라서 0-9둥 하나라도 일치하는지 확인
        phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/,
        //{}는 표현식에서 갯수(수량)를 가르킬때 사용 \d{3}는 오직 숫자로 구성된 문자 3개  \d{3,4} 3개또는 4개
        emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;
        // ()은 그룹 공백으로 단어와 단어를 구분하는 역할과 유사 
        // 괄호로 묶으면 원하는 부분끼리만 표현식 적용됨 
        // ^([-_.]?[0-9a-zA-Z]{6,13})+ 는 영문 대문자 소문자 숫자 필수값아닌 기호 -_.를 허용하는 표현식 6-13자

        console.log(numRegExp.test(12345));
        console.log(numRegExp.test('test'));
        console.log(phoneRegExp.test('010-3003-0046'));
        console.log(phoneRegExp.test('02-8844-1234'));
        console.log(emailRegExp.test('test123@javascript.org'));
        console.log(emailRegExp.test('test-javascript'));
}

{
    //정규 표현식으로 문자열 반환 exec
    // 정규 표현식과 일치하는 문자열을 찾아 배열로 반환 일치하는 문자열이 없으면 null
    //

    const str = 'Java is not Javascript';

    const result1 = /java/ig.exec(str);
    //대소문자 구분없이 java를 찾는 정규표현식 exec메소드 호출시 가장 첫번째 java가 반환
    console.log(result1[0]);
    console.log(result1.index);
    //java가 발견된 시작 인덱스
    console.log(result1.input);
    //input은 원본 문자열 


    const nums = '"1", "2", "3"';
    const regex = /\d+/g;
    //숫자만 찾는 정규표현식 대입
    while (result2 = regex.exec(nums)) {
        console.log(result2, regex.lastIndex);
    }
    //match와 exec메소드는 호출할때마다 일치하는 값을 찾으면 lastIndex값이 계속 업데이트됨 

}

{
    //정규 표현식으로 문자열 치환하기 replace
    // 문자열.replace(교체대상 문자열 혹은 정규식, 대체될 문자열 또는 함수)
    //첫번째 인자에 따라 일치하는 첫번째 항목만 찾는다. 그러나 모든 문자열을 찾고 싶으면 첫번째 인자에 g플래그를 써서 찾음
    //만일 두번째 인자로 함수를 적용할때는  일치한 문자열/ 일치한 값들/ 일치한 값의 위치/ 원본 문자열 의 매개변수 사용
console.log('2018-08-03 07-23-14'.replace('-',':'));
// 일치하는 첫번째 항목만 찾는다.
console.log('2018-08-03 07-23-14'.replace(/-/g,':'));
//모든 문자열을 찾고 싶으면 첫번째 인자에 g플래그를 써서 찾음
console.log('2018-08-03 07-23-14'.replace(/\d/g,'9'));
//모든 숫자를 9로 변경

const littleWomen = 'Meg March, Jo March, Beth March, Amy March';
console.log(littleWomen.replace(/\w+ March/ig, 'Mrs.$&'));
// /+ March/ig 는 유측에 March를 두는 모든 단어를 찾는다  \w는 모든 단어문자와 일치여부 확인
// 이걸 Mrs. $&로 바꾸면 왼쪽에 Mrs위치 일치하는 문자열을 뒤에 넣는다



console.log(littleWomen.replace(/\w+ March/ig, (str, d1, d2, d3, d4, offset, s) =>{
    let tag ='';
    if(/Meg/.test(str)) tag = '첫째'
    else if (/Jo/.test(str)) tag = '둘째'
    else if (/Beth/.test(str)) tag = '셋째'
    else if (/Amy/.test(str)) tag = '넷째'

    console.log(`원작 작은 아씨들에서 ${str}는 ${tag}이다`);
    return tag;

}));

//두번쨰 인자 함수 호출 매개변수 d1-4는 표현식과 일치한 값들이 전달됨
//전달된str변수에 test메소드를 적용 문자열과 일치여부 확인 각 조건식에 맞는 값을 할당


const name = 'March Amy'

console.log(name.replace(/(March) (Amy)/, '$2 $1'));
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s) => {
    console.log(`${second} is name, ${first} is first name.`);
    return `${second} ${first}`
}));

//정규 표현식의 ()로 문자열을 ㅇ그룹화할수 있다 $1, $2 순서대로 대입
//$n($1- $9) 은 n 번쨰 부분에 문자열을 넣는것

//함수의 first 는 march second는 amy로 들어감
}
console.clear();

{
    //반복 가능한 객체와 반복자 이해하기
 //반복 가능한 규약 -- 객체안의 값들을 반복할수 있도록 반복동작을 정의하는 것을 허용
 // 우선 객체가 반복 가능하려면 객체내부에 @@ iterator메소드를 구현해야함  속성키는 반드시 Symbol.iterator 이어야하고 속성값은 매개변수가 없는 함수
 // 그리고 이 함수는 반복자 규약을 따르는 객체를 반환

//  반복자 규약== 연속된 값을 만드는 방법을 정의 next메소드를 가지고 있어야 한다 
//이때 객체 속성키는 nest()이고 속성값은 매개변수가 없는 함수로 정의
//함수는 value 와 done속성을 가진 객체를 반환 따라서 next메소드를 호출하면 속성키 ㅇ이름이 value 와done인 객체가 반환
//이런 반복자 규약을 충족하는 객체를 iterator라고함

const items = ['j', 'a','v','a','s','c','r','i','p','t'];

//문자열을 하나씩 나눠 배열로 구성 변수 arr에 대입
const seq = {
    [Symbol.iterator](){
        let i = 0;
        //위치를 가리킬 인덱스 i변수 처음 위치값인 0 대입
        return {
            next() {
                const value = items[i];
                i++;
                const done = i > items.length;
                return {value, done};
                //items배열요소를 차례대로 연속해서 처리하는 문장 i인덱스 값을 벨류에 넣음 
                //인덱스 값i 가 items 배열요소 길이보다 긴지 확인 i값이 items보다 길면 트루 아니면 폴스반환 이를 done 에 대입
            }
        }
    }
};
// iterable 규약에따라 Symbol.iterator 속성을 정의 이어서 매개변수를 받지 않고 객체를 바환하는 함수 작성

for (let s of seq) console.log(s);
//for of으로 하나씩 반환하여 출력

const [a,b,c,...arr] = seq;
//비구조화 할당을 통해 seq요소의 첫ㅅ번째 두번째 세번째 요소를 순서대로 abc에 대입 그외 나머지는 arr에 배열로 대입 

console.log('a >>> ', a);
console.log('b >>> ', b);
console.log('c >>> ', c);
console.log('arr >>> ', arr);


}

console.clear();
{
    //문자열 순환 for - of

    // string객체는 반복가능한 객체 iterable 로써, for of문을 통해 순회하며 각 요소를 반복 실행 
    //for of문은 순환할때 반복가능한 객체가 반환하는 반복자의 next를 호출
    // 결과로 반환된 객체 done속성이 true가 될때까지 반복

    // for(변수 of 반복 가능한 객체){
    //     실행할 문장
    // }

const str = 'hello';

for(const item of str) {
    console.log(item);
}
// hello 문자열을 각 문자 콘솔로 출력

const iter = str[Symbol.iterator]();
//string객체는 반복 가능한 객체 이기 때문에 [Symbol.iterator](); 를 가지고 있다 호출시 반복자 반환
//이 반복자의 next메소드를 호출하면서 반환된 값이 콘솔로 출력

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

}

{
    //배열 순환하기 for of -- array 객체는 반복 가능한 객체

    const products = [{name: '가방'},{name:'노트북'}];
    
    for (const item of products){
        console.log(item.name);
    }

    const iter = products[Symbol.iterator]();
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
}

{
    //Map 객체에 요소 추가 삭제 확인 하기 set, get, delete, has

    // map은 데이터 집합체의 한 종류 키와 값을 한쌍으로 저장 중복된 키는 허용하지 않음 반복가능한 객체
    //iterator 를 통해 map객체 내부 순환 가능

    //키와 값의 쌍으로 이루어진 특징으로 Object와 유사하게 여길수도 있다.그러나 몇가지 특징이 있음
    //map 객체의 키는 다양한 자료형 값으로 정의할수 잇다 object는 문자와 심볼 자료만 가능
    //반복가능한 객체로 [Symbol.iterator]();이 기본적으로 정의되어있음

    const map = new Map();

    map.set('one',1);
    //(키, 값)
    map.set('two',2);

console.log(map.get('one'));
//key가 one인 요소의 값을 가져온다 get메소드에 키정보를 넣으면 해당 키에대한 요소의 값을 가져옴

console.log(map.has('one'));
//키가 one인요소 확인 불리언으로 반환

map.delete('one');
// 삭제

console.log(map.has('one'));
console.log(map.has('two'));

}

{
    //map 객체의 크기 확인하기 size
//map은 키에 어떤 종류의 자료형도 선언 가능 원시형 객체 배열 함수 등,,,,
    const map = new Map();

    map.set('one', 1);
    map.set(2 , 'two');
    map.set([1,2,3], 'Three Elements' );
    map.set( {a: 'A', b: 'B'}, 'object element');//객체
    map.set(function(){} , 'function element');

    console.log(map.size);
}

{
    //Map객체 요소 나열 -- keys values, entries

    const map = new Map();

    map.set('one',1);
    map.set('two',2);
    map.set('three',3);

const keys = map.keys();
//키정보만 모음
const value = map.values();
//값정보만 모음
const entries = map.entries();
//[키, 값]형태의 정보를 모음

console.log(keys.next().value);
console.log(value.next().value);
console.log(entries.next().value);
//next()는 첫번째 요소만 반환됨value속성을 호출

console.log(keys);
console.log(value);
console.log(entries);
//next()로 반환된 애들 제외하고 나머지 요소들을 확인

}
console.clear();

{
    //Map객체 순환  for- of , foreach

    const map = new Map();

    map.set('one',1);
    map.set('two',2);

    console.log('키정보만 출력합니다');
    for (let key of map.keys()) {
        console.log(key);
    }

    console.log('값 정보만 출력합니다');
    for (let value of map.values()) {
        console.log(value);
    }

    console.log('[for-of, entries]키,값 정보 동시에 출력합니다');
    for (let [key, value] of map.entries()) {
        console.log(`키는 ${key} 값은 ${value}`)
    }

    console.log('[for-of]키,값 정보 동시에 출력합니다');
    for (let [key, value] of map) {
        console.log(`키는 ${key} 값은 ${value}`)
    }

    console.log('[forEach] 키,값 정보 동시에 출력합니다');
     map.forEach((value, key)=> {
        console.log(`키는 ${key} 값은 ${value}`);

     })
    
}
console.clear();

{
    const map = new Map();

    for(let num of [1,2,3,4,5]) {
        map.set((value) => value * 2, num);
    }
//1 - 5 까지 값을 num 변수에 전달 
// map에 요소 추가 키를 (value) => value * 2 함수로 정의 
//값은 num 로 할당

    for(let [func, value] of map){
        console.log(func(value));
    }

    // 다시 순환  func 와value를 전달받음 
    // value를 다시 인자로 넣어 func실행

}

{
    //Set 객체의 값 추가 삭제 확인 add/ delete/ has
//set은 값으로만 이루어진 데이터 구조 중복값 허용안됨

    const s = new Set();

    s.add('one');
    s.add('two');
    s.add('three');


    console.log(s.has('one'));
    s.delete('one');
    console.log(s.has('one'));
    console.log(s.has('two'));

}

{
    //set 객체 크기 확인하기 size
    const s = new Set();

    s.add('one');
    s.add(2);
    s.add([1,2,3]);
    s.add({a:'A', b: 'B'});
    s.add(function(){});


console.log(s.size);
s.clear();
//메소드 값 초기화
console.log(s.size);

}

{
//set 객체로 array중복요소 없애기
//set은 중복 값을 허용하지 않음 == 중복 제거하기!

const arr = ['one', 'two', 'three', 'four', 'two', 'three','one'];

const s = new Set(arr);
//인자로 arr를 넣으면 배열이 set으로 변환 --그러면서 중복값 제거됨
console.log([...s]);
//대괄호와 ...을 통해 set객체값들이 전개된 배열로 변환
}

{
    //set 객체값 나열 -- keys values entries

    const s = new Set();

    s.add('one');
    s.add('two');
    s.add('three');

    const keys = s.keys();
    //set은 값의 집합이기 떄무에 키를 모으는 것이 의미가 없음--
    //그래서 value랑 같은 값이 나옴
    const value = s.values();
    
    const entries = s.entries();
    //entries는[키, 값]형태의 정보를 모으는 것 
    //set에는 값만 있기 떄문에 키대신 값을 전달

    console.log(keys.next().value);
    console.log(value.next().value);
    console.log(entries.next().value);
    //next()는 첫번째 요소만 반환됨value속성을 호출

    console.log(keys);
    console.log(value);
    console.log(entries);
    //next()로 반환된 애들 제외하고 나머지 요소들을 확인

}

{
    //set객체 순환 for of , foreach
    //map객체와 유사 다만 반복문을 통해 전달되는 값에서 차이가 잇음

    const s = new Set();

    s.add('one');
    s.add('two');

    
    console.log('키정보만 출력합니다');
    for (let key of s.keys()) {
        console.log(key);
    }

    console.log('값 정보만 출력합니다');
    for (let value of s.values()) {
        console.log(value);
    }

    console.log('[for-of, entries]키,값 정보 동시에 출력합니다');
    for (let [key, value] of s.entries()) {
        console.log(`키는 ${key} 값은 ${value}`)
    }

    console.log('[for-of]키,값 정보 동시에 출력합니다');
    for (let [key, value] of s) {
        console.log(`키는 ${key} 값은 ${value}`)
    }
    //이부분이 map과 다르게 출력됨



    console.log('[forEach] 키,값 정보 동시에 출력합니다');
     s.forEach((value, key)=> {
        console.log(`키는 ${key} 값은 ${value}`);

     })
}

console.clear();
{
    //일정 시간후에 코드 실행하기  setTimeout

    // setTimeout(실행될 함수, 지연될 시간 밀리세컨드)

    const timer = {
        run:function(){
            if(this.t) console.log('이미 실행된 타이머가 있다');

            this.t = setTimeout(function () {
                console.log('1초뒤에 실행된다');
            },1000);

        },

        cancel: function () {
            if(this.t) clearTimeout(this.t);
            this.t = undefined;
        }

    };

    //run 속성 추가 --함수 대입
    // 1초후 정의된 콜백함수를 통해 1초후 실행된다는 코드 실행
    //추후 타이머 관리를 위해 작성한 셋타임 코드를 this.t에 대입

    //cancel -- this.t가 유효한 경우에만 클리어타임 실햄

    timer.run();
    timer.cancel();
    //처음 런 했지만 바로 캔슬로 취소되어서 실행 안됨
    timer.run();
    // 실행됨

    setTimeout(()=>{
        console.log('jsjs');
    },0);
console.log('200');
//지연 시간이 0이라도 200다음에 실행스택이 쌓임 그래서 200이 먼저 출력
}

// {
//setInterval 일정시간마다 코드 실행하기
// 일정한 간격으로 함수가 실행됨 -- 결과값으로 id값 반환 
// id를 clearInterval 인자에 넣으면 정지됨


// let count = 0;

// const timer = setInterval(() => {
//     console.log(`${count++} 번째 함수 실행`);

//     if (count > 5) {
//         clearInterval(timer)
//     }
// },1000);

// }

console.clear();
{
    //promise 이해하기

    //언젠가 완료될 일을 나타냄 완료되면 하나의 값을 결과로 반환 실패하며 정상적인 일 대신 실패이유를 반환하기도...

    //promise의 상태 3가지
    //대기중- pending --아직 결과가 없는 상태 약속을 했지만 아직 결과나 나오지 않은 상태
    //이행됨 - fulfilled -- 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태 결과로 하나의 값이 전달 resolved
    //거부됨 - rejected -- 비동기 처리가 실패한 상태 약속이 거부되고 거절이유를 전달 rejected

    //promise는 두가지 메소드를 가짐
    //then(onFulfilled, onReject)- 약속이 완료됐을 때 호출될 함수들을 정의 첫번째 인자로 전달되는 함수는 약속이 성공적일때
    //두번째 인자는 거절됐을때 두 전달인자의 함수들은 매개변수를 가짐 매개변수응 통해 전달
    
    //catch(onReject) - 약속이 거부됐을때 호출될 함수 등록

function promiseForHomework (mustDo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('doing homework');
    
            if(mustDo){
                resolve({
                    result: 'homework-result'
                });
            } else {
                reject(new Error('Too lazy!'));
            }
    
        },3000);
    
    });
    
};

//매개변수를mustDo로 하고 이것에 의해 promise의 성공과 실패가 결정됨
//promise객체는 생성자 함수에 new키워드로 생성 이때 계산될 코드를 담은 함수를 인자로 전달
// resolve reject를매개변수로 가짐
//3초후 실행되는 코드를 만듬
//resolve함수가 호출되면 이후에then메소드에 전달된 함수의 매개변후로 전달
//
    
const promiseA = promiseForHomework(true);
console.log('promiseA created');
//이게 먼저 출력되고 doinghomework은 3초뒤에 뜸
//전달인자가 있기때문에 resolve가 호출됨

const promiseB = promiseForHomework();
console.log('promiseB created');
//전달인자가 없기때문에 reject호출

 promiseA.then( v => console.log(v));
 promiseB
    .then( v => console.log(v))
    .catch( e => console.error(e));
    //B는 reject를 호줄했기때문에 catch 메소드에 전달받은 에러부분만 호출


}

{
    //promise조합하기

    //promise의 then 메소드애서 새로운 비동기 코드를 실행하는 promise를 반환할수 있는데
    //다음 then메소드는 새롭게 만들어진 promise 코드가 이행되기 전까지 호출되지 않음

    function doJob (name, person){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(person.stemina > 50){
                    resolve({
                        result: `${name} success`,
                        loss: 30
                    });
                } else {
                    reject(new Error(`${name} failed`))
                }
            },1000);
        });
    };


    const harin = {stemina :100};

    doJob('work', harin)
    .then(v => {
        console.log(v.result);
        harin.stemina -= v.loss;
        return doJob('study', harin);
    })
    .then(v => {
        console.log(v.result);
        harin.stemina -= v.loss;
        return doJob('work', harin);
    })
    .then(v => {
        console.log(v.result);
        harin.stemina -= v.loss;
        return doJob('study', harin);
    })
    //then 메소드에 전달한 콜백함수에서 study이름의 일을 수행하는 약속을 반환
    //그럼또 반환한 결과 이행값이 나옴
    //스테미나가 50이하까지 차감되면 then은끝나고 거부 catch메소드가 실행됨 에러 
.catch(e => console.error(e));


}

{
    //async 이해하기

    //async함수는 함수안에서 await구문과 함께 비동기 작업을 제어
    //await은 반드시 async함수안에서만 유효

    //처음 async 함수가 호출되어  await 키워드가 있는 비동기 작업(프로미스 객체)이 실행되면 해당 비동기 함수는
    // 이벤트 루프를 통해 비동기로 작업을 처리
    //그동안 async함수는 이러한 비동기 작업이 완료될때까지 일시중지 상태로 비동기 작업(프로미스 객체)을 해결을 기다림
    //완료되면 다시 async함수 실행 결과 반환

    function doJob (name, person){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(person.stemina > 50){
                    person.stemina -= 30;
                    resolve({
                        result: `${name} success`,
                    });
                } else {
                    reject(new Error(`${name} failed`));
                }
            },1000);
        });
    };


    const harin = {stemina :100};

    const execute = async function(){
        try {
            //비동기 로직 앞에 await키워드 추가 비동기 작업이 끝날때까지 기다렿다가 다음문장 코드 처리
            let v = await doJob('work', harin);
            console.log(v.result);
            v = await doJob('study', harin);
            console.log(v.result);
            v = await doJob('work', harin);
            console.log(v.result);
            v = await doJob('study', harin);
            console.log(v.result);
        } catch(e){
            console.log(e);
        }
      
    }
    execute();

}