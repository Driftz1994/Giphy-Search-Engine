
function sendApiRequest() {
    var userInput = document.getElementById("input").value
    console.log(userInput)
    
    var giphyApiKey = `sQhvNtP5PDzimNNTIE55yMviV1xNz6vL`
    var giphyApiURL = 
    `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${userInput}q&limit=25&offset=5&rating=g&lang=en&bundle=messaging_non_clips`
    
    fetch(giphyApiURL)
    .then(function(data) {
      return data.json()
    })
    .then(function(json) {
      console.log(json.data[0].images.fixed_height.url)
      const resultsEl = document.getElementById('results')
      let resultsHTML = ''
      json.data.forEach(function(obj) {
        console.log(obj.images.fixed_height.url)
        const url = obj.images.fixed_height.url
        resultsHTML += `<img 
        src="${url}"
        class="item">`
      })
      resultsEl.innerHTML = resultsHTML
      var imgPath = json.data[0].images.fixed_height.url
      var img = document.createElement("img")
      img.setAttribute("src", imgPath)
   document.body.appendChild(img)
    })
  }
