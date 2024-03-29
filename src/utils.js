export const createDate = (params) => {
  const locale = params?.locale ?? "default";
  const d = params?.date ?? new Date();
  const dayNumber = d.getDate();
  const day = d.toLocaleDateString(locale, { weekday: "long" });
  const year = d.getFullYear();
  const month = d.toLocaleDateString(locale, { month: "long" });
  const monthNumber = d.getMonth() + 1;
  return {
    dayNumber,
    day,
    year,
    month,
    monthNumber,
  };
};

export function getColor() {
  const colorElements = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 8; i++) {
    color += colorElements[Math.floor(Math.random() * 16)];
  }
  return color;
}
