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
    var bg2_left = 600;
    var bg3_left = 1200;
    var bg4_left = 1800;


    backgroundLoop = function() {
        bg1_left-= 6;
        bg2_left-= 6;
        bg3_left-= 6;
        bg4_left-= 6;
        if (bg1_left <= -600) bg1_left = 1800;
        if (bg2_left <= -600) bg2_left = 1800;
        if (bg3_left <= -600) bg3_left = 1800;
        if (bg4_left <= -600) bg4_left = 1800;
        
        document.getElementById('bg1').style.left = bg1_left + "px";
        document.getElementById('bg2').style.left = bg2_left + "px";
        document.getElementById('bg3').style.left = bg3_left + "px";
        document.getElementById('bg4').style.left = bg4_left + "px";

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