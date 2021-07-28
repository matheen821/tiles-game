import randomColor from "randomcolor";

export const generateRandomColors = (count: number) => {
  return randomColor({
    count,
    hue: "random",
    luminosity: "bright",
  });
};
