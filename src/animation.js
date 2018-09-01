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

    var bugFrames = document.getElementById("bug").children;
    var bugFrameCount = bugFrames.length;

    var developerFrames = document.getElementById("developer").children;
    var developerFrameCount = developerFrames.length;

    var i = 0;
    var j = 0;

    
    
    var bg1_left = 0;
    var bg2_left = 100;

    startLoop = function() {
        bugFrames[i % bugFrameCount].style.display = "none";
        bugFrames[++i % bugFrameCount].style.display = "block";

        developerFrames[j % developerFrameCount].style.display = "none";
        developerFrames[++j % developerFrameCount].style.display = "block";

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