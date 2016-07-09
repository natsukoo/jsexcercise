var outCome = document.getElementById("result");
    function checkOut(mark) {
        if (isNaN(mark)) {
            alert("请输入一个正确数！");
        } else if (mark > 100 || mark < 0) {
            alert("请输入一个1-100的数值")
        };
        var a = parseInt(mark / 10);
        outCome.innerHTML = "该生为" + fina(a) + "等生";

    }

    function fina(b) {
        switch (b) {
            case 10:
                return 1;
                break;
            case 9:
                return 1;
                break;
            case 8:
                return 2;
                break;
            case 7:
                return 3;
                break;
            case 6:
                return 4;
                break;
            case 5:
                return 5;
                break;
            case 4:
                return 6;
                break;
            case 3:
                return 7;
                break;
            case 2:
                return 8;
                break;
            case 1:
                return 9;
                break;
            case 0:
                return 10;
                break;
            default:
                return "输入值有误。"
        }
    }