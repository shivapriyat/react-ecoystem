import { expect } from "chai";
import { todos } from "../reducers";

describe("Test reducers", () => {
    it("create to do test case", ()=> {
            const originalState = {isLoading: false, data:[]};
            const fakeTodo = {
                text: "say Hi", isCompleted: false
            }
            const fakeAction = {
                type: "CREATE_TODO",
                payload: {
                    todo: fakeTodo
                }
            }
            const expected = {isLoading: false, data:[fakeTodo]};
            const actual = todos(originalState,fakeAction);

            expect(expected).to.deep.equal(actual);
    });

    it("remove to do test case", ()=> {
        const originalState = {isLoading: false, data:[
            {text: "say Hi", isCompleted: false, id:1},
            {text: "say Hello", isCompleted: false, id:2}
    ]};
        const fakeTodo = {
            text: "say Hi", isCompleted: false, id:1
        }
        const fakeAction = {
            type: "REMOVE_TODO",
            payload: {
                todo: fakeTodo
            }
        }
        const expected = {isLoading: false, data:[{text: "say Hello", isCompleted: false, id:2 }]};
        const actual = todos(originalState,fakeAction);

        expect(expected.data).to.deep.equal(actual.data);
});
it("Mark as completed to do test case", ()=> {
    const originalState = {isLoading: false, data:[
        {text: "say Hi", isCompleted: false, id:1},
        {text: "say Hello", isCompleted: false, id:2}
]};
    const fakeTodo = {
        text: "say Hi", isCompleted: false, id:1
    }
    const fakeAction = {
        type: "MARK_AS_COMPLETED",
        payload: {
            todo: fakeTodo
        }
    }
    const expected = {isLoading: false, data:[{text: "say Hi", isCompleted: true, id:1 },{text: "say Hello", isCompleted: false, id:2}]};
    const actual = todos(originalState,fakeAction);

    expect(expected).to.deep.equal(actual);
});

it("Load in progress test", ()=> {
    const originalState = {isLoading: false, data:[
]};
    
    const fakeAction = {
        type: "LOAD_TODOS_INPROGRESS",
        
    }
    const expected = {isLoading: true, data:[]};
    const actual = todos(originalState,fakeAction);

    expect(expected).to.deep.equal(actual);
});

it("Load todos failure test case", ()=> {
    const originalState = {isLoading: true, data:[
        {text: "say Hi", isCompleted: false, id:1},
        {text: "say Hello", isCompleted: false, id:2}
]};
    
    const fakeAction = {
        type: "LOAD_TODOS_FAILURE",
    }
    const expected = {isLoading: false, data:[{text: "say Hi", isCompleted: false, id:1 },{text: "say Hello", isCompleted: false, id:2}]};
    const actual = todos(originalState,fakeAction);

    expect(expected).to.deep.equal(actual);
});

it("Load todo success test case", ()=> {
    const originalState = {isLoading: true, data:[
       
]};
    const fakeAction = {
        type: "LOAD_TODOS_SUCCESS",
        payload: {
            todos: [ {text: "say Hi", isCompleted: false, id:1},
            {text: "say Hello", isCompleted: false, id:2}]
        }
    }
    const expected = {isLoading: false, data:[{text: "say Hi", isCompleted: false, id:1 },{text: "say Hello", isCompleted: false, id:2}]};
    const actual = todos(originalState,fakeAction);

    expect(expected).to.deep.equal(actual);
});

});