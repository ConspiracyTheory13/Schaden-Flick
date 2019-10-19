const MDBKey= "&api_key=b634ceab64cc409d417a98a2cfa729ba";

$(".pickYourPoison").submit(function(event){
    event.preventDefault();  
    let url= 'https://api.themoviedb.org';
    let genre="/3/discover/movie?with_genres="
    let keywords="&with_keywords=" + $(".queries").val();
    let page="&page="
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
    for(let i=0; i < data.length; i++) {
      $('#resultsContainer').append(data[i].title + '<br>');
    };
    }
