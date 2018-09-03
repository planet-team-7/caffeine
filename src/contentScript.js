// detectKeyDown 불러오기
const script = document.createElement('script');
script.src = chrome.extension.getURL('detection.js');
(document.head || document.documentElement).appendChild(script);


// <textarea> 태그들에 onkeydown 속성 추가
const inputs = document.getElementsByTagName('textarea');
const inputArray = Array.from(inputs);
inputArray.forEach(function(input){
    input.setAttribute('onkeydown', 'detectKeyDown();');
});

function getHtml(themaName){

    const imgPath = `thema/${themaName}`;
    const img_main_pause = chrome.extension.getURL(`${imgPath}/main_pause.png`);
    const img_main_end = chrome.extension.getURL(`${imgPath}/main_end.png`);
    const img_background = chrome.extension.getURL(`${imgPath}/8bit_background.png`);
    const img_main_logo = chrome.extension.getURL(`${imgPath}//main_logo.png`);
    const img_main_start = chrome.extension.getURL(`${imgPath}/main_start.png`);
    const img_main_exit = chrome.extension.getURL(`${imgPath}/main_exit.png`);
    const img_lets_coding = chrome.extension.getURL(`${imgPath}/main_lets_coding.png`);
    const img_bug_1 = chrome.extension.getURL(`${imgPath}/bug_1.png`);
    const img_bug_2 = chrome.extension.getURL(`${imgPath}/bug_2.png`);
    const img_bug_3 = chrome.extension.getURL(`${imgPath}/bug_3.png`);
    const img_bug_4 = chrome.extension.getURL(`${imgPath}/bug_4.png`);
    const img_developer_1 = chrome.extension.getURL(`${imgPath}/developer_1.png`);
    const img_developer_2 = chrome.extension.getURL(`${imgPath}/developer_2.png`);
    const img_developer_3 = chrome.extension.getURL(`${imgPath}/developer_3.png`);
    const img_developer_4 = chrome.extension.getURL(`${imgPath}/developer_4.png`);
    const img_green_developer = chrome.extension.getURL(`${imgPath}/green_developer.png`);
    const img_yageun_text = chrome.extension.getURL(`${imgPath}/yageun_text.png`);

    const htmldata = `
    <div id="app">
        <div id="float_btn">
            <img id="pause" src="${img_main_pause}" />
            <img id="close" src="${img_main_end}" />
        </div>
        <div id="main" style="background-image: url('${img_background}')">
            <div id="main_text">
                <img src="${img_main_logo}" />
                <div id="start">
                    <div>
                    ▶︎
                    </div>
                    <img src="${img_main_start}" />
                </div>
                <div id="exit">
                    <div></div>
                    <img src="${img_main_exit}" />
                </div>
            </div>
        </div>
        <div id="playground">
            <div id="letsCoding" class="animate-flicker">
                <img src="${img_lets_coding}" />
            </div>
            <div id="bgArea">
                <img class="bgImg" id="bg1" src="${img_background}" />
                <img class="bgImg" id="bg2" src="${img_background}" style="left: 600px;"/>
                <img class="bgImg" id="bg3" src="${img_background}" style="left: 1200px;"/>
                <img class="bgImg" id="bg4" src="${img_background}" style="left: 1800px;"/>
            </div>
            <div id="bug"> 
                <img class="img1" src="${img_bug_1}" />
                <img class="img1" src="${img_bug_2}" />
                <img class="img1" src="${img_bug_3}" />
                <img class="img1" src="${img_bug_4}" />
            </div>
            <div id="developer"> 
                <img class="img1" src="${img_developer_1}" />
                <img class="img1" src="${img_developer_2}" />
                <img class="img1" src="${img_developer_3}" />
                <img class="img1" src="${img_developer_4}" />
            </div>
            <div id="developer_infected">
                <img class="img1" src="${img_green_developer}" />
                <img class="img1" src="${img_developer_1}" />
                <div id="yg">
                    <img src="${img_yageun_text}" />
                    <img src="${img_yageun_text}" />
                    <img src="${img_yageun_text}" />
                    <img src="${img_yageun_text}" />
                </div>
            </div>
        </div>
    </div>
`;
    return htmldata;
}

var e  = document.createElement ("div");
e.innerHTML = getHtml("developer");

e.style.width = '100%';
e.style.height = '300px';
e.style.position = 'fixed';
e.style.bottom = '0';
e.style.zIndex = '100';

//document.body.insertBefore (iFrame, document.body.lastChild);
console.log(e);
document.body.appendChild(e);