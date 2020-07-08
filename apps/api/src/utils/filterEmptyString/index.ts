import { NOT_APPLICABLE } from '@mono-nx-test-with-nextjs/api/constants';

/**
 * It return true when the string is different from "N/A", false otherwise
 * @param { string } param - string to compare
 * @returns { Boolean } -
 **/
export const filterEmptyString = (param: string) => param !== NOT_APPLICABLE;
