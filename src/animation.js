onload = function startAnimation() { 

    // get user speed
    let userSpeed = localStorage.getItem('recent_count');

    // init
    let bugSpeed = 50;
    let developerSpeed = 100;
    let bgSpeed = 10;

    setInterval(function(){
        userSpeed = localStorage.getItem('recent_count');
        if (userSpeed == 0) userSpeed = 1;
        
        console.log(">>>", userSpeed);

        bugSpeed = 1 / userSpeed * 500
        developerSpeed = 1 / userSpeed * 1000
        bgSpeed = 1 / userSpeed * 100
    }, 500);

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

    var bugLeftPos = 50;


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

        if (bugSpeed > 300) {
            if (bugLeftPos < 200) bugLeftPos += bugSpeed / 50;
            document.getElementById('bug').style.left = bugLeftPos + "px";
        } else if (bugSpeed < 40) {
            if (bugLeftPos > -50) bugLeftPos -= 1;
            document.getElementById('bug').style.left = bugLeftPos + "px";
        }

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