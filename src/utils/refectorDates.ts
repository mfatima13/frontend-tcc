
export default function refactorDate(date: string) {
    // const month= date.getMonth

    /*
    const newDateAsString = date.toDateString();
    */
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);

    const newDate = day + "/".concat(month) + "/".concat(year);
    return newDate;
}