export const getDaysEnding = (number: number): string => {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return 'день';
    } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
        return 'дня';
    } else {
        return 'дней';
    }
};

export const getTextColor = (progress: number, isExpired: boolean): string => {
    if (isExpired) {
        return '#FF5757';
    } else if (progress >= 20) {
        return '#01BF64';
    } else if (progress > 7) {
        return '#F8AE00';
    } else {
        return '#FF5757';
    }
};