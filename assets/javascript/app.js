queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyCfSQzd0w1m-DWOhLBpE12WSXYXtXhjZy8"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
  })
