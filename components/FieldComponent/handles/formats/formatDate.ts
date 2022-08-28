const formatDate = (date: any) => {
  const current = new Date();
  switch (date.toLowerCase()) {
    case "today" || "current" || "now":
      return current.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    case "yesterday":
      return new Date(current.setDate(current.getDate() - 1)).toLocaleString(
        "en-US",
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      );
    default:
      return date;
  }
};

export default formatDate;
