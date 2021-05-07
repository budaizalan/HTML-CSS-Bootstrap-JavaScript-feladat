function szamol() {
    var aoldal = parseInt(document.getElementById("aoldal").value);
    
    var fizetendo = aoldal * 4;
    document.getElementById('eredmenyk').value = fizetendo.toLocaleString();
}

function szamolt() {
    var aoldal = parseInt(document.getElementById("aoldal").value);
    
    var fizetendo = aoldal * aoldal;
    document.getElementById('eredmenyt').value = fizetendo.toLocaleString();
}

function szamolteglalapkerulet() {
    var teglalapaoldal = parseInt(document.getElementById("teglalapaoldal").value);
    var teglalapboldal = parseInt(document.getElementById("teglalapboldal").value);
    
    var fizetendo = 2 * (teglalapaoldal + teglalapboldal);
    document.getElementById('eredmenyteglalapkerulet').value = fizetendo.toLocaleString();
}

function szamolteglalapterulet() {
    var teglalapaoldal = parseInt(document.getElementById("teglalapaoldal").value);
    var teglalapboldal = parseInt(document.getElementById("teglalapboldal").value);
    
    var fizetendo = teglalapaoldal * teglalapboldal;
    document.getElementById('eredmenyteglalapterulet').value = fizetendo.toLocaleString();
}

function szamolkockaterfogat() {
    var aoldal2 = parseInt(document.getElementById("aoldal2").value);

    var terfogat = aoldal2 * aoldal2 * aoldal2;
    document.getElementById('terfogat').value = terfogat.toLocaleString();
}

function szamolkockafelszin() {
    var aoldal2 = parseInt(document.getElementById("aoldal2").value);

    var felszin = 6 * aoldal2 * aoldal2;
    document.getElementById('felszin').value = felszin.toLocaleString();
}

function szamolteglalapfelszin() {
    var teglalapaoldal2 = parseInt(document.getElementById("teglalapaoldal2").value);
    var teglalapboldal2 = parseInt(document.getElementById("teglalapboldal2").value);
    var teglalapcoldal2 = parseInt(document.getElementById("teglalapcoldal2").value);

    var teglalapfelszin = 2 * (teglalapaoldal2 * teglalapboldal2 + teglalapaoldal2 * teglalapcoldal2 + teglalapboldal2 * teglalapcoldal2);
    document.getElementById('teglalapfelszin').value = teglalapfelszin.toLocaleString();
}

function szamolteglalapterfogat() {
    var teglalapaoldal2 = parseInt(document.getElementById("teglalapaoldal2").value);
    var teglalapboldal2 = parseInt(document.getElementById("teglalapboldal2").value);
    var teglalapcoldal2 = parseInt(document.getElementById("teglalapcoldal2").value);

    var teglalapterfogat = teglalapaoldal2 * teglalapboldal2 * teglalapcoldal2;
    document.getElementById('teglalapterfogat').value = teglalapterfogat.toLocaleString();
}