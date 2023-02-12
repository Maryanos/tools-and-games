document.getElementById("btn-submit").addEventListener("click", function() {

    let playerOne = Math.floor(Math.random() *6) +1;
    let playerTwo = Math.floor(Math.random() *6) +1;
    let imagesArrayP1 = [];
    let imagesArrayP2 = [];

    imagesArrayP1.push("assets/images/dice/p1/dice-1.png", "assets/images/dice/p1/dice-2.png", "assets/images/dice/p1/dice-3.png", "assets/images/dice/p1/dice-4.png", "assets/images/dice/p1/dice-5.png", "assets/images/dice/p1/dice-6.png");

    imagesArrayP2.push("assets/images/dice/p2/dice-1.png","assets/images/dice/p2/dice-2.png","assets/images/dice/p2/dice-3.png", "assets/images/dice/p2/dice-4.png","assets/images/dice/p2/dice-5.png","assets/images/dice/p2/dice-6.png");

    document.getElementById("dice-1").src=(imagesArrayP1[playerOne -1]);
    document.getElementById("dice-2").src=(imagesArrayP2[playerTwo -1]);

    if (playerOne > playerTwo) {
        document.getElementById("result").innerHTML = "Player <span class='text-accent-red'>1</span> Wins!";
    }
    else if (playerOne < playerTwo) {
        document.getElementById("result").innerHTML = "Player <span class='text-accent-green'>2</span> Wins!";
    }
    else {
        document.getElementById("result").innerHTML = "<span class='text-accent-red'>Draw</span>";
    }
})
document.getElementById("btn-refresh").addEventListener("click", function() {
    location.reload();
})


