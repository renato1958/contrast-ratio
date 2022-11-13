const positionContext = document.querySelector('.position-context');

const expandButton = document.querySelectorAll('.expand-button');
const colorsContainer = document.querySelectorAll('.colors-container');

const sliderForegroundRed = document.querySelector('.slider__foreground--red');
const colorValueForegroundRed = document.querySelector('.color-value__foreground--red');
const sliderForegroundGreen = document.querySelector('.slider__foreground--green');
const colorValueForegroundGreen = document.querySelector('.color-value__foreground--green');
const sliderForegroundBlue = document.querySelector('.slider__foreground--blue');
const colorValueForegroundBlue = document.querySelector('.color-value__foreground--blue');

const sliderBackgroundRed = document.querySelector('.slider__background--red');
const colorValueBackgroundRed = document.querySelector('.color-value__background--red');
const sliderBackgroundGreen = document.querySelector('.slider__background--green');
const colorValueBackgroundGreen = document.querySelector('.color-value__background--green');
const sliderBackgroundBlue = document.querySelector('.slider__background--blue');
const colorValueBackgroundBlue = document.querySelector('.color-value__background--blue');

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

const swatchForeground = document.querySelector('.swatch-foreground');
const swatchBackground = document.querySelector('.swatch-background');
const swatchStats = document.querySelector('.swatch-stats');

const controlElsTop = document.querySelector('.control-els--top');

for (let i = 0; i < 4; i++) {
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

sliderForegroundRed.addEventListener('input', () => {
  swatchForeground.style.color = `rgb(${sliderForegroundRed.value}, ${sliderForegroundGreen.value}, ${sliderForegroundBlue.value}`;
  colorValueForegroundRed.innerHTML = sliderForegroundRed.value;

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

sliderForegroundGreen.addEventListener('input', () => {
  swatchForeground.style.color = `rgb(${sliderForegroundRed.value}, ${sliderForegroundGreen.value}, ${sliderForegroundBlue.value}`;
  colorValueForegroundGreen.innerHTML = sliderForegroundGreen.value;

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

sliderForegroundBlue.addEventListener('input', () => {
  swatchForeground.style.color = `rgb(${sliderForegroundRed.value}, ${sliderForegroundGreen.value}, ${sliderForegroundBlue.value}`;
  colorValueForegroundBlue.innerHTML = sliderForegroundBlue.value;

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

sliderBackgroundRed.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `rgb(${sliderBackgroundRed.value}, ${sliderBackgroundGreen.value}, ${sliderBackgroundBlue.value}`;
  colorValueBackgroundRed.innerHTML = sliderBackgroundRed.value;

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

sliderBackgroundGreen.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `rgb(${sliderBackgroundRed.value}, ${sliderBackgroundGreen.value}, ${sliderBackgroundBlue.value}`;
  colorValueBackgroundGreen.innerHTML = sliderBackgroundGreen.value;

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

sliderBackgroundBlue.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `rgb(${sliderBackgroundRed.value}, ${sliderBackgroundGreen.value}, ${sliderBackgroundBlue.value}`;
  colorValueBackgroundBlue.innerHTML = sliderBackgroundBlue.value;

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
  console.log(r, g, b); // DEBUG
  sliderForegroundRed.value = r;
  sliderForegroundGreen.value = g;
  sliderForegroundBlue.value = b;
  colorValueForegroundRed.innerHTML = r;
  colorValueForegroundGreen.innerHTML = g;
  colorValueForegroundBlue.innerHTML = b;
});

sliderForegroundSaturation.addEventListener('input', () => {
  swatchForeground.style.color = `hsl(${sliderForegroundHue.value}, ${sliderForegroundSaturation.value}%, ${sliderForegroundLuminance.value}%)`;
  colorValueForegroundSaturation.innerHTML = sliderForegroundSaturation.value + '°';

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderForegroundHue.value, sliderForegroundSaturation.value, sliderForegroundLuminance.value);
  console.log(r, g, b); // DEBUG
  sliderForegroundRed.value = r;
  sliderForegroundGreen.value = g;
  sliderForegroundBlue.value = b;
  colorValueForegroundRed.innerHTML = r;
  colorValueForegroundGreen.innerHTML = g;
  colorValueForegroundBlue.innerHTML = b;
});

sliderForegroundLuminance.addEventListener('input', () => {
  swatchForeground.style.color = `hsl(${sliderForegroundHue.value}, ${sliderForegroundSaturation.value}%, ${sliderForegroundLuminance.value}%)`;
  colorValueForegroundLuminance.innerHTML = sliderForegroundLuminance.value + '°';

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderForegroundHue.value, sliderForegroundSaturation.value, sliderForegroundLuminance.value);
  console.log(r, g, b); // DEBUG
  sliderForegroundRed.value = r;
  sliderForegroundGreen.value = g;
  sliderForegroundBlue.value = b;
  colorValueForegroundRed.innerHTML = r;
  colorValueForegroundGreen.innerHTML = g;
  colorValueForegroundBlue.innerHTML = b;
});

sliderBackgroundHue.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `hsl(${sliderBackgroundHue.value}, ${sliderBackgroundSaturation.value}%, ${sliderBackgroundLuminance.value}%)`;
  colorValueBackgroundHue.innerHTML = sliderBackgroundHue.value + '°';

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderBackgroundHue.value, sliderBackgroundSaturation.value, sliderBackgroundLuminance.value);
  console.log(r, g, b); // DEBUG
  sliderBackgroundRed.value = r;
  sliderBackgroundGreen.value = g;
  sliderBackgroundBlue.value = b;
  colorValueBackgroundRed.innerHTML = r;
  colorValueBackgroundGreen.innerHTML = g;
  colorValueBackgroundBlue.innerHTML = b;
});

sliderBackgroundSaturation.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `hsl(${sliderBackgroundHue.value}, ${sliderBackgroundSaturation.value}%, ${sliderBackgroundLuminance.value}%)`;
  colorValueBackgroundSaturation.innerHTML = sliderBackgroundSaturation.value + '%';

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderBackgroundHue.value, sliderBackgroundSaturation.value, sliderBackgroundLuminance.value);
  console.log(r, g, b); // DEBUG
  sliderBackgroundRed.value = r;
  sliderBackgroundGreen.value = g;
  sliderBackgroundBlue.value = b;
  colorValueBackgroundRed.innerHTML = r;
  colorValueBackgroundGreen.innerHTML = g;
  colorValueBackgroundBlue.innerHTML = b;
});

sliderBackgroundLuminance.addEventListener('input', () => {
  swatchBackground.style.backgroundColor = `hsl(${sliderBackgroundHue.value}, ${sliderBackgroundSaturation.value}%, ${sliderBackgroundLuminance.value}%)`;
  colorValueBackgroundLuminance.innerHTML = sliderBackgroundLuminance.value + '%';

  let dynamicColorArray = getDynamicColorArray();
  swatchStats.innerHTML = `<p class="cr-label">Contrast-Ratio</p><p class="cr-value">${getContrastRatio(...dynamicColorArray)}</p>`;

  let [r, g, b] = hsl2rgb(sliderBackgroundHue.value, sliderBackgroundSaturation.value, sliderBackgroundLuminance.value);
  console.log(r, g, b); // DEBUG
  sliderBackgroundRed.value = r;
  sliderBackgroundGreen.value = g;
  sliderBackgroundBlue.value = b;
  colorValueBackgroundRed.innerHTML = r;
  colorValueBackgroundGreen.innerHTML = g;
  colorValueBackgroundBlue.innerHTML = b;
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