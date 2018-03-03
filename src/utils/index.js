export const zeroPad = (num, places) => {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
};

export const byId = (a, b) => {
    if (a.id < b.id) { return -1; }
    if (a.id > b.id) { return 1; }
    return 0;
};
