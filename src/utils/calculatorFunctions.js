export function getMin(arr) {
  let res = arr[0];

  for (let i = 1; i < arr.length; i++) {
    res = Math.min(res, arr[i]);
  }

  return res ? [res] : null;
}

export function getMax(arr) {
  let res = arr[0];

  for (let i = 1; i < arr.length; i++) {
    res = Math.max(res, arr[i]);
  }

  return res ? [res] : null;
}

export function getOdd(arr) {
  const res = arr.filter((number) => {
    return number % 2 !== 0;
  });

  return res;
}

export function getEven(arr) {
  const res = arr.filter((number) => {
    return number % 2 === 0;
  });

  return res;
}

export function getNegative(arr) {
  const res = arr.filter((number) => {
    return number < 0;
  });

  return res;
}
