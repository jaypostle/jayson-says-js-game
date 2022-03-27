'use scrict';


const game = {
    players: [],

    // sequence given by the game
    gameOrder: [],

    // sequence tried by the player
    playerOrder: [],

    // integer, number of flashes that have appeared in the game
    flash,

    // what turn it is // consider renaming round
    turn,

    // did the player match the order? true or false
    // formerly "good"
    hasPlayerMatchedSequence,

    // is it compTurn or not
    compTurn,

    // 
    intervalId,

    // has the strict button been clicked
    strictGameMode: false,

    // sounds
    noise: true,

    // if the program has been turned on, game running
    isGameRunning: false,

    // if player has won the game
    gameWon: false,

    // Game Keys Grabbers
    $topLeftRed: $('#top-left-panel'),
    $topRightGreen: $('#top-right-panel'),
    $bottomLeftBlue: $('#bottom-left-panel'),
    $bottomRightYellow: $('#bottom-right-panel'),

    // Game Board Grabbers
    $turnCounter: $('#round-number'),
    // play button
    $playPauseBTN: $('#play-pause-btn'),
    // start game button
    $startGameBTN: $('#start-game-btn'),
    
    //  TO BE CREATED
    // const $strictButton = document.querySelector('#strict');
    
    // const $gameModeBTN: $('#game-modeBTN'); 

    //  created but needto make sure they work
    // const onButton = document.querySelector('#on');
    // const startButton = document.querySelector('#start');

    // Start and Settings Methods
    

    // game on button
    turnGameOn() {
        $startGameBTN.on('click', (event) => {
            if (onButton.checked) {
                // turns the game isRunning on
                this.isGameRunning = true;
                // visually shows the turn counter is on
                this.$turnCounter.HTML = "-";
            } else {
                this.isGameRunning = false;
                this.$turnCounter.HTML = "";
                // turn lights off when you turn the game off
                this.clearColor()
                // clear the interval
                clearInterval(intervalId);
            }
        });
    },

    // start/play button
    playGameBTN() {
        this.$playPauseBTN.on('click', (event) => {
            // if the game is on or there was a win, play
            if (this.isGameRunning || this.gameWon) {
                game.playGame();
            }
        });
    },

    playGame() {
        this.gameWon = false,
        this.gameOrder = [];
        this.playerOrder = [];
        this.flash = 0;
        this.intervalId = 0;
        this.turn = 1;

        game.$turnCounter.innerHTML = 1;
        // nothing incorrect has been entered by the player yet (hasPlayerMatchedSequence = true)
        this.hasPlayerMatchedSequence = true;
    
        // then will use a for loop to fill up the order [] randomly
        for (var i = 0; i < 20; i++) {
    
            // gets random numbers between 1 and 4 and pushes them to order.
            this.gameOrder.push(Math.floor(Math.random() *4) +1);
        };   console.log(order);
    
        // starts with the computer playing lights and then the play has to match them
        this.compTurn = true;
    
        // run function gameTurn every 800 ms
        game.intervalId = setInterval(gameTurn, 800);
    
        // then we need to clear the interval once all the lights have flashed
    },

    gameTurn() {
        // while the computer is flashing, you can't click the buttons
        this.isGameRunning = false;
        // if the number of flashes = turns that we are on, then computer's turn is over
        if (flash == turn) {
            clearInterval(intervalId);
            game.compTurn = false;
            clearColor();
            game.isGameRunning = true;
        }
        // if it's the computer's turn, do these things
        if (game.compTurn) {
            game.clearColor();
            setTimeout(() => {
                // flash a colour every 200 ms
                // make harder difficulties with more keys and faster flashes
                if (this.gameOrder[this.flash] == 1) one();
                if (this.gameOrder[this.flash] == 2) two();
                if (this.gameOrder[this.flash] == 3) three();
                if (this.gameOrder[this.flash] == 4) four();
                // not sure what flash does yet
                this.flash++;
            }, 200);
        }
    },

    // NOISES / Keys
    // convert these to jquery
    one() {
        if (game.noise) {
            // let audio = document.getElementById("clip1");
            let audio = $("#clip1");
            audio.play();
        };
        noise = true;
        // sets top left to a different color (kinda like a hover)
        game.$topLeftRed.css("background-color","lightgreen");

    },
    
    two() {
        if (noise) {
            let audio = document.getElementById("clip2");
            audio.play();
        };
        noise = true;
        // sets top left to a different color (kinda like a hover)
        game.$topRightGreen.css("background-color","tomato");
    },
    
    three() {
        if (noise) {
            let audio = document.getElementById("clip3");
            audio.play();
        };
        noise = true;
        // sets top left to a different color (kinda like a hover)
        game.$bottomLeftBlue.css("background-color","yellow");
    },
    
    four() {
        if (noise) {
            let audio = document.getElementById("clip4");
            audio.play();
        };
        noise = true;
        // sets top left to a different color (kinda like a hover)
        game.$bottomRightYellow.css("background-color","lightskyblue");
    },

    clearColor() {
        //  make this jquery
        game.$topLeftRed.css("background-color","darkgreen");
        game.$topRightGreen.css("background-color","darkred");
        game.$bottomLeftBlue.css("background-color","goldenrod");
        game.$bottomRightYellow.css("background-color","darkblue");
    },

    // player controls for keys

    clickRed() {
        game.$topLeftRed.on('click', (event) => {
            if (this.isGameRunning) {
                this.playerOrder.push(1);
                // function to check if player was right
                game.check();
                game.one();
                // player has not won
                if (!game.gameWon) {
                    setTimeout(() => {
                        game.clearColor();
                    }, 300);
                }
            };
        });
    },

    clickGreen() {
        this.$topRightGreen.on('click', (event) => {
            if (this.isGameRunning) {
                this.playerOrder.push(2);
                // function to check if player was right
                game.check();
                game.two();
                // player has not won
                if (!game.gameWon) {
                    setTimeout(() => {
                        game.clearColor();
                    }, 300);
                }
            };
        });
    },

    clickBlue() {
        bottomLeftBlue.on('click', (event) => {
            if (this.isGameRunning) {
                this.playerOrder.push(3);
                // function to check if player was right
                game.check();
                game.three();
                // player has not won
                if (!game.gameWon) {
                    setTimeout(() => {
                        game.clearColor();
                    }, 300);
                }
            };
        });
    },
    
    clickYellow() {
        bottomRightYellow.on('click', (event) => {
            if (this.isGameRunning) {
                this.playerOrder.push(4);
                // function to check if player was right
                game.check();
                game.four();
                // player has not won
                if (!game.gameWon) {
                    setTimeout(() => {
                        game.clearColor();
                    }, 300);
                }
            };
        });
    },
    
    flashColor() {
        game.$topLeftRed.css("background-color","lightgreen");
        game.$topRightGreen.css("background-color","tomato");
        game.$bottomLeftBlue.css("background-color","yellow");
        game.$bottomRightYellow.css("background-color","lightskyblue");
    },
    
    // function checks if player sequence is right
    
    
    checkSequence() {
        
        if (this.playerOrder[this.playerOrder.length - 1] !== this.gameOrder[this.playerOrder.length - 1]) {
            this.hasPlayerMatchedSequence = false;
        };
        if (this.playerOrder.length == 20 && this.hasPlayerMatchedSequence) {
            winGame();
        }
        if (this.hasPlayerMatchedSequence == false) {
            flashColor();
            this.turnCounter.html("No!") ;
            setTimeout(() => {
                // then resets the turn counter to turn after 800 ms
                this.turnCounter.html(`${game.turn}`);
                game.clearColor();
    
                // if strict, restarts game
                if (game.strictGameMode) {
                    play();
                } else {
                    // we can repeat the round
                    this.compTurn = true;
                    this.flash = 0;
                    this.playerOrder = [];
                    this.hasPlayerMatchedSequence = true;
                    intervalId = setInterval(game.gameTurn, 800);
                }
            }, 800);
            this.noise = false;
        }
    
    
    
        // if the turn is equal to the player order array length, and good, and have not won yet, add a turn
        if (this.turn == this.playerOrder.length && this.hasPlayerMatchedSequence && !this.gameWon) {
            this.turn++;
            // resets the playerorder array but not the main array
            this.playerOrder = [];
            // makes it the computer's turn
            this.compTurn = true;
            this.flash = 0;
            this.turnCounter.html(`${game.turn}`);
            this.intervalId = setInterval(game.gameTurn, 800);
        }
    },
    
    
    
    winGame() {
        this.flashColor();
        this.turnCounter.html("Win!");
        this.isGameRunning = false; 
        this.gameWon = true;   
    }
    

    
}