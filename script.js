const positionContext = document.querySelector('.position-context');

const expandButton = document.querySelectorAll('.expand-button');
const colorsContainer = document.querySelectorAll('.colors-container');

const sliderForegroundRgbRed = document.querySelector('.slider__foreground__rgb--red');
const colorValueForegroundRgbRed = document.querySelector('.color-value__foreground__rgb--red');
const sliderForegroundRgbGreen = document.querySelector('.slider__foreground__rgb--green');
const colorValueForegroundRgbGreen = document.querySelector('.color-value__foreground__rgb--green');
const sliderForegroundRgbBlue = document.querySelector('.slider__foreground__rgb--blue');
const colorValueForegroundRgbBlue = document.querySelector('.color-value__foreground__rgb--blue');

const sliderBackgroundRgbRed = document.querySelector('.slider__background__rgb--red');
const colorValueBackgroundRgbRed = document.querySelector('.color-value__background__rgb--red');
const sliderBackgroundRgbGreen = document.querySelector('.slider__background__rgb--green');
const colorValueBackgroundRgbGreen = document.querySelector('.color-value__background__rgb--green');
const sliderBackgroundRgbBlue = document.querySelector('.slider__background__rgb--blue');
const colorValueBackgroundRgbBlue = document.querySelector('.color-value__background__rgb--blue');

const sliderForegroundHue = document.querySelector('.slider__foreground--hue');
const colorValueForegroundHue = document.querySelector('.color-value__foreground--hue');
const sliderForegroundSaturation = document.querySelector('.slider__foreground--saturation');
const colorValueForegroundSaturation = document.querySelector('.color-value__foreground--saturation');
const sliderForegroundLuminance = document.querySelector('.slider__foreground--luminance');
const colorValueForegroundLuminance = document.querySelector('.color-value__foreground--luminance');

const sliderBackgroundHue = document.querySelector('.slider__background--hue');
const colorValueBackgroundHue = document.querySelector('.color-value__background--hue');
const sliderBackgroundSaturation = document.querySelector('.slider__background--saturation');
const colorValueBackgroundSaturation = document.querySelector('.color-value__background--saturation');
const sliderBackgroundLuminance = document.querySelector('.slider__background--luminance');
const colorValueBackgroundLuminance = document.querySelector('.color-value__background--luminance');

const sliderForegroundHexRed = document.querySelector('.slider__foreground__hex--red');
const colorValueForegroundHexRed = document.querySelector('.color-value__foreground__hex--red');
const sliderForegroundHexGreen = document.querySelector('.slider__foreground__hex--green');
const colorValueForegroundHexGreen = document.querySelector('.color-value__foreground__hex--green');
const sliderForegroundHexBlue = document.querySelector('.slider__foreground__hex--blue');
const colorValueForegroundHexBlue = document.querySelector('.color-value__foreground__hex--blue');

const sliderBackgroundHexRed = document.querySelector('.slider__background__hex--red');
const colorValueBackgroundHexRed = document.querySelector('.color-value__background__hex--red');
const sliderBackgroundHexGreen = document.querySelector('.slider__background__hex--green');
const colorValueBackgroundHexGreen = document.querySelector('.color-value__background__hex--green');
const sliderBackgroundHexBlue = document.querySelector('.slider__background__hex--blue');
const colorValueBackgroundHexBlue = document.querySelector('.color-value__background__hex--blue');

const swatchForeground = document.querySelector('.swatch-foreground');
const swatchBackground = document.querySelector('.swatch-background');
const swatchStats = document.querySelector('.swatch-stats');

const controlElsTop = document.querySelector('.control-els--top');

for (let i = 0; i < expandButton.length; i++) {
  expandButton[i].addEventListener('click', () => {
    if (colorsContainer[i].classList.contains('colors-container--closed')) {
      expandButton[i].classList.replace('fa-angle-down', 'fa-angle-up');
      //expandButton[i].innerHTML = '-';
      colorsContainer[i].classList.replace('colors-container--closed', 'colors-container--open');
    } else {
      expandButton[i].classList.replace('fa-angle-up', 'fa-angle-down');
      //expandButton[i].innerHTML = '+';
      colorsContainer[i].classList.replace('colors-container--open', 'colors-container--closed');
    }
  });
}

swatchStats.innerHTML = '<p class="cr-label">Contrast-Ratio</p><p class="cr-value">21.000</p>';

window.addEventListener('load', () => {
  positionContext.style.height = getComputedStyle(swatchForeground).width;
  controlElsTop.style.marginTop = `${parseInt(positionContext.style.height) + 30 + 'px'}`;
});

window.addEventListener('resize', () => {
  positionContext.style.height = getComputedStyle(swatchForeground).width;
  controlElsTop.style.marginTop = `${parseInt(positionContext.style.height) + 30 + 'px'}`;
});

sliderForegroundRgbRed.addEventListener('input', () => {
  swatchForeground.style.color = `rgb(${sliderForegroundRgbRed.value}, ${sliderForegroundRgbGreen.value}, ${sliderForegroundRgbBlue.value}`;
  colorValueForegroundRgbRed.innerHTML = sliderForegroundRgbRed.value;
  sliderForegroundHexRed.value = sliderForegroundRgbRed.value;
  colorValueForegroundHexRed.innerHTML = Number(sliderForegroundRgbRed.value).toString(16).toUpperCase().padStart(2, "0");

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[0]);
  sliderForegroundHue.value = h;
  sliderForegroundSaturation.value = s;
  sliderForegroundLuminance.value = l;
  colorValueForegroundHue.innerHTML = h + '°';
  colorValueForegroundSaturation.innerHTML = s + '%';
  colorValueForegroundLuminance.innerHTML = l + '%';
});

sliderForegroundRgbGreen.addEventListener('input', () => {
  swatchForeground.style.color = `rgb(${sliderForegroundRgbRed.value}, ${sliderForegroundRgbGreen.value}, ${sliderForegroundRgbBlue.value}`;
  colorValueForegroundRgbGreen.innerHTML = sliderForegroundRgbGreen.value;
  sliderForegroundHexGreen.value = sliderForegroundRgbGreen.value;
  colorValueForegroundHexGreen.innerHTML = Number(sliderForegroundRgbGreen.value).toString(16).toUpperCase().padStart(2, "0");

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[0]);
  sliderForegroundHue.value = h;
  sliderForegroundSaturation.value = s;
  sliderForegroundLuminance.value = l;
  colorValueForegroundHue.innerHTML = h + '°';
  colorValueForegroundSaturation.innerHTML = s + '%';
  colorValueForegroundLuminance.innerHTML = l + '%';
});

sliderForegroundRgbBlue.addEventListener('input', () => {
  swatchForeground.style.color = `rgb(${sliderForegroundRgbRed.value}, ${sliderForegroundRgbGreen.value}, ${sliderForegroundRgbBlue.value}`;
  colorValueForegroundRgbBlue.innerHTML = sliderForegroundRgbBlue.value;
  sliderForegroundHexBlue.value = sliderForegroundRgbBlue.value;
  colorValueForegroundHexBlue.innerHTML = Number(sliderForegroundRgbBlue.value).toString(16).toUpperCase().padStart(2, "0");

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[0]);
  sliderForegroundHue.value = h;
  sliderForegroundSaturation.value = s;
  sliderForegroundLuminance.value = l;
  colorValueForegroundHue.innerHTML = h + '°';
  colorValueForegroundSaturation.innerHTML = s + '%';
  colorValueForegroundLuminance.innerHTML = l + '%';
});

sliderBackgroundRgbRed.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `rgb(${sliderBackgroundRgbRed.value}, ${sliderBackgroundRgbGreen.value}, ${sliderBackgroundRgbBlue.value}`;
  colorValueBackgroundRgbRed.innerHTML = sliderBackgroundRgbRed.value;
  sliderBackgroundHexRed.value = sliderBackgroundRgbRed.value;
  colorValueBackgroundHexRed.innerHTML = Number(sliderBackgroundRgbRed.value).toString(16).toUpperCase().padStart(2, "0");

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[1]);
  sliderBackgroundHue.value = h;
  sliderBackgroundSaturation.value = s;
  sliderBackgroundLuminance.value = l;
  colorValueBackgroundHue.innerHTML = h + '°';
  colorValueBackgroundSaturation.innerHTML = s + '%';
  colorValueBackgroundLuminance.innerHTML = l + '%';
});

