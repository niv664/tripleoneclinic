// Before/After slider functionality
const beforeAfterSlider = document.querySelector('.before-after');
if (beforeAfterSlider) {
 const beforeImg = beforeAfterSlider.querySelector('.before img');
 const afterImg = beforeAfterSlider.querySelector('.after img');
 let isDragging = false;
 let startX = 0;
 let scrollLeft = 0;

 beforeAfterSlider.addEventListener('mousedown', (e) => {
 isDragging = true;
 startX = e.pageX - beforeAfterSlider.offsetLeft;
 scrollLeft = beforeAfterSlider.scrollLeft;
 });

 document.addEventListener('mouseup', () => {
 isDragging = false;
 });

 document.addEventListener('mousemove', (e) => {
 if (!isDragging) return;
 const x = e.pageX - beforeAfterSlider.offsetLeft;
 const walk = (x - startX) * 2; //scroll speed
 beforeAfterSlider.scrollLeft = scrollLeft - walk;
 });
}