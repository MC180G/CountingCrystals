    let crystal = {
        red: {
            name: "red",
            value: 0
        },
        blue: {
            name: "blue",
            value: 0
        },
        green: {
            name: "green",
            value: 0
        },
        yellow: {
            name: "yellow",
            value: 0
        },
    };

    let targetScore = 0;
    let currentScore = 0;

    let wins = 0;
    let losses = 0;

    // * The player will be shown a random number at the start of the game.

    let randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const startGame = function() {

        currentScore = 0;


        // * The random number shown at the start of the game should be between 19 - 120.

        targetScore = randomNumber(19, 120);

        $("#rdm-num-prm").text(targetScore);

        // * Each crystal should have a random hidden value between 1 - 12. -->
        crystal.red.value = randomNumber(1, 12);
        crystal.blue.value = randomNumber(1, 12);
        crystal.green.value = randomNumber(1, 12);
        crystal.yellow.value = randomNumber(1, 12);
        //   * Your game will hide this amount until the player clicks a crystal.

        //   * When they do click one, update the player's score counter. -->
        $("#ply-scr").text(currentScore);

        console.log("Target Score = " + targetScore);
        console.log("Red = " + crystal.red.value);
        console.log("Blue = " + crystal.blue.value);
        console.log("Green = " + crystal.green.value);
        console.log("Yellow = " + crystal.yellow.value);

    };


    const checkWin = function() {

        if (currentScore > targetScore) {
            alert("You've gone too far this time. You'll get next time.");
            losses++;
            $("#lossCount").text(losses);
            startGame();
        } else if (currentScore === targetScore) {
            alert("You're a Big Winner!");
            wins++;
            $("#winCount").text(wins);
            startGame();
        }
    };



    // <!-- * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

    const addValues = function(clickedCrystal) {

        currentScore += clickedCrystal.value;

        $("#ply-scr").text(currentScore);

        checkWin();
    }

    startGame();

    $("#red").click(function() {
        addValues(crystal.red);
    });

    $("#blue").click(function() {
        addValues(crystal.blue);
    });

    $("#green").click(function() {
        addValues(crystal.green);
    });

    $("#yellow").click(function() {
        addValues(crystal.yellow);
    });



    // * There will be four crystals displayed as buttons on the page.

    // * The player wins if their total score matches the random number from the beginning of the game.

    // * The player loses if their score goes above the random number.

    // * The game restarts whenever the player wins or loses.

    //   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

    // * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.