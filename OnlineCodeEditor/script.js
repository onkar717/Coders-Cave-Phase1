function run() {
    let htmlCode = document.getElementById("Html-code").value;
    let CssCode = document.getElementById("Css-code").value;
    let JSCode = document.getElementById("js-code").value;
    let Output = document.getElementById("Output");

    Output.contentDocument.body.innerHTML = htmlCode + "<style>"+ CssCode +"</style>";
    Output.contentWindow.eval(JSCode);
}