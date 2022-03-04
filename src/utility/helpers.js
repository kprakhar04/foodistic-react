export const compose =
  (...fns) =>
  (...args) =>
    fns.reduceRight((args, f) => {
      return f(args);
    }, ...args);
