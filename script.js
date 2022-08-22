function player_name(input) {
    const player1 = document.getElementById(input);
    const player_name = player1.innerText;
    return player_name;
}

function naming_Set(input) {
    const listCreat = document.createElement('li');
    listCreat.innerText = input;
    const olList = document.getElementById('ol-list');
    olList.appendChild(listCreat);



}



document.getElementById('player1_btn ').addEventListener('click', function () {



    const player1 = player_name('ronaldo');

    const setName = naming_Set(player1);



})
document.getElementById('player2_btn ').addEventListener('click', function () {
    const player2 = player_name("messi");

    const setName = naming_Set(player2)

})

document.getElementById('player3_btn ').addEventListener('click', function () {

    const player3 = player_name("Neymar");

    const setName = naming_Set(player3)
})
document.getElementById('player4_btn ').addEventListener('click', function () {
    const player4 = player_name("mbappe");

    const setName = naming_Set(player4)

})
document.getElementById('player5_btn ').addEventListener('click', function () {
    const player5 = player_name("mane");
    const setName = naming_Set(player5)
})
document.getElementById('player6_btn ').addEventListener('click', function () {
    const player6 = player_name("salah");
    const setName = naming_Set(player6)
})

function Expense_calculation(input) {
    const per_Calculate = document.getElementById(input);
    const per_Calculate_string = per_Calculate.value;
    const per_Calculate_number = parseFloat(per_Calculate_string);
    if (isNaN(per_Calculate_number)) {
        alert("select an amount")
    } else {
        per_Calculate.value = '';
        return per_Calculate_number
    }




}
function palyer_text(input) {
    const player_expense = document.getElementById(input);
    const player_expense_string = player_expense.innerText;
    return player_expense
}
document.getElementById('perPlayer_calculate').addEventListener('click', function () {
    const per_Calculate = Expense_calculation('perPlayerInput');


    const player_5 = per_Calculate * 5;

    const player_expense = palyer_text('player_expense');

    player_expense.innerText = player_5



})
document.getElementById('total_btn').addEventListener('click', function () {

    const coach_input = Expense_calculation('coach_input');
    const manager_input = Expense_calculation('manager_input')


    const player_expense = document.getElementById('player_expense');
    const player_expense_string = player_expense.innerText;
    const player_expense_number = parseFloat(player_expense_string);

    const total_value = palyer_text('total_value');
    const total_calculation = player_expense_number + coach_input + manager_input;
    total_value.innerText = total_calculation





})


let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        event.target.disabled = true;
    });
}
const idd = document.getElementsByTagName('li');
if (idd > 4) {
    alert("dont select ")
}
console.log(idd.length)