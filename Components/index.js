let str = "3foo333dfopd333"
let y = str.replace(/\d{3}/g,"hello")
console.log(str.slice(1,3));
console.log(str.substring(1,3));
let arr = [1,2,3,4,5,6,7]
let d = arr.splice(0,0,55);
console.log(d);

let obj = {
    name:"Gokul",
    age:"23",
    get greet() {
        return this.name+this.age
    },
    set greet(val){
        let [f,l] = val.split(" ");
        this.name = f;
        this.age = l;
    }
}
console.log(obj.greet);
obj.greet = "Hello 23";
console.log(obj.greet);

function val(val,f){
    console.log(val,f);
}
val.apply({},[23,34])