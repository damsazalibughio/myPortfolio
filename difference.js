

// add/ remove active class on link
// let currentLocation = location.href;
// console.log(currentLocation);
// let menuItem = document.querySelectorAll('.navbar a');
// const linkLength = menuItem.length;

// for(let i = 0; i< linkLength; i++){
    
//     if(menuItem[i].href === currentLocation){
//         menuItem[i].className= 'active'
//     }
// }

// sideBar
let li = document.querySelectorAll('.navbar ul li')
li.forEach(element => {
    // console.log(element);
    element.addEventListener('click', function(){
        li.forEach( link => link.classList.remove('active'));
       this.classList.add('active')
    //    console.log(element);
    })
});

// navbar
let navbarList = document.querySelectorAll('.navbar-nav ul li')
navbarList.forEach(element => {
    // console.log(element);
    element.addEventListener('click', function(){
        navbarList.forEach( link => link.classList.remove('nav-active'));
       this.classList.add('nav-active')
       document.getElementById("mySidebar").style.display = "none";
    //    console.log(element);
    })
});
// console.log(navbarList);




// when we have multiple pages 
// const activePage = window.location.pathname;
// console.log(activePage);
// const navLinks = document.querySelectorAll('.navbar a').forEach(link =>{
//     if(link.href.includes(activePage)){
//         link.classList.add('active')

//     }
// })

// progress-bar
// const progress1 = document.querySelector('.progress-done');
// setTimeout(() =>{
//     progress1.style.width = progress1.getAttribute('data-done') + '%';
//     progress1.style.opacity = 1;
    
// }, 2000)

// const progressDone1 = document.getElementById('progress-done1');
// const progressDone2 = document.getElementById('progress-done2');
// const progressDone3 = document.getElementById('progress-done3');
// const progressDone4 = document.getElementById('progress-done4');
// const progressDone5 = document.getElementById('progress-done5');
// const progressDone6 = document.getElementById('progress-done6');
// const progressDone7 = document.getElementById('progress-done7');
// const progressDone8 = document.getElementById('progress-done8');
// const progressDone9 = document.getElementById('progress-done9');
// const progressDone10 = document.getElementById('progress-done10');
let progressDone = document.querySelectorAll('.list-design .progress-done')
console.log(progressDone);



function getProgressBar(){

    setTimeout(() =>{
        progressDone.forEach((progressBar) =>{
            console.log(progressBar);
            progressBar.style.width = progressBar.getAttribute('data-done') + '%'
            progressBar.style.opacity = 1;
        });
        // progressDone1.style.width = progressDone1.getAttribute('data-done') + '%';
        // progressDone1.style.opacity = 1;
    
        // progressDone2.style.width = progressDone2.getAttribute('data-done') + '%';
        // progressDone2.style.opacity = 1;
    
        // progressDone3.style.width = progressDone3.getAttribute('data-done') + '%';
        // progressDone3.style.opacity = 1;
    
        // progressDone4.style.width = progressDone4.getAttribute('data-done') + '%';
        // progressDone4.style.opacity = 1;
    
        // progressDone5.style.width = progressDone5.getAttribute('data-done') + '%';
        // progressDone5.style.opacity = 1;
    
        // progressDone6.style.width = progressDone6.getAttribute('data-done') + '%';
        // progressDone6.style.opacity = 1;
    
        // progressDone7.style.width = progressDone7.getAttribute('data-done') + '%';
        // progressDone7.style.opacity = 1;
    
        // progressDone8.style.width = progressDone8.getAttribute('data-done') + '%';
        // progressDone8.style.opacity = 1;
    
        // progressDone9.style.width = progressDone9.getAttribute('data-done') + '%';
        // progressDone9.style.opacity = 1;
    
        // progressDone10.style.width = progressDone10.getAttribute('data-done') + '%';
        // progressDone10.style.opacity = 1;
        
    }, 100)
    
}

// navbar functions
function w3_open() {
    
    if(window.outerWidth > 576 && window.outerWidth < 992){
        document.getElementById("mySidebar").style.width = "50%";
        document.getElementById("mySidebar").style.display = "block";
    }else{

        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("mySidebar").style.display = "block";
    }
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }








