// console.log("Hello World");

// const myName= "Sezer Mercan";

// console.log(myName);

// const h1 = document.querySelector(".heading-primary");
// console.log(h1);



// h1.addEventListener("click", function(){
//   h1.textContent=myName;
//   h1.style.backgroundColor="red";
//   h1.style.padding="5rem";

// })


// SET CURRENT YEAR
const yearEl=document.querySelector(".year");
const currentYear=new Date().getFullYear();
yearEl.textContent=currentYear;

////////////////////////////////////////77
// MAKE MOBILE NAVIGATION WORK

const btnMobileEl=document.querySelector(".btn-mobile-nav");
const headerEl= document.querySelector(".header");

btnMobileEl.addEventListener("click", function(){
   headerEl.classList.toggle("nav-open");
    
})

////////////////////////////////////////////////

// SMOOTH SCROLLING ANIMATION 

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function(link){
  link.addEventListener("click",function(e){
    e.preventDefault();

    const href= link.getAttribute("href");
    // console.log(href);

    //scroll back to top
    if(href==="#") window.scrollTo({
      top:0,
      behavior:"smooth"
    });


    //Scroll to other links 

    if(href !== "#" && href.startsWith("#")){

      const sectionEl = document.querySelector(href);

      // console.log(sectionEl);
      sectionEl.scrollIntoView({behavior:"smooth"});

    }

    //Close mobile navigation

    if(link.classList.contains("main-nav-link")){
      headerEl.classList.toggle("nav-open");
    }

    
  });
});



///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

