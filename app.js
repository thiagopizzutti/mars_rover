// ROVER VARS

//Array of rovers
const roverInMars = [];

const totalObstacles = 15;

//Grid Size
const gridSize = {
    x: 10,
    y: 10
}
// Rover position and travel log
const rover = {
    x: 5,
    y: 5,
    travelLog: [{
        x: 0,
        y: 0
    }]
}

//Create obstacles
let addObstacles = (roverInMars, totalObstacles, gridSize) => {
    for (let i = 1; i <= totalObstacles; i++) {
        let x = Math.floor(Math.random() * gridSize.x);
        let y = Math.floor(Math.random() * gridSize.y);
        if (!roverInMars[x][y] || !roverInMars[x][y] === '#') {
            roverInMars[x][y] = '#';
        } else {
            i -= 1;
        }
    }
}

//If rover collides with an obstacle
let checkCollision = (roverInMars) => {
    if ((roverInMars[rover.x][rover.y] === '#')) {
        console.log('Collision with an obstacle!');
    }
}

//Go left or go right function
let horizontalMove = (theRover, command) => {
    if (theRover.y >= 0 && theRover.y <= 9) {
        if (command === 'l') {
            theRover.y--;
        } else {
            theRover.y++;
        }
        console.log(`Rover\'s position: x=${theRover.x}, y=${theRover.y}`);

        let newPosition = {
            x: theRover.x,
            y: theRover.y
        };
        theRover.travelLog.push(newPosition);

    } else {
        console.log("Rover can't go outside the grid");
    }
}

//Loop through array of travelLog to see where our the rover goes:
for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(`travelLog ${i} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`)
}

//Go up or go down function
let verticallMove = (theRover, command) => {
    if (theRover.x >= 0 && theRover.x <= 9) {
        if (command === 'u') {
            theRover.x--;
        } else {
            theRover.x++;
        }
        console.log(`Rover\'s  position: x=${theRover.x}, y=${theRover.y}`);

        let newPosition = {
            x: theRover.x,
            y: theRover.y
        };
        theRover.travelLog.push(newPosition);

    } else {
        console.log("Rover can't go outside the grid");
    }

}

//Rover multiple moves
let multipleMoves = (theRover, orders) => {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        if (order === "l" || order === "r" || order === "u" || order === "d")
            switch (order) {
                case "l": // left
                    horizontalMove(theRover, order);
                    break;
                case "r": // right
                    horizontalMove(theRover, order);
                    break;
                case "u": // up
                    verticallMove(theRover, order);
                    break;
                case "d": // down
                    verticallMove(theRover, order);
                    break;
            }
        else {
            console.log(`Invalid command: ${orders[i]}`);
        }
    }
    console.log(theRover.travelLog);
}



multipleMoves(rover, "rrdddlllluuuu");
multipleMoves(rover, "ddddddfffffbbb");
multipleMoves(rover, "");
multipleMoves(rover, "dddrrrddl");
