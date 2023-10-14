package connect.four;

import java.util.ArrayList;
import java.util.BitSet;

import connect.four.Game.Board;

public class BoardFunctions {
    public static boolean isDone(int width, int height, BitSet mask, BitSet pos, int connectSize) {
        return isFull(width, height, mask, pos) || wasWon(width, height, mask, pos, connectSize);
    }

    public static boolean wasWon(int width, int height, BitSet mask, BitSet pos, int connectSize) {
        // |
        for (int col = 0; col < width; col++) {
            for (int row = 0; row < height + 1 - connectSize; row++) {
                boolean hasConnected = true;

                for (int i = 0; i < connectSize; i++) {
                    if (!hasCurrPlayer(width, height, mask, pos, row + i, col)) {
                        hasConnected = false;
                        break;
                    }
                }

                if (hasConnected) {
                    // System.out.println("Win (|) starting from: " + col + " " + row);
                    return true;
                }
            }
        }

        // -
        for (int col = 0; col < width + 1 - connectSize; col++) {
            for (int row = 0; row < height; row++) {
                boolean hasConnected = true;

                for (int i = 0; i < connectSize; i++) {
                    if (!hasCurrPlayer(width, height, mask, pos, row, col + i)) {
                        hasConnected = false;
                        break;
                    }
                }

                if (hasConnected) {
                    // System.out.println("Win (-) starting from: " + col + " " + row);
                    return true;
                }
            }
        }

        // /
        // \
        for (int col = 0; col < width + 1 - connectSize; col++) {
            for (int row = 0; row < height + 1 - connectSize; row++) {
                {
                    // / (might be the other way around; I am not sure)

                    boolean hasConnected = true;

                    for (int i = 0; i < connectSize; i++) {
                        if (!hasCurrPlayer(width, height, mask, pos, row + i, col + i)) {
                            hasConnected = false;
                            break;
                        }
                    }

                    if (hasConnected) {
                        return true;
                    }
                }
                {
                    // \ (might be the other way around; I am not sure)

                    boolean hasConnected = true;

                    for (int i = 0; i < connectSize; i++) {
                        if (!hasCurrPlayer(width, height, mask, pos, row + i, col + connectSize - i - 1)) {
                            hasConnected = false;
                            break;
                        }
                    }

                    if (hasConnected) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    public static boolean isFull(int width, int height, BitSet mask, BitSet pos) {
        for (int col = 0; col < width; col++) {
            if (!hasPiece(width, height, mask, pos, height - 1, col)) {
                return false;
            }
        }
        return true;
    }

    public static boolean isLegal(int width, int height, BitSet mask, BitSet pos, int col) {
        if (col < 0 || col >= width) {
            return false;
        }

        return !hasPiece(width, height, mask, pos, height - 1, col);
    }

    public static boolean hasWinningMove(int width, int height, int connectSize, BitSet mask, BitSet pos) {
        for (int col : getLegalMoves(width, height, mask, pos)) {
            if (isWinningMove(width, height, connectSize, mask, pos, col))
                return true;
        }
        return false;
    }

    public static boolean isWinningMove(int width, int height, int connectSize, BitSet mask, BitSet pos, int col) {
        BitSet dupeMask = (BitSet) mask.clone();
        BitSet dupePos = (BitSet) pos.clone();

        makeMove(width, height, dupeMask, dupePos, col);

        return wasWon(width, height, dupeMask, dupePos, connectSize);
    }

    public static Board duplicateMovedBoard(int width, int height, int connectSize, BitSet mask, BitSet pos, int col) {
        BitSet dupeMask = (BitSet) mask.clone();
        BitSet dupePos = (BitSet) pos.clone();

        makeMove(width, height, dupeMask, dupePos, col);

        return new Board(width, height, connectSize, dupeMask, dupePos);
    }

    public static void makeMove(int width, int height, BitSet mask, BitSet pos, int col) {
        if (!isLegal(width, height, mask, pos, col)) {
            throw new RuntimeException("Illegal Column");
        }

        for (int row = 0; row < height; row++) {
            if (!hasPiece(width, height, mask, pos, row, col)) {
                mask.set(height * col + row);
                pos.xor(mask);
                return;
            }
        }

        throw new RuntimeException("Column is full.");
    }

    public static boolean hasPiece(int width, int height, BitSet mask, BitSet pos, int row, int col) {
        return mask.get(height * col + row);
    }

    public static boolean hasCurrPlayer(int width, int height, BitSet mask, BitSet pos, int row, int col) {
        if (!(0 <= row && row < height && 0 <= col && col < width)) {
            throw new IllegalArgumentException("Row or column is out of bounds.");
        }
        return pos.get(height * col + row);
    }

    public static boolean hasCurrOther(int width, int height, BitSet mask, BitSet pos, int row, int col) {
        if (!(0 <= row && row < height && 0 <= col && col < width)) {
            throw new IllegalArgumentException("Row or column is out of bounds.");
        }
        return hasPiece(width, height, mask, pos, row, col) ^ hasCurrPlayer(width, height, mask, pos, row, col);
    }

    public static ArrayList<Integer> getLegalMoves(int width, int height, BitSet mask, BitSet pos) {
        ArrayList<Integer> legalMoves = new ArrayList<Integer>();

        for (int col = 0; col < width; col++) {
            if (isLegal(width, height, mask, pos, col)) {
                legalMoves.add(col);
            }
        }

        return legalMoves;
    }
}