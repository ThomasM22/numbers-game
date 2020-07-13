const randomNumber = Math.floor(Math.random() * 50);
    let answer = document.getElementById("input_answer");
    let tentav = document.getElementById("tentatives");
    let compteur = 1;
    let tentative = 5;

    tentav.innerHTML = `Attention ! Tu n'as que ${tentative} tentatives.`;

    document.getElementById("btn_answer").addEventListener("click", btn_reply);
    function btn_reply() {
        if (answer.value.length > 0) {
            if (tentative > 0) {
                if (answer.value < randomNumber) {
                    compteur ++;
                    tentative --;
                    answer.value = '';
                    document.getElementById("reply").innerHTML = `C'est plus !`;
                    tentav.innerHTML = `Attention ! Tu ne te restes plus que ${tentative} tentatives.`;
                } else if (answer.value == randomNumber) {
                    document.getElementById("response").innerHTML = `<h1>Bravos ! Tu as réussi en ${compteur} tentatives !</h1>
                    <a href='index.html'>Tu veux ressayer ?</a>`;
                    document.getElementById("number_game").style.display = "none";
                } else {
                    compteur ++;
                    tentative --;
                    answer.value = '';
                    document.getElementById("reply").innerHTML = `C'est moin !`;
                    tentav.innerHTML = `Attention ! Tu ne te restes plus que ${tentative} tentatives.`;
                }
            } else {
                document.getElementById("response").innerHTML = `<h1>Au non ! Tu as perdu :(</h1>
                <a href='index.html'>Tu veux ressayer ?</a>`;

                document.getElementById("number_game").style.display = "none";
            }
        } else {
            alert("Tu dois marquer un nombre pour jouer !")
        }
    }