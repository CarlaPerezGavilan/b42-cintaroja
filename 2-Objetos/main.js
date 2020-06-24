
const persona1 = {
    name: 'Mali',
    age: 21,
    isHuman: true,

    getAge: function() {
        return this.age;
    },

    setAge(newAge){
        this.age = newAge;
    }
};

console.log(`Hola soy ${persona1.name} tengo ${persona1.getAge()}`);
