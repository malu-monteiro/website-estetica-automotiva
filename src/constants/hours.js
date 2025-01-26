export const availableHours = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export const filterAvailableHours = (selectedDate) => {
  if (!selectedDate) return [];

  const now = new Date();
  const today = now.toDateString();
  const selectedDay = new Date(selectedDate).toDateString();
  const currentHour = now.getHours();

  if (selectedDay === today && currentHour >= 18) return [];

  if (selectedDay === today) {
    return availableHours.filter((time) => {
      const hour = parseInt(time.split(":")[0]);
      return hour > currentHour;
    });
  }

  return availableHours;
};
