// package connect.four.players;

// import java.util.ArrayList;
// import java.util.BitSet;
// import java.util.Scanner;

// import connect.four.BoardFunctions;
// import connect.four.Game.Board;
// import connect.four.scorers.NaiveScorer;
// import connect.four.scorers.NegamaxScorer;
// import connect.four.scorers.Scorer;

// public class HumanPlayer implements Player {
// private static final boolean isAssisted = true;
// private Board board;
// private Scanner scanner = new Scanner(System.in);
// private final Scorer analyzer = new NegamaxScorer(6, new NaiveScorer());

// public HumanPlayer(Board board) {
// this.board = board;
// }

// private void printAnalysis() {
// double bestScore = Double.NEGATIVE_INFINITY;
// ArrayList<Integer> bestMoves = new ArrayList<Integer>();

// System.out.print("Scores: ");

// for (int col : BoardFunctions.getLegalMoves(board.width, board.height,
// board.getMask(), board.getPos())) {
// BitSet tempPos = board.getPos();
// BitSet tempMask = board.getMask();
// BoardFunctions.makeMove(board.width, board.height, tempMask, tempPos, col);
// Board temp = new Board(board.width, board.height, board.connectSize, tempPos,
// tempMask);

// // if (temp.wasWon()) {
// // return col;
// // }

// double score = -analyzer.getScore(temp);

// System.out.print("{" + col + ": " + score + "} ");

// if (score > bestScore) {
// bestScore = score;
// bestMoves = new ArrayList<>();
// }

// if (score == bestScore) {
// bestMoves.add(col);
// }
// }

// System.out.println("Best moves: " + bestMoves + " Score: " + bestScore);
// }

// @Override
// public int getMove() {
// if (isAssisted) { // assisted
// printAnalysis();
// }

// while (true) {
// System.out.print("Type column: ");
// int col = scanner.nextInt();

// if (board.isLegal(col))
// return col;

// System.out.println("Illegal column. Type again.");
// }

// // for (Component comp :
// // MainFrame.getMainFrame().getMainPanel().getComponents()) {

// // }

// // return 0;
// }
// }