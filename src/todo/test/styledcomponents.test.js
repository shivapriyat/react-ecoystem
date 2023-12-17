import { expect } from "chai";
import { getBorderBottomBasedOnDate } from "../TodoListComponentItem";

describe("Testing styled components logic", ()=> {
    it("Test default border for recent data", ()=> {
        const yesterday = new Date(Date.now()-8640000);
        const today = Date.now();
        const actual = getBorderBottomBasedOnDate(yesterday,today);
        const expected = "1px solid black";
        expect(actual).to.deep.equal(expected);
    });
    it("Test priority border for tendaysback data", ()=> {
        const tendaysback = new Date(Date.now()-8640000*10);
        const today = Date.now();
        const actual = getBorderBottomBasedOnDate(tendaysback,today);
        const expected = "2px solid red";
        expect(actual).to.deep.equal(expected);
    });
})