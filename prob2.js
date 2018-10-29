function go() {
    var recs;
    recs = init();
    recs = update(recs);
    outRecs(recs);
}

function init() {
    var name = window.prompt("Enter name: "),
        nameAr = [],
        index = 0,
        cont = true;
    while (cont) {
        nameAr[index] = {Name:name, Deposits:[], Withdrawals:[], Balance:0.0};
        if (!(name = window.prompt("Enter name: "))) {
            cont = false;
        }
        index++;
    }
    return nameAr;
}

function update(recs) {
    var bal = 0.0,
        amt = 0;
    while (true) {
        if (window.confirm("Next Round")) {
            for (var t = 0; t < recs.length; t++) {
                amt = parseFloat(window.prompt("Enter deposit amount for " + recs[t].Name + ": ", 0)).toFixed(2);
                if (amt > 0)
                    recs[t].Deposits.push(amt);
                amt = parseFloat(window.prompt("Enter withdrawal amount for " + recs[t].Name + ": ", 0)).toFixed(2);
                if (amt > 0)
                    recs[t].Withdrawals.push(amt);
            }
        } else {
            for (var i = 0; i < recs.length; i++) {
                for (var j = 0; j < recs[i].Deposits.length; j++) {
                    bal += parseFloat(recs[i].Deposits[j]);
                }
                for (var k = 0; k < recs[i].Withdrawals.length; k++) {
                    bal -= parseFloat(recs[i].Withdrawals[k]);
                }
                recs[i].Balance = bal.toFixed(2);
                bal = 0.0;
            }
            break;
        }
    }
    return recs;
}

function outRecs(recs) {
    var recsRef = document.getElementById("recs"),
        recStr = "";
    recs.forEach(function(person) {
        recStr += person.Name + ":<br>&nbsp;&nbsp;Deposits: " +
            person.Deposits.toString() + "<br>&nbsp;&nbsp;Withdrawals: " +
            person.Withdrawals.toString() + "<br>&nbsp;&nbsp;Balance: " +
            person.Balance + "<br>";
    });
    recsRef.innerHTML += recStr;
}