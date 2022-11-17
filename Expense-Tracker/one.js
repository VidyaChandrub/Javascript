let amount_bal = document.getElementById('amount')
let inc = document.getElementById('income')
let exp = document.getElementById('expense')
let list_history = document.getElementById('list')
let add_income = document.getElementById('Add-Income')
let add_expense = document.getAnimations('Add-Expense')
let namein = document.getElementById('text1')
let amtin = document.getElementById('amt')

let transaction_amt = {
                        amount: 100,
                        income: 200,
                        expense: 100,

                       transcatins: [{text:'Flower', amt:829, type:'income'},
                        { text:'Salary', amt:2900, type:'expense'},
                        { text:'book', amt:920, type:'income'},
                        { text:'camera', amt:109, type:'income'},
                    ]

                    }
function init(){
    updateState();
    initEvents();
    render();
}

function initEvents(){
    add_income.addEventListener('click', onAddIncomeClick);
    add_expense.addEventListener('click', onAddExpenseClick);
 
}

function onAddIncomeClick(){
    
    var transaction = { text: namein.value,
         amt: parseInt(amtin.value), type:'income'
        };

        transaction_amt.transcatins.push(transaction);

        updateState();
}

function onAddExpenseClick(){
    console.log('expense');
    
}
function updateState(){
    var amount = 0,
    income = 0,
    expense = 0,
    item;
    for(var i=0; i<transaction_amt.transcatins.length;i++){
        item = transaction_amt.transcatins[i];

        if(item.type === 'income'){
            income +=item.amt;
        }else if(item.type === 'expense'){
            expense +=item.amt;
        }
    }
    amount = income - expense;
    
    transaction_amt.amount = amount;
    transaction_amt.income = income;
    transaction_amt.expense = expense;

}
function render(){
    amount_bal.innerHTML = `${transaction_amt.amount}`;
    inc.innerHTML = `${transaction_amt.income}`;
    exp.innerHTML = `${transaction_amt.expense}`;
    
    var list_items,list_cont,list_amt,item,btnel;

    for(var i=0; i<transaction_amt.transcatins.length; i++)
    {   item = transaction_amt.transcatins[i];
        list_items = document.createElement('li');
        list_items.append(item.text);

        list_history.appendChild(list_items);

        list_cont = document.createElement('div');
        list_amt = document.createElement('span');
        if(item.type === 'income'){
            list_amt.classList.add('income-amt');
        }else if(item.type === 'expense'){
            list_amt.classList.add('expense-amt');
        }
        list_amt.innerHTML = `${item.amt}`
        list_cont.appendChild(list_amt);

        btnel = document.createElement('button');
        btnel.innerHTML = 'X';
        list_cont.appendChild(btnel);

        list_items.appendChild(list_cont);

    }
    
}
init();