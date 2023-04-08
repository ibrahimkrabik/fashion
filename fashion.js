let photoContainer = document.querySelector('.photo-container .row');
let allSections = document.querySelectorAll('main');
let allLis = document.querySelectorAll('.navbar ul li a');
console.log(allLis);
fetch('/photo.json')
       .then((response) => response.json())
       .then((data) =>
              data.forEach((element) => {
                     let main = document.createElement('div');
                     main.className = 'col-md-4 col-lg-3 main-photo';
                     main.setAttribute('data-gender', element.gender);
                     main.setAttribute('data-price', element.price);
                     let img = document.createElement('img');
                     img.src = element.link;
                     img.className = 'img-fluid';
                     main.appendChild(img);
                     photoContainer.appendChild(main);
              })
       );
function activeMenu() {
       let len = allSections.length;
       while (--len && window.scrollY + 59 < allSections[len].offsetTop) {}
       allLis.forEach((li) => li.classList.remove('active'));
       allLis[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll', activeMenu);



function scrollup() {
       const scrollup = document.getElementById('scroll-up');

       if (this.scrollY >= 200) scrollup.classList.add('show-scroll');
       else scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollup);
