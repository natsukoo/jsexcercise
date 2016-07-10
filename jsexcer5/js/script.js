$(window).on("load", function() {
    var dataImg = {
        "data": [{
            "src": "1.jpg"
        }, {
            "src": "2.jpg"
        }, {
            "src": "3.jpg"
        }, {
            "src": "4.jpg"
        }, {
            "src": "5.jpg"
        }, {
            "src": "6.jpg"
        }, {
            "src": "7.jpg"
        }, {
            "src": "8.jpg"
        }, {
            "src": "9.jpg"
        }, {
            "src": "10.jpg"
        }, {
            "src": "11.jpg"
        }, {
            "src": "12.jpg"
        }, {
            "src": "14.jpg"
        }, {
            "src": "15.jpg"
        }, {
            "src": "16.jpg"
        }, {
            "src": "17.jpg"
        }, {
            "src": "18.jpg"
        }, ]
    }
    
    imgSet();
    window.onscroll = function() {
        if (scollLoad()) {
            $.each(dataImg.data, function(index, value) {
                var box = $("<figure>").appendTo($(".container"));
                $("<img>").attr("src", "img/" + $(value).attr("src")).appendTo(box);
            })
            imgSet();
        };
    }
})



function scollLoad() {
    var lastFigureHeight = $("figure").last()[0].offsetTop + $("figure").last().height();
    var windowHeight = $(document).width();
    var scollHeight = $(window).scrollTop();
    // console.log(lastFigureHeight + "---" + scollHeight + "-----" + windowHeight);
    return (lastFigureHeight < windowHeight + scollHeight) ? true : false;
}
// 放置图片的函数
function imgSet() {
    var figureArr = [];
    $("figure").each(function(index, value) { //从0到19，value值是object html element
        if (index < 5) {
            figureArr[index] = $(this).height() + 20;
        } else {
            var minFigureHeight = Math.min.apply(null, figureArr);
            var minFigureIndex = $.inArray(minFigureHeight, figureArr);
            $(value).css({
                position: 'absolute',
                top: minFigureHeight,
                left: $("figure").eq(minFigureIndex).position().left
            })
            figureArr[minFigureIndex] = minFigureHeight + $(this).height() + 20;
        }
    })

}

$(function(){
    $("figure").click(function(){
        // 因为this是一个dom元素，返回的事dom的对象，所以需要变成一个jq对象才可以调用jq的方法
        console.log($(this).find("img").attr("src"));
        $(".container").append("<div>")
    })
})