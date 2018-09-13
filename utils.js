
const qs = sel => document.querySelector(sel);
const qsa = sel => Array.from(document.querySelectorAll(sel));
const map = (value, start1, stop1, start2, stop2) => ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));


const toRadian = degrees => degrees * Math.PI / 180;
const toDegrees = radians => radians * 180 / Math.PI;

const pixelIndex = (x, y, imageData) => (~~x + ~~y * imageData.width) * 4;
const distanceBetween = (vec1, vec2) => Math.hypot(vec2.x - vec1.x, vec2.y - vec1.y);
const angleBetween = (vec1, vec2) => Math.atan2(vec2.y - vec1.y, vec2.x - vec1.x);
const randomArrayValue = arr => arr[Math.floor(Math.random() * arr.length)];
const randomBetween = (min, max) => (Math.random() * (max - min + 1)) + min;

const randomGaussian = (mean = 0, sd = 1) => {
  let y1;
  let y2;
  let x1;
  let x2
  let w;
  let previous;

  if (previous) {
    y1 = y2;
    previous = false;
  } else {
    do {
      x1 = (Math.random() * 2) - 1;
      x2 = (Math.random() * 2) - 1;
      w = x1 * x1 + x2 * x2;
    } while (w >= 1);
    w = Math.sqrt(-2 * Math.log(w) / w);
    y1 = x1 * w;
    y2 = x2 * w;
    previous = true;
  }

  return y1 * sd + mean;
};

const wrappBBox = (vec, w, h) => {
	if (vec.x < 0) {
		vec.x = w;
	} else if (vec.x > w) {
		vec.x = 0;
	}

	if (vec.y < 0) {
		vec.y = h;
	} else if (vec.y > h) {
		vec.y = 0;
	}
};

export {
	qs,
	qsa,
	map,
	clamp,
	toRadian,
	toDegrees,
	pixelIndex,
  distanceBetween,
  angleBetween,
  randomArrayValue,
  randomBetween,
	randomGaussian,
	wrappBBox,
};
