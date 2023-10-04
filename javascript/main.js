// event listener added for menu @ media 1024px
const menu = document.querySelector('.menu');
const mediaNav = document.querySelector('.media-nav');
const menuIcon = document.querySelector('.menu-icon');
const login = document.querySelector('.login');
const subscription = document.querySelector('.subscription');
const headTitles = document.querySelector('.titles');
const titleIcon = document.querySelector('.title-icon');
const titleIcon1 = document.querySelector('.title-icon1');
const titleIcon2 = document.querySelector('.title-icon2');
const subTopic_product = document.querySelector('.product');
const titleProduct = document.querySelector('#title1');
const titleCreator = document.querySelector('#title2');
const titleResource = document.querySelector('#title3');
const firstList_product = document.querySelector('#first_list__product');
const productTopics = document.querySelector('#product_topics');
const creatorTopics = document.querySelector('#creator_topics');
const resourceTopics = document.querySelector('#resource_topics');

// ! @ display > 1024
function displayList(element) {
    if (element == 'product') {
        productTopics.style.opacity = productTopics.style.opacity == '0' ? '1' : '0';
    }
    else if (element == 'creator') {
        creatorTopics.style.opacity = creatorTopics.style.opacity == '0' ? '1' : '0';
    }
    else if (element == 'resource') {
        resourceTopics.style.opacity = resourceTopics.style.opacity == '0' ? '1' : '0';
    }
}
function mouseLeave(e) {
    e.style.opacity = '0';
}

// ! menu icon toggle function
menu.addEventListener('click', () => {
    mediaNav.style.display = mediaNav.style.display === 'none' ? 'block' : 'none';
    menuIcon.className = menuIcon.className === 'fa-solid fa-bars' ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    if (menuIcon.className === 'fa-solid fa-xmark') {
        login.style.opacity = '0';
        subscription.style.opacity = '0';
    }
    else {
        login.style.opacity = '1';
        subscription.style.opacity = '1';
    }
});
function sub_topics(element) {
    if (element == 'product'){
        titleIcon.className = titleIcon.className === 'fa-solid fa-angle-down' ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
        let x = document.getElementById('invisible');
        x.style.display = x.style.display === 'none' ? 'block' : 'none';
        titleProduct.style.borderBottom = titleProduct.style.borderBottom == '1px solid gainsboro' ? 'none' : '1px solid gainsboro';
        x.style.borderBottom = '1px solid gainsboro';
    }
    else if (element == 'creator'){
        titleIcon1.className = titleIcon1.className === 'fa-solid fa-angle-down' ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
        let x1 = document.getElementById('invisible1');
        x1.style.display = x1.style.display === 'none' ? 'block' : 'none';
        titleCreator.style.borderBottom = titleCreator.style.borderBottom == '1px solid gainsboro' ? 'none' : '1px solid gainsboro';
        x1.style.borderBottom = '1px solid gainsboro';
    }
    else if(element == 'resource'){
        titleIcon2.className = titleIcon2.className === 'fa-solid fa-angle-down' ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
        let x2 = document.getElementById('invisible2');
        x2.style.display = x2.style.display === 'none' ? 'block' : 'none';
        titleResource.style.borderBottom = titleResource.style.borderBottom == '1px solid gainsboro' ? 'none' : '1px solid gainsboro';
        x2.style.borderBottom = '1px solid gainsboro';
    }
}

// !banner remove
const bannerContainer= document.querySelector('.banner_container');
function bannerRemove(){
    bannerContainer.style.display='none';
}

// ! who uses patreon
let createTitle= document.querySelectorAll('.creating_titles');

for(let i=0; i< createTitle.length; i++){
    createTitle[i].onclick= function(){
        let j=0;
        while(j<createTitle.length){
            createTitle[j++].className='creating_titles';           
        }
        createTitle[i].className= 'creating_titles active';
    }
}

let videoList= document.querySelector('.video_creators__list');
let podList= document.querySelector('.podcasters__list');
let visList= document.querySelector('.visual_artists__list');
let musList= document.querySelector('.musicians__list');
let otherList= document.querySelector('.others__list');


// function displayList(list){
//     if(list=='video'){
//         document.getElementById('video_creators__list').style.display='block';
//         podList.style.display= podList.style.display=='none'? 'none':'block';
//         visList.style.display=  visList.style.display=='none'? 'none':'block';
//         musList.style.display= musList.style.display=='none'? 'none':'block';
//         otherList.style.display= otherList.style.display=='none'? 'none':'block';
//     }
//     else if(list=='pod'){
//         document.getElementById('video_creators__list').style.display='none';
//         podList.style.display= podList.style.display=='none'? 'block':'none';
//     }
// }
function displayListVideo(){
    videoList.style.display='block';
    podList.style.display='none';
    visList.style.display='none';
    musList.style.display='none';
    otherList.style.display='none';
}
function displayListPod(){
    videoList.style.display='none';
    podList.style.display='block';
    visList.style.display='none';
    musList.style.display='none';
    otherList.style.display='none';
}
function displayListVis(){
    videoList.style.display='none';
    podList.style.display='none';
    visList.style.display='block';
    musList.style.display='none';
    otherList.style.display='none';
}
function displayListMusic(){
    videoList.style.display='none';
    podList.style.display='none';
    visList.style.display='none';
    musList.style.display='block';
    otherList.style.display='none';
}
function displayListOther(){
    videoList.style.display='none';
    podList.style.display='none';
    visList.style.display='none';
    musList.style.display='none';
    otherList.style.display='block';
}
