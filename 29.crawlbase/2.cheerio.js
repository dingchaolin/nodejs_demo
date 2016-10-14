var cheerio = require('cheerio');
var $ = cheerio.load('<h1 class="title"> hello zfpx</h1>');
$('h1.title').text('hello node.js');
$('h1.title').addClass('welcome');
//console.log($);
//console.log($.find('.welcome'));
console.log($.html());

LeaveData:{"signet":"","uid":3070106,"nickname":"猴腮雷","token":"39fc4935443c43cd6d97e710b1770cda","ip":"127.0.0.1","Status":"1","Msg":"获取成功","c_id":668,"modou":0,"mobi":0,"grade":0,"type":0,"avatarurl":"http://c.mfniu.com/images/photo/20131203190840.jpg","age":0,"gender":0,"province":0,"city":0,"area":0,"description":"","Level":0,"Total":0,"proportion":"0%","need":1000,"vip":4,"leveltitle":"","nextlevel":"屌丝","userlevel":3,"rid":"e9cebdefba233dd09a596b0b0d6fef69","roomid":"e9cebdefba233dd09a596b0b0d6fef69","member":"false","level":0,"total":0,"timelimit":0,"v_hash":"","descript":"主动退出房间","num":0}
SVC TJCC _allConnections 1
SVC TJCC args.data.userlevel:=3
SVC TJCC userlevel:=3



curl -d "action=record&uid=123&username=dcl&type=2&num=10000&level=0&c_hash=e9cebdefba233dd09a596b0b0d6fef69&userIDs=2171988&keys=037eae6c56e380f2c05c3a67bf579933&verify=8685786e6a6a376f7486269c868c5c30"  "http://video.88mf.com/newVideoPHP/growthsystest.php"