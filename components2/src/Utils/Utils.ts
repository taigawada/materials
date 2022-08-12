const dayOfWeekStr = (start: 'monday' | 'sunday' | 0 | 1, index: number) => {
    let shifter = 0;
    if (start === 'monday' || start === 1) {
        shifter = 1;
    }
    switch (index + shifter) {
        case 0:
            return '日';
        case 1:
            return '月';
        case 2:
            return '火';
        case 3:
            return '水';
        case 4:
            return '木';
        case 5:
            return '金';
        case 6:
            return '土';
        case 7:
            return '日';
    }
};

export { dayOfWeekStr };
