onload = function startAnimation() { 

    // init
    let characterSpeed = 50;
    let bgSpeed = 10;
    

    document.getElementById('slow').onclick = function(){
        characterSpeed += 10;
        bgSpeed += 2;
    };
    document.getElementById('fast').onclick = function(){
        if (characterSpeed > 10) {
            characterSpeed -= 10;
        }
        if (bgSpeed > 2) {
            bgSpeed -= 2;
        }
    };

    var frames = document.getElementById("animation").children;
    var frameCount = frames.length;
    var i = 0;

    // 페이지의 width
    var clientWidth = document.documentElement.clientWidth;
    var characterWidth = document.querySelector('.img1').width;
    var widthPercent = (clientWidth - characterWidth) / clientWidth * 100;

    window.onresize = function() {
        clientWidth = document.documentElement.clientWidth;
        characterWidth = document.querySelector('.img1').width;
        widthPercent = (clientWidth - characterWidth) / clientWidth * 100;
    }
    
    var bg1_left = 0;
    var bg2_left = 100;

    startLoop = function() {
        frames[i % frameCount].style.display = "none";
        frames[++i % frameCount].style.display = "block";

        bg1_left--;
        bg2_left--;
        if (bg1_left <= -100) {
            bg1_left = 100;
        }
        if (bg2_left <= -100) {
            bg2_left = 100;
        }
        document.getElementById('bg1').style.left = bg1_left + "%";
        document.getElementById('bg2').style.left = bg2_left + "%";
        
        window.setTimeout(startLoop, characterSpeed);
    }
    startLoop();
} 