// 1. 문자/숫자/불린 기본타입(primitive type)
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
	return [arg3, arg2, arg1];
};

const primResult = getPrimitive("철수", 123, true);

//
//
// 2. any 타입 (그냥 자바스크립트랑 같음)
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
	console.log(arg1 + 100);
	return [arg3, arg2, arg1];
};

const anyResult = getAny("철수", 123, "true");

//
//
// 3. unknown 타입 (any보다 조금 더 안전함)
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
	if(typeof arg1 === "number"){
		console.log(arg1 + 100);
	}
	return [arg3, arg2, arg1];
};

const unknownResult = getAny("철수", 123, "true");

//
//
// 4. generic 타입 (unknown 보다 더 안전함. 자바에 지네릭이랑 거의 똑같은 듯)
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1]{
	if(typeof arg1 === "number"){
		console.log(arg1 + 100);
	}
	return [arg3, arg2, arg1];
};

const genericResult = getGeneric<string, number, boolean>("철수", 123, true);

//
//
// 5. generic 타입 - 2
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1]{
	return [arg3, arg2, arg1];
};

const generic2Result = getGeneric2<string, number, boolean>("철수", 123, true);

//
//
// 6. generic 타입 - 3
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T]{
	return [arg3, arg2, arg1];
};

const generic3Result = getGeneric3<string, number, boolean>("철수", 123, true);
console.log(generic3Result);
//
//
// 7. generic 타입 - 4
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] =>{ 
	return [arg3, arg2, arg1];
};

const generic4Result = getGeneric4<string, number, boolean>("철수", 123, true);
console.log(generic4Result);