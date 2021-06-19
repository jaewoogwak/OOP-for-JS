# OOP-for-JS
reference : https://opentutorials.org/module/4047/24619
* * *
## 상속(extends)

`상속`이란 부모 class의 요소들을 그대로 자식 class로 물려주는 것이다.

기존 객체에서 추가해야할 기능이 필요하게 됐다.

그런데 이 기능은 모든 객체에 적용될 필요는 없다.

추가할 기능 하나 때문에 새로운 기능을 모든 객체에 적용해버리면 메모리 낭비이다,

그래서 상속을 사용해서 부모 class의 필요한 요소만 가져오고 새로운 자식 class를 선언해서 객체를 생성할 수 있다.

상속은 `extends`를 사용하여 부모로부터 요소들을 상속받을 수 있다.

```JavaScript
class Person {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    intro() {
        console.log("hi I'm", this.name);
    }
}

class PersonWork extends Person {
    work() {
        console.log("Now I'm coding");
    }
}

var gwak = new Person("jaewoo", "male", 21);
gwak.intro(); // hi I'm jaewoo

var kim = new PersonWork("juwon", "male", 22);
kim.work(); // Now I'm coding
```
<br>

### super

super() 과 super

`super()`는 부모의 생성자를 호출한다.

super(name, age);와 같이 선언하면, 부모 생성자 constructor에 인자로 name과 age를 넘겨주는 것과 같다.

`super`는 부모 class의 요소에 접근한다.

예를 들어 부모 class에 intro라는 메소드가 있으면 부모 class를 상속받은 자식 class에서 super.intro()와 같이 부모 class의 메소드에 접근할 수 있다.


```JavaScript
class Person {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    intro() {
        return ("hi I'm " + this.name);
    }
}

class PersonWork extends Person {
    
    constructor(name, sex, age, glasses) {
        super(name, sex, age);
        this.isWearGlasses = glasses;
    }
    work() {
        return "Now I'm coding";
    }
    iWearGlasses() {
        if(this.isWearGlasses == true) {
            return "I'm wearing glasses";
        } else {
            return "I'm not wearing glasses";
        }
    }
    newIntro() {
        return super.intro() + " " + this.iWearGlasses();
    }
}

var gwak = new Person("jaewoo", "male", 21);
console.log(gwak.intro())   ; // hi I'm jaewoo

var kim = new PersonWork("juwon", "male", 22, true);
console.log(kim.newIntro()); // hi I'm juwon I'm wearing glasses
```

<br>

### 객체간의 상속 : __proto__

JS는 객체간의 상속도 가능하다.

super Object를 상속받은 sub Object가 자식 객체이다. 

그리고 이 상속관계를 prototype link라고 한다.

prototype link가 가리키는 객체를 prototype object라고 한다.

이렇게 객체간 상속은 `__proto__`를 사용한다.


```JavaScript
var superObj = {
    superVal : 'super'
};

var subObj = {
    subVal : 'sub'
};
subObj.__proto__ = superObj;

console.log('subObj.subVal => ', subObj.subVal);
console.log('subObj.superVal => ', subObj.superVal);
subObj.superVal = 'jaewoo'; // subObj의 superVal를 바꾸는 것이지 superObj의 superVal를 바꾸진 않음. (원본?)

console.log('(modified) subObj.superVal => ', subObj.superVal);
console.log('superObj.superVal => ', superObj.superVal);
```

사실 __proto__를 사용하는 것은 표준이 아니다.

표준 방식대로라면 `oject.create()`를 사용해서 부모 객체를 상속 받은 자식 객체를 생성할 수 있다.

<br>

### Object.create()

`Object.create`를 이용해서 __proto__를 대체할 수 있다.


```JavaScript
var superObj = {superVal : 'super'};
// __proto__
//var subObj = {subVal : 'sub'};
//subObj.__proto__ = superObj;

// Object.create()
var subObj = Object.create(superObj);
subObj.subVal = 'sub';

console.log('subObj.subVal => ', subObj.subVal);
console.log('subObj.superVal => ', subObj.superVal);
subObj.superVal = 'jaewoo'; // subObj의 superVal를 바꾸는 것이지 superObj의 superVal를 바꾸진 않음. (원본?)

console.log('(modified) subObj.superVal => ', subObj.superVal);
console.log('superObj.superVal => ', superObj.superVal);
```


