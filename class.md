# OOP-for-JS
reference : https://opentutorials.org/module/4047/24614
* * *

## 클래스(class)

`class`는 객체를 찍어내는 공장이다.
constructor function을 class로 대체할 수 있다.

class는 ES6(최신)의 명세를 따름. (ES6 이전 버전에서 동작 X)
다행히 많은 브라우저가 ES6 지원한다.

class로 만든 객체의 초기상태는 설정은 어떻게 할까?
답은 `생성자(constructor)`이다.

JavaScript도 다른 언어와 유사하게 class에 생성자를 갖추고 있다.

```JavaScript
class Person {
    constructor(name, sex, age) {
        console.log("constructor!");
        this.name = name;
        this.sex = sex;
        this.age = age;
    }   
}

var gwak = new Person("jaewoo", "male", 21);
```

### method in class

class 안의 method는 class로 만들어진 모든 객체가 공유하는 함수

class에서 함수를 생성할 땐 ‘function’을 생략한다.
ex) function intro() {} (x) , intro() {} (o)

```JavaScript
class Person {
    intro() {
        console.log("hi");
    }
}
```

어떤 객체에서는 다르게 동작하는 method를 가지고 싶다면,

```JavaScript
gwak.intro = function() {...}
```
이렇게 수정해주면 된다.

## 상속(Inheritance)

`상속`이란 부모 class의 요소들을 그대로 자식 class로 물려주는 것이다.

기존 객체에서 추가해야할 기능이 필요하게 됐다.

그런데 이 기능은 모든 객체에 적용될 필요는 없다.

추가할 기능 하나 때문에 새로운 기능을 모든 객체에 적용해버리면 메모리 낭비이다,

그래서 상속을 사용해서 부모 class의 필요한 요소만 가져오고 새로운 자식 class를 선언해서 객체를 생성할 수 있다.

상속은 ‘extends’를 사용하여 부모로부터 요소들을 상속받을 수 있다.

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

