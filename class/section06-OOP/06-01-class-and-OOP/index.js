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
	power = 10;
	part;
	
	constructor(power, part){
		this.power = power;
		this.part = part;
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