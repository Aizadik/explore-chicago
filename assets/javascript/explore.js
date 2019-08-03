$(document).ready(function() {
    /*
     * creating variables which will include the name of the primary buttons and value of the input tag
     */
    var newbuttons = [];
    var placess = ["Millennium Park", "Willis Tower", "Navy Pier", "Cloud Gate", "Wrigley Field",
        "John Hancock Center", "Cultural Center", "Chicago Riverwalk", "Navi Pier", "Museum of Science Industry", "Chicago Magnificent Mile", "Art Instuitute of Chicago"
    ];
    /*
     * creating a loop to take the value of the array and place it to the new buttons
     */
    for (var i = 0; i < placess.length; i++) {
        var newbutton = `<button class="btn btn-primary" data-places=${placess[i]} style = "margin:5px">${placess[i]}</button>`
        $(".buttons").append(newbutton);
    }
    /*
     * function: creat new buttons
     */
    function funcCreatBut(event) {
        var toDoTask = $("#name-input").val().trim();
        newbuttons = `<button class="btn btn-primary" data-places="${toDoTask}" style = "margin:5px">${toDoTask}</button>`;
        $(".buttons").append(newbuttons);
        event.preventDefault();
    };
    /*
     * function: to get images from API 
     */

    function funcAPI(event) {
        $(".Gif").empty();
        var places = $(event.target).attr("data-places");
        var queryURL = "https://pixabay.com/api/?key=13167560-75630e963a65471f02ec259c5&q=" + places + "+chicago&image_type=photo";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            results = response.hits;
            for (var i = 0; i < 4; i++) {
                var PresidentDiv = `<div class="gifall">
                                            <img src="${results[i].largeImageURL}" alt="Smiley face" height="200" width="200">
                                            <a class ="gifanchor" target = "_blank" href = "https://www.google.com/maps/place/+${places}">Show on the map</a>
                                            </div>`
                $(".Gif").prepend(PresidentDiv);
            }
        });
    };
    /*
     * onclick events
     */
    $("#add-items").on("click", funcCreatBut);
    $(".buttons").on("click", funcAPI);
});