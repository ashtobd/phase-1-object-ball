function gameObject() {
    const gameObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["black", "white"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3, 
                    blocks: 1,
                    slamDunks: 1
                }, 
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2, 
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["turquoise", "purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        }
    }
return gameObject;
}


function numPointsScored(playerName) {
    const game = gameObject();
    let teamObj = [game.home, game.away];

    for (let a = 0; a < teamObj.length; a++) {
        const players = teamObj[a].players;
        for (let name in players) {
            if (name === playerName) {
                const player = players[name];
                const points = player.Points;
                return points;
            }
        }
    }
}
function shoeSize(playerName) {
    const game = gameObject();
    let teamObj = [game.home, game.away];

    for (let a = 0; a < teamObj.length; a++) {
        const players = teamObj[a].players;
        for (let name in players) {
            if (name === playerName) {
                const player = players[name];
                const shoeSize = player.Shoe;
                return shoeSize;
            }
        }
    }
}
function teamColors(teamName) {
    const game = gameObject();

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (teamObj.teamName === teamName) {
            let teamColor = teamObj.colors;
            return teamColor;
        }
    }
}
function playerNumbers(teamName) {
    const game = gameObject();

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (teamObj.teamName === teamName) {
            let teamNumbers = [];
            const teamPlayer = teamObj.players;
            for (let playerName in teamPlayer) {
                let player = teamPlayer[playerName];
                teamNumbers.push(player.Number);
            }
            return teamNumbers;
        }
    }
}
function numPointsScored(player){
    let obj = gameObject();
    for (let gameKey in obj){
        debugger;
        let teamObj = obj[gameKey]
        debugger;
        for (let teamKey in teamObj){
            debugger;
            let names = teamObj[teamKey]
            debugger;
            for (let playerName in names){
                debugger;
                if (playerName === player){
                    debugger;
                    return teamObj[teamKey][player]["points"]
            }

            }
        }
    }
}

function shoeSize(player){
    let obj = gameObject();
    for (let gameKey in obj){
        debugger;
        let teamObj = obj[gameKey]
        debugger;
        for (let teamKey in teamObj){
            debugger;
            let names = teamObj[teamKey]
            debugger;
            for (let playerName in names){
                debugger;
                if (playerName === player){
                    debugger;
                    return teamObj[teamKey][player]["shoe"]
            }

            }
        }
    }
}

function teamColors(team){
    let obj = gameObject();
    for (let gameKey in obj){
        debugger;
        if (gameKey === team){
            return obj[gameKey]["colors"]
        }
    }
}

function teamNames(){
    let obj = gameObject();
    return Object.keys(obj)
}

function playerNumbers(team){
    let obj = gameObject();
    numbers = []
    for (let gameKey in obj){
        debugger;
        if (gameKey === team){
        let teamObj = obj[gameKey]
        debugger;
        for (let teamKey in teamObj){
            debugger;
            if (teamKey === "players"){
            let names = teamObj[teamKey]
            debugger;
            for (let playerName in names){
                debugger;
                numbers.push(teamObj[teamKey][playerName]["Number"])
            }
        }
            }
        }
    } return numbers
}

function playerStats(player){
    let obj = gameObject();
    for (let gameKey in obj){
        debugger;
        let teamObj = obj[gameKey]
        debugger;
        for (let teamKey in teamObj){
            debugger;
            let names = teamObj[teamKey]
            debugger;
            for (let playerName in names){
                debugger;
                if (playerName === player){
                    debugger;
                    return teamObj[teamKey][player]
                }
            }
        }
    }
}
function bigShoeRebounds() {
    const players = gameObject().home.players.concat(gameObject().away.players);
  
    let playerWithLargestShoeSize = players[0];
    let playerWithLargestShoeSizeRebounds = 0;
  
    for (const player of players) {
      if (player.shoe > playerWithLargestShoeSize.shoe) {
        playerWithLargestShoeSize = player;
        playerWithLargestShoeSizeRebounds = player.rebounds;
      } else if (player.shoe === playerWithLargestShoeSize.shoe) {
        playerWithLargestShoeSizeRebounds = Math.max(
          playerWithLargestShoeSizeRebounds,
          player.rebounds
        );
      }
    }
    return playerWithLargestShoeSizeRebounds;
  }