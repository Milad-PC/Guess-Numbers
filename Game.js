var statusLbl = document.getElementsByClassName('Status')[0].getElementsByTagName('label')[0];
var inputNum = document.getElementById('ChooseDiv').getElementsByTagName('input');
var Counter = 4;
ShowResult();
var WinCode = [randomCode(), randomCode(), randomCode(), randomCode(), randomCode()];
//console.log(WinCode);

function randomCode() {
    return Math.floor(Math.random() * 8) + 1;
}

function CheckNumber() {
    var UserCode = [Number(inputNum[0].value), Number(inputNum[1].value),
    Number(inputNum[2].value), Number(inputNum[3].value), Number(inputNum[4].value)];
    console.log(UserCode);

    var win = true;
    for (let index = 0; index < 5; index++) {
        if (WinCode[index] === UserCode[index]) {
            inputNum[index].style.backgroundColor = 'greenyellow';
        }
        else if (WinCode[index] >= UserCode[index]) {
            win = false;
            inputNum[index].style.backgroundColor = 'rgb(248, 215, 215)';
        }
        else {
            win = false;
            inputNum[index].style.backgroundColor = 'rgb(207, 226, 255)';
        }
    }
    if (win) {
        ShowStatus(true);
    }
    else {
        Counter -= 1;
        ShowResult();
    }
}

function ShowResult() {
    statusLbl.innerHTML = 'Remain Check : ' + Counter;
    if (Counter == 0) ShowStatus(false);
}

function ShowStatus(val) {
    if (val === true) {
        statusLbl.className = 'alert-success';
        statusLbl.innerHTML = "WIN";
        document.getElementsByTagName('button')[0].disabled = true;
        console.log('Win!');
    }
    if (val === false) {
        statusLbl.className = 'alert-danger';
        statusLbl.innerHTML = "LOSE";
        document.getElementsByTagName('button')[0].disabled = true;
        console.log('Lose!');
    }
}