const imgfruit1 = document.getElementById("f1");
const imgfruit2 = document.getElementById("f2");
const imgfruit3 = document.getElementById("f3");
const btnSpin = document.getElementById("spin");
const btnCollectWinnings = document.getElementById("collectwinnings");
const txtcredit = document.getElementById("credit");
const txtwinnings = document.getElementById("Winnings");
const button1 = document.getElementById("button1")

btnSpin.addEventListener("click", spin);
btnCollectWinnings.addEventListener("click", collectwinnings);
button1.addEventListener("click", buttonClick)

var i = 0;
var x = 0;

function buttonClick() {
    i++;
    document.getElementById('credit').innerHTML = i;
}

function spin() {
    i--;
    document.getElementById('credit').innerHTML = i;
 {
        let f1 = Math.floor(Math.random() * 7) + 1;
        imgfruit1.setAttribute("src", "fruitmachineresources/fruit" + f1 + ".png");
        credit--;

        let f2 = Math.floor(Math.random() * 7 + 1);
        imgfruit2.setAttribute("src", "fruitmachineresources/fruit" + f2 + ".png");
        credit--;

        let f3 = Math.floor(Math.random() * 7) + 1;
        imgfruit3.setAttribute("src", "fruitmachineresources/fruit" + f3 + ".png");
        credit--;

        btnCollectWinnings.disabled = false;

        //this if statmenst says if pic 1 and 2 are = then + 5 to winnings


        if (f3 == f2 || f1 == f2) {
            x = x + 5;
            document.getElementById('Winnings').innerHTML = x;
        }  if (f1==f2&&f2==f3)
            x = x + 10;
        document.getElementById('Winnings').innerHTML = x;
    }

}
function collectwinnings() {
    if (i > 0){
    alert("Winnings have been collected. Game reset");
    window.location.reload();
    }

}