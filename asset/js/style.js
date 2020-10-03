$(function() {

    //ボタンを非表示にする
    $('#page_top').hide();

    //画面をスクロールしたとき
    $(window).scroll(function() {

        //1000pxより多くスクロールした場合
        if ($(this).scrollTop() & gt; 1000) {

            //ボタンをフェードインさせる
            $('#page_top').fadeIn();

            //それ以外の場合
        } else {

            //ボタンをフェードアウトさせる
            $('#page_top').fadeOut();
        }
    });

    //id属性がtopBtnの要素をクリックすると
    $('#page_top').click(function() {

        //画面の上から0pxの所まで500ミリ秒（0.5秒）かけてアニメーションしながらスクロールする
        $('html, body').animate({ scrollTop: 0 }, 500);

    });

});