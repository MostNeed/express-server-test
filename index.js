//node_modules 내 express 관련 코드를 가져온다
var express = require('express'); 
var app = express();

// 사용자가 http://localhost:5000/hello URL주소로 접근했을때
app.get('/hello', (req, res) => { // URL 응답 테스트
    res.send('hello world !')
})

app.listen(5000, ()=> {//5000 포트로 서버 오픈
    console.log('server is running on port 5000 ...');
})