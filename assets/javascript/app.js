console.log("testing")

function thisGetDataFromTOMTOM(rawQuery) {
    
    // var rawQuery = 'here put the value to search'
    var query = encodeURIComponent(rawQuery)
    var key = "IRq5hBHkSxMs2QAsZKb5usDxsCAARagg"
    var queryURL = `https://api.tomtom.com/search/2/search/${query}.json?key=${key}`
    return $.ajax({
        url: queryURL,
        method: "GET"
    })
}


thisGetDataFromTOMTOM('pizza').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('beers').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('museum').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('concerts').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('music festivals').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('food festival').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('wine festivals').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('sports').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('movies').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('architectural tours').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('kayaking').then(function (response) {
    console.log(response)  
})
thisGetDataFromTOMTOM('hiking').then(function (response) {
    console.log(response)  
})


    // $("button").on("click", function (event) {

    // })
