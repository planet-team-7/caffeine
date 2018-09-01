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

var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("animation.html");

iFrame.style.width = '100%';
iFrame.style.height = '300px';
iFrame.style.position = 'fixed';
iFrame.style.bottom = '0';
iFrame.style.zIndex = '100';

document.body.insertBefore (iFrame, document.body.lastChild);