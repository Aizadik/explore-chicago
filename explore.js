$(document).ready(function () {

    var newbuttons=[];
    var wilcount = 0;
    var placess = ["Millennium Park", "Willis Tower", "Navy Pier", "Cloud Gate",  "John+Hancock Center",
                "Grant+Park","Museum of Science+and Industry, Chicago",
                "Adler Planetarium", "Wrigley Field", "Buckingham Fountain","Chicago Architecture Center", 
                "Crown Fountain", "Chicago Cultural Center", "Chicago Riverwalk", "Chicago Water Tower", "The Chicago Theatre"];

    for (var i = 0; i < placess.length; i++) {
        var olddiv = $("<div>");

        var newbutton = $("<button style=margin-left:5px;>");
        newbutton.addClass("btn btn-primary");
        // oldbuttons.attr('id', 'butt-'+wilcount);
        newbutton.attr('data-places', placess[i]);
        
        newbutton = newbutton.text(placess[i]);
        newbuttons.push(newbutton)

        $(".buttons").append(newbutton);
    }


    $("#add-items").on("click", function (event) {

        var toDoTask = $("#name-input").val().trim();
        newbuttons = $("<button style=margin-left:5px;>");
        newbuttons.addClass("btn btn-primary");
        newbuttons.attr('id', 'butt-' + wilcount);
        newbuttons.attr('data-places', toDoTask);
        newbuttons = newbuttons.text(toDoTask);
        $(".buttons").append(newbuttons);
        event.preventDefault();
        wilcount++;
    })





    $(".buttons").on("click", function (event) {
        console.log(event)
        $(".Gif").empty();

        var places = $(event.target).attr("data-places");
        console.log(newbuttons);

        var queryURL = "https://pixabay.com/api/?key=13167560-75630e963a65471f02ec259c5&q="+places+"+chicago&image_type=photo"
        // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        // places + "&api_key=76l4XOO9P5tDLkdPqlkSDxbzf1kczSLH&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response.hits);
            results = response.hits;

            for (var i = 0; i < results.length; i++) {

                var PresidentDiv = $('<div class="gifall">');
                var p = $('<a target="_blank">');
                p.text(results[i].tags);
                p.attr("href", 
                "https://www.google.com/maps/place/"+places);
                console.log(response)
                var PresidentImage = $("<img>");
                PresidentImage.attr('id', "still");
                //  PresidentImage.attr('data-state',"still" );
                PresidentImage.attr("src", results[i].previewURL);
                PresidentImage.attr("newsrc", results[i].largeImageURL);
                PresidentImage.attr("oldsrc", results[i].previewURL);
                // PresidentImage.attr('newsrc', results[i].images.fixed_height.url);
                // PresidentImage.attr('oldsrc', results[i].images.fixed_height_still.url);
                PresidentDiv.append(p);
                PresidentDiv.append(PresidentImage);
                $(".Gif").prepend(PresidentDiv);

            }
        });

        
    });


});
