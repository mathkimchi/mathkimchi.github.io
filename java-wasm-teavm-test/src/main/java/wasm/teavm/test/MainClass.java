package wasm.teavm.test;

import org.teavm.jso.JSBody;
import org.teavm.jso.dom.html.HTMLDocument;

public class MainClass {
    public static void main(String[] args) {
        var document = HTMLDocument.current();

        {
            /*
             * Simple way to interact with the HTML
             */
            var div = document.createElement("div");
            div.appendChild(document.createTextNode("Java TeaVM generated element"));
            document.getBody().appendChild(div);
        }

        {
            /*
             * This is the simplest way I've gotten to running
             * Java from JS.
             */
            var javaMethodCaller = document.createElement("div");
            javaMethodCaller.addEventListener("callJavaMethod",
                    event -> {
                        javaMethod();
                    });
            javaMethodCaller.setAttribute(null, null);
            javaMethodCaller.setId("javaMethodCaller");
            // javaMethodCaller.appendChild(document.createTextNode("var javaMethod = "));
            document.getBody().appendChild(javaMethodCaller);
        }

        System.out.println("Hello World from Java");

        // document.appendChild();
    }

    /**
     * This is how you call JS from Java,
     * I still don't know how to call Java from JS.
     * The TeaVM documentation right now doesn't
     * seem to have information on this.
     */
    @JSBody(script = "window.alert(\"alert hi\")")
    public static native void jsAlert();

    public static void javaMethod() {
        System.out.println("Hehehe ha");
    }
}