sliderBackgroundRgbGreen.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `rgb(${sliderBackgroundRgbRed.value}, ${sliderBackgroundRgbGreen.value}, ${sliderBackgroundRgbBlue.value}`;
  colorValueBackgroundRgbGreen.innerHTML = sliderBackgroundRgbGreen.value;
  sliderBackgroundHexGreen.value = sliderBackgroundRgbGreen.value;
  colorValueBackgroundHexGreen.innerHTML = Number(sliderBackgroundRgbGreen.value).toString(16).toUpperCase().padStart(2, "0");

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[1]);
  sliderBackgroundHue.value = h;
  sliderBackgroundSaturation.value = s;
  sliderBackgroundLuminance.value = l;
  colorValueBackgroundHue.innerHTML = h + '°';
  colorValueBackgroundSaturation.innerHTML = s + '%';
  colorValueBackgroundLuminance.innerHTML = l + '%';
});

sliderBackgroundRgbBlue.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `rgb(${sliderBackgroundRgbRed.value}, ${sliderBackgroundRgbGreen.value}, ${sliderBackgroundRgbBlue.value}`;
  colorValueBackgroundRgbBlue.innerHTML = sliderBackgroundRgbBlue.value;
  sliderBackgroundHexBlue.value = sliderBackgroundRgbBlue.value;
  colorValueBackgroundHexBlue.innerHTML = Number(sliderBackgroundRgbBlue.value).toString(16).toUpperCase().padStart(2, "0");

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[1]);
  sliderBackgroundHue.value = h;
  sliderBackgroundSaturation.value = s;
  sliderBackgroundLuminance.value = l;
  colorValueBackgroundHue.innerHTML = h + '°';
  colorValueBackgroundSaturation.innerHTML = s + '%';
  colorValueBackgroundLuminance.innerHTML = l + '%';
});

sliderForegroundHue.addEventListener('input', () => {
  swatchForeground.style.color = `hsl(${sliderForegroundHue.value}, ${sliderForegroundSaturation.value}%, ${sliderForegroundLuminance.value}%)`;
  colorValueForegroundHue.innerHTML = sliderForegroundHue.value + '°';

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderForegroundHue.value, sliderForegroundSaturation.value, sliderForegroundLuminance.value);
  sliderForegroundRgbRed.value = r;
  sliderForegroundRgbGreen.value = g;
  sliderForegroundRgbBlue.value = b;
  colorValueForegroundRgbRed.innerHTML = r;
  colorValueForegroundRgbGreen.innerHTML = g;
  colorValueForegroundRgbBlue.innerHTML = b;

  sliderForegroundHexRed.value = r;
  sliderForegroundHexGreen.value = g;
  sliderForegroundHexBlue.value = b;
  colorValueForegroundHexRed.innerHTML = r.toString(16).toUpperCase().padStart(2, "0");
  colorValueForegroundHexGreen.innerHTML = g.toString(16).toUpperCase().padStart(2, "0");
  colorValueForegroundHexBlue.innerHTML = b.toString(16).toUpperCase().padStart(2, "0");
});

sliderForegroundSaturation.addEventListener('input', () => {
  swatchForeground.style.color = `hsl(${sliderForegroundHue.value}, ${sliderForegroundSaturation.value}%, ${sliderForegroundLuminance.value}%)`;
  colorValueForegroundSaturation.innerHTML = sliderForegroundSaturation.value + '°';

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderForegroundHue.value, sliderForegroundSaturation.value, sliderForegroundLuminance.value);
  sliderForegroundRgbRed.value = r;
  sliderForegroundRgbGreen.value = g;
  sliderForegroundRgbBlue.value = b;
  colorValueForegroundRgbRed.innerHTML = r;
  colorValueForegroundRgbGreen.innerHTML = g;
  colorValueForegroundRgbBlue.innerHTML = b;

  sliderForegroundHexRed.value = r;
  sliderForegroundHexGreen.value = g;
  sliderForegroundHexBlue.value = b;
  colorValueForegroundHexRed.innerHTML = r.toString(16).toUpperCase().padStart(2, "0");
  colorValueForegroundHexGreen.innerHTML = g.toString(16).toUpperCase().padStart(2, "0");
  colorValueForegroundHexBlue.innerHTML = b.toString(16).toUpperCase().padStart(2, "0");
});

sliderForegroundLuminance.addEventListener('input', () => {
  swatchForeground.style.color = `hsl(${sliderForegroundHue.value}, ${sliderForegroundSaturation.value}%, ${sliderForegroundLuminance.value}%)`;
  colorValueForegroundLuminance.innerHTML = sliderForegroundLuminance.value + '°';

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderForegroundHue.value, sliderForegroundSaturation.value, sliderForegroundLuminance.value);
  sliderForegroundRgbRed.value = r;
  sliderForegroundRgbGreen.value = g;
  sliderForegroundRgbBlue.value = b;
  colorValueForegroundRgbRed.innerHTML = r;
  colorValueForegroundRgbGreen.innerHTML = g;
  colorValueForegroundRgbBlue.innerHTML = b;

  sliderForegroundHexRed.value = r;
  sliderForegroundHexGreen.value = g;
  sliderForegroundHexBlue.value = b;
  colorValueForegroundHexRed.innerHTML = r.toString(16).toUpperCase().padStart(2, "0");
  colorValueForegroundHexGreen.innerHTML = g.toString(16).toUpperCase().padStart(2, "0");
  colorValueForegroundHexBlue.innerHTML = b.toString(16).toUpperCase().padStart(2, "0");  
});

sliderBackgroundHue.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `hsl(${sliderBackgroundHue.value}, ${sliderBackgroundSaturation.value}%, ${sliderBackgroundLuminance.value}%)`;
  colorValueBackgroundHue.innerHTML = sliderBackgroundHue.value + '°';

  

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderBackgroundHue.value, sliderBackgroundSaturation.value, sliderBackgroundLuminance.value);
  sliderBackgroundRgbRed.value = r;
  sliderBackgroundRgbGreen.value = g;
  sliderBackgroundRgbBlue.value = b;
  colorValueBackgroundRgbRed.innerHTML = r;
  colorValueBackgroundRgbGreen.innerHTML = g;
  colorValueBackgroundRgbBlue.innerHTML = b;

  sliderBackgroundHexRed.value = r;
  sliderBackgroundHexGreen.value = g;
  sliderBackgroundHexBlue.value = b;
  colorValueBackgroundHexRed.innerHTML = r.toString(16).toUpperCase().padStart(2, "0");
  colorValueBackgroundHexGreen.innerHTML = g.toString(16).toUpperCase().padStart(2, "0");
  colorValueBackgroundHexBlue.innerHTML = b.toString(16).toUpperCase().padStart(2, "0");  
});

sliderBackgroundSaturation.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `hsl(${sliderBackgroundHue.value}, ${sliderBackgroundSaturation.value}%, ${sliderBackgroundLuminance.value}%)`;
  colorValueBackgroundSaturation.innerHTML = sliderBackgroundSaturation.value + '%';

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderBackgroundHue.value, sliderBackgroundSaturation.value, sliderBackgroundLuminance.value);

  sliderBackgroundRgbRed.value = r;
  sliderBackgroundRgbGreen.value = g;
  sliderBackgroundRgbBlue.value = b;
  colorValueBackgroundRgbRed.innerHTML = r;
  colorValueBackgroundRgbGreen.innerHTML = g;
  colorValueBackgroundRgbBlue.innerHTML = b;

  sliderBackgroundHexRed.value = r;
  sliderBackgroundHexGreen.value = g;
  sliderBackgroundHexBlue.value = b;
  colorValueBackgroundHexRed.innerHTML = r;
  colorValueBackgroundHexGreen.innerHTML = g;
  colorValueBackgroundHexBlue.innerHTML = b;
});

sliderBackgroundLuminance.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `hsl(${sliderBackgroundHue.value}, ${sliderBackgroundSaturation.value}%, ${sliderBackgroundLuminance.value}%)`;
  colorValueBackgroundLuminance.innerHTML = sliderBackgroundLuminance.value + '%';

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderBackgroundHue.value, sliderBackgroundSaturation.value, sliderBackgroundLuminance.value);

  sliderBackgroundRgbRed.value = r;
  sliderBackgroundRgbGreen.value = g;
  sliderBackgroundRgbBlue.value = b;
  colorValueBackgroundRgbRed.innerHTML = r;
  colorValueBackgroundRgbGreen.innerHTML = g;
  colorValueBackgroundRgbBlue.innerHTML = b;

  sliderBackgroundHexRed.value = r;
  sliderBackgroundHexGreen.value = g;
  sliderBackgroundHexBlue.value = b;
  colorValueBackgroundHexRed.innerHTML = r;
  colorValueBackgroundHexGreen.innerHTML = g;
  colorValueBackgroundHexBlue.innerHTML = b;
});

sliderForegroundHexRed.addEventListener('input', () => {
  swatchForeground.style.color = `rgb(${sliderForegroundHexRed.value}, ${sliderForegroundHexGreen.value}, ${sliderForegroundHexBlue.value}`;
  colorValueForegroundHexRed.innerHTML = Number(sliderForegroundHexRed.value).toString(16).toUpperCase().padStart(2, "0");
  sliderForegroundRgbRed.value = sliderForegroundHexRed.value;
  colorValueForegroundRgbRed.innerHTML = sliderForegroundHexRed.value;

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[0]);
  sliderForegroundHue.value = h;
  sliderForegroundSaturation.value = s;
  sliderForegroundLuminance.value = l;
  colorValueForegroundHue.innerHTML = h + '°';
  colorValueForegroundSaturation.innerHTML = s + '%';
  colorValueForegroundLuminance.innerHTML = l + '%';
});

sliderForegroundHexGreen.addEventListener('input', () => {
  swatchForeground.style.color = `rgb(${sliderForegroundHexRed.value}, ${sliderForegroundHexGreen.value}, ${sliderForegroundHexBlue.value}`;
  colorValueForegroundHexGreen.innerHTML = Number(sliderForegroundHexGreen.value).toString(16).toUpperCase().padStart(2, "0");
  sliderForegroundRgbGreen.value = sliderForegroundHexGreen.value;
  colorValueForegroundRgbGreen.innerHTML = sliderForegroundHexGreen.value;

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[0]);
  sliderForegroundHue.value = h;
  sliderForegroundSaturation.value = s;
  sliderForegroundLuminance.value = l;
  colorValueForegroundHue.innerHTML = h + '°';
  colorValueForegroundSaturation.innerHTML = s + '%';
  colorValueForegroundLuminance.innerHTML = l + '%';
});

sliderForegroundHexBlue.addEventListener('input', () => {
  swatchForeground.style.color = `rgb(${sliderForegroundHexRed.value}, ${sliderForegroundHexGreen.value}, ${sliderForegroundHexBlue.value}`;
  colorValueForegroundHexBlue.innerHTML = Number(sliderForegroundHexBlue.value).toString(16).toUpperCase().padStart(2, "0");
  sliderForegroundRgbBlue.value = sliderForegroundHexBlue.value;
  colorValueForegroundRgbBlue.innerHTML = sliderForegroundHexBlue.value;

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[0]);
  sliderForegroundHue.value = h;
  sliderForegroundSaturation.value = s;
  sliderForegroundLuminance.value = l;
  colorValueForegroundHue.innerHTML = h + '°';
  colorValueForegroundSaturation.innerHTML = s + '%';
  colorValueForegroundLuminance.innerHTML = l + '%';
});

sliderBackgroundHexRed.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `rgb(${sliderBackgroundHexRed.value}, ${sliderBackgroundHexGreen.value}, ${sliderBackgroundHexBlue.value}`;
  colorValueBackgroundHexRed.innerHTML = Number(sliderBackgroundHexRed.value).toString(16).toUpperCase().padStart(2, "0");
  sliderBackgroundRgbRed.value = sliderBackgroundHexRed.value;
  colorValueBackgroundRgbRed.innerHTML = sliderBackgroundHexRed.value;

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[1]);
  sliderBackgroundHue.value = h;
  sliderBackgroundSaturation.value = s;
  sliderBackgroundLuminance.value = l;
  colorValueBackgroundHue.innerHTML = h + '°';
  colorValueBackgroundSaturation.innerHTML = s + '%';
  colorValueBackgroundLuminance.innerHTML = l + '%';
});

sliderBackgroundHexGreen.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `rgb(${sliderBackgroundHexRed.value}, ${sliderBackgroundHexGreen.value}, ${sliderBackgroundHexBlue.value}`;
  colorValueBackgroundHexGreen.innerHTML = Number(sliderBackgroundHexGreen.value).toString(16).toUpperCase().padStart(2, "0");
  sliderBackgroundRgbGreen.value = sliderBackgroundHexGreen.value;
  colorValueBackgroundRgbGreen.innerHTML = sliderBackgroundHexGreen.value;

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[1]);
  sliderBackgroundHue.value = h;
  sliderBackgroundSaturation.value = s;
  sliderBackgroundLuminance.value = l;
  colorValueBackgroundHue.innerHTML = h + '°';
  colorValueBackgroundSaturation.innerHTML = s + '%';
  colorValueBackgroundLuminance.innerHTML = l + '%';
});

sliderBackgroundHexBlue.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `rgb(${sliderBackgroundHexRed.value}, ${sliderBackgroundHexGreen.value}, ${sliderBackgroundHexBlue.value}`;
  colorValueBackgroundHexBlue.innerHTML = Number(sliderBackgroundHexBlue.value).toString(16).toUpperCase().padStart(2, "0");
  sliderBackgroundRgbBlue.value = sliderBackgroundHexBlue.value;
  colorValueBackgroundRgbBlue.innerHTML = sliderBackgroundHexBlue.value;

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[1]);
  sliderBackgroundHue.value = h;
  sliderBackgroundSaturation.value = s;
  sliderBackgroundLuminance.value = l;
  colorValueBackgroundHue.innerHTML = h + '°';
  colorValueBackgroundSaturation.innerHTML = s + '%';
  colorValueBackgroundLuminance.innerHTML = l + '%';
});

// FUNCTIONS
// ==========

function getDynamicColorArray() {
  let textColorArray = getComputedStyle(swatchForeground).color.match(/\d+/g).map(Number);
  let backColorArray = getComputedStyle(swatchBackground).backgroundColor.match(/\d+/g).map(Number);

  return [textColorArray, backColorArray];
}

function getContrastRatio(c1, c2) {
  let normalizedC1 = c1.map(c => c / 255);
  let normalizedC2 = c2.map(c => c / 255);

  normalizedC1 = normalizedC1.map(c => {
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  normalizedC2 = normalizedC2.map(c => {
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });

  let RGB1 = normalizedC1.map((c, index) => {
    if (index == 0) {return c * 0.2126;} else
    if (index == 1) {return c * 0.7152;} else
    if (index == 2) {return c * 0.0722;}
  });
  let RGB2 = normalizedC2.map((c, index) => {
    if (index == 0) {return c * 0.2126;} else
    if (index == 1) {return c * 0.7152;} else
    if (index == 2) {return c * 0.0722;}
  });

  let RL1 = RGB1.reduce((prev, curr) => prev + curr);
  let RL2 = RGB2.reduce((prev, curr) => prev + curr);

  return RL1 >= RL2 ? ((RL1 + 0.05) / (RL2 + 0.05)).toFixed(3) : ((RL2 + 0.05) / (RL1 + 0.05)).toFixed(3);
}

/*
/* rgb2hsl
/*
/* Converte rgb a hsl
/*
*/
function rgb2hsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  let l = 0;

  l = (max + min) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  l = Math.round(l * 100);
  s = Math.round(s * 100);

  if (delta == 0) {
    h = 0;
  } else if (max == r) {
    h = (g - b) / delta % 6;
  } else if (max == g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  return [h, s, l];
}

/*
/* hsl2rgb
/*
/* Converte hsl a rgb
/*
*/
function hsl2rgb(h, s, l) {
  if(h == 360) h = 0;
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
  x = c * (1 - Math.abs(h / 60 % 2 - 1)),
  m = l - c / 2,
  r = 0,
  g = 0,
  b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b];
}