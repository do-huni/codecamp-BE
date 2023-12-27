// 타입 추론: 명시적으로 타입 적지 않아도 최초 값에 따라 타입을 추론함.
let aaa = "안녕하세요"
aaa = 3;

// 타입 명시
let bbb: string = "반갑습니다"
bbb = 3;

// 타입 명시가 필요한 상황
let ccc: number | string = 1000;
ccc = "1000원"

// 숫자 타입
let ddd: number = 10;
ddd = "철수"

// 불린 타입
let eee: boolean = true;
eee = false;
eee = "false";

// 불린 타입 주의할 점
// false == 0 == "" == NaN == null
// true == "false"

// 배열 타입
let fff: number[] = [1,2,3,4,5, "안녕"];
let ggg: string[] = ["철수", "영희", 10];
let hhh: (string | number)[] = ["철수", "영희", 20];

// 객체 타입
interface IProfile{
	name: string,
	age: number | string,
	school: string,
	hobby?: string // ?: 있어도 되고 없어도 되는 애들
};
const profile: IProfile = {
	name: "철수",
	age: 10,
	school: "해바라기초등학교"
};
profile.age = "8";
profile.hobby = "수영";

// 함수 타입 => 어디서 몇번이든 호출 가능하므로, 반드시 타입 명시 필요
function add(num1: number, num2: number, unit: string): string{
	return num1 + num2 + unit
}
const result = add(1000, 2000, "원"); // 결과의 리턴 타입도 예측 가능

const add2 = (num1: number, num2: number, unit: string): string =>{
	return num1 + num2 + unit
}

// any 타입 => 가급적 사용 지양. js와 동일.
let qqq: any = "철수";
qqq = 123;
qqq = true;