class Account{      //class
    
}
new Account();     // object creation
console.log(new Account());       //to check whether a object is created or not


class Account_1 {
    min_Balance = 500;                          //properties

    open_Account() {
        console.log("Account opened successfully...");        //methods craetion
    }

    deposit_Amount(){
        console.log("Amount deposited...");
    }

    get_Statement(){
        console.log("Invest more...");
    }

    withdrawl(){
        console.log("Insufficient balance..");
    }
}
console.log(new Account_1());

let a1 = new Account_1();
let a2 = new Account_1();
console.log(a1);
console.log(a1.min_Balance);
a1.open_Account();
a1.deposit_Amount();
a1.get_Statement();
a1.withdrawl();