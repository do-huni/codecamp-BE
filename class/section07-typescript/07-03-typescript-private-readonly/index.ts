// public, private, protected, readonly

class Part {
	run = () => {
		console.log("도망!")
	}
}
class FlyingPart extends Part{
	run = () =>{
		console.log("날아서 도망!")
	}
}

class GroundPart extends Part{
	run = () => {
		console.log("뛰어서 도망!");
	}
}
class Monster {
	// power = 10; public, private, protected, readonly 중 하나라도 있으면 선언부 생략 가능
	
	constructor(public readonly power: number, public readonly part: Part){
		// this.power = power; public, private, protected, readonly 중 하나라도 있으면 초기화부분 생략 가능
		// public, private, protected => java의 접근 제어자랑 똑같음
		// readonly 밖이든 안이든 읽는 거만 다 됨. 변경 불가능
		// private + readonly 내부에서 접근만 되고 변경 불가능
	}
	
	attack = ()=> {
		console.log("공격!");
		console.log("내 공격력은"+ this.power + "이다!");
	}
	
	run = ()=>{
		this.part.run();
	}
}

class FlyingMonster extends Monster{
	// override
	run = ()=>{
		console.log("날아서 도망!")
	}
}

const mymonster1 = new Monster(40, new GroundPart());
mymonster1.attack();
mymonster1.run();

const mymonster2 = new Monster(30, new FlyingPart());
mymonster2.attack();
mymonster2.run();