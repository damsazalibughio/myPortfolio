let navbar = document.getElementById("myNavbar");

function jsInitials() {
    let li = document.querySelector('.sidebar-nav ul li')
    li.children[0].style.color = 'white';
    // document.getElementById('portfolio-modal').style.display = 'none';

}
// navbar humberger menu opening functions
function openNavbar() {

    if (window.outerWidth > 576 && window.outerWidth < 992) {
        navbar.style.width = "50%";
        navbar.style.transform = "translateX(0)";
        navbar.style.zIndex = "3";
        navbar.style.transition = ' transform .5s linear'


    } else if (window.outerWidth < 576) {
        navbar.style.width = "100%";
        navbar.style.transform = "translateX(0)";
        navbar.style.transition = ' transform .5s linear'

        navbar.style.zIndex = "3";


    }
}
// navbar closing functions

function closeNavbar() {
    navbar.style.transition = ' transform .5s linear'
    navbar.style.transform = "translateX(-100%)";

}

//   on scroll scrollSpay
let li = document.querySelectorAll('.sidebar-nav ul li')
let section = document.querySelectorAll('section');

window.onscroll = () => {
    section.forEach(sections => {

        let top = window.scrollY;
        let offset = sections.offsetTop;
        let height = sections.offsetHeight;
        let id = sections.getAttribute('id')

        if (top >= offset && top < offset + height) {
            li.forEach(navLink => {

                navLink.classList.remove('active');
                navLink.children[0].style.color = 'darkslategray'
                if (navLink.getAttribute('data') == id) {
                    navLink.classList.add('active');
                    navLink.children[0].style.color = 'white';
                    if (top >= 880 && top <= 1470) {
                        getProgressBar()
                    }
                }
            })
        }
    })
}

// sideBar

li.forEach(element => {
    // console.log(element);
    element.addEventListener('click', function() {
        li.forEach(link => {
            link.classList.remove('active');
            link.children[0].style.color = 'darkslategray';
        })
        this.classList.add('active')
        this.children[0].style.color = 'white';

        //    selecting different sections on event
        // let section = document.querySelectorAll('.sub-main section')
        // section.forEach(section =>{
        //     section.style.zIndex='0'
        //         if(element.getAttribute('data') == section.id ){
        //             section.style.zIndex='1'
        //             // mainLi.style.transition='All 2s ease'
        //         }
        //     }) 
    })
    element.addEventListener('mouseover', () => {
        li.forEach(link => {
            link.classList.remove('hover-box')
        })
        element.classList.add('hover-box')

    })

});

// navbar
let navbarList = document.querySelectorAll('.navbar-nav ul li')
navbarList.forEach(element => {
    // console.log(element);
    element.addEventListener('click', function() {
        navbarList.forEach(link => link.classList.remove('active'));
        this.classList.add('active')
        document.getElementById("myNavbar").style.display = "none";
        //    console.log(element);

        //    selecting different sections on event
        // let section = document.querySelectorAll('.sub-main section')
        // section.forEach(section =>{
        //     section.style.zIndex='0'
        //         if(element.getAttribute('data') == section.id ){
        //             section.style.zIndex='1'
        //             // mainLi.style.transition='All 2s ease'
        //         }

        //     }) 
    })
});

// event Hire me arial to contact page
// let hireMeBtn = document.querySelector('.btns > button')
// console.log(hireMeBtn.getAttribute('data'));
// hireMeBtn.addEventListener('click', () =>{
//         // selecting different sections on event
//      let section = document.querySelectorAll('.sub-main section')
//      section.forEach(section =>{
//          section.style.zIndex='0'
//              if(hireMeBtn.getAttribute('data') == section.id ){
//                  section.style.zIndex='1'
//                  // mainLi.style.transition='All 2s ease'
//              }

//          }) 
//     // setting sidebar link active
//     let sidebarList = document.querySelectorAll('.sidebar-nav ul li')
//     sidebarList.forEach((list) =>{
//         list.classList.remove('active')
//         if(list.getAttribute('data') == hireMeBtn.getAttribute('data')){
//             list.classList.add('active')
//       }
//     })

//      // setting navbar link active
//      let navbarList = document.querySelectorAll('.navbar-nav ul li')
//      navbarList.forEach((list) =>{
//          list.classList.remove('active')
//          if(list.getAttribute('data') == hireMeBtn.getAttribute('data')){
//              list.classList.add('active')
//        }
//      })


// })


// progress bar transitions
let progressDone = document.querySelectorAll('.progress-done')

function getProgressBar() {

    setTimeout(() => {
        progressDone.forEach((progressBar) => {
            progressBar.style.width = progressBar.getAttribute('data-done') + '%'
            progressBar.style.opacity = 1;
        });

    }, 100)

}



// portfolio filter

let tabList = document.querySelectorAll('.portfolio-tab ul li')
tabList.forEach(list => {
    list.addEventListener('click', () => {
        let ImgContainer = document.querySelectorAll('.portfolio-body .img-container');
        ImgContainer.forEach(ImgContainer => {
                ImgContainer.style.display = 'none';

                if (list.id == ImgContainer.getAttribute('portfolio-filter')) {
                    ImgContainer.style.display = 'block';

                } else if (list.id == 'show-all') {
                    ImgContainer.style.display = 'block';
                }
            })
            // console.log(list.getAttribute('portfolio-filter'));
    })
})

// portfolio modal

let showMorePortfolioButton = document.querySelector('#portfolio-btn')
showMorePortfolioButton.addEventListener('click', () => {
    document.getElementById('portfolio-modal').style.width = '100%';
    document.getElementById("portfolio-modal").style.zIndex = "4";
    document.querySelector('html').style.overflow = 'hidden';
    document.getElementById('portfolio-modal').style.transform = 'translateY(0)';
    document.getElementById('portfolio-modal').style.transition = 'transform .5s ease'

})
let closePortfolioBtn = document.querySelector('.close-portfolio-btn')
closePortfolioBtn.addEventListener('click', () => {
    document.getElementById('portfolio-modal').style.transform = 'translateY(100%)';
    document.getElementById('portfolio-modal').style.transition = 'transform .5s ease'
    document.querySelector('html').style.overflow = 'visible';
})

// coding history modal
let showMoreCodingButton = document.querySelector('#coding-history-btn')
showMoreCodingButton.addEventListener('click', () => {
    document.getElementById('coding-history-model').style.width = '100%';
    document.getElementById("coding-history-model").style.zIndex = "4";
    document.querySelector('html').style.overflow = 'hidden';
    document.getElementById('coding-history-model').style.transform = 'translateY(0)';
    document.getElementById('coding-history-model').style.transition = 'transform .5s ease'

})
let closeCodingBtn = document.querySelector('.close-coding-btn')
closeCodingBtn.addEventListener('click', () => {
    document.getElementById('coding-history-model').style.transform = 'translateY(100%)';
    document.getElementById('coding-history-model').style.transition = 'transform .5s ease'
    document.querySelector('html').style.overflow = 'visible'
})

// on scroll function

// let section = document.querySelectorAll('section')
// section.forEach(sections =>{
//     sections.addEventListener('onscroll', ()=>{
//     console.log(sections.getAttribute('id')=='about');

//     })
// })



// intersection observer