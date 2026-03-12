class Customer {
    firstName: string;
    lastName: string;

    public greet() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}


let customer = new Customer();

customer.firstName = "John";
customer.lastName = "Smith";

customer.greet();