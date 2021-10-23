export function colorIsLight(color) {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return brightness > 155;
}

export function debounce(cb, delay = 0, immediate = false) {
  let timeout;
  return (...args) => {
    if (immediate && !timeout) cb(...args);

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  }
}

export function isset(value) {
  return value != null && value != undefined;
}