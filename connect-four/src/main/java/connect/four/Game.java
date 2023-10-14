package connect.four;

import java.util.ArrayList;
import java.util.BitSet;
import java.util.function.Function;

import connect.four.players.Player;

public class Game implements Runnable {
    public static class Board { // TODO: don't have a board class, use boardfunctions and just store two bitsets
                                // and some extra information
        public final int connectSize, width, height;
        /**
         * is upside down (im kind of sure; I just changed row and column and reversed
         * stuff until it worked)
         * 
         * The hope is that if I put the index into where it would be in an irl board,
         * it would look like this:
         * 
         * 5 11 ...
         * 4 10 ...
         * 3 9 ...
         * 2 8 ...
         * 1 7 ...
         * 0 6 ...
         */
        private final BitSet pos, mask;

        public Board() {
            this(7, 6);
        }

        public Board(int width, int height) {
            this(width, height, 4, new BitSet(width * height),
                    new BitSet(width * height));
        }

        public Board(int width, int height, int connectSize, BitSet pos, BitSet mask) {
            this.width = width;
            this.height = height;
            this.connectSize = connectSize;
            this.pos = pos;
            this.mask = mask;
        }

        public boolean isDone() {
            return BoardFunctions.isDone(width, height, mask, pos, connectSize);
        }

        public boolean wasWon() {
            return BoardFunctions.wasWon(width, height, mask, pos, connectSize);
        }

        public boolean isFull() {
            return BoardFunctions.isFull(width, height, mask, pos);
        }

        public boolean isLegal(int col) {
            return BoardFunctions.isLegal(width, height, mask, pos, col);
        }

        private void makeMove(int col) {
            BoardFunctions.makeMove(width, height, mask, pos, col);
        }

        public BitSet getPos() {
            return (BitSet) pos.clone();
        }

        public BitSet getMask() {
            return (BitSet) mask.clone();
        }

        public boolean hasPiece(int row, int col) {
            return BoardFunctions.hasPiece(width, height, mask, pos, row, col);
        }

        public boolean hasCurrPlayer(int row, int col) {
            return BoardFunctions.hasCurrPlayer(width, height, mask, pos, row, col);
        }

        public boolean hasCurrOther(int row, int col) {
            return BoardFunctions.hasCurrPlayer(width, height, mask, pos, row, col);
        }

        public ArrayList<Integer> getLegalMoves() {
            return BoardFunctions.getLegalMoves(width, height, mask, pos);
        }
    }

    public final Board board;

    private final Player[] players;
    public final ArrayList<Integer> gamelog; // player index = gamelog.length % 2

    private final boolean shouldDisplay;

    public Game(Function<Board, ? extends Player> p0, Function<Board, ? extends Player> p1) {
        this(p0, p1, 7, 6, true);
    }

    public Game(Function<Board, ? extends Player> p0, Function<Board, ? extends Player> p1, int width, int height,
            boolean shouldDisplay) {
        this(p0, p1, width, height, shouldDisplay, new ArrayList<>());
    }

    // FIXME: i have no idea why I chose to take in functions for players
    public Game(Function<Board, ? extends Player> p0, Function<Board, ? extends Player> p1, int width, int height,
            boolean shouldDisplay,
            ArrayList<Integer> gamelog) {
        this.board = new Board(width, height);
        this.players = new Player[] { p0.apply(this.board), p1.apply(this.board) };
        this.shouldDisplay = shouldDisplay;
        this.gamelog = gamelog;
    }

    public void startGame() {
        printBoard();

        continueGame();
    }

    public void makeOuterMove(int col) {
        if (board.isDone()) {
            throw new RuntimeException("Game is already over");
        }

        makeMove(col);

        continueGame();
    }

    private void continueGame() {
        if (board.isDone()) {
            printEnd();
            return;
        }

        Player player = players[gamelog.size() % 2];

        if (player == null) {
            // wait for "makeOuterMove"
            return;
        }

        // move
        makeMove(player.getMove());

        continueGame();
    }

    private void makeMove(int col) {
        board.makeMove(col);
        gamelog.add(col);

        printBoard();
    }

    protected void printEnd() {
        if (board.wasWon()) {
            System.out.println("Player " + ((gamelog.size() + 1) % 2 + 1) + " has won!"); // Not 0-indexed
        } else if (board.isFull()) {
            System.out.println("There is a tie!");
        } else {
            throw new RuntimeException("Game ended without win or tie.");
        }
    }

    protected void printBoard() {
        Main.updateBoardDisplay();
        // doesn't update until all the code is over

        if (!shouldDisplay) {
            return;
        }

        System.out.println(getBoardString());

        System.out.println("Gamelog: " + gamelog);
    }

    public String getBoardString() {
        String boardString = "";

        // Top
        boardString += "\u250C\u2500\u2500\u2500";
        for (int col = 0; col < board.width - 1; col++) {
            boardString += "\u252C\u2500\u2500\u2500";
        }
        boardString += "\u2510\n";

        // Middle
        for (int row = board.height - 1; row >= 0; row--) {
            boardString += "\u2502";
            for (int col = 0; col < board.width; col++) {
                boardString += " ";
                if (board.hasPiece(row, col)) {
                    if (board.hasCurrPlayer(row, col) == (gamelog.size() % 2 == 0)) {
                        // is the 0th player's piece
                        boardString += "X";
                    } else {
                        boardString += "O";
                    }
                } else {
                    boardString += " ";
                }
                boardString += " \u2502";
            }
            boardString += "\n";
        }

        // bottom, showing the number index
        for (int i = 0; i < board.width; i++) {
            boardString += "\u2502 " + i + " ";
        }
        boardString += "\u2502\n";

        // bottom closing
        boardString += "\u2514\u2500\u2500\u2500";
        for (int i = 0; i < board.width - 1; i++) {
            boardString += "\u2534\u2500\u2500\u2500";
        }
        boardString += "\u2518";

        return boardString;
    }

    @Override
    public void run() {
        startGame();
    }
}