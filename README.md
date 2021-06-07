# OOP-for-JS

reference : https://opentutorials.org/module/4047

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
