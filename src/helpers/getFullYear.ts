
const calculateAge = (birthdate: string): number => {
  const parts = birthdate.split(".");

  if (parts.length !== 3) {
    return NaN;
  }

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return NaN;
  }

  const birthdateDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  const age = currentDate.getFullYear() - birthdateDate.getFullYear();

  if (
    currentDate.getMonth() < birthdateDate.getMonth() ||
    (currentDate.getMonth() === birthdateDate.getMonth() &&
      currentDate.getDate() < birthdateDate.getDate())
  ) {
    return age - 1;
  }

  return age;
};



export const getFullYear = (birthdate: string): string => {
  const age = calculateAge(birthdate);

  if (isNaN(age)) {
    return "Некорректная дата рождения";
  }

  return age.toString();
};

