const getArgs = (args) => {
  const res = {};
  const [executer, file, ...rest] = args;
  rest.forEach((el, index, arr) => {
    if (el.charAt(0) == "-") {
      if (index == arr.length - 1) {
        res[el.substring(1)] = true;
      } else if (arr[index + 1].charAt(0) != "-") {
        res[el.substring(1)] = arr[index + 1];
      } else {
        res[el.substring(1)] = true;
      }
    }
  });
  return res;
};
export { getArgs };
