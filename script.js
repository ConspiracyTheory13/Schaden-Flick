const MDBKey= "&api_key=b634ceab64cc409d417a98a2cfa729ba";

$(".pickYourPoison").submit(function(event){
    event.preventDefault();  
    let url= 'https://api.themoviedb.org';
    let genre="/3/discover/movie?with_genres="
    let keywords="&with_keywords=" + $(".queries").val();
    let page="&page=";
    let popularity ="&sort_by=vote_average.asc"
    if ($('input[name=answer]:checked', '.pickYourPoison').val()==='no')
    {
    popularity = "&sort_by=vote_average.dec";
    }     
    console.log($('input[name=answer]:checked', '.pickYourPoison').val());
    let selectedLanguage= "&language=" + $(".chooseLanguage option:selected").val(); 
    let userInput = $("option:selected");
    genre+=`${userInput.attr("id")}`;
    console.log("being fetched")
    url+=genre+MDBKey+selectedLanguage+popularity
    console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(responseJson => printResults(responseJson));
   });

function printResults(resultObject) {
    $("#resultsContainer").empty();
    let data = resultObject.results;
    let posterUrl = "https://image.tmdb.org/t/p/w500";
    for(let i=0; i < data.length; i++) {
      $('#resultsContainer').append(`
      <div class="movieSection">
        <div class="poster">
          <img class="posterImg" src="${posterUrl}${data[i].poster_path}"
        </div>
        <div class="title">${data[i].title}</div> 
        <div class="voteStatistics">Vote Count:${data[i].vote_count}<br>
        Vote Average:${data[i].vote_average}
        </div><br> 
        <div class"movieOverview"> ${data[i].overview} </div>
      
        <br>`)
        
        console.log(`${posterUrl} + ${data[i].poster_path}`);
    };
    }