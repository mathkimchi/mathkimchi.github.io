package connect.four.scorers;

import java.util.ArrayList;
import java.util.BitSet;
import java.util.Comparator;
import java.util.HashMap;

import connect.four.BoardFunctions;
import connect.four.Game.Board;

/**
 * Just copy this basically: {@link https://en.wikipedia.org/wiki/Negamax}
 */
public class NegamaxScorer implements Scorer {
    private HashMap<BitSet[], Double> transpositionTable;
    private int width, height, connectSize;
    private final int maxDepth;
    private Scorer scorer;

    public NegamaxScorer(int maxDepth, Scorer scorer) {
        this.maxDepth = maxDepth;
        this.scorer = scorer;
    }

    @Override
    public double getScore(Board board) {
        width = board.width;
        height = board.height;
        connectSize = board.connectSize;

        transpositionTable = new HashMap<BitSet[], Double>();

        double score = getScore(board.getMask(), board.getPos(), 0,
                Double.NEGATIVE_INFINITY, Double.POSITIVE_INFINITY);

        return score;
    }

    private double getScore(BitSet mask, BitSet pos, int depth, double alpha,
            double beta) {
        if (transpositionTable.containsKey(new BitSet[] { mask, pos })) {
            return transpositionTable.get(new BitSet[] { mask, pos });
        }

        { // base cases
            if (BoardFunctions.wasWon(width, height, mask, pos, connectSize)) {
                return Double.NEGATIVE_INFINITY;
            }
            // if (BoardFunctions.hasWinningMove(width, height, connectSize, mask, pos)) {
            // return Double.POSITIVE_INFINITY; // divide by depth later
            // }
            if (BoardFunctions.isFull(width, height, mask, pos)) {
                return 0;
            }
            if (depth >= maxDepth) {
                return -scorer.getScore(new Board(width, height, connectSize, pos, mask));
            }
        }

        ArrayList<Integer> legalMoves = BoardFunctions.getLegalMoves(width, height, mask, pos);

        HashMap<Integer, Double> heuristicScores = new HashMap<Integer, Double>();
        for (int col : legalMoves) {
            heuristicScores.put(col,
                    scorer.getScore(BoardFunctions.duplicateMovedBoard(width, height,
                            connectSize, mask, pos, col)));
        }

        legalMoves.sort(new Comparator<Integer>() { // FIXME: this shouldn't change outcomes...
            @Override
            public int compare(Integer o1, Integer o2) {
                return (heuristicScores.get(o1)).compareTo(heuristicScores.get(o2));
            };
        });

        double value = Double.NEGATIVE_INFINITY;
        if (legalMoves.isEmpty()) {
            throw new IllegalArgumentException("No legal moves.");
        }
        for (int col : legalMoves) {
            BitSet tempMask = (BitSet) mask.clone();
            BitSet tempPos = (BitSet) pos.clone();
            BoardFunctions.makeMove(width, height, tempMask, tempPos, col);

            value = Math.max(value, -getScore(tempMask, tempPos, depth + 1, -beta, -alpha));
            alpha = Math.max(alpha, value);

            if (alpha >= beta)
                break;
        }

        transpositionTable.put(new BitSet[] { mask, pos }, value);
        return value;
    }
}