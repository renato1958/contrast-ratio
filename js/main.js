import { getDynamicColorArray, getContrastRatio, rgb2hsl, hsl2rgb } from "./functions.js";

const finalYearSpan = document.querySelector(".anno-finale");
const finalYear = new Date().getFullYear();
finalYearSpan.innerText = finalYear;

const positionContext = document.querySelector('.position-context');

const expandButton = document.querySelectorAll('.expand-button');

const infoButton = document.querySelector(".info-button");
const closeButton = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");
const contrastRatioPar = document.querySelector(".contrast-ratio-par");

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

export const swatchForeground = document.querySelector('.swatch-foreground');
export const swatchBackground = document.querySelector('.swatch-background');

const crValue = document.querySelector(".cr-value");

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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

sliderBackgroundLuminance.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `hsl(${sliderBackgroundHue.value}, ${sliderBackgroundSaturation.value}%, ${sliderBackgroundLuminance.value}%)`;
  colorValueBackgroundLuminance.innerHTML = sliderBackgroundLuminance.value + '%';

  let dynamicColorArray = getDynamicColorArray();
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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

sliderForegroundHexRed.addEventListener('input', () => {
  swatchForeground.style.color = `rgb(${sliderForegroundHexRed.value}, ${sliderForegroundHexGreen.value}, ${sliderForegroundHexBlue.value}`;
  colorValueForegroundHexRed.innerHTML = Number(sliderForegroundHexRed.value).toString(16).toUpperCase().padStart(2, "0");
  sliderForegroundRgbRed.value = sliderForegroundHexRed.value;
  colorValueForegroundRgbRed.innerHTML = sliderForegroundHexRed.value;

  let dynamicColorArray = getDynamicColorArray();
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

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
  crValue.innerText = `${getContrastRatio(...dynamicColorArray)} : 1`;

  let [h, s, l] = rgb2hsl(...dynamicColorArray[1]);
  sliderBackgroundHue.value = h;
  sliderBackgroundSaturation.value = s;
  sliderBackgroundLuminance.value = l;
  colorValueBackgroundHue.innerHTML = h + '°';
  colorValueBackgroundSaturation.innerHTML = s + '%';
  colorValueBackgroundLuminance.innerHTML = l + '%';
});

infoButton.addEventListener("click", () => {
  overlay.classList.add("active");
  let dynamicColorArray = getDynamicColorArray();
  let contrastRatio = parseFloat(getContrastRatio(...dynamicColorArray));
  contrastRatioPar.innerText = contrastRatio;
  if(contrastRatio >= 7) {
    contrastRatioPar.innerText += ". Tutti i test passati."
  } else if(contrastRatio >= 4.5) {
    contrastRatioPar.innerText += " Test AA enhanced fallito. Tutti gli altri test passati."
  } else if(contrastRatio >= 3) {
    contrastRatioPar.innerText += " Test AA enhanced fallito. Test AAA minimal fallito. Test AA minimal passato."
  } else {
    contrastRatioPar.innerText += " Tutti i test falliti."
  }
})

closeButton.addEventListener("click", () => {
  overlay.classList.remove("active");
})
