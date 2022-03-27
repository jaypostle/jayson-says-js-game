//  for inside game object

const game = {
    addPlayerToGame(objPlayer) {
    if (this.players.indexOf(objPlayer) >= 0) {
      return this.players.indexOf(objPlayer);
    }
    this.players.push(objPlayer);
    const playerId = this.players.length - 1;
    const strPlayerBoard = `
      <div id='player-${playerId}-board' class='player-scoreboard'>
        <span class='player-name'>${objPlayer.name}</span> 
        <span class='player-score'>${objPlayer.score}</span>
      </div>`;
    this.$scoreBoard.innerHTML += strPlayerBoard;
    if(this.players.length === 2 ) {
      document.getElementById('player-setup').classList.add('hidden');
      document.getElementById('start-game').classList.remove('dimmed');
    };
    return playerId;
  },
    initiateGame() {

    // players joining
            document.getElementById('player-0-join').addEventListener('click', function(){
                player0.joinGame();
            });
            document.getElementById('player-1-join').addEventListener('click', function(){
                player1.joinGame();
            });
    }
}

const player0 = {
    id: null,
    name: null,
    score: null,
    elPlayerBoard: null,
    elPlayerName: null,
    elPlayerScore: null,
    scorePoints(points = 1){
      this.score += points;
      document.getElementById(`player-${this.id}-board`).lastElementChild.innerHTML = this.score;
    },
    updateName(name = 'Player 0'){
      this.name = name;
      this.elPlayerName.innerHTML = name;
    },
    joinGame(){
      this.name = document.getElementById('player-0-input').value;
      this.score = 0;
      const playerId = game.addPlayerToGame(this);
      this.id = playerId;
      this.elPlayerBoard = document.getElementById(`player-${this.id}-board`);
      this.elPlayerName = this.elPlayerBoard.firstElementChild;
      this.updateName(this.name);
    },
    reset() {
      this.name = null;
      this.score = 0;
      this.elPlayerBoard.remove();
      document.getElementById('player-0-input').value = '';
      game.players[game.players.indexOf(this)] = null;
    }
  }

const player1 = {
    id: null,
    name: null,
    score: 0,
    elPlayerBoard: null,
    elPlayerName: null,
    elPlayerScore: null,
    scorePoints(points = 1){
      this.score += points;
      document.getElementById(`player-${this.id}-board`).lastElementChild.innerHTML = this.score;
    },
    updateName(name){
      console.log(this);
      this.name = name;
      this.elPlayerName.innerHTML = this.name;
    },
    joinGame(){
      console.log('joining');
      this.name = document.getElementById('player-1-input').value;
      this.score = 0;
      const playerId = game.addPlayerToGame(this);
      this.id = playerId;
      this.elPlayerBoard = document.getElementById(`player-${this.id}-board`);
      this.elPlayerName = this.elPlayerBoard.firstElementChild;
      this.updateName(this.name);
    },
    reset() {
      this.name = null;
      this.score = 0;
      this.elPlayerBoard.remove();
      document.getElementById('player-1-input').value = '';
      game.players[game.players.indexOf(this)] = null;
    }
  }  