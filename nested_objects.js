const person = {
    name: "Soham",
    age: 22,
    address: {
        street:"Anandapally",
        city: "Barddhaman",
        country: "India"
    }
};

function extractData (obj){
    const{
        name,
        address:{street }}=obj;
        return{name,street};
    }
console.log(extractData(person));

//Output: { name: 'Soham', street: 'Anandapally' }