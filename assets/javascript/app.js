// console.log("testing")

// function thisGetDataFromTOMTOM(rawQuery) {

//     // var rawQuery = 'here put the value to search'
//     var query = encodeURIComponent(rawQuery)
//     var key = "IRq5hBHkSxMs2QAsZKb5usDxsCAARagg"
//     var queryURL = "https://api.tomtom.com/search/2/search/"+places+".json?key=IRq5hBHkSxMs2QAsZKb5usDxsCAARagg"
//     return $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
// }

$(document).ready(function () {
    /*
    * creating variables which will include the name of the primary buttons and value of the input tag
    */
    var newbuttons=[];
    var placess = ["pizza", "hot dogs", "hamburger", "greek cuisine", "italian cuisine","russian cuisine", "indian cuisine", "potbelly"];
    /*
    * creating a loop to take the value of the array and place it to the new buttons
    */
for (var i = 0; i < placess.length; i++) 
    {
        var newbutton = `<button class="btn btn-primary" data-places=${placess[i]} style = "margin:5px">${placess[i]}</button>`
        $(".buttons").append(newbutton);
    }
   
    /*
    * function: to get address from API 
    */

function funcAPI (event) 
    {
        $(".Gif").empty();
            var places = $(event.target).attr("data-places");
            var queryURL = "https://api.tomtom.com/search/2/search/"+places+"Chicago.json?key=IRq5hBHkSxMs2QAsZKb5usDxsCAARagg";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.results)

            response.results.forEach(renderAddress)

           
                        
                    
            });
        };
        function renderAddress (item){
            console.log(item.address)
            if (item.address.countrySubdivision=="IL"){
            var PresidentDiv = `<p>${item.address.country}<p>
                                <p>${item.address.countrySubdivision}<p>
                                <p>${item.address.localName}<p>
                                <p>${item.address.freeformAddress}</p>`
                                            
                        $(".Gif").prepend(PresidentDiv);}
            


    }
    /*
    * onclick events
    */
$(".buttons").on("click", funcAPI);
});

