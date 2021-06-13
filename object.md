# OOP-for-JS
reference : https://opentutorials.org/module/4047
* * *
## object, this, constructor, prototype

### 객체

객체란 서로 연관이 있는 변수와 함수를 grouping 해서 이름을 붙인 것.

```JavaScript
var memberObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
}
 
console.log(memberObject.key1); // value1
console.log(memberObject['key2']); // value2

memberObject.key1 = 'potato'; // value1 -> potato
console.log(memberObject.key1); // potato

delete memberObject.key1;
console.log(memberObject.key1); // undefined    
```

객체에 접근할 때는 도트방식(.)과 대괄호방식([]) 두 가지를 사용할 수 있다.

* * *

### this

this는 this가 속해있는 메소드가 속한 객체를 가리키도록 약속

```JavaScript
var gwak = {
    name: 'jaewoo',
    age: '21',
    major: 'CSE',
    introduce : function() {
        console.log(this.name, this.age, this.major);
    }
}

gwak.introduce(); // jaewoo 21 CSE
```

* * *

### 생성자 함수

객체는 객체 리터럴{...}을 사용해 쉽게 만들 수 있다. 
그러나 객체를 다양하게 만들어야 할 때, 생성자 함수를 사용해 객체를 쉽게 생성할 수 있다. 
생성자의 의의는 바로 여기에 있다. 재사용할 수 있는 객체 생성 코드를 구현하는 것이다. 

함수에 new 연산자를 붙이면 객체가 됨. <br>
그러면 일반적인 함수가 아니고 생성자(constructor)가 됨.

```JavaScript
function person(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.intro = function() {
        console.log(this.name, this.sex, this.age);
    }
}

var boy = new person("jaewoo", "male", 22); // jaewoo male 22
var girl = new person("jimin", "female", 22); // jimin female 22
```

생성자가 하는 역할
- 객체를 만든다
- 객체 내부의 초기상태 set (property)

* * *
### prototype

생성자는 객체를 다양하게 만들 수 있다. 생성자에 메소드가 존재한다고 가정하자. 
그 생성자로 1억개의 객체를 생성하면 1억개의 메소드가 생성된다. 
즉, 객체를 생성할 때마다 메소드가 똑같이 생성돼서 메모리를 낭비할수 있다.

반면에, prototype으로 한 번만 선언해주면 객체 1억개를 생성해도 prototype 하나만 선언되었기 때문에 메모리를 절약할 수 있다.

```JavaScript
function Person(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}

Person.prototype.intro = function() {
    console.log(this.name, this.sex, this.age);
}

var boy = new Person("jaewoo", "male", 22); // jaewoo male 22
var girl = new Person("jimin", "female", 22); // jimin female 22
```

객체의 메소드를 변경하고 싶으면 객체의 메소드를 선언해서 수정해주면 된다.


```JavaScript
Person.prototype.intro = function() {
    console.log(this.name, this.sex, this.age);
}
var boy = new Person("jaewoo", "male", 22); 
var girl = new Person("jimin", "female", 22); 
//modified
girl.intro = function() {
    console.log("modified : ", this.name, this.sex, this.age);
}
boy.intro(); // jaewoo male 22
girl.intro(); // "modified" : jimin female 22
```

#### prototype vs property

객체의 메소드를 호출할 때 <br>
먼저 그 객체의 속성(property)를 찾고, 없으면 생성자로 가서 prototype을 찾는다.
만약 객체의 속성이 존재하면 바로 종료한다.(prototype이 존재해도 propety가 우선이다)

* * *
