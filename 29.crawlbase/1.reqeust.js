/**
 * request
 * http.reqeust
 */
var request = require('request');

request('http://www.163.com',function(err,response,body){
    if(err){
        console.error(err);
    }
    console.log(body);
});

curl -d "action=rosteradd&c_hash=xyzabc&c_name=liuxiang&uid=123456&c_ip=192.168.2.2&type=3" "http://video.88mf.com/newVideoPHP/roster.php"
curl -d "action=record&uid=2341791&username=魔方手机哟&type=5&num=50&userIDs=2148078&keys=037eae6c56e380f2c05c3a67bf579933&verify=8685786e6a6a376f7486269c868c5c30" "http://video.88mf.com/newVideoPHP/growthsys.php"

curl -d "c_hash=e9cebdefba233dd09a596b0b0d6fef69&action=list&act=list"  "http://video.88mf.com/newVideoPHP/getuseronlinelist.php"