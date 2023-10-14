package connect.four.scorers;

import connect.four.Game.Board;

public class NaiveScorer implements Scorer {
    @Override
    public double getScore(Board board) {
        double score = 0;

        // |
        for (int col = 0; col < board.width; col++) {
            for (int row = 0; row < board.height + 1 - board.connectSize; row++) {
                int[] line = new int[board.connectSize];

                for (int i = 0; i < board.connectSize; i++) {
                    if (!board.hasPiece(row + i, col)) {
                        line[i] = 0;
                    } else {
                        if (board.hasCurrPlayer(row + i, col)) {
                            line[i] = 1;
                        } else {
                            line[i] = -1;
                        }
                    }
                }

                score += linearScorer(line, board.connectSize);
            }
        }

        // -
        for (int col = 0; col < board.width + 1 - board.connectSize; col++) {
            for (int row = 0; row < board.height; row++) {
                int[] line = new int[board.connectSize];

                for (int i = 0; i < board.connectSize; i++) {
                    if (!board.hasPiece(row, col + i)) {
                        line[i] = 0;
                    } else {
                        if (board.hasCurrPlayer(row, col + i)) {
                            line[i] = 1;
                        } else {
                            line[i] = -1;
                        }
                    }
                }

                score += linearScorer(line, board.connectSize);
            }
        }

        // /
        // \
        for (int col = 0; col < board.width + 1 - board.connectSize; col++) {
            for (int row = 0; row < board.height + 1 - board.connectSize; row++) {
                {
                    // / (might be the other way around; I am not sure)

                    int[] line = new int[board.connectSize];

                    for (int i = 0; i < board.connectSize; i++) {
                        if (!board.hasPiece(row + i, col + i)) {
                            line[i] = 0;
                        } else {
                            if (board.hasCurrPlayer(row + i, col + i)) {
                                line[i] = 1;
                            } else {
                                line[i] = -1;
                            }
                        }
                    }

                    score += linearScorer(line, board.connectSize);
                }
                {
                    // \ (might be the other way around; I am not sure)

                    int[] line = new int[board.connectSize];

                    for (int i = 0; i < board.connectSize; i++) {
                        if (!board.hasPiece(row + i, col + board.connectSize - i - 1)) {
                            line[i] = 0;
                        } else {
                            if (board.hasCurrPlayer(row + i, col + board.connectSize - i - 1)) {
                                line[i] = 1;
                            } else {
                                line[i] = -1;
                            }
                        }
                    }

                    score += linearScorer(line, board.connectSize);
                }
            }
        }
        return score;
    }

    private static double linearScorer(int[] line, int connectSize) {
        boolean currHasPotential = true;
        boolean otherHasPotential = true;
        int score = 0;

        for (Integer i : line) {
            if (i == -1) {
                currHasPotential = false;
            }
            if (i == 1) {
                otherHasPotential = false;
            }
            score += i;
        }

        if ((!currHasPotential) && (!otherHasPotential)) {
            return 0;
        }

        if (score == connectSize) {
            return Double.POSITIVE_INFINITY;
        }
        if (score == -connectSize) {
            return Double.NEGATIVE_INFINITY;
        }

        return score * score * score;
        // return score * score * score * (score > 0 ? 1 : 10); // makes it defensive
    }
}
