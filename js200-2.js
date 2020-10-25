
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

    num.__proto__.toString = () => {
        return 'toString 덮어쓰기';
    };
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

{
    //80
}