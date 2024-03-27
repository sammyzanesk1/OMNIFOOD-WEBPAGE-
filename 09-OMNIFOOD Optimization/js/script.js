///////////////////////////////////////////////////////////...introduction
console.log("Hello world"); // to check if the htmland js is linked well....confirm in web browser console

const myName = "zane king";
const h1 = document.querySelector(".heading-primary"); // selecting an element in our html file...we selected the h1 using its class selector
console.log(myName); // to make this display in the js log on the browser we link/reference it using console.log.
console.log(h1); // linking h1 to the browser

//h1.textContent = myName; //to manipulate the html file to display myName value as h1.
//h1.style.backgroundColor = "red"; //to apply css styling to the html using js...
//h1.style.padding = "4rem"; //applying css styling to html file using js...this application is not yet dynamic

// //we use js mainly for dynamic styling...styling that will happen when an event occurs...so the js will the listening for the event to occur in order to implement the set style. for instance we want h1 to apply js syling when it is clicked.we use functions to instruct js when to act,so here the functions will be to 1.listen for an event-click and then 2.implement or apply the set styling...so when the h1 is clicked the codes n the function applies.
// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////..MAKING THE FOOTER DATE AUTO UPDATED
//using js to make the footer year up to date automtically...here, we want js to change d text content of the footer. we wrapped the text we want to change in span thus giving it an element nd  clss we will trget this text with the clss in our js.
const yearEL = document.querySelector(".year"); //use js to target or select the span using the span class.
const currentYear = new Date().getFullYear(); //we use this line of code to create the current year automtically
yearEL.textContent = currentYear; //using js to set the value of the targted span element...i.e 2023 tht is calculated by js

///////////////////////////////////////////////////////////...MAKING THE MOBILE NAV BUTTON WORK.
const btnNavEL = document.querySelector(".btn-mobile-nav"); //targeting-selecting the element we want to apply js to.
const headerEL = document.querySelector(".header"); //

//when the btn/header is clicked, js should add or remove/toggle the nav open class...originally nv open is not in our html code, so wen menu icon is clicked js will add nav open class then all the css we set for nav open will apply, wen we click the cancel button js will remove the nav open bcos it is present, this will apply the css that exist bfor the nav open wes added. basically taking our styling back to the original state
btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////////////
//smooth scrollong animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //js to implement default scroll here.
    e.preventDefault(); //we overwrite default scroll setting here
    const href = link.getAttribute("href"); //each link should go to the element with its href attribute when clicked but we set more function for this to work below

    //Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile nav when a nav section is clicked
    if (link.classList.contains("main-nav-link"))
      //if the header links have the main nav link class js should toggle the nav open
      headerEL.classList.toggle("nav-open"); //when any link in the header is clicked js will switch off the nav open
  });
});

//////////////////////////////////////////////////////////////////////////////////////////
//sticky navigation...using the interception observer method

const sectionHeroEL = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //just in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEL);
///////////////////////////////////////////////////////////////////
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

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
