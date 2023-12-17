import { expect } from "chai";
import { getCompleteTodos, getIncompleteTodos } from "../selectors";

describe("Tesing selectors", ()=> {
    it("Testing completed selectors", ()=> {
        const fakeTodos = [
            {text: "Say Hi", isCompleted: true},
            {text: "Say Hello", isCompleted: false},
            {text: "Say Goodbye", isCompleted: false}
        ];
        let expected = [{text: "Say Hi", isCompleted: true}];
        let actual = getCompleteTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);
    });
    it("Testing incompleted selectors", ()=> {
        const fakeTodos = [
            {text: "Say Hi", isCompleted: true},
            {text: "Say Hello", isCompleted: false},
            {text: "Say Goodbye", isCompleted: false}
        ];
        let expected = [{text: "Say Hello", isCompleted: false}, {text: "Say Goodbye", isCompleted: false}];
        let actual = getIncompleteTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);
    })
})