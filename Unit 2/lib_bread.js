class Bread {
    //constructor w/ properties
    constructor(breadName) {
        this.name = breadName,
        this.size = 3,
        this.bakeTime = 120;
    }

    LogName () {
        console.log(this.name);
    };
};