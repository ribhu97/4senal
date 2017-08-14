        console.log("check1");
        var elements = document.getElementsByTagName('*');
        var tbr = document.getElementById('txt1').value;
        var rep = document.getElementById('txt2').value;
        var replacement = new RegExp(tbr,"gi");

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            for (var j = 0; j < element.childNodes.length; j++) {
                var node = element.childNodes[j];

                if (node.nodeType === 3) {
                    var text = node.nodeValue;
                    var replacedText = text.replace(replacement, rep);

                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                }
            }
        }

/**
var elements = document.getElementsByTagName('*');
var tbr = "arsenal";
var rep = "4senal";
var replacement = new RegExp(tbr,"gi");

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(replacement, rep);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}**/