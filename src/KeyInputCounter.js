
class KeyInputCounter{
    
    constructor(){
        this.keyInfoDict = new Map();
        this.rangeMs = 1000 * 10;
        this.bottleNeckCount = 1000;
    }

    serialize(){
        let json = {
        }
        for(let [k, v] of this.keyInfoDict){
            json[k] = v;
        }
        return JSON.stringify(json);
    }

    deserialize(str){
        const json = JSON.parse(str);
        for(let item in json){
            this.keyInfoDict.set(item, json[item]);
        }
    }

    pushKey(){
        
        //const now = new Date(2018, 9, 1, 17, 10, 2);
        const now = Date.now();
        const key = this._makeKey(now);

        if(this.keyInfoDict.size > this.bottleNeckCount){

            const minMs = key - this.rangeMs;
            let newDict = new Map();

            for(let [k, v] of this.keyInfoDict){
                if(minMs <= k){
                    newDict.set(k, v);
                }
            }

            this.keyInfoDict = newDict;
        } 

        if(!this.keyInfoDict.has(key)){
            this.keyInfoDict.set(key, 1);
        }
        else{
            const old = this.keyInfoDict.get(key);
            this.keyInfoDict.set(key, old + 1);
        }
    }

    getCount(ms){
        
        const minMs = ms - this.rangeMs;

        let count = 0;

        for(let [k, v] of this.keyInfoDict){
            if(minMs <= k){
                count += v;
            }
        }
        
        return count;
    }

    _makeKey(ms){
        return ms - (ms % 1000);
    }
}

// function test(key){
//     var km = new KeyInputCounter();

//     for(let i = 0; i < 1000; ++i)
//     {
//         km.pushKey();
//     }

//     // console.log(km.getCount(new Date(2018, 9, 1, 17, 10, 2), 1000));
//     console.log("km res:" + km.getCount(new Date(2018, 9, 1, 17, 10, 2)));

    
//     //const serialized = JSON.stringify(km);
//     const serialized = km.serialize();
//     console.log("serialized");
//     console.log(serialized);

//     var km2 = new KeyInputCounter();
//     km2.deserialize(serialized);
//     console.log("km2 res: " + km2.getCount(new Date(2018, 9, 1, 17, 10, 2)));
// }

// // test(1);
