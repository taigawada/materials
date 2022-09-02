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
function sortItems(key: string, order: 'asc' | 'desc' = 'asc', escape: string | RegExp = /[-/\\^$*+?#. ()|[\]{}]/g) {
    return (a: any, b: any) => {
        if (!Object.prototype.hasOwnProperty.call(a, key) || !Object.prototype.hasOwnProperty.call(b, key)) {
            return 0;
        }
        const elementA = typeof a[key] === 'string' ? a[key].toUpperCase().replace(escape, '') : a[key];
        const elementB = typeof b[key] === 'string' ? b[key].toUpperCase().replace(escape, '') : b[key];
        let comparison = 0;
        if (elementA > elementB) {
            comparison = 1;
        } else if (elementA < elementB) {
            comparison = -1;
        }
        return order === 'desc' ? comparison * -1 : comparison;
    };
}
interface CyclePeriod {
    weekIndex: number;
    dayOfWeekIndex: number;
}
type BooleanArray = [boolean, boolean, boolean, boolean, boolean, boolean, boolean][];
type CyclePeriodArray = CyclePeriod[];

function cyclePeriodConverter(array: unknown[], start: 'monday' | 'sunday' = 'monday', isEachWeek: boolean = true) {
    const isBooleanArray = Array.isArray(array[0]);
    const weekStartsOn = start === 'monday' ? 0 : 1;
    if (isBooleanArray) {
        const booleanArray = array as BooleanArray;
        const parseResult: CyclePeriodArray = [];
        if (isEachWeek) {
            booleanArray[0].map((weekOfDay, weekOfDayIndex) => {
                if (weekOfDay) {
                    [...new Array(5).keys()].map((i) =>
                        parseResult.push({ weekIndex: i, dayOfWeekIndex: weekOfDayIndex - weekStartsOn })
                    );
                }
            });
        } else {
            booleanArray.map((week, weekIndex) => {
                week.map((weekOfDay, weekOfDayIndex) => {
                    if (weekOfDay) {
                        parseResult.push({ weekIndex: weekIndex, dayOfWeekIndex: weekOfDayIndex - weekStartsOn });
                    }
                });
            });
        }
        return parseResult;
    } else {
        const cyclePeriodArray = array as CyclePeriodArray;
        const parseResult: BooleanArray = new Array(4).fill(new Array(7).fill(false));
        const deepCopy = [...parseResult];
        cyclePeriodArray.map((cyclePeriod) => {
            if (cyclePeriod.weekIndex <= 3) {
                deepCopy[cyclePeriod.weekIndex] = [...deepCopy[cyclePeriod.weekIndex]];
                deepCopy[cyclePeriod.weekIndex][cyclePeriod.dayOfWeekIndex - weekStartsOn] = true;
            }
        });
        if (isEachWeek) {
            deepCopy.splice(1, parseResult.length - 1);
        }
        return deepCopy;
    }
}

// const testData = [[false, false, false, false, false, false, true]];
// console.log(cyclePeriodConverter(testData));

export { dayOfWeekStr, sortItems, cyclePeriodConverter, CyclePeriod, BooleanArray };
