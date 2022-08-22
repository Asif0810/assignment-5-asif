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

    const setName = naming_Set(player1)


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
