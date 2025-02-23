export function getNextSevenDays(): string[] {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const next5Days = [];
    for (let i = 0; i < 7; i++) {
        next5Days.push(days[(new Date().getDay()+i)%7]);
    }
    return next5Days;
}