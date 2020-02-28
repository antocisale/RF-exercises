const Animals = require('./animals');

test("create a lion that roars",()=>{
    const lion = new Animals("roar");
    expect(lion.speak("I'm a lion")).toStrictEqual("I'm roar a roar lion roar");
});

test("create a tiger that grrr",()=>{
    const tiger = new Animals("grrr");
    expect(tiger.speak("Lions suck")).toStrictEqual("Lions grrr suck grrr");
});