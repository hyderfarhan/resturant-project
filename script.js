const searchicon = document.querySelector('#searchicon');
const srchicon = document.querySelector('#srchicon');
const search1 = document.querySelector('#searchinput1');


searchicon.addEventListener('click', function(){
    search1.style.display='flex';
    searchicon.style.display='none';

})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');


searchicon2.addEventListener('click', function(){
    search2.style.display='flex';
    searchicon2.style.display='none';

})

const bar= document.querySelector('.fa-bars');
const cross= document.querySelector('#hdcross');
const headerbar= document.querySelector('.headerbar');

bar.addEventListener('click',function(){
    setTimeout(() => {
        cross.style.display='block';
    }, 200);
    headerbar.style.right='0%';
})

cross.addEventListener('click', function () {
cross.style.display='none';
headerbar.style.right='-100%';
    
})