
 // this keywords
let name = "RAm";
let user = {
  name: "Raju",
  greet : function (){
    // console.log(`Hello ${name}`);  // when name is not defined in global scope so we will get a eror
    console.log(`Hello ${this.name}`) // this.name is find its outer function 
    // console.log(this)   // inside function this is refers to the respected whole object
  }
}

user.greet();

console.log("+++++++++++++++++++++++++++++++++++++++++")

console.log("Call Methods .........");
let person = {
  // salutation : "Mr.",
  detail : function (city, country){
    console.log(`${this.firstname} ${this.lastname} from ${city}, ${country}`)  //${person.salutation} 
  }
}

let john = {firstname:"Nandkishore",lastname:"Parmar"};
person.detail.call(john,"Indore","India");        //    call(object ,parameter)

console.log("Apply Methods .................................");
let username = {
        productdetail: function (price,categories){
          console.log(`${this.productname} have a price of ${price} is a categories of ${categories}`)
        }
}

let productdet = {productname:"Mobile"}
username.productdetail.apply(productdet,[5000,"Electronics"]);

console.log("Bind Methods..............................");

let det = username.productdetail.bind(productdet,5000,"Electronics");
det();