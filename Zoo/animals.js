class Animals{
    constructor(sound){
        this.sound=sound;
    }
    speak(phrase){
        let words = phrase.split(" ");
        let newArr = [];
        words.forEach(word=>{
            newArr.push(word);
            newArr.push(this.sound);
        })
        let result  = newArr.toString().replace(/,/g, " ");
        return result;
    }

}

module.exports = Animals;