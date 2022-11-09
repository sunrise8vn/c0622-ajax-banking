class App {
    static DOAMIN_SERVER = "http://localhost:3003";
    static CUSTOMER_API = this.DOAMIN_SERVER + "/customers";
    static DEPOSIT_API = this.DOAMIN_SERVER + "/deposits";
}

class Customer {
    constructor(id, fullName, email, phone, address, balance, deleted) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.balance = balance;
        this.deleted = deleted;
    }
}