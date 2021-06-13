### class

class는 객체를 찍어내는 공장이다.
constructor function을 class로 대체할 수 있다.

class는 ES6(최신)의 명세를 따름. (ES6 이전 버전에서 동작 X)
다행히 많은 브라우저가 ES6 지원한다.

class로 만든 객체의 초기상태는 설정은 어떻게 할까?
답은 '생성자(constructor)'이다.

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

#### method in class

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

