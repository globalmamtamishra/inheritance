class automoible{

    constructor(l,w,bt,s){
        this.light=l
        this.wheel=w
        this.battery=bt
        this.seet=s
    }

}
let m1=new automoible("Panasonic","BORBET",5000,"Spain's ")
console.log(m1)

class smartautomobile extends automoible{
    constructor(l,w,bt,s,mil,pr){
        super(l,w,bt,s)

        this.mileage=mil
        this.price=pr
    }
}

let m2= new smartautomobile("Panasonic","BORBET",5000,"Spain's ",2000,3000)

console.log(m2)