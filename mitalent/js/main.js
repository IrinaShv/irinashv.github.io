var openSearchBtn=document.querySelector(".search__open"),closeSearchBtn=document.querySelector(".search__close"),searchForm=document.querySelector(".search");openSearchBtn.addEventListener("click",function(e){e.preventDefault(),searchForm.classList.add("search_opened")}),closeSearchBtn.addEventListener("click",function(e){e.preventDefault(),searchForm.classList.remove("search_opened")});var menu=document.getElementById("nav"),openMenuBtn=document.querySelector(".nav__btn"),closeMenuBtn=document.querySelector(".nav__btn-close");function toggleFilterActiveCategory(e,t){document.querySelector("."+t).classList.remove(t),e.classList.add(t)}function filterCardList(e,t,n){for(i=0;i<t.length;i+=1)t[i].classList.contains(n)?t[i].classList.remove(e):t[i].classList.add(e)}if(openMenuBtn.addEventListener("click",function(e){e.preventDefault(),menu.classList.add("nav_opened")}),closeMenuBtn.addEventListener("click",function(e){e.preventDefault(),menu.classList.remove("nav_opened")}),document.querySelector(".filter")){var filter=document.querySelector(".filter");filter.style.display="flex",filter.addEventListener("click",function(e){toggleFilterActiveCategory(e.target,"filter__item_active");var t=e.target.dataset.filter;filterCardList("filter-hide",document.querySelectorAll(".clients__card"),t)})}var decorSwiper=new Swiper(".main-slider-container",{loop:!0,speed:500,effect:"fade",fadeEffect:{crossFade:!0},autoplay:{delay:7e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination-decor",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">0'+(e+1)+"</span>"}}});decorSwiper.on("slideChange",animatePagination);var decorSlider=document.querySelector(".main-slider-container"),paginIndicator=document.querySelector(".slide-indicator");function animatePagination(){var e=document.querySelector(".swiper-pagination-decor>.swiper-pagination-bullet-active"),t=e.clientHeight,i=e.offsetTop;paginIndicator.style.top=t/2+i+"px"}var sliderClientGallery=new Swiper(".client-gallery-container",{loop:!0,slidesPerView:"auto",autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0}}),sliderNewslistCover=new Swiper(".news-page-cover",{autoplay:{delay:7e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),sliderNewslistPreview=new Swiper(".news-card__slider",{loop:!0,pagination:{el:".swiper-pagination-light",clickable:!0}}),sliderNewssingleArticle=new Swiper(".article__gallery",{loop:!0,autoplay:{delay:5e3},pagination:{el:".swiper-pagination-light",clickable:!0}}),sliderNewssingleOtherNews=new Swiper(".news_other-gallery",{loop:!0,autoplay:{delay:7e3},slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}}),sliderClientslistCover=new Swiper(".clients-cover-slider",{direction:"vertical",autoplay:{delay:7e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),sliderClientslistConnections=new Swiper(".post-slider",{effect:"fade",autoplay:{delay:8e3},fadeEffect:{crossFade:!0},navigation:{nextEl:".post-button-next",prevEl:".post-button-prev"}});