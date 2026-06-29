document.addEventListener('DOMContentLoaded',function(){
 const menuBtn=document.getElementById('menuBtn');
 const nav=document.getElementById('navMenu');
 if(menuBtn&&nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('show'));}
 const popup=document.getElementById('callPopup');
 const close=document.getElementById('closePopup');
 if(popup){setTimeout(()=>popup.classList.add('show'),700);}
 if(close&&popup){close.addEventListener('click',()=>popup.classList.remove('show'));}
 if(popup){popup.addEventListener('click',e=>{if(e.target===popup)popup.classList.remove('show');});}
});
