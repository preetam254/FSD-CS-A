import http from "http";
const server = http.createServer((req, res) => {
const url = req.url;
if(url == "/"){
    res.write('home page');
}
else if(url == "/about"){
    res.write('about page');
}
else if(url == "/contact"){
    res.write('contact page');}
    else {
        res.write('ERROR PAGE');
    }
    res.end();
})
server.listen(4001);