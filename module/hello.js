
// export function hello(name){
//     console.log(`hello ${name}`);
//   }


//모듈 기본값 정의하고 가져오기
//default 키워드로 모듈에서 기본으로 내보내는 값을 정의할수 있다

// export default 'hello';

// export default function hello(name) {
//     console.log(`hello ${name}`);
// };

// export default class Hello {
//     constructor(greeting) {
//         this.greeting = greeting;
//     }
//     hi(name){
//         console.log(`${this.greeting} ${name}`);
//     }
// }

//default(기본값) 는 하나의 모듈에서 하나만 사용가능 즉 한 파일에서는 하나의 값만 default로 정의
//그리고 그 뒤에는 변수선언 키워드가 올수 없다



    //모듈을 여러이름으로 내보내고 가져오기

    // export const version = 'v1.0';
    // export var personA = {
    //     name: 'a'
    // };

    // export function add(a,b) {
    //     return a+b;
    // }

    // export class Person {
    //     constructor(name) {
    //         this.name = name;
    //     }
    // }

    console.log('hello');
    window.Hello = function hello (name){
        console.log(`hello ${name}`);
    }

