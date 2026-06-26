

const yearEl=document.querySelector(".year");
const currentYear=new Date().getFullYear();
console.log(currentYear);
yearEl.textContent=currentYear;


const btnNavEl=document.querySelector(".btn-mobile-nav");
const headerEl=document.querySelector(".header");
btnNavEl.addEventListener('click',function(){
    headerEl.classList.toggle("nav-open");
  });

  
  ///////////////////////////////////////////////////////////
  // Smooth scrolling
  const lenis = new Lenis({
    autoRaf: true,
    anchors: true,
    duration: 2.5,
  });
  ///////////////////////////////////////////////////////////
  // Sticky navigation
  
  const sectionHeroEl = document.querySelector(".section-hero");
  
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
  
      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  
  obs.observe(sectionHeroEl);

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



