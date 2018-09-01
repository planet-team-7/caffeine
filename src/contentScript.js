// detectKeyDown 불러오기
const script = document.createElement('script');
script.src = chrome.extension.getURL('detection.js');
script.onload = function() {
    this.remove();
}
(document.head || document.documentElement).appendChild(script);


// <input> 태그들에 onkeydown 속성 추가
const inputs = document.getElementsByTagName('input');
const inputArray = Array.from(inputs);
inputArray.forEach(function(input){
    input.setAttribute('onkeydown', 'detectKeyDown();');
});
