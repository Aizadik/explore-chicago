console.log("testing")
// $("button").on("click", function () {
    var rawQuery = 'here put the value to search'
    var query = encodeURIComponent(rawQuery)
    var key = "IRq5hBHkSxMs2QAsZKb5usDxsCAARagg"
    var queryURL = `https://api.tomtom.com/search/2/search/${query}.json?key=${key}`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
       console.log(response)

    })
// })
