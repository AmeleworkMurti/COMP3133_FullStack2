var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greet = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
// object = instance of class
var customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greet();
