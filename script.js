'use strict'
//getter, setter
// inheritance, diversity
/*
class Phone {
    constructor(model, master) {
        this.model = model;
        this.master = master;
    }
    
    showModel() {
        return this.model;
    }

    showMaster() {
        return this.master;
    }

    turnOn() {
        console.log("booting");
    }
}

class iPhone extends Phone {
    turnOn() {
        super.turnOn();
        console.log("🍎");
    }
}

class Galaxy extends Phone {
    turnOn() {
        super.turnOn();
        console.log("👽");
    }
}*/
/*
const base = new Phone("test phone", "owner");
console.log(base.showModel(), base.showMaster(), base.turnOn());
const gwak = new iPhone("iPhone12", "jaewoo");
console.log(gwak.showModel(), gwak.showMaster(), gwak.turnOn());

const jang = new Galaxy("GalaxyS10", "eunseok");
console.log(jang.showModel(), jang.showMaster(), jang.turnOn());
*/


// 객체는 key와 value로 이루어짐.
// 기본적으로 jaewoo.age와 같은 .으로 접근
// computed property는 jaewoo['age']와 같은 [] 내부의 key값으로 접근
// 둘의 차이는 .는 일반적으로 코딩할 때(콘솔로 출력할때) 사용
// computed property는 동적으로 값을 가져올 때 사용

//key는 항상 string 타입으로 지정해서 받아와야 한다.
const jaewoo = {name : "jaewoo", age : "21", fav : "chicken"};

function show(obj, key) {
    console.log(obj[key]);
}

show(jaewoo, "age");


// Property value shorthand
const person4 = makePerson('jaewoo', 21);

function makePerson(name, age) {
    return {
        name, // name : age
        age : age
    };
}

// in operator : property existance check (key in obj)
console.log('name' in jaewoo);
console.log('age' in jaewoo);
console.log('fruit' in jaewoo);

// for ..in  vs for ..of
// for (key in obj)
console.clear();
for (let key in jaewoo) {
    console.log(key);
    console.log(jaewoo[key]);
}

// for (value of iterable)
const array = [1,2,3,4,5,6,7];
for(let value of array) {
    console.log(value);
}

/*
for(let i=0; i<array.length; i++) {
    console.log(array[i]);
}
*/

// Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])



/*
// old way
console.clear();
const user2 = {};
for (let key in user) {
    user2[key] = user[key];
}

user2.name = 'jaewoo'
console.log(user);
console.log(user2);
*/

console.clear();
/*
const user = {name : 'eunseok', age : '22'};
const user4 = {};
Object.assign(user4, user);
//user4 = user;
user4.name = "new";
console.log(user.name);
*/

const Galaxy = {os : "android", company : "samsung"};
const iPhone = {os : "ios", company : "apple", master : "jaewoo"};
const mixed = Object.assign({}, Galaxy, iPhone);
//console.log(iPhone);
//console.log(Galaxy);
console.log(mixed);