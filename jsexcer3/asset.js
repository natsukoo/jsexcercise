 var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
    var test = [];

    function func(array1, array2) {
        var key = array1.length;
        for (var i = key - 1; i >= 0; i--) {
            var str = array1.pop();
            if (!array2.length) {
                //这个判断时判断test是否为空，为空的话需要开辟新的空间
                array2.length += 1;
                array2[0] = [];
                array2[0].push(str);
                array2[0].push(i);
            } else {
                var len = array2.length;
                //即便循环到这里 test[0][0]是存在的，这个因为j的原因也会说undefined。。好奇怪。
                //for (var j = len- 1; j>=0,test[j][0] != str; j--) {
                for (var j = len - 1; j >= 0; j--) {
                    if (array2[j][0] == str) break;
                }
                if (j >= 0) {
                    array2[j].push(i);
                    if (i == 0) {
                        return array2;
                    }
                } else {
                    len++;
                    array2[len - 1] = [];
                    array2[len - 1].push(str);
                    array2[len - 1].push(i);
                }
            }

        }
    }
    func(arr, test);
    document.getElementById("result").innerHTML = test.join("<br/>");

//想要求出二维数组里面最长的一个数组。妹弄出来。试试sort（）
    function maxCal(array3) {
        var max = array3[array3.length - 1].length;
        for (var i = array3.length - 2; i >= 0; i--) {
            if (max < array3[i].length) max = i;
        }
        return max;
    }
    var a = maxCal(test);
    document.getElementById("top").innerHTML = test[a][0];
    document.getElementById("times").innerHTML = test[a].length - 1;

    document.getElementById("sort").innerHTML = test.sort(function(a,b){
    	return b.length - a.length;
    })

    document.getElementById("order").innerHTML = test[a].slice(1).reverse();
       