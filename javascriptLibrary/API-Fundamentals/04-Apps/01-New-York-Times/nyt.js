const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'CYapG7CA7LGdZMGar4T6Vqp3K7PYh2DD'; //2
let url; //3 //declaring variable to use later on

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';
let pageNumber = 0;
let displayNav = false;

//1                     //2   
searchForm.addEventListener('submit', fetchResults); //
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3

function nextPage(e) {
  pageNumber++; //1
  fetchResults(e);  //2
  console.log("Page number:", pageNumber); //3
};

function previousPage(e) {
  if(pageNumber > 0) { //1
    pageNumber--; //2
  } else {
    return; //3
  }
  fetchResults(e); //4
  console.log("Page:", pageNumber); //5
};

function fetchResults(e) {
  e.preventDefault();
  // value will be = user input, in the input field
  // Assemble the full URL
  url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
  // back ticks - `` string interpulation


  if(startDate.value !== '') {
    console.log(startDate.value)
    url += '&begin_date=' + startDate.value;
  };
  
  if(endDate.value !== '') {
    url += '&end_date=' + endDate.value;
  };
  
  console.log("URL:", url);
  fetch(url)    //method with parameter
    .then(function(result) {    
      return result.json();   //promise can be one of three things, success, unsuccessful, in process
    }).then(function(json) {    //returning convert to json
      displayResults(json); //1 & //3
    });

  function displayResults(json) {
    while (section.firstChild) {    //everytime you hit search .firstchild whatrver section that targets(element)so they don't stack
      section.removeChild(section.firstChild); //1
    }
    let articles = json.response.docs;

    // Challenge
    if(articles.length < 10 && pageNumber > 0) {
      nextBtn.style.display = 'none';
    } else {
      nextBtn.style.display = 'block';
    }

    // Bonus Challenge



    if(articles.length === 10) { // if equal to 10 display 
      nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    } else {
      nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
    }

    if(articles.length === 0) {
      console.log("No results");
      
    } else {
      for(let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');  //1
        let para = document.createElement('p');  
        let clearfix = document.createElement('div');
        let current = articles[i];

  
        for(let j = 0; j < current.keywords.length; j++) {
          let span = document.createElement('span');   
          span.textContent += current.keywords[j].value + ' ';   
          para.appendChild(span);
        }
  
          //2       
        if(current.multimedia.length > 0) {
          //3 
          img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
          //4
          img.alt = current.headline.main;
        }
  
        clearfix.setAttribute('class','clearfix');
        //styling in css to keep photo in box with text
        //telling javascript to build these instead of us doing it
        article.appendChild(heading); //append a child node to (variable)
        heading.appendChild(link);
        article.appendChild(img); //5
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
      }
    }
  };
}