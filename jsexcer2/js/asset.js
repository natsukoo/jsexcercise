var num = [];
    var flag;
    var num1 = "";
    var result = 0;
    // 此处得到的是一个关于button的集合。数组。分别给每一个键的点击获取到相应的value值
    //本来想用一个函数返回值，但是一旦加入到函数内部就取不出来了。所以这个方法
    var a = document.getElementsByTagName("button");

    for (var i = a.length - 1; i >= 0; i--) {
        a[i].addEventListener("click", function() {
            var j = this.value;
            if (!isNaN(j)) {
                num.push(j);
                document.getElementById("pannel").innerHTML = num.join("");
            } else if (j == "/" || j == "*" || j == "+" || j == "-" || j == "%") {
                if (num &&num1) {
                    if (flag == "/") {
                    result = Number(num1) / Number(num.join(""));
                } else if (flag == "+") {
                    result = Number(num1) + Number(num.join(""));
                } else if (flag == "-") {
                    result = Number(num1) - Number(num.join(""));
                } else if (flag == "*") {
                    result = Number(num1) * Number(num.join(""));
                } else if (flag == "%") {
                    result = Number(num1) % Number(num.join(""));
                } 
                document.getElementById("pannel").innerHTML = result;
                };
                flag = j;
                if(result != ""){
                    num1 = result;
                } else if (num.length != 0) {
                    num1 = num.join("");
                }; 
                num.length = 0;
            } else if (j == "=") {
                if (flag == "/") {
                    result = Number(num1) / Number(num.join(""));
                    flag = "";num.length = 0;
                } else if (flag == "+") {
                    result = Number(num1) + Number(num.join(""));
                    flag = "";num.length = 0;
                } else if (flag == "-") {
                    result = Number(num1) - Number(num.join(""));
                    flag = "";num.length = 0;
                } else if (flag == "*") {
                    result = Number(num1) * Number(num.join(""));
                    flag = "";num.length = 0;
                } else if (flag == "%") {
                    result = Number(num1) % Number(num.join(""));
                    flag = "";num.length = 0;
                } else {
                    if (num.length!=0) {result = num.join("")};
                    
                }
                
                num1 = result;
                
                document.getElementById("pannel").innerHTML = result;
            } else if (j == "clear") {
                num1 = 0;
                num.length = 0;
                result = 0;
                document.getElementById("pannel").innerHTML = 0;
            }
             console.log("获取的数组"+num);
            console.log("想用的数字"+num1);
            console.log("结果"+result);
        })

    }