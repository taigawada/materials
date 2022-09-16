import axios from 'axios';
import { differenceInYears } from 'date-fns';
export type Holidays = [Date, string];
/**
 * 内閣府HPから、祝日データCSVを取得し、パースして返します。未来の祝日は1年分になります。
 * @param {number} yearRange 前後何年分の祝日を取得するか
 * @returns {Promise<Holidays[]>} Promise<[Date, string][]>
 */
export const useHolidays = async (yearRange: number = 1): Promise<Holidays[]> => {
    const result = await axios.get('holidays_csv', { responseType: 'arraybuffer' }).catch((e) => {
        throw e.message;
    });
    if (result.status !== 200) {
        throw `statusCode: ${result.status}`;
    }
    const decodedString = new TextDecoder('shift_jis').decode(result!.data);
    const splitRows = decodedString.replace(/\r/g, '').split('\n');
    splitRows.splice(0, 1); // header行を削除
    const parseResult = splitRows.map((row) => {
        const splitColumns = row.split(',') as Holidays;
        splitColumns[0] = new Date(splitColumns[0]);
        return splitColumns;
    });
    return parseResult.filter((row) => Math.abs(differenceInYears(row[0], new Date())) <= yearRange);
};