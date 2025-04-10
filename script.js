//Start zoomImage Section
const zoomImage = document.getElementById('zoomImage');


zoomImage.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = zoomImage.getBoundingClientRect();

    const xRatio = (e.clientX - left) / width;
    const yRatio = (e.clientY - top) / height;


    const scale = 1.4;


    zoomImage.style.transform = `scale(${scale}) translate(-${xRatio * 20}%, -${yRatio * 20}%)`;

});
//End zoomImage Section

zoomImage.addEventListener('mouseleave', () => {
    zoomImage.style.transform = 'scale(1)';
});
// Start before-after-section
const container = document.querySelector('.container');
const slider = document.querySelector('.slider');

container.addEventListener('mousemove', (e) => {
  let position = ((e.clientX - container.offsetLeft) / container.offsetWidth) * 100;

  slider.value = position;
  container.style.setProperty('--position', `${position}%`);
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomImage = document.getElementById('zoomImage');
  const smallImages = document.querySelectorAll('.sm-images img');

  smallImages.forEach(img => {
      img.addEventListener('click', () => {
          let smallSrc = img.src;
          let imageName = smallSrc.split('/').pop();
          let largeSrc = `./zoom-image/${imageName.replace('-100x100', '')}`;

          zoomImage.style.transition = 'transform 0.15s ease-in-out, opacity 0.15s ease-in-out';
          zoomImage.style.transform = 'translateX(100%)';
          zoomImage.style.opacity = '0';

          setTimeout(() => {
              zoomImage.src = largeSrc;


              zoomImage.style.transform = 'translateX(0)';
              zoomImage.style.opacity = '1';
          }, 150);

          document.querySelector('.sm-images .active')?.classList.remove('active');
          img.classList.add('active');
      });
  });
});
// End before-after-section
// Start 3d model
document.addEventListener("DOMContentLoaded", () => {
    const enlargeBtn = document.getElementById("enlargeBtn");
    const closeFullscreen = document.getElementById("closeFullscreen");
    const fullscreenContainer = document.getElementById("fullscreenContainer");

    // Open fullscreen
    enlargeBtn.addEventListener("click", () => {
        fullscreenContainer.style.display = "flex";
    });

    // Close fullscreen
    closeFullscreen.addEventListener("click", () => {
        fullscreenContainer.style.display = "none";
    });
});
// End 3d Model
