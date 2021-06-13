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
