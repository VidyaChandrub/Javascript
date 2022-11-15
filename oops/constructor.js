class Account{
    student_id;
    student_name;
    student_amount;
    student_min_Bal = 500;

    constructor(a_id,a_name,a_amount){
        this.student_id = a_id;
        this.student_name = a_name;
        this.student_amount = a_amount;
    }

    get_Bal(){
         
        return this.student_amount - this.student_min_Bal;
    }
}

let a1 = new Account(101,"vidya",50000);
let a2 = new Account(101,"prasanna",60000);
console.log(a1);
console.log(a2);
console.log(a1.get_Bal());
console.log(a2.get_Bal());