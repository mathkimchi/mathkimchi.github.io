package connect.four.players;

import connect.four.Game.Board;

public class DumBotPlayer implements Player {
    private final Board board;

    public DumBotPlayer(Board board) {
        this.board = board;
    };

    @Override
    public int getMove() {
        for (int col = 0; col < board.width; col++) {
            if (board.isLegal(col)) {
                return col;
            }
        }

        throw new RuntimeException("No legal moves.");
    }
}
