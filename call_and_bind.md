### call

call method는 모든 함수에 다 존재한다.

```JavaScript
function sum() {
    return this.first + this.second;
}

console.log(sum.call(lee));
```

`sum.call()`에서 call method의 첫 번째 인자로 객체를 넘긴다.

그럼 sum은 넘긴 객체의 멤버인 메소드가 됨.

즉, `sum.call(parameter)`에서 parameter는 sum이 내부적으로 사용할 this의 값이 됨.

call method는 첫 번째 인자로 this를 가리킬 객체를 넘겨준다. 

그 함수의 내부적으로 this를 어떤 객체로 할지 정한다. 


```JavaScript
function sum(prefix) {
	return prefix + this.first + this.second;
}
```
`sum.call(gwak, ‘value is ’)` 이면 return 값은 `value is 30` 이다.

즉. 두 번째 인자는 그 함수의 parameter에 들어갈 값을 넘겨준다.

그러면 call을 언제 사용해야할까?

상속을 사용하지 않고 어떤 객체의 메소드만 빼내서 사용하고 싶을 때 사용할 수 있겠다.

* * *

### bind

`bind`는 함수의 (call 호출 시) this를 매번 바꾸지 않고 
그냥 내부적으로 사용하는 this를 고정시킨다.

bind함수가 call, apply와 다른 점은 함수를 실행하지 않는다는 점이다. 대신 bound함수를 리턴한다.

bind 호출 시, 인자로 넘겨준 객체를 this로 하는 새로운 함수가 생성됨.

```JavaScript
var gwak = {
    name : 'gwak',
    hi(city) {
        return "Hi my name is " + this.name + ". " + "I live in " + city; 
    }
};

var lee = {
    name : 'lee'
};

console.log(gwak.hi('daejeon')); // Hi my name is gwak. I live in daejeon
var student = gwak.hi.bind(lee, 'seoul'); 
console.log(student()); // Hi my name is lee. I live in seoul
```
`var student = gwak.hi.bind(lee, 'seoul');` 이 부분에서 `gwak.hi` 내부의 this가 가리키는 값이 lee인 bound함수를 리턴해서 student에 할당해준다. 

이게 `gwak.hi` 내부의 this가 이제부터 lee를 가리키게 되어버렸다고 생각할 수 있다.

하지만 아니다!

`gwak.hi` 함수 자체는 바뀌지 않는다. `gwak.hi` 내부의 this가 lee를 가리키는 또 하나의 함수(bound함수)가 생성되었다고 생각하자.

제일 중요한 것은 `gwak.hi` 원본 함수는 바뀌지 않는다.


#### -정리-
call은 실행할 때 함수의 context를 바꾼다. (호출마다 this가 바뀜)

bind는 어떤 함수의 this를 영구적으로 바꾸는 새로운 함수를 만들어냄.





