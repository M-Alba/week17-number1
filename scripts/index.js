class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.salary = this.rate * this.days;
    }
}

let worker = new Worker('Иванка', 'Иванова', 1800, 22);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());