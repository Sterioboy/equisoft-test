export function getMin(arr) {
  let res = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      res = Math.min(res, arr[i]);
    }
  }

  return res;
}

export function getMax(arr) {
  let res = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      res = Math.max(res, arr[i]);
    }
  }

  return res;
}
