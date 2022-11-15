/* INHERITANCE */

class Account{
    user_id;
    user_name;
    user_amount;
    min_Bal= 500;

    constructor(id,name,amount){
        this.user_id=id;
        this.user_name=name;
        this.user_amount=amount;
    }

}
let a1 = new Account(101,"vidya",50000);
console.log(a1);

class Saving_act extends Account{

    saving_amt;

    constructor(id,name,amount,sav_amt){
        super(id,name,amount)
        this.saving_amt=sav_amt;
    }
}
let a2 = new Saving_act(101,"vidya",50000,25000);
console.log(a2);