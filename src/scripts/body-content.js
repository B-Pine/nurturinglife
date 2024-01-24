const imgContent = document.querySelectorAll('.js-img-content');

imgContent.forEach(content => {
  // console.log(content);
  content.addEventListener('mouseover', () => {
    content.classList.add('onhover-img-content');
  });

  content.addEventListener('mouseout', () => {
    content.classList.remove('onhover-img-content');
  })
})