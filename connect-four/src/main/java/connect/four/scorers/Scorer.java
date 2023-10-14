package connect.four.scorers;

import connect.four.Game.Board;

@FunctionalInterface
public interface Scorer {
    /**
     * Assume that the game hasn't ended yet.
     * 
     * @param board
     * @return score relative to the current player
     */
    public double getScore(Board board); // Only doing this bc interfaces don't allow for static methods
}
