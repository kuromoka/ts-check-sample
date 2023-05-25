// @ts-check
// @see https://www.typescriptlang.org/ja/docs/handbook/jsdoc-supported-types.html

// array ----------------------------------------------------------

//const list: number[] = [];
/** @type number[] */
const list = [];
list.push("a");

// object ----------------------------------------------------------

/*
const object: Record<number, string> = {
    1: "a",
};
*/
/** @type Object.<number, string> */
const object = {
    1: "a",
};
object[2] = 2;

// function ----------------------------------------------------------

/**
const stringToNumber = (str: string): number => {
    return parseInt(str);
}
*/
/**
 * 
 * @param {string} str 
 * @returns {number}
 */
const stringToNumber = (str) => {
    return parseInt(str);
}
stringToNumber(1);
const num = stringToNumber("1");


// literal type ----------------------------------------------------------
// const status: 1 | 2 | 3 = 4;
/** @type {1 | 2 | 3} */
const status = 4;

// const assertion ----------------------------------------------------------

/* 
const options = ['options1', 'options2', 'options3'] as const;
options.push('options4');
const value: typeof options[number] = 'aaa';
*/

const options = /** @type const */ (['options1', 'options2', 'options3']);
options.push('options4');
/** @type {typeof options[number]} */
const value = 'aaa';

// dom ----------------------------------------------------------
import jquery from "jquery";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

const html = new JSDOM(`<input id="id" data-id="111" value="111" />`).window.parent;
const $ = jquery(html, true);

// const dataId = $("#id").data("id") as number;
/** @type {number} */
const dataId = $("#id").data("id");
dataId.includes("111");

// const id = $("#id").val() as string;
// undefinedが型推論に含まれるため型キャストが必要
const id = /** @type {string} */ ($("#id").val());
