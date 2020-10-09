

{
    var family = {
        'address': 'Seoul',
        members: {},
        addFamily: function(age, name, role) {
          this.members[role] = {
            age: age,
            name: name
          };
        },
        getHeadcount: function() {
          return Object.keys(this.members).length;
        }
      };
      
      family.addFamily(30, 'kay', 'queen');
      family.addFamily(31, 'bomi', '붕붕');
      family.addFamily(10, 'dangdangi', 'dog');
      family.addFamily(30, 'chloe', 'aunt');
      family.addFamily(3, 'lyn', 'niece');
    
      
      var printMembers = function() {
        var members = family.members;
        for (role in members) {
          console.log('role: ' + role + ', name: ' + members[role].name
           + ', age: ' + members[role].age);
        }
      };
      printMembers();
      
    var members = family.members;
    members['queen'] = {age: 20, name: 'ellsa'};
    members.붕붕 = {age: 32, name: 'bomi'};
    delete members.dog;
    delete members['niece'];
    printMembers();
}

//단축 속성명으로 재작성
{
    const address = 'busan';
    let members = {};
    let addFamily = function(age, name, role) {
        this.members[role] = {age, name};     
        };
    
    const getHeadcount = function() {
        return Object.keys(this.members).length;
      };
    
    let family = {address, members, addFamily, getHeadcount};
    
    family.addFamily(30, 'kay', 'queen');
    family.addFamily(31, 'bomi', '붕붕');
    family.addFamily(10, 'dangdangi', 'dog');
    family.addFamily(30, 'chloe', 'aunt');
    family.addFamily(3, 'lyn', 'niece');
    
    console.log(family.getHeadcount());
}

{
// 속성 게산명 

let obj = {};
for(let i = 0; i < 4; i++){
    obj['key' +  i] = i;
}
console.log(obj);

const profile =  'kay:30';
let person = {
    [profile] : true,
    [profile.split(':') [0]] : [profile.split(':') [1]]
};
console.log(person);

}
console.clear();


// 10. 08
{
  // 비구조 할당

  let obj = {a: 1 , b: 2, c: 30, d: 44};

  let {a, c} = obj;
  console.log(`a >>> ${a}`);
  console.log(`c >>> ${c}`);

  let {a:newA = 10, f: newF = 5} = obj;
  console.log(`newA >>> ${newA}`);
  console.log(`newAF >>> ${newF}`);

}

{
    // 배열 비구조화 할당 {}을 []로 바꾸어 쓰면 댐
    let arr = [1, 2, 30, 44, 5]

    let [b, c, ...rest] = arr;
    console.log(`0) b >>> ${b}`);
    console.log(`0) c >>> ${c}`);
    console.log(`rest >>> ${rest}`);
  // ...은 나머지 변수 지시자

  let [ a=10, f=9,] = [1];
  console.log(`1) a >>> ${a}`);
  console.log(`1) f >>> ${f}`);


  [ a, f,] = [f, a];
  console.log(`2) a >>> ${a}`);
  console.log(`2) f >>> ${f}`);

  }
  console.clear();

  // 10.09
{
  //심볼형
  const nationality =  Symbol('nationality');
  const user = {
    name : 'kay',
    age: 12

  };
  user[nationality] = 'korean';
  console.log(user[nationality]);

for (let key in user) {
  console.log(key);
}
// 유저안에 있는 키가 반복되어 콘솔에 찍힘
//for-in루프로는 키의 내용을 가지고 올수 읎다

console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));
// 마찬가지 키안에 들은 내용물 못가져와

const SymbolProperties = Object.getOwnPropertySymbols(user);
console.log(SymbolProperties);
console.log(user[SymbolProperties[0]]);
//이렇게 가져올수 있음
}

{
  // 예외처리
  // throw와 try-catch-finally가 있다
  // 예상치 못한 에러와 개발자가 의도한 에러가 있다. (코드에서 잘못될 가능성을 예상하고 발생시키는 에러)
  // 개발자가 의도한 에러에는 throw를 사용해서 예외 상황임을 알림 throw가 실행되면 실행되던 블록을 빠져나오게 됨

  // throw
  function checkNumber (val){
    if(typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인 되었습니다');
  }

  checkNumber(100); 
  //맞아서 로그가 잘 찍힘
  // checkNumber('wrong'); 
  //문자타입이기 때문에 예외사항 에러메세지로 이 블록을 빠져나감. 하단 완료메세지는 실행되지 않음
  console.log('완료');

  //위의 에러발생의 해결책으로 나온것이  try-catch-finally
  //예상치 못한 에러와 의도한 에러 둘다 대응가능
  
}

{
  //  try-catch-finally
  // try 에서 에러를 잡아내고 catch블록에서 제어권을 넘긴다 
  // try블록에서 발생된 에러는 catch의 변수로 전달되기 때문에 개발자는 프로그램 종료없이 어떤에러인지 확인가능
  // finally 는 에러발생 여부와 상관없이 실행되는 블록

  function checkNumber (val){
    if(typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인 되었습니다');
  }

 try{
  checkNumber(100);
  checkNumber('wrong');
 } catch (e){
   console.log(`에러가 발생했습니다 >>> ${e}`);
  //  변수 e에 에러 정보 전달 
 } finally{
  console.log('완료');
 }
}

{
  // argument객체 이해
  // argument 는 함수가 호출될때 전달되는 값
  // 매개변수 paramieter or property는 함수 선언시 작성되는 변수
  
  function sum(){
    let total = 0; 
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    console.log(arguments instanceof Array);
    // arguments 는 배열이 아님을 확인
    return total;
  }

  let sumOf1to3 = sum (1,2,3);
  console.log(sumOf1to3);

  function testArg(){
    const newArr = Array.prototype.slice.call(arguments);
    // argument 를 배열로 바꾸기위해 slice를 호출 call
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b'));
    // arguments는 배열이 아님 에러남
  }
  testArg('a', 'b');
}

{
  
}