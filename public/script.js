
let myobj = {
  name: "John"
}

let obj2 = myobj;

obj2.name = "Shelly";
console.log(myobj.name);

let obj3 = {};
Object.assign(obj3, myobj);

obj3.name = 'Smith';
console.log(myobj.name, obj3.name);