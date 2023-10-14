package connect.four.players;

import java.util.ArrayList;
import java.util.BitSet;
import java.util.function.Function;

import connect.four.BoardFunctions;
import connect.four.Game.Board;
import connect.four.scorers.Scorer;

public class ScoreBasedPlayer implements Player {
    private Board board;
    private Scorer scorer;

    public static Function<Board, ScoreBasedPlayer> createScoreBasedPlayerCreator(Scorer scorer) {
        return (Board board) -> (new ScoreBasedPlayer(board, scorer));
    }

    public ScoreBasedPlayer(Board board, Scorer scorer) {
        this.board = board;
        this.scorer = scorer;
    }

    @Override
    public int getMove() {
        double bestScore = Double.NEGATIVE_INFINITY;
        ArrayList<Integer> bestMoves = new ArrayList<Integer>();

        System.out.print("Scores: ");

        for (int col : BoardFunctions.getLegalMoves(board.width, board.height, board.getMask(), board.getPos())) {
            BitSet tempPos = board.getPos();
            BitSet tempMask = board.getMask();
            BoardFunctions.makeMove(board.width, board.height, tempMask, tempPos, col);
            Board temp = new Board(board.width, board.height, board.connectSize, tempPos, tempMask);

            // if (temp.wasWon()) {
            // return col;
            // }

            double score = -scorer.getScore(temp);

            System.out.print("{" + col + ": " + score + "} ");

            if (score > bestScore) {
                bestScore = score;
                bestMoves = new ArrayList<>();
            }

            if (score == bestScore) {
                bestMoves.add(col);
            }
        }

        System.out.println("Best moves: " + bestMoves + " Score: " + bestScore);
        return bestMoves.get(0);
        // return bestMoves.get((new Random()).nextInt(bestMoves.size()));
    }
}