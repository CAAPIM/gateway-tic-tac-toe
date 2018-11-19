var game = JSON.parse(context.getVariable("game").content);

var winner = whoWon(game.board);
var error = '';
if(winner === ' '){
	error = move(game, context.getVariable("request").parameters['move']);
}

var message;
winner = whoWon(game.board);
if(winner === ' '){
	message = game.turn + "'s turn";
} else if(winner === 'N'){
	message = "Tie Game";
} else if(winner === 'X'){
	message = "X Won";
} else if(winner === 'O'){
	message = "O Won";
}
var response = context.getVariable("response");
response.setContent(printBoard(game.board) + "\n" + message + "\n" + error + "\n\n" + context.getVariable("gateway.instructions"), "text/plain")

context.setVariable("game", game);

function move(game, move) {
	if(move != null && move >= 0 && move <=8){
		if(!(game.board.charAt(move) === ' ')) {
			return "Invalid move, already token at location: " + move;
		}
		game.board = replaceAt(game.board, move, game.turn);
		if(game.turn === 'X'){
			game.turn = 'O';
		} else {
			game.turn = 'X';
		}
		return ''
	} else if(move != null) {
		return "Invalid move, must be a number between 0 and 8"
	} else {
	    return '';
    }
}

function replaceAt(str, index, replacement) {
    var tailIndex = parseInt(index) + 1;
    var firstPart = str.substr(0, index).concat(replacement);
    if(str.substr(tailIndex)>8) {
        return firstPart;
    } else {
        return firstPart.concat(str.substr(tailIndex));
    }
}

function whoWon(board){
	if((board.charAt(0) === board.charAt(1)) && (board.charAt(0) === board.charAt(2)) && !(board.charAt(0) ===' ')){
		return board.charAt(0);
	} else if((board.charAt(3) === board.charAt(4)) && (board.charAt(3) === board.charAt(5)) && !(board.charAt(3) ===' ')){
		return board.charAt(3);
	} else if((board.charAt(6) === board.charAt(7)) && (board.charAt(6) === board.charAt(8)) && !(board.charAt(6) ===' ')){
		return board.charAt(6);
	} else if((board.charAt(0) === board.charAt(3)) && (board.charAt(0) === board.charAt(6)) && !(board.charAt(0) ===' ')){
		return board.charAt(0);
	} else if((board.charAt(1) === board.charAt(4)) && (board.charAt(1) === board.charAt(7)) && !(board.charAt(1) ===' ')){
		return board.charAt(1);
	} else if((board.charAt(2) === board.charAt(5)) && (board.charAt(2) === board.charAt(8)) && !(board.charAt(2) ===' ')){
		return board.charAt(2);
	} else if((board.charAt(0) === board.charAt(4)) && (board.charAt(0) === board.charAt(8)) && !(board.charAt(0) ===' ')){
		return board.charAt(0);
	} else if((board.charAt(2) === board.charAt(4)) && (board.charAt(2) === board.charAt(6)) && !(board.charAt(2) ===' ')){
		return board.charAt(2);
	} else if(board.contains(' ')){
		return ' ';
	}
	return 'N'
}

function printBoard(board){
	var prettyBoard = board.charAt(0) + '|' + board.charAt(1) + '|' + board.charAt(2) + '\n';
	prettyBoard += '-----\n';
	prettyBoard += board.charAt(3) + '|' + board.charAt(4) + '|' + board.charAt(5) + '\n';
	prettyBoard += '-----\n';
	prettyBoard += board.charAt(6) + '|' + board.charAt(7) + '|' + board.charAt(8);
	return prettyBoard;
}