
class KeyInputCounter{
    
    constructor(){
        this.keyInfoDict = new Map();
    }

    pushKey(){
        //const now = new Date(2018, 9, 1, 17, 10, 1);
        const now = Date.now();
        const key = this._makeKey(now);

        if(this.keyInfoDict[key] == null)
        {
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
            if(min <= k && k <= max)
            {
                count += v;
            }
        }

        return count;
    }

    _makeKey(ms){
        return ms - (ms % 1000);
    }
}



// function pushKey(key){
//     var km = new KeyInputCounter();
 
//     km.pushKey();
//     km.pushKey();

//     console.log(km.getCount(new Date(2018, 9, 1, 17, 10, 2), 1000));
// }

// pushKey(1);
