export const getCustomDate = (value: Date | string) => {
    const date = new Date(value);
    const day = getDaySuffix(date.getDate());
    const month = date.toLocaleString('default', { month: 'long' });
    const weekday = date.toLocaleString('default', { weekday: 'long' });
    const year = date.getFullYear();

    return ({
        day: `${weekday} ${date.getDate()}${day}`,
        month: month,
        year: year
    });
}

function getDaySuffix(day: number): string {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}