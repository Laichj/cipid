var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$timeout) {
    $scope.name = "John Doe";
    $scope.content = content;


    // angular.forEach($scope.content, function(obj, index) {
    //     for(var i = 0;i<obj.message.length;i++){
    //     }
    //     console.log(obj)
    // })

    var index = 0;
    var j = 0;
    setInterval(function() {
        check()
    },750)

    function check() {
        if(index<$scope.content.length){
            if(j<$scope.content[index].message.length){
                print($scope.content[index],j)
                j++
            }else{
                index++
                j=0
                check()
            }
        }else{
            print($scope.content[index]-1,j)
        }
    }

    function print(obj,i) {
        obj.value = obj.message.substring(0, i) + (i & 1 ? '_' : '');  // 模拟出打字'_'闪烁效果
    }





/*    (function(jQuery) {
        jQuery.fn.typewriter = function() {
            this.each(function() {
                let jQueryele = jQuery(this),
                    str = jQueryele.html(),
                    progress = 0;
                jQueryele.html('');
                let timer = setInterval(function() {
                    let current = str.substr(progress, 1);        // 每次截取一个字符
                    if (current === '<') {                        // 如果是<则找到对应的>，并增加相应的progress的值;
                        progress = str.indexOf('>', progress) + 1;  // 从<>的下一个开始
                    } else {
                        progress++;
                    }
                    // progress & 1 与运算 奇数 & 1 = 1,偶数 & 1 = 0；
                    jQueryele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));  // 模拟出打字'_'闪烁效果
                }, 75);
            });
            return this;
        };
    })(jQuery);

    if (!document.createElement('canvas').getContext) {
        let msg = document.createElement("div");
        msg.id = "errorMsg";
        msg.innerHTML = "Your browser doesn't support HTML5!";
        document.body.appendChild(msg);
        jQuery("#code").css("display", "none");
    } else {
        jQuery("#code").typewriter(); // 打字效果
    }*/

});