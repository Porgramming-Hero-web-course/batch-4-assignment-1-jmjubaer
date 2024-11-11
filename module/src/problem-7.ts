class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(): void {
        const currentYear = new Date().getFullYear();
        console.log(currentYear - this.year);
    }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge()
