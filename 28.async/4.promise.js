/**
 * 1.普通的promise
 * 2.promise可以注册多个then
 * 3.失败之后的回调
 * 4.
 **/

var Defer = function(){
    var successes=[],errors=[],value,reason;
    return {
        resolve:function(_value){
            value = _value;
            successes.forEach(function(success){
                success(value);
            })
        },
        //失败之后的回调
        reject:function(_reason){
            reason = _reason;
            errors.forEach(function(error){
                error(reason);
            })
        },
        promise:{
            then:function(_callback){
                successes.push(_callback);
                return this;
            },
            error:function(_callback){
                errors.push(_callback);
                return this;
            }
        }
    }
}


var fs = require('fs');
function readFile(){
    var defer = Defer();
    fs.readFile('1.txt','utf8',function(err,data){
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(data);
        }
    });
    return defer.promise;
}

//注册成功之后的回调函数
var promise  = readFile();
promise.then(function(data){
    console.log('1',data);
}).error(function(error){
    console.error(error);
});