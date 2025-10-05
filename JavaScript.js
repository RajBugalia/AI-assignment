let userScore = 0;
let compScore = 0;

const choises = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoise = () => {
    const option = ["rock", "paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drowGame = () => {
    msg.innerText = "Game is drow, Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoise, compChoise) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Youe ${userChoise} Beats ${compChoise}`;
        msg.style.backgroundColor = "Green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You loss. ${compChoise} Beats your ${userChoise}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoise) => {
    const compChoise = getCompChoise();
    if (userChoise === compChoise)
    {
        drowGame();
    }
    else
    {
        let userWin = true;
        if(userChoise === "rock")
        {
            userWin = compChoise === "paper" ? false : true;
        }
        else if (userChoise === "paper")
        {
            userWin = compChoise === "Scissors" ? false : true;
        }
        else
        {
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin, userChoise, compChoise);
    }
};

choises.forEach((choise) => {
   choise.addEventListener("click", () => {
        const userChoise = choise.getAttribute("id");
        playgame(userChoise);
    });
});