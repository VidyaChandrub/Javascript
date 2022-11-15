class Account{
    min_Bal = 500;
    Amount;
    open_Act(){
        console.log("Account opened successfully..");
    }

    dep_Amt(amount){
        this.Amount = amount + 5000;
       console.log(amount);
    }
}

let a1 = new Account();
console.log(a1);
a1.open_Act();
//a1.dep_Amt();
a1.dep_Amt(5000);
console.log(a1);


