var openSearchBtn=document.querySelector(".search__open"),closeSearchBtn=document.querySelector(".search__close"),searchForm=document.querySelector(".search");openSearchBtn.addEventListener("click",function(a){a.preventDefault(),searchForm.classList.add("search_opened")}),closeSearchBtn.addEventListener("click",function(a){a.preventDefault(),searchForm.classList.remove("search_opened")});var menu=document.getElementById("nav"),openMenuBtn=document.querySelector(".nav__btn"),closeMenuBtn=document.querySelector(".nav__btn-close");openMenuBtn.addEventListener("click",function(a){a.preventDefault(),menu.classList.add("nav_opened")}),closeMenuBtn.addEventListener("click",function(a){a.preventDefault(),menu.classList.remove("nav_opened")});function toggleFilterActiveCategory(a,b){document.querySelector("."+b)&&document.querySelector("."+b).classList.remove(b),a.classList.add(b)}function filterCardList(a,b,c){for(i=0;i<b.length;i++)b[i].classList.contains(c)?b[i].classList.remove(a):b[i].classList.add(a)}if(document.querySelector(".filter")){var filter=document.querySelector(".filter");filter.style.display="flex",filter.addEventListener("click",function(a){toggleFilterActiveCategory(a.target,"filter__item_active");var b=a.target.dataset.filter,c=document.querySelector(".filtered").children;filterCardList("filter-hide",c,b)})}var decorSwiper=new Swiper(".main-slider-container",{loop:!0,speed:500,effect:"fade",fadeEffect:{crossFade:!0},autoplay:{delay:7e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination-decor",clickable:!0,renderBullet:function(a,b){return"<span class=\""+b+"\">0"+(a+1)+"</span>"}}});decorSwiper.on("slideChange",animatePagination);function animatePagination(){var a=document.querySelector(".slide-indicator"),b=document.querySelector(".swiper-pagination-decor>.swiper-pagination-bullet-active"),c=b.clientHeight,d=b.offsetTop;a.style.top=c/2+d+"px"}var sliderClientGallery=new Swiper(".client-gallery-container",{loop:!0,slidesPerView:"auto",autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0}}),sliderNewslistCover=new Swiper(".news-page-cover",{autoplay:{delay:7e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),sliderNewslistPreview=new Swiper(".news-card__slider",{loop:!0,pagination:{el:".swiper-pagination-light",clickable:!0}}),sliderNewssingleArticle=new Swiper(".article__gallery",{loop:!0,autoplay:{delay:5e3},pagination:{el:".swiper-pagination-light",clickable:!0}}),sliderNewssingleOtherNews=new Swiper(".news_other-gallery",{loop:!0,autoplay:{delay:7e3},slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}}),sliderClientslistCover=new Swiper(".clients-cover-slider",{direction:"vertical",autoplay:{delay:7e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),sliderClientslistConnections=new Swiper(".post-slider",{effect:"fade",autoplay:{delay:8e3},fadeEffect:{crossFade:!0},navigation:{nextEl:".post-button-next",prevEl:".post-button-prev"}});function animateMainPagePagination(){var a=document.querySelector(".slide-indicator"),b=document.querySelector(".pagination__item--current"),c=b.clientHeight,d=b.offsetTop;a.style.top=c/2+d+"px"}if(document.querySelector(".main-page")){const a=[{slicesTotal:2,slicesColor:"#fff",orientation:"horizontal",slicesOrigin:{show:"left",hide:"left"}},{slicesTotal:2,slicesColor:"#fff",orientation:"horizontal",slicesOrigin:{show:"left",hide:"left"}},{slicesTotal:2,slicesColor:"#fff",orientation:"horizontal",slicesOrigin:{show:"left",hide:"left"}}],b={show:{slices:{duration:1e3,easing:"easeInOutCirc",delay:(a,b)=>100*b}},hide:{slices:{duration:1e3,easing:"easeInOutCirc",delay:(a,b)=>100*b}}};const c=new class{constructor(b){this.DOM={el:b},this.DOM.slides=Array.from(this.DOM.el.querySelectorAll(".slide")),this.slidesTotal=this.DOM.slides.length,this.current=0,this.uncoverItems=[],this.DOM.slides.forEach((b,c)=>this.uncoverItems.push(new Uncover(b.querySelector(".slide__img"),a[c]))),this.init()}init(){this.isAnimating=!0,this.DOM.slides[this.current].classList.add("slide--current"),this.uncoverItems[this.current].show(!0,b.show).then(()=>this.isAnimating=!1)}navigate(a){this.isAnimating||this.current===a||0>a||a>this.slidesTotal-1||(this.isAnimating=!0,this.uncoverItems[this.current].hide(!0,b.hide).then(()=>{this.DOM.slides[this.current].classList.remove("slide--current"),this.current=a;const c=this.uncoverItems[this.current];c.hide(),this.DOM.slides[this.current].classList.add("slide--current"),c.show(!0,b.show).then(()=>this.isAnimating=!1)}))}}(document.querySelector(".slides")),d=document.querySelector(".pagination"),e=Array.from(d.querySelectorAll(".pagination__item"));e.forEach((a,b)=>{0===b&&a.classList.add("pagination__item--current"),a.addEventListener("click",()=>{c.isAnimating||(c.navigate(b),d.querySelector(".pagination__item--current").classList.remove("pagination__item--current"),a.classList.add("pagination__item--current"),animateMainPagePagination())})}),document.addEventListener("keydown",a=>{if(c.isAnimating)return;const b=a.keyCode||a.which;let f;if(37===b)f=0<c.current?c.current-1:c.slidesTotal-1,c.navigate(f);else if(39===b)f=c.current<c.slidesTotal-1?c.current+1:0,c.navigate(f);else return;d.querySelector(".pagination__item--current").classList.remove("pagination__item--current"),e[f].classList.add("pagination__item--current"),animateMainPagePagination()})}