
     function fibonacci(num){
         if(num <= 1){
             return 1;
         }
         return fibonacci(num -1) + fibonacci(num - 2);
     }
     //피보나치 수를 계산하는 함수 피보나치 수는 0과 1로 시작하여 다음수는 앞의 두 수릐 합이 되는 수 
    //  수를 나열하면 0 1 1 2 4 5 8 피보나치 함수는 재귀호출을 이용하여 무거운 계산을 한다

//onmessage함수 등록 메인스크립트에서 postMessage로 메세지를 전달하면 등록된 콜백함수가 실행됨
     onmessage = function(e){
         const num = e.data.num;
         //이벤트를 인자로 전달 받으면 이벤트의 data속성을 통해 전달한 메세지에 접근할 수 있다
         //num상수는 메인 스크립트의 fibonacciWorker.postMessage({num: value});에서 전달한
         //객체의 num 속성값이다. 이값은 피보나치 수열의 특정 위치를 나타낸다
         console.log('메인 스크립트에서 전달받은 메세지 ', e.data);

         if( num === null  || num === '') {
            
             throw new Error('숫자를 전달하지 않았습니다');
         }
         //숫자를 전달받지 않으면 예외를 발생함

        const result = fibonacci(num);
        postMessage(result);
        //피보나치 함수를 호출하여 피보나치 수를 계산하고 그 결과를 postMessage메소드 인자로 호출해서 메인스크립트에 전달
        
     }
