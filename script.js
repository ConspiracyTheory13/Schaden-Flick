
const OMDbAPIKey="&apikey=5cb6d69e"
const MDBKey= "&api_key=b634ceab64cc409d417a98a2cfa729ba";


//bc the discover feature is special you'll have to do an 
//if else with ||'s

// an api key needs to have the beginning URL, the limit,
//
$(".pickYourPoison").submit(function(event){
    event.preventDefault();  
    let url= 'https://api.themoviedb.org';
    let genre="/3/discover/movie?with_genres="
    // let audioType = $("option:selected")
    let keywords="&with_keywords=" + $(".queries").val();
    let page="&page=" 
    let userInput = $("option:selected");
    console.log(userInput);
    // first figure out your for loop. finish editing it
    //one more option, language?
    //use posters
    //get link working next

    // let discover= '/discover/movie?'
    // let limitSet ='&limit='+$(".numberOfResults").val();
    // let onlyEnglish ="&language=en-US"
    // let subbedOnly = ""
    // empty();
    //with_genres
    // console.log("userinput" + userInput)
      genre+=`${userInput.attr("id")}`;
    //   console.log('for loop firing')
    //   console.log(userInput[i]);
    //   console.log(defaultValue)
    //   console.log(genre)
    //   if(i < userInput.length-1) {
    //     states+=',';
    //   }
    console.log("being fetched")
    url+=genre+keywords+MDBKey
    console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(responseJson => printResults(responseJson));
   });

function getPages(results){

}

function printResults(resultObject) {
  console.log("runningPrintResults")
  console.log(resultObject);
  let data = resultObject.results;
    for(let i=0; i < data.length; i++) {
      $('.mainContainer').append(data[i].title + '<br>');
    };
    }


    //`<li>${data[i].title} + ${data[i].vote_average} + ${data[i].overview}</li>`
     
    function empty(){
        console.log("empty")
        $(".mainContainer").empty();
      };
    


//api.themoviedb.org/4/list/10?page=1&api_key=b634ceab64cc409d417a98a2cfa729ba&sort_by=vote_average.desc

//make the "vampires" randomly generate
//comparison through tags

//https://api.themoviedb.org/3/genre/movie/list?api_key=&api_key=b634ceab64cc409d417a98a2cfa729ba&language=en-US
//list of genres
//popularity
//ratings
//I like the idea of searching certain actors, but I don't know a good way to do it without it wasting time
//how about an awful dinner to go with it?