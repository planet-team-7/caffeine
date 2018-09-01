// detectKeyDown 불러오기
const script = document.createElement('script');
script.src = chrome.extension.getURL('detection.js');
(document.head || document.documentElement).appendChild(script);


// <input> 태그들에 onkeydown 속성 추가
const inputs = document.getElementsByTagName('input');
const inputArray = Array.from(inputs);
inputArray.forEach(function(input){
    input.setAttribute('onkeydown', 'detectKeyDown();');
});

const htmldata = `
    <div class="button">
            <button id="slow">느리게</button>
            <button id="fast">빠르게</button>
        </div>
        <div id="playground">
            <div id="bgArea">
                <img class="bgImg" id="bg1" src="img/background.png" />
                <img class="bgImg" id="bg2" src="img/background.png" />
            </div>
            <div id="bug"> 
                <img class="img1" src="img/bug_1.png" />
                <img class="img1" src="img/bug_2.png" />
                <img class="img1" src="img/bug_3.png" />
                <img class="img1" src="img/bug_4.png" />
            </div>
            <div id="developer"> 
                <img class="img1" src="img/developer_1.png" />
                <img class="img1" src="img/developer_2.png" />
                <img class="img1" src="img/developer_3.png" />
                <img class="img1" src="img/developer_4.png" />
            </div>
        </div>
    `;

    var e  = document.createElement ("div");
    e.innerHTML = htmldata;


e.style.width = '100%';
e.style.height = '300px';
e.style.position = 'fixed';
e.style.bottom = '0';
e.style.zIndex = '100';

//document.body.insertBefore (iFrame, document.body.lastChild);
console.log(e);
document.body.appendChild(e);