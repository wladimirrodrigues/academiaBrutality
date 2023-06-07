let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

  function nexImage() {

    images[currentImageIndex].classList.remove('selected')

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add('selected')
  }

    function start() {
      setInterval(() => {
       nexImage()
      }, time)
    }

    window.addEventListener('load', start)