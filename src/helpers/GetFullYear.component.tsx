type AgeProps = {
  birthdate: string;
};

export const GetFullYear: React.FC<AgeProps> = ({ birthdate }) => {
  const calculateAge = (birthdate: string): number => {
    const parts = birthdate.split(".");

    if (parts.length !== 3) {
      // Если дата не имеет ожидаемый формат, вернем NaN
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

    // Проверяем, был ли уже день рождения в текущем году
    if (
      currentDate.getMonth() < birthdateDate.getMonth() ||
      (currentDate.getMonth() === birthdateDate.getMonth() &&
        currentDate.getDate() < birthdateDate.getDate())
    ) {
      return age - 1; // Если день рождения еще не наступил в текущем году, уменьшаем возраст на 1
    }

    return age;
  };

  const getYearsString = (years: number): string => {
    const lastDigit = years % 10;
    const lastTwoDigits = years % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return "лет";
    } else if (lastDigit === 1) {
      return "год";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return "года";
    } else {
      return "лет";
    }
  };

  const age = calculateAge(birthdate);

  if (isNaN(age)) {
    return <div>Некорректная дата рождения</div>;
  }

  return (
    <span>
      {age} {getYearsString(age)}
    </span>
  );
};
