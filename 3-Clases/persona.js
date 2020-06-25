class Persona{
    constructor(nombre, fechaNacimiento, sexo, peso, altura){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        var nombre_partes = nombre.split(" ");
        var primer_nombre = nombre_partes[0];
        var apellido_paterno = nombre_partes[1];
        var apellido_materno = nombre_partes[2];
        var day  = fechaNacimiento.getDay();
        var month = fechaNacimiento.getMonth();
        var year =  fechaNacimiento.getFullYear();
        console.log(`this is day ${day} this is month ${month} this is year ${year}`);
        this.rfc = apellido_paterno[0]+apellido_paterno[1]+apellido_materno[0]+year[2]+year[3]+day+month;
    };

    calcularIMC(){
        return this.peso/(this.altura*this.altura);
    };
    esMayorDeEdad(){
        if(this.edad >= 18){
            return true;
        }else{
            return false;
        }
    };
    
}

const p = new Persona("CARLA PEREZ GAVILAN", new Date(2000, 23, 05), "F", 60, 170);
console.log(`${p.rfc}`);
