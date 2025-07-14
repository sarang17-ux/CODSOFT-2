document.querySelectorAll('.image-slider').forEach(slider => {
    const images = slider.querySelectorAll('img'); 
    let index = 0;


    images[index].classList.add('active');

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 2000);
  });