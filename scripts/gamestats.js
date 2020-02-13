function search() {
    document.getElementById("wr").style.display = "block";
    var x = document.getElementById('search').value;
    var json = '';
    console.log(document.getElementById('search').value);
    $.getJSON('https://www.speedrun.com/api/v1/games/' + x, function(data) {
        var y = JSON.stringify(data);
        json = JSON.parse(y);
        console.log(json);
        var s = "";
        document.getElementById("ico").src = "https://www.speedrun.com/themes/" + x + "/cover-64.png";
        document.getElementById("gametitle").innerHTML = json.data.names.international;
    });

    
    $.getJSON('https://www.speedrun.com/api/v1/games/' + x + '/records?miscellaneous=no&scope=full-game&embed=data', function(data) {
        var y = JSON.stringify(data);
        json = JSON.parse(y);
        console.log(json);
        var s = "";
        for(var i = 0; i < json.data.length; i++)
        {
            s+="<b>"
            s+= json.data[i].weblink.split('#')[1] + ": ";
            s+="</b>"
            s+= json.data[i].runs[0].run.time.substring(2).replace(/H|M/g, ":").replace(/S/g, "");
            s+= "<br>"
        }
        document.getElementById("wrtext").innerHTML = s;
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}