    //

var buttonsBank = ["Cat" , "frog" , "dog"]

function addButtons (){
    $("#buttonCon").empty()
    for (var i = 0; i<buttonsBank.length; i++ ) {
        var newButton = $("<button>")
        newButton.text(buttonsBank[i])
        newButton.addClass("btn").addClass("btn btn-outline-success")
        newButton.attr("info" , buttonsBank[i]) 
        $("#buttonCon").append(newButton)
 
   }
}
addButtons()



$("#searchthing").on("submit" , function(event){
    event.preventDefault()
    var buttonText = $("#buttonText").val()
    buttonsBank.push(buttonText) 
   $("#searchthing")[0].reset()
    addButtons()
}) 


$(document).on("click", ".btn" , function() {
    var info = $(this).attr("info")
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=VSHwS4opCUsGqbGqBYA6s6l2tDqlhkjU&tag=" + info;
  
      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function(response) {
          var imageUrl = response.data.images.original.url;
          var catImage = $("<img>");
          catImage.attr("src", imageUrl);
          catImage.attr("alt", "cat image");
          $("#images").empty()
          $("#images").prepend(catImage);
        });
    });

