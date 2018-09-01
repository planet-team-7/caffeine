class KeyInputCounter{
    
    constructor(){
        this.keyInfoDict = new Map();
    }

    deserialize(str){
        const json = JSON.parse(str);
        for(let k in json["keyInfoDict"]){
            this.keyInfoDict[k] = json["keyInfoDict"][k];
        }
    }

    pushKey(){
        const now = Date.now();
        const key = this._makeKey(now);

        if(this.keyInfoDict[key] == null){
            this.keyInfoDict[key] = 0;
        }
        this.keyInfoDict[key] += 1;
    }

    getCount(ms, rangeMs = 0){
        
        const min = ms - rangeMs;
        const max = ms + rangeMs;

        let count = 0;

        for(let k in this.keyInfoDict){
            const v = this.keyInfoDict[k];
            if(min <= k && k <= max){
                count += v;
            }
        }
        return count;
    }

    _makeKey(ms){
        return ms - (ms % 1000);
    }
}

function detectKeyDown(){
    console.log("키가 눌렸습니다.");

    if(localStorage.getItem('counter') === null) {
        const counter = new KeyInputCounter();
        counter.pushKey();

        localStorage.setItem('counter', JSON.stringify(counter));
    } else {
        let counterStr = localStorage.getItem('counter');
        //console.log(counterStr);
        let counter = new KeyInputCounter();
        counter.deserialize(counterStr);
        counter.pushKey();

        const now = Date.now();
        console.log(counter.getCount(now, 1000*10));
        
        localStorage.setItem('counter', JSON.stringify(counter));
    }
}