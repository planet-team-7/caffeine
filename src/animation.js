onload = function startAnimation() { 


    // init
    let bugSpeed = 50;
    let developerSpeed = 100;
    let bgSpeed = 10;
    

    document.getElementById('slow').onclick = function(){
        bugSpeed += 20;
        developerSpeed += 10;
        bgSpeed += 2;
    };
    document.getElementById('fast').onclick = function(){
        if (bugSpeed > 20) {
            bugSpeed -= 20;
        }
        if (developerSpeed > 10) {
            developerSpeed -= 10;
        }
        if (bgSpeed > 2) {
            bgSpeed -= 2;
        }
    };

    var bugFrames = document.getElementById("bug").children;
    var bugFrameCount = bugFrames.length;

    var developerFrames = document.getElementById("developer").children;
    var developerFrameCount = developerFrames.length;

    var bugCnt = 0;
    var developerCnt = 0;
    
    var bg1_left = 0;
    var bg2_left = 100;


    backgroundLoop = function() {
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

        window.setTimeout(backgroundLoop, bugSpeed);
    }
    bugLoop = function() {
        bugFrames[bugCnt % bugFrameCount].style.display = "none";
        bugFrames[++bugCnt % bugFrameCount].style.display = "block";

        window.setTimeout(bugLoop, bugSpeed);
    }
    developerLoop = function() {
        developerFrames[developerCnt % developerFrameCount].style.display = "none";
        developerFrames[++developerCnt % developerFrameCount].style.display = "block";

        window.setTimeout(developerLoop, developerSpeed);
    }

    bugLoop();
    developerLoop();
    backgroundLoop();
} 