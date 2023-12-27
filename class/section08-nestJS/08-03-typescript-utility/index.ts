interface IProfile{
	name: string;
	age: number;
	school: string;
	hobby?: string;
}

// 1. Partial type. 다 ?
type aaa = Partial<IProfile>;

// 2. Required type. 다 !
type bbb = Required<IProfile>;

// 3. Pick type. 원하는 속성만 골라서 만들기
type ccc = Pick<IProfile, "name" | "age">

// 4. Omit type. 원하는 속성만 빼서 만들기
type ddd = Omit<IProfile, "school">

// 5. Union type.
type eee = "철수" | "영희" | "훈이" // Union type
let child1:eee = "철수" //string인데 올 수 있는 문자열 값까지 정해놓음.

// 6. Record type. key value 쌍으로 지정
type fff =Record<eee, number>

// 7. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile;
let myprofile: ggg = "hobby";

// 8. type과 interface 차이
interface IProfile{
	candy: string
}; // 인터페이스는 선언 병합 가능


let candy: Partial<IProfile> = {
	candy: 10
}

