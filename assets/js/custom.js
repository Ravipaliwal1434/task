
window.addEventListener('scroll', function() {
    let header = document.getElementById('topbar');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  function showProjectOptions() {
    var mainSelect = document.getElementById("query_type");
    var projectOptions = document.getElementById("projects");
 
    // Toggle the active class based on the selected option
    if (mainSelect.value === "1") {
        projectOptions.classList.add("active");
    } else {
        projectOptions.classList.remove("active");
    }

}


let toggle_btn  = document.getElementById("toggle-btn");
toggle_btn.addEventListener('click', function() {
  
   let navbar  =  document.getElementById("navbar");

   navbar.classList.toggle('sticky-menu');
    
});

let close  = document.getElementById("close");
close.addEventListener('click', function() {
    
    var formcotainer = document.getElementById("form-container");
    formcotainer.classList.add('hide');

});

let contactformbtn  = document.getElementById("contact-form-btn");
contactformbtn.addEventListener('click', function() {
   
    var formcotainer = document.getElementById("form-container");
    formcotainer.classList.remove('hide');

});








const goToTopButton = document.getElementById('go-to-top');

goToTopButton.addEventListener('click', () => {
  const currentPosition = window.scrollY;

  const targetPosition = 0;

  
  const distance = currentPosition - targetPosition;

  const duration = 500;

  const speed = distance / duration;

  let startTime = null;
  function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const scrollPosition = currentPosition - (speed * progress);
    window.scrollTo(0, scrollPosition);
    if (progress < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo(0, targetPosition);
    }
  }
  requestAnimationFrame(animateScroll);
});