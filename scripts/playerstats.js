
function search() {
    document.getElementById("pbs").style.display = "block";
    var x = document.getElementById('search').value;
    var json = '';
    console.log(document.getElementById('search').value);
    $.getJSON('https://www.speedrun.com/api/v1/users/' + x + '/personal-bests?embed=game,category', function(data) {
        var y = JSON.stringify(data);
        json = JSON.parse(y);
        console.log(json);
        var s = "";
        for(var i = 0; i < json.data.length; i++)
        {
            s+= json.data[i].game.data.names.international + " " + json.data[i].category.data.name + " " + json.data[i].run.times.primary.substring(2).replace(/H|M/g, ":").replace(/S/g, "")  + "<br>"; 
        }
        var tick = 0;
        for(var i = 0; i < json.data.length; i++)
        {
            if(json.data[i].place === 1)
            {
                tick++;
            }
        }
        document.getElementById('pb').innerHTML = "World Records: " + tick + "<br>" + s;

    });
    $.getJSON('https://www.speedrun.com/api/v1/users/' + x, function(data) {
        var y = JSON.stringify(data);
        json = JSON.parse(y);
        console.log(json);
        document.getElementById('pfp').src = "https://www.speedrun.com/themes/user/" + json.data.names.international + "/image.png";
        document.getElementById('profilename').innerHTML = json.data.names.international;
    });
    
    var dates = [];
    var update;
    var x = document.getElementById('search').value;
    var json = '';
    $.getJSON('https://www.speedrun.com/api/v1/users/' + x + '/personal-bests?embed=game,category', function(data) {
        var y = JSON.stringify(data);
        json = JSON.parse(y);
        var s = "";
        for(var i = 0; i < json.data.length; i++)
        {
            dates.push(json.data[i].run.date); 
        }
        renderchart(dates);
    });
    //console.log(update.length);
}

function renderchart(thing)
{
    thing = thing.reverse();
    var datas = [];
    for(var i = 0; i < thing.length; i++)
    {
        datas.push({'label': thing[i], 'y': i + 1});
    }
    console.log(datas);
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark1",
		title:{
			text: "Activity Over Time"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
            type: "line",
			dataPoints: datas
		}
		]
    });
    chart.render();
}
