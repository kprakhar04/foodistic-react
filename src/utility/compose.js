export const compose =
  (...fns) =>
  (arg, ...restArgs) =>
    fns.reduceRight((x, f) => {
      return f(x, ...restArgs);
    }, arg);
