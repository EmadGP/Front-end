const dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

function alle_dagen() {
    var newH2 = document.createElement("h2");
    var newContent = document.createTextNode("Alle dagen van de week zijn: ");
    newH2.appendChild(newContent, newText);
    document.body.appendChild(newH2);
    newH2.setAttribute("id", "kop");


    var newP2 = document.createElement("p");
    var newText = document.createTextNode(dagen.join(", "));
    newP2.appendChild(newText);
    document.body.appendChild(newP2);   
}

function werkdagen() {
    var werkdagen = dagen.slice(0, 5);
    var newH2 = document.createElement("h2");
    var newContent = document.createTextNode("De werkdagen zijn: ");
    newH2.appendChild(newContent);
    document.body.appendChild(newH2);
    newH2.setAttribute("id", "kop");

    var newP2 = document.createElement("p");
    var newText = document.createTextNode(werkdagen.join(", "));
    newP2.appendChild(newText);
    document.body.appendChild(newP2);
}


function weekend(){
    var weekend = dagen.slice(5);
    var newH2 = document.createElement("h2");
    var newContent = document.createTextNode("Het weekend is: ");
    newH2.appendChild(newContent);
    document.body.appendChild(newH2);
    newH2.setAttribute("id", "kop");

    var newP2 = document.createElement("p");
    var newText = document.createTextNode(weekend.join(", "));
    newP2.appendChild(newText);
    document.body.appendChild(newP2);

}

function omgekeerd(){
    var omgekeerd = dagen.reverse();
    var newH2 = document.createElement("h2");
    var newContent = document.createTextNode("De dagen omgekeerd zijn: ");
    newH2.appendChild(newContent);
    document.body.appendChild(newH2);
    newH2.setAttribute("id", "kop");

    var newP2 = document.createElement("p");
    var newText = document.createTextNode(omgekeerd.join(", "));
    newP2.appendChild(newText);
    document.body.appendChild(newP2);

}


function omgekeerd_werkdagen(){
    var omgekeerd = dagen;
    var werkdagen = dagen.slice(2, 7);
    var newH2 = document.createElement("h2");
    var newContent = document.createTextNode("De werkdagen omgekeerd zijn: ");
    newH2.appendChild(newContent);
    document.body.appendChild(newH2);
    newH2.setAttribute("id", "kop");

    var newP2 = document.createElement("p");
    var newText = document.createTextNode(werkdagen.join(", "));
    newP2.appendChild(newText);
    document.body.appendChild(newP2);
}

function omgekeerd_weekend(){
    var omgekeerd = dagen;
    var weekend = dagen.slice(0, 2);
    var newH2 = document.createElement("h2");
    var newContent = document.createTextNode("Het weekend omgekeerd is: ");
    newH2.appendChild(newContent);
    document.body.appendChild(newH2);
    newH2.setAttribute("id", "kop");

    var newP2 = document.createElement("p");
    var newText = document.createTextNode(weekend.join(", "));
    newP2.appendChild(newText);
    document.body.appendChild(newP2);

}

alle_dagen();
werkdagen();
weekend();
omgekeerd();
omgekeerd_werkdagen();
omgekeerd_weekend();