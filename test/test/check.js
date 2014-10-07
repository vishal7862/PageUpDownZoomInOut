
       // [start] demo code //
    
// cache scroll positions for each chapter

//$(function () {
//    var $chapters = $('#main').children('svg');
//    var $chscrollpositions = [];
//    $chapters.each(function (i) {
//        $chscrollpositions[i] = Math.round($(this).offset().top - $('#main').offset().top) - 10;
//    });

//    $chapters.eq(0).attr('class','active'); // set first chapter active on start
//    $('#btnUp').click(function () {
//         var last =$chapters.find('.active').removeClass('active').index();
//        var next;

//        switch ($(this).index()) {
//            case 1:	// action - next chapter
//                next = (last + 1 == $chapters.length) ? 0 : last + 1; // loop around to first chapter
//                break;
//            case 2:	// action - last chapter
//                next = $chapters.length - 1;
//                break;
//            case 3:	// action - first chapter
//                next = 0;
//                break;
//        }
//        $chapters.eq(next).attr('class', 'active'); // set next chapter active
//        $('#main').scrollto($chscrollpositions[next]);
//    });
//});



//// [end] Demo Code //




$(function () {

    var count = 1;
    var $chapters = $('#main').children("svg");

    $("#btnUp").click(function () {

        if (count > 1) {
            --count;
            //var x = $("#main").find("svg").attr("class","");
            $('body').scrollTo('#page' + (count), { duration: 'slow', offsetTop: '50' });



        }

    });


    $("#btnDown").click(function () {
        if (count == 1) {
            $('body').scrollTo('#page2', { duration: 'slow', offsetTop: '50' });
            count = 2;
        }
        else if (count < $chapters.length) {
            ++count;
            //var x = $("#main").find("svg").attr("class","");
            $('body').scrollTo('#page' + count, { duration: 'slow', offsetTop: '50' });



        }


    });
});

