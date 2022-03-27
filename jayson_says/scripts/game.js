'use scrict';


const game = {
    // game attributes
    title: "Jayson Says",
    $title: $('#game-title'),

    // if the program has been turned on, game running
    isGameRunning: false,

    // win condition
    winCondition: 8,

    // players
    players: [],
    currentPlayer: 0,

    $playerOneForm: $('#player-one-input'),
    $playerOneJoinBTN: $('#player-one-joinBTN'),

    $playerTwoJoinBTN: $('#player-two-joinBTN'),

    $playerOneName: $('#player-one-name'),
    $playerOneLives: $('#player-one-lives'),
    $playerOneScore: $('#player-one-score'),
    


    // document grabbers
    currentScreen: ['#splash-screen'],
    $startGameBTN: $('#start-game-btn'),
    $endGameBTN: $('#end-game-btn'),
    $playPauseBTN: $('#play-pause-btn'),
    $playAgainBTN: $('#play-again-btn'),
    $quitGameBTN: $('#quit-game-btn'),

    $gameBoard: $('#game-screen'),
    $scoreBoard: $('#score-board'),

    // Difficulty grabbers
    $easyDifficultyBTN: $('#easy-difficulty-btn'),
    $mediumDifficultyBTN: $('#medium-difficulty-btn'),
    $hardDifficultyBTN: $('#hard-difficulty-btn'),
    $phantomDifficultyBTN: $('#phantom-difficulty-btn'),

    
    // addPlayerToGame(objPlayer) {
    //     if (this.players.indexOf(objPlayer) >= 0) {
    //       return this.players.indexOf(objPlayer);
    //     }
    //     this.players.push(objPlayer);
    //     const playerId = this.players.length - 1;
    //     const strPlayerBoard = `
    //       <div id='player-${playerId}-board' class='player-scoreboard'>
    //         <span class='player-name'>${objPlayer.name}</span> 
    //         <span class='player-score'>${objPlayer.score}</span>
    //       </div>`;
    //     this.$scoreBoard.html += this.$scoreBoard.html(strPlayerBoard);
    //     if(this.players.length === 2 ) {
    //       document.getElementById('player-setup').classList.add('hidden');
    //       document.getElementById('start-game').classList.remove('dimmed');
    //     };
    //     return playerId;
    //   },

    //  if statement for modal buttons
    modalShow() {
        if (this.currentScreen === '#splash-screen') {
        $('.modal-btn').hide();
        $('#setup-modal-btn').show();
    } else if (this.currentScreen === '#game-screen') {
        $('.modal-btn').hide();
        $('#gameplay-modal-btn').show();
    }   else {
        $('.modal-btn').hide();
    }},

    // method to switch the screen
    switchScreen(newScreen) {
        game.currentScreen = newScreen;
        //  receives a string argument (currentScreen) which corresponds to an ID that I have set in HTML for the screen elements
        console.log('switch screen ran')
        // when used, it should:
            // hide all other screens
        $('.screen').hide();
            // show current screen
        console.log(newScreen);
        $(newScreen).show();
        
        // new code
        this.modalShow();
    },

    // method toggle game is running
    toggleGameRunning() {
        // toggle betwen play icon and pause icon
        this.isGameRunning = !this.isGameRunning
        if (this.isGameRunning) {
            console.log('game is running');
        // target the div container / css / border radius. style 
        //add/remove a visual indicator that the game is running
            $('#container').addClass('playing');
            $('#play-pause-btn').html('Pause');
            $('#game-screen > p').html('FIGHT FIGHT FIGHT!!!!')
        }// else statement to change to play 
        else {
            console.log('game is paused');
            $('#container').removeClass('playing');
            $('#game-screen > p').html('Ready to join the fight club?')
            $('#play-pause-btn').html('Play');
        }
    },

    clearDifficultyButtons() {
        game.$easyDifficultyBTN.css('background-color', '#16D9D9');
        game.$mediumDifficultyBTN.css('background-color', 'darkcyan');
        game.$hardDifficultyBTN.css('background-color', '#004040');
        game.$phantomDifficultyBTN.css('background-color', '#8C0E6B');
    },

    // Has an init method that inserts the game.title into the <h1> in the header 
    initiateGame() {

// players joining
        // game.$playerOneJoinBTN.on('click', () => {
        //     player1.joinGame();
        //     console.log('join game for player 1 was clicked');
        // });

        // inserts game.title into the h1 of the header
        game.$title.html(game.title); 
        // console.log('hello game is now running')

         // SPLASH SCREEN
// start game button that invokes switch screen method and takes you to game screen
    // run switchScreen and pass through parameter () of the right ID going to the game screen
        game.$startGameBTN.on('click', () => {
        console.log('start game button was clicked');
        if (!player1.gameDifficulty) {
            // console.log('please select a name and difficulty');
            $('#error-information').text('Please select a difficulty.');
        } else {
            player1.joinGame();
            game.switchScreen('#game-screen');
            game.turnGameOn();
        }
        
    });

    // GAME SCREEN 
// listener on end game button that invokes switch method and take you to game over screen
    // run switchScreen and pass through parameter () of the right ID going to the game over screen
        game.$endGameBTN.on('click', () => {
        console.log('end game button was clicked');
        game.noise = false,
        game.switchScreen('#game-over-screen');
        if (game.isGameRunning) {
        game.toggleGameRunning();
        }
    });
// listener on play/apuse butotn that calls the game.toggleRunning method
    //     game.$playPauseBTN.on('click', () => {
    //     console.log('play / pause button was clicked');
    //     game.toggleGameRunning();
    // });

    // GAME OVER SCREEN
// play again button that invokes switch screen method and takes you to the game screen
    // run switchScreen and pass through parameter () of the right ID going to the game screen
        game.$playAgainBTN.on('click', () => {
        console.log('play again button was clicked');
        game.playGame();
        game.switchScreen('#game-screen');
    });

// quit button that invokes your switch screen method and takes you back to the splash screen
    // run switchScreen and pass through parameter () of the right ID going to the splash screen
        game.$quitGameBTN.on('click', () => {
        console.log('quit game button was clicked');
        game.switchScreen('#splash-screen');
    });

    // select difficulty btns
    this.$easyDifficultyBTN.on('click', (event) => {
        // selectDifficulty
        player1.gameDifficulty = "Easy";
        game.clearDifficultyButtons();
        this.$easyDifficultyBTN.css('background-color', '#D99216');
        this.winCondition = 4;
    })
    this.$mediumDifficultyBTN.on('click', (event) => {
        // selectDifficulty
        player1.gameDifficulty = "Medium";
        game.clearDifficultyButtons();
        this.$mediumDifficultyBTN.css('background-color', '#D99216');
        this.winCondition = 8;

    })
    this.$hardDifficultyBTN.on('click', (event) => {
        // selectDifficulty
        player1.gameDifficulty = "Hard";
        game.clearDifficultyButtons();
        this.$hardDifficultyBTN.css('background-color', '#D99216');
        this.winCondition = 12;

    })
    this.$phantomDifficultyBTN.on('click', (event) => {
        // selectDifficulty
        player1.gameDifficulty = "Phantom";
        game.clearDifficultyButtons();
        this.$phantomDifficultyBTN.css('background-color', '#D99216');
        this.winCondition = 16;
        // this.strictGameMode = true;

    })

    // start/play button
    // playGameBTN() {
        this.$playBTN.on('click', (event) => {
            console.log('play game btn was clicked');

            // if the game is on or there was a win, play
            if (this.isGameRunning || this.gameWon) {
                game.playGame();
            }
        });
    
    // Key Click Listeners
        game.$topLeftRed.on('click', (event) => {
            game.clickRed();
    });

        game.$topRightGreen.on('click', (event) => {
            game.clickGreen() 
        });

        game.$bottomLeftBlue.on('click', (event) => {
            game.clickBlue() 
        });

        game.$bottomRightYellow.on('click', (event) => {
            game.clickYellow() 
        });
        
    },

    players: [],

    // sequence given by the game
    gameOrder: [],

    // sequence tried by the player
    playerOrder: [],

    // integer, number of flashes that have appeared in the game
    flash: 0,

    // what turn it is // consider renaming round
    turn: 0,

    // did the player match the order? true or false
    // formerly "good"
    hasPlayerMatchedSequence: false,

    // is it compTurn or not
    compTurn: false,

    // 
    intervalId: null,

    // has the strict button been clicked
    strictGameMode: true,

    // sounds
    noise: true,

    

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
    $playBTN: $('#play-btn'),
    // start game button
    // $startGameBTN: $('#start-game-btn'),
    
    
    // const $gameModeBTN: $('#game-modeBTN'); 

    // Start and Settings Methods
    
    

    // game on button
    turnGameOn() {
        console.log('turngameon was invoked')
        // turns the game isGameRunning on
        this.isGameRunning = true;
        // visually shows the turn counter is on
        game.$turnCounter.text("-");
            // if (this.onButton.checked) {
            //     // turns the game isGameRunning on
            //     this.isGameRunning = true;
            //     // visually shows the turn counter is on
            //     this.$turnCounter.HTML = "-";
            // } else {
            //     this.isGameRunning = false;
            //     this.$turnCounter.HTML = "";
            //     // turn lights off when you turn the game off
            //     this.clearColor()
            //     // clear the interval
            //     clearInterval(intervalId);
            // }
    },

    playGame() {
        game.gameWon = false,
        game.gameOrder = [];
        game.playerOrder = [];
        game.flash = 0;
        game.intervalId = 0;
        game.turn = 1;
        game.$turnCounter.text("Round: 1") ;
        game.noise = true;


        // nothing incorrect has been entered by the player yet (hasPlayerMatchedSequence = true)
        game.hasPlayerMatchedSequence = true;
    
        // then will use a for loop to fill up the order [] randomly
        for (let i = 0; i < 20; i++) {
    
            // gets random numbers between 1 and 4 and pushes them to order.
            game.gameOrder.push(Math.floor(Math.random() *4) +1);
        };   console.log(game.gameOrder);
    
        // starts with the computer playing lights and then the play has to match them
        game.compTurn = true;
    
        // run function gameTurn every 800 ms
        game.intervalId = setInterval(game.gameTurn, 1000);
    
        // then we need to clear the interval once all the lights have flashed
    },

    gameTurn() {
        // while the computer is flashing, you can't click the buttons
        game.isGameRunning = false;
        // if the number of flashes = turns that we are on, then computer's turn is over
        if (game.flash == game.turn) {
            clearInterval(game.intervalId);
            game.compTurn = false;
            game.clearColor();
            game.isGameRunning = true;
        }
        // if it's the computer's turn, do these things
        if (game.compTurn) {
            game.clearColor();
            setTimeout(() => {
                // flash a colour every 200 ms
                // make harder difficulties with more keys and faster flashes
                if (game.gameOrder[game.flash] == 1) game.one();
                if (game.gameOrder[game.flash] == 2) game.two();
                if (game.gameOrder[game.flash] == 3) game.three();
                if (game.gameOrder[game.flash] == 4) game.four();
                // not sure what flash does yet
                game.flash++;
            }, 300);
        }
    },

    // NOISES / Keys

    one() {
        if (game.noise) {
            document.getElementById("clip1").play();
        };
        noise = true;
        // sets top left to a different color (kinda like a hover)
        game.$topLeftRed.css("background-color","lightgreen");

    },
    
    two() {
        if (game.noise) {
            document.getElementById("clip2").play();
        };
        noise = true;
        // sets top left to a different color (kinda like a hover)
        game.$topRightGreen.css("background-color","tomato");
    },
    
    three() {
        if (game.noise) {
            document.getElementById("clip3").play();
        };
        noise = true;
        // sets top left to a different color (kinda like a hover)
        game.$bottomLeftBlue.css("background-color","yellow");
    },
    
    four() {
        if (game.noise) {
            document.getElementById("clip4").play();
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
            console.log('red was clicked');

            if (game.isGameRunning) {
                this.playerOrder.push(1);
                // function to check if player was right
                game.checkSequence();
                game.one();
                // player has not won
                if (!game.gameWon) {
                    setTimeout(() => {
                        game.clearColor();
                    }, 300);
                }
            };
    },

    clickGreen() {
       
            console.log('green was clicked');

            if (game.isGameRunning) {
                this.playerOrder.push(2);
                // function to check if player was right
                game.checkSequence();
                game.two();
                // player has not won
                if (!game.gameWon) {
                    setTimeout(() => {
                        game.clearColor();
                    }, 300);
                }
            };
       
    },

    clickBlue() {
        
            console.log('blue was clicked');

            if (game.isGameRunning) {
                this.playerOrder.push(3);
                // function to check if player was right
                game.checkSequence();
                game.three();
                // player has not won
                if (!game.gameWon) {
                    setTimeout(() => {
                        game.clearColor();
                    }, 300);
                }
            };
        
    },
    
    clickYellow() {
       
            console.log('yellow was clicked');

            if (game.isGameRunning) {
                this.playerOrder.push(4);
                // function to check if player was right
                game.checkSequence();
                game.four();
                // player has not won
                if (!game.gameWon) {
                    setTimeout(() => {
                        game.clearColor();
                    }, 300);
                }
            };
        
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
        if (this.playerOrder.length == game.winCondition && this.hasPlayerMatchedSequence) {
            game.winGame();
        }
        if (this.hasPlayerMatchedSequence == false) {
            game.flashColor();

            // use this to visually display it was wrong
            game.$turnCounter.text("No!") ;
            setTimeout(() => {
                // then resets the turn counter to turn after 800 ms
                
                // use this to update the round counter
                game.$turnCounter.text(`Round: ${game.turn}`);
                game.clearColor();
    
                // if strict, restarts game
                if (game.strictGameMode) {
                    game.playGame();
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
             // insert round adder here
             game.$turnCounter.text(`Round: ${game.turn}`);


             if (this.hasPlayerMatchedSequence && player1.gameDifficulty == "Phantom") {
                game.randomizeSequence();
            }    
            console.log("after random order called:" + game.gameOrder);

            this.intervalId = setInterval(game.gameTurn, 800);

           

        }
    },
    
    randomizeSequence() {
        game.gameOrder = [];
        for (let i = 0; i < 20; i++) {
            // gets random numbers between 1 and 4 and pushes them to order.
            game.gameOrder.push(Math.floor(Math.random() *4) +1);
        };
    },
    
    winGame() {
        console.log('you won the game!')
        this.flashColor();
        game.$turnCounter.text("Win!");
        this.isGameRunning = false; 
        this.gameWon = true;   
    }
}


const player1 = {
    id: null,
    name: null,
    playerBoard: null,
    playerName: null,
    playerScore: null,
    gameDifficulty: null,
    $playerOneDifficulty: $('#player-one-difficulty'),

    updateName(name = 'Player 1'){
        game.$playerOneName.text(`Player 1: ${this.name}`);

    },
    
    // Select Difficulty
    selectDifficulty(){
        // when difficulty button is clicked, it sends the entered value to the game object
        player1.$playerOneDifficulty.text(`Difficulty: ${player1.gameDifficulty}`);
    },

    joinGame(){
        this.name = game.$playerOneForm.val();
        this.score = 0;

        // ?? what is this stuff?
    //   const playerId = game.addPlayerToGame(this);
    //   this.id = playerId;


    // update the name to this.name
        this.updateName(this.name);
        this.selectDifficulty(this.gameDifficulty);
    },
    reset() {
      this.name = null;
      this.score = 0;
      this.gameDifficulty = 'Easy';
      this.updateScore(this.score);
      this.updateName(this.name);
      this.updateName(this.gameDifficulty);

      $('player-one-input').value = '';
     
    }
  }

  

// call game set up
$(document).ready(game.initiateGame());




//  NOTES //

// use a tertaary operator to make the icon change

// const icon = (if this is true) ? then this : if not it's this
// const icon = game.isGameRunning ? '< html to change the icon to pause>' : '<html to change the icon to play>'
// const icon = game.isGameRunning ? '<i class="bi bi-pause-circle-fill"></i>' : '<i class="bi bi-play-circle-fill"></i>';


// make it so that there is just one help button
// make the game pause once you click the modal