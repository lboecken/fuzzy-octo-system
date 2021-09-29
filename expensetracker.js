let ExpenseCounter = 'Exp0';
const TRACKBUTTON = document.getElementById('trackbutton');
TRACKBUTTON.addEventListener('click', TrackExpense);

function UpdateExpenseCounter() {
    let ExpenseCount = Number(ExpenseCounter.slice(-1)) + 1;
    ExpenseCounter = 'Exp' + ExpenseCount;
}
function VerifyAmountValid(amount) {
    if (Number(amount)) {
        return false;
    } else {
        return true;
    }
}
function VerifyAllInputsPresent(date, amount, vendor, comment) {
    if (date == '' || amount == '' || vendor == '' || comment == '') {
        return true;
    } else {
        return false;
    }
}

function TrackExpense() {
    const expDate = document.getElementById('date');
    const expAmount = document.getElementById('amount');
    const expVendor = document.getElementById('vendor');
    const expComment = document.getElementById('comment');
    if (VerifyAllInputsPresent(expDate.value, expAmount.value, expVendor.value, expComment.value) || VerifyAmountValid(expAmount.value)) {
        ReturnFormErrorToUser(expDate.value, expAmount.value, expVendor.value, expComment.value);
    } else { 
        CreateAndInsertHTMLForNewExpense(expDate.value, expAmount.value, expVendor.value, expComment.value);
        expDate.value = null;
        expAmount.value = null;
        expVendor.value = null;
        expComment.value = null;
    }
} 
function CreateAndInsertHTMLForNewExpense(date, amount, vendor, comment) {
    const tablebody = document.querySelector('#tablebody'),
        tableRow = document.createElement('tr'),
        tddate = document.createElement('td'),
        tdamount = document.createElement('td'),
        tdvendor = document.createElement('td'),
        tdcomment = document.createElement('td'),
        tdDeleteButton = CreateDeleteButtonForExpense();
        elements = [tddate, tdamount, tdvendor, tdcomment, tdDeleteButton];

    for (let i = 0; i < elements.length; i++) {
        elements[i].className = ExpenseCounter;
        elements[i].appendChild(document.createTextNode([arguments[i]]));
        tableRow.appendChild(elements[i]);
    }
    tablebody.appendChild(tableRow);
    UpdateExpenseCounter();
}

function CreateDeleteButtonForExpense() {
    let tabledata = document.createElement('td');
    let deleteButton = document.createElement('button');
    tabledata.className = ExpenseCounter;
    deleteButton.className = ExpenseCounter;
    deleteButton.type = 'button';
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.addEventListener('click', (e) => DeleteExpense(e));
    return tabledata.appendChild(deleteButton);
}
function DeleteExpense(e) {
    const className = '.' + e.target.className;
    let Expense = document.querySelectorAll(className);
    for (let i = 0; i < Expense.length; i++) Expense[i].remove();
}

function ReturnFormErrorToUser(date, amount, vendor, comment) {
    let ErrorMessage = 'The following errors where detected: \n';
    let formErrors = [];
    if (date == '') formErrors.push('No date was supplied. \n');
    if (amount == '') formErrors.push('No amount was supplied. \n');
    if (Number(amount) != Number && amount != '') formErrors.push('The amount is not a number. \n');
    if (vendor == '') formErrors.push('No vendor was supplied. \n');
    if (comment == '') formErrors.push('No comment was supplied. \n');
    
    for (let i = 0; i < formErrors.length; i++) {
        ErrorMessage = ErrorMessage + formErrors[i];
    }
    alert(ErrorMessage);
}


