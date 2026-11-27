// Header turns solid on scroll; mobile menu; demo forms.
(function(){
  var h=document.querySelector('.hdr');
  function s(){ if(h) h.classList.toggle('scrolled', window.scrollY>40); }
  window.addEventListener('scroll',s); s();
  var m=document.querySelector('.mmenu');
  document.querySelectorAll('[data-open]').forEach(function(b){b.addEventListener('click',function(){m.classList.add('open');document.body.style.overflow='hidden';});});
  document.querySelectorAll('[data-close]').forEach(function(b){b.addEventListener('click',function(){m.classList.remove('open');document.body.style.overflow='';});});
  document.querySelectorAll('form[data-demo]').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();var n=f.querySelector('.sent');if(n)n.style.display='block';});
  });
})();
