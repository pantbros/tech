
//owl carousel 
$('#latestBlog').owlCarousel({
    loop: true,
    nav: true,
  navText: ["<img src='assets/images/blogs/nav-prev.svg'>","<img src='assets/images/blogs/nav-next.svg'>"],
    margin:20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 3,
        },
        768: {
            items: 2,
        },
        1024:{
            items:3
        }
    }
})