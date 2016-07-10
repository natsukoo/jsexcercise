var tempo = ["+"]; //存放数字，可以加可以减
var result = 0; //用于显示在pannel上的。
var operator; //用于存放运算符
var _pannel = document.getElementById("pannel"); //这个用来决定显示在面板上的值

//下面可以实现拿到所点击的button 的value值。我发现false或者是true都一样的。
document.getElementById("keyg").addEventListener("click", getEvent);
//根据所取到的，来判断运用什么函数。
function getEvent(event) {
    var t = event.target;
    switch (t.name) {
        case "num":
            getNumber(t.value);
            break;
        case "oper":
            oper(t.value);
            break;
        case "cle":
            clear();
            break;
        case "backspace":
            backSpace();
            break;
        case "equal":
            equalCal();
            break;
    }

}
//等于号的时候函数
function equalCal() {
    if (operator) {
        oper(operator);
        operator = "";
    }
}

//运算符 result
function oper(para) {
    operator = para;
    if (tempo.length > 1) {
        if (result == 0) {
            result = Number(tempo.join(""));
            tempo = ["+"];
        } else if (!oper2(operator)) { //有两个因子的情况
            result = "error";
        }
    }
    oper1(operator);
    pannelShow(result);
}


//  else if (tempo.length > 1 && result != 0) {
//这种情况就不作处理，tempo和result的值不发生变化。
// };



function oper2(para) {
    var t = Number(tempo.join(""));
    switch (para) {
        case "add":
            result = result + t;
            tempo = ["+"];
            return true;
        case "minus":
            result = result - t;
            tempo = ["+"];
            return true;
        case "multiply":
            result = result * t;
            tempo = ["+"];
            return true;

        case "divide":
            result = result / t;
            tempo = ["+"];
            return true;

        case "mod":
            result = result % t;
            tempo = ["+"];
            return true;
        default:
            return false;
    }

}

function oper1(para) {
    switch (para) {
        case "sqrt":
            result = Math.sqrt(result);
            break;
        case "square":
            result = result * result;
            break;
        case "sin":
            result = Math.sin(result / 180 * Math.PI);

            break;
        case "cos":
            result = Math.cos(result / 180 * Math.PI);
            break;
        case "tan":
            if (result < 1 && result > -1) result = Math.tan(result / 180 * Math.PI);
            else result = "error";
            break;
    }}

    //要是输进去的是数字的话，最终会存到tempo这个数组里面，小数点判断着存，若是正负号则对数组第一位取反
    /**
     * getNumber() is a generator function.
     *
     * @param para 12
     *将所得到的数字存到数组里面
     * @return {Boolean}
     * @api private
     */
    function getNumber(para) {
        if (operator == "") {
            result = 0;
        }
        if (para == "." && (tempo.indexOf(".") > -1)) {
            return false;
        } else if (para == "reversion") { //数字的话可以直接乘以－1，但现在还没有想到如何实现
            if (tempo.length == 1 && result != 0) {
                result = result * -1
            } else if (tempo[0] == "+") {
                tempo[0] = "-";
            } else {
                tempo[0] = "+";
                //如何不用if来做判断。。如同取反一般
            }
        } else {
            tempo.push(para);
        }
        if (tempo.length == 1 && result != 0) {
            pannelShow(result);
        } else{
            pannelShow(tempo);    
        }
    }
    //清零的函数
    function clear() {
        tempo = ["+"];
        result = 0;
        operator = "";
        pannelShow(result);
    }
    //退格的函数
    function backSpace() {
        if (tempo.length > 2) {
            tempo.pop();
            pannelShow(tempo);
        } else if (tempo.length == 2) {
            tempo.pop();
            pannelShow(0);
        } else if (result) {
            result = parseInt(result/10);
            pannelShow(result);
        }
    }

    //pannel上同步显示的函数，这个参数可能是数组也可能直接是一个结果。因此。
    function pannelShow(para) {
        if (typeof(para) == "object") {
            _pannel.innerHTML = Number(para.join(""));

        } else _pannel.innerHTML = para;
        
    }




