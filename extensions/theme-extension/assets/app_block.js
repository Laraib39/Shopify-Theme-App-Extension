
document.addEventListener('DOMContentLoaded', () => {
  const slideshowSection = document.querySelector('.slideshow');

  if (slideshowSection) {
      console.log('Slideshow section detected.');

      // Log all images in the slideshow
      const slideImages = slideshowSection.querySelectorAll('img');

      if (slideImages.length) {
          slideImages.forEach((image, index) => {
              console.log(`Slide ${index + 1} Image URL:`, image.src);
          });
      } else {
          console.log('No images found in the slideshow section.');
      }

      // Log all details about the section
      console.log('Slideshow section HTML:', slideshowSection.innerHTML);
  } else {
      console.log('Slideshow section not found.');
  }
});



