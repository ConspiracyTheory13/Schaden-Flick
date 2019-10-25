//back to home not working
//fix css on portfolio page


const bioBlock =`
<section class="bioTextBlock" id="bioBlock">
    <h1>Biography</h1>
    <img class="placeholderProfile" src="profile.jpg"></img>
    <p> 
    
Salutations, that's just my fancy way of saying "hello". My name is Charla, but feel free to call me Charlotte. 

A recent bootcamp grad from the Web Developer Track through Bloc.io, I am enamored by the way technology opens 
the door of opportunity for people of every background. I'm an Oregon native, petrichor obsessed and experience driven.
        I obtained my Bachelor's degree in Social Sciences from Portland State University, and am continuing on to
        achieve my masters.
    </p>
        <button class="home" href=".heroImageReload" id="homeButton">Home</button>                                                                          
</section>`;

const portfolioBlock =`
<section id="portfolioBlock"> 
<h1>Portfolio</h1>
<div class="projectOneContainer">
<header class="projectHeader">
    <h2>Cognition & Mental Heuristics Quiz App</h2>
        <div class="linkContainer">
            <a href="https://conspiracytheory13.github.io/Cognition/">Live</a>
            <a href="https://github.com/ConspiracyTheory13/Cognition">Repo</a>
        </div>
</header>
<div class="projectOneImagesContainer">
<img class="project1" src="quizappstartscreen.png" id="p1CurrentImage"></img>   
    <div class="projectFooter">
            <a id="previousImage"><img class="arrowNav" src="leftarrow.png"></img></a>
            <a id="nextImage"><img class="arrowNav" src="rightarrow.png"></img></a>        
    </div>
    </div>
        <button class="home" id="homeButton">Home</button>                                                                       
    </div>
</section>`;

const portfolioImagesArray = [
    { name: 'quizStart', image: 'quizappstartscreen.png'}, 
    { name: 'quizSecond', image: 'p1second.png' }, 
    { name: 'quizThird', image: 'p1third.png' },
    { name: 'quizFinal', image: 'p1final.png' }
];

let currentImage = 0;

function nextButton() {
    currentImage ++;
    if(currentImage === portfolioImagesArray.length) {
        currentImage = 0;
    }
    setImage();
}

function previousButton() {
    currentImage --;
    if(currentImage < 0) {
        currentImage = portfolioImagesArray.length -1;
    }
    setImage();
}

function setImage() {
    document.getElementById("p1CurrentImage").src=portfolioImagesArray[currentImage].image;
}

const openModalBio = () => {
    $('#pageRenderContainer').html(bioBlock);
    event.preventDefault();
    console.log("openModalBiofires")
    document.getElementById("homeButton").addEventListener("click", backToHome);   
};

const openPortfolioModal = () => {
    $('#pageRenderContainer').html(portfolioBlock);
    document.getElementById("nextImage").addEventListener("click", nextButton);   
    document.getElementById("previousImage").addEventListener("click", previousButton);       
    event.preventDefault();
    hideHeaderBar(); 
};

const hideHeaderBar = () => {
    $('.headerContentContainer').addClass('hidden');
}

const backToHome = () => {
    console.log('back to home fires');
    $('#pageRenderContainer').html(heroImageReload);
}

document.getElementById("bioLaunch").addEventListener("click", openModalBio);   
document.getElementById("portfolioLaunch").addEventListener("click", openPortfolioModal);