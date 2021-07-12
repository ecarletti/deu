
printIntro();

//audio_index.play();
 

function cancel(){
    printIntro();
    console.log("ROMAN")
}

function printIntro()
{
    document.writeln("<div id=\"introImage\" class=\"wrapper\" title=\"Imagen de fondo a color, persona tirando basura a un cesto\">");
    document.writeln("    <div class=\"btn-group-vertical center\">");
    document.writeln("    <button onclick=\"location.href = 'game.html'\" type=\"button\" class=\"text-center btn-lg btn-outline-dark mb-3 transparent uppercase btn_font\" aria-label=\"Jugar\">");
    document.writeln("    Jugar");
    document.writeln("    </button>");
    document.writeln("<button type=\"button\" class=\"text-center btn-lg mb-3  btn-outline-dark transparent uppercase btn_font\" aria-label=\"tutorial\" >");
    document.writeln("    Tutorial");
    document.writeln("</button>");
    document.writeln("    <button type=\"button\" class=\"text-center btn-lg mb-3  btn-outline-dark transparent uppercase btn_font\" aria-label=\"Configuracion\" >");
    document.writeln("    Configuracion");
    document.writeln("    </button>");
    document.writeln("    </div>");
    document.writeln("</div>");

}
