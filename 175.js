 // http서버 띄우기

 //노드의 http내장 모듈은 HTTP서버와 클라이언트를 구성하는 함수를 제공
 //HTTP 요청/ 응답을통신이 어떻게 이루어지는지 볼텐데 먼저 HTTP서버가 있어야한다

 const http = require('http');
 //http모듈 가져온다

 const hostname = '127.0.0.1';
 const port = 3000;
 //서버를 생성할때 사용하고자 하는 호스트네임과 포트번호 지정

 const server =  http.createServer((req,res) => {
    //http.createServer 함수는 웹 서버 객체를 생성 반환된 서버 객체를 통해hTTP요총울 받으면
 //request와 response객체가 전달되며 , 지정된 작업을 수행한다.
 
     res.statusCode = 200;
     //response의statusCoode속성에 요청에 대한 응답상태 코드를 지정
     //statusCode란 http에서 HTTP 상태 코드를 의미 여기서 200 상태코드는 서버가 요청을 정상적으로 처리했다는 의미
     res.setHeader('Content-Type', 'text/plain');
     //setHeader로 헤더정보 지정 서버가 클라이언트로 응답하는 자원 종류를 지정
     //Content-Type은 클라이언트로 전달되는 자원의 종류를 말함 여기서 지정된 타입(종류)는 text/plain 텍스트 파일이다

     res.end('hello node.js HTTP server');
     //end함수는 지정된 모든 응답 헤더와 본문이 전송 되었음을 서버에 알린다
     //해당 서버는 이 메세지를 기준으로 응답 완료로 간주 따라서
     //response.end 함수는 반드시 각 응답에서 호출되어야 한다
 });


 server.listen(port,hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
 });
 //지정한 호스트 포트 정보로 HTTP서버를 실행하여 연결을 수신받는다

 //HTTP서버와 클라이언트 간 통신은 메세지를 통해 주고 받는다 이를HTTP메세지라고 부르는데 
 //메세지는 request요청와 response응답두가지로 나뉘며 비슷한 구조를 지닌다
 //메세지를 주고 받는 정보는 총 세가지 -- 요청 또는 응답에 대한 상태정보 (url, statusCode),
//  HTTP헤더(header), HTTP메세지본문(body) 정보가 메세지에 담긴다
