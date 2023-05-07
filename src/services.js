export const dateFormatting = (unixDate) => {
  const date = new Date(Number(unixDate));
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
};
