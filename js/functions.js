import { swatchForeground, swatchBackground } from "./main.js"

// FUNCTIONS
// ==========

export const getDynamicColorArray = () => {
    let textColorArray = getComputedStyle(swatchForeground).color.match(/\d+/g).map(Number);
    let backColorArray = getComputedStyle(swatchBackground).backgroundColor.match(/\d+/g).map(Number);
  
    return [textColorArray, backColorArray];
}
  
export const getContrastRatio = (c1, c2) => {
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
  export const rgb2hsl = (r, g, b) => {
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
  export const hsl2rgb = (h, s, l) => {
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