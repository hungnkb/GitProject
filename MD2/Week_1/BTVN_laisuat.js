class Customer {
    constructor(name, moneySave, period) {
        this.name = name;
        this.moneySave = moneySave;
        this.period = period;
    }
    interestCalculating() {
        let rate = 0;
        switch (this.period) {
            case 6:
                rate = 7.5 / 100;
            case 12:
                rate = 8 / 100;
                break;
            case 24:
                rate = 8.5 / 100;
                break;
            default:
                rate = 0.1;

        }
        console.log(rate)
        return rate * this.moneySave/12 * this.period 
    }
    totalCalculating() {
        return this.interestCalculating() + this.moneySave
    }
}

let hung = new Customer("Hưng", 30000000, 36)
console.log(hung.interestCalculating())
console.log(hung.totalCalculating())


