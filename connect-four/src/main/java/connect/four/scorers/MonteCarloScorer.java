package connect.four.scorers;

import java.util.ArrayList;
import java.util.BitSet;
import java.util.Random;

import connect.four.BoardFunctions;
import connect.four.Game.Board;

public class MonteCarloScorer implements Scorer {
    private final int numGames;

    public MonteCarloScorer(int numGames) {
        this.numGames = numGames;
    }

    public MonteCarloScorer() {
        this(1000);
    }

    private static int getRandomMove(int width, int height, BitSet pos, BitSet mask) {
        ArrayList<Integer> legalMoves = BoardFunctions.getLegalMoves(width, height, mask, pos);
        return legalMoves.get((new Random()).nextInt(legalMoves.size()));
    }

    @Override
    public double getScore(Board board) {
        int score = 0;

        for (int i = 0; i < numGames; i++) {
            BitSet pos = board.getPos();
            BitSet mask = board.getMask();

            int movesCount = 0;

            while (true) {
                if (BoardFunctions.isDone(board.width, board.height, mask, pos, board.connectSize)) {
                    if (BoardFunctions.wasWon(board.width, board.height, mask, pos, board.connectSize)) {
                        if (movesCount % 2 == 1) {
                            // win
                            score -= board.width * board.height - movesCount;
                            // should subtract by moves used as well, but there is no way to get it rn
                        } else {
                            // loss
                            score += board.width * board.height - movesCount;
                        }
                    } else {
                        // tie
                    }
                    break;
                }

                BoardFunctions.makeMove(board.width, board.height, mask, pos,
                        getRandomMove(board.width, board.height, pos, mask));

                movesCount++;
            }
        }

        return score;
    }
}