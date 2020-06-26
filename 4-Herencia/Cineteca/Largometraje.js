// Clase padre


class Largometraje {
    constructor(name, duration, year) {
        this.name = name;
        this.duration = duration;
        this.year = year;
        this.published = true;
    }

    store(){
        this.published = false;
    }

}

module.exports = { 
    Largometraje,
};