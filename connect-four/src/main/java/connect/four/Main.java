package connect.four;

import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLInputElement;

import connect.four.players.ScoreBasedPlayer;
import connect.four.scorers.MonteCarloScorer;
import connect.four.scorers.NaiveScorer;
import connect.four.scorers.NegamaxScorer;

public class Main {
    private static Game game;
    private static HTMLElement boardDisplay;

    private static String makeHtmlCompatible(String originalString) {
        return originalString.replace("\n", "<br>").replace(" ", "&nbsp;");
    }

    private static void setUpGame() {
        game = new Game(board -> null,
                ScoreBasedPlayer.createScoreBasedPlayerCreator(new NegamaxScorer(6, new NaiveScorer())));
        // game = new Game(ScoreBasedPlayer.createScoreBasedPlayerCreator(new
        // MonteCarloScorer(10)),
        // ScoreBasedPlayer.createScoreBasedPlayerCreator(new NegamaxScorer(4, new
        // NaiveScorer())));
    }

    public static void updateBoardDisplay() {
        boardDisplay.setInnerHTML(
                makeHtmlCompatible(game.getBoardString()));
    }

    private static void setUpJS() {
        var document = HTMLDocument.current();

        var columnSelector = (HTMLInputElement) document.getElementById("col");
        System.out.println("Col: " + columnSelector.getValue());

        {
            var playButton = (HTMLButtonElement) document.getElementById("play");

            playButton.listenClick(mouseEvent -> {
                System.out.println("play button clicked");
                game.makeOuterMove(Integer.parseInt(columnSelector.getValue()));

                if (game.board.isDone()) {
                    if (game.board.wasWon()) {
                        // p1 win or p2 win
                        // if (game.gamelog.size()%2) {

                        // }
                        document.getElementById("p" + ((game.gamelog.size() + 1) % 2 + 1) + "-screen").getStyle()
                                .setProperty("display", "block");
                        System.out.println("Win alert (or lose i guess)");
                    } else {
                        // tie
                        document.getElementById("tie-screen").getStyle().setProperty("display", "block");
                        System.out.println("Tie alert");
                    }

                    // disable play
                }
            });
        }

        boardDisplay = document.getElementById("board-display");

        updateBoardDisplay();

        System.out.println("js has been set up");

    }

    public static void main(String... args) {
        setUpGame();
        setUpJS();

        game.startGame();
    }
}
