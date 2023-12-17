import { expect } from "chai";
import { addNewTodoReq, deleteTodoReq, loadTodos, markAsCompletedReq } from "../thunks";
import sinon from "sinon";
import fetchMock from "fetch-mock";
import fetch from "node-fetch";

describe("Testing Todos Thunks", () => {
    it("Testing LoadTodos thunk success", async () => {
        const fakeDispatch = sinon.spy();
        const fakeTodos = [{ text: "say Hi", isCompleted: false, id: 1 }, { text: "say Hello", isCompleted: false, id: 2 }];
        fetchMock.get("http://localhost:8080/todos", fakeTodos);

        const expectedFistDispatchArgs = { type: 'LOAD_TODOS_INPROGRESS' }
        const expectedSecondDispatchArgs = {
            type: 'LOAD_TODOS_SUCCESS', payload: {
                todos: fakeTodos
            }
        }

        await loadTodos()(fakeDispatch);
        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFistDispatchArgs);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondDispatchArgs);

        expect(1).to.deep.equal(1);

        fetchMock.reset();
    });
    it("Testing LoadTodos thunk failure", async () => {
        const fakeDispatch = sinon.spy();

        fetchMock.get("http://localhost:8080/todos", () => {
            throw new Error("API call failed");
        });

        const expectedFistDispatchArgs = { type: 'LOAD_TODOS_INPROGRESS' }
        const expectedSecondDispatchArgs = { type: 'LOAD_TODOS_FAILURE' }

        await loadTodos()(fakeDispatch);
        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFistDispatchArgs);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondDispatchArgs);
        fetchMock.reset();
    });

    it("Testing add new todo thunk success", async () => {
        const fakeDispatch = sinon.spy();
        const fakeTodo = { text: "Say Hello", isCompleted: false, id: 1 };
        fetchMock.post("http://localhost:8080/todos", fakeTodo);
        await addNewTodoReq()(fakeDispatch);
        const expectedFistDispatchArgs = { type: 'CREATE_TODO', payload: { todo: fakeTodo } }

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFistDispatchArgs);
        fetchMock.reset();
    });
    it("Testing add new todo thunk failure", async () => {
        const fakeDispatch = sinon.spy();
        const fakeTodo = { text: "Say Hello", isCompleted: false, id: 1 };
        fetchMock.post("http://localhost:8080/todos", () => {
            throw new Error("API call failed");
        });
        await addNewTodoReq()(fakeDispatch);
        const expectedFistDispatchArgs = { type: 'CREATE_TODO', payload: { todo: fakeTodo } }
        console.log(fakeDispatch.getCall(0).args[0].toString());
        fetchMock.reset();
    });
    it("Testing remove  todo thunk success", async () => {
        const fakeDispatch = sinon.spy();
        const fakeTodo = { text: "Say Hello", isCompleted: false, id: "1" };
        //let id="1";
        fetchMock.delete(`http://localhost:8080/todos/1`, fakeTodo);
        await deleteTodoReq("1")(fakeDispatch);
        const expectedFistDispatchArgs = { type: 'REMOVE_TODO', payload: { todo: fakeTodo } }

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFistDispatchArgs);
        fetchMock.reset();
    });
    it("Testing mark as completed todo thunk success", async () => {
        const fakeDispatch = sinon.spy();
        const fakeTodo = { text: "Say Hello", isCompleted: true, id: "1" };
        //let id="1";
        fetchMock.post(`http://localhost:8080/todos/1/completed`, fakeTodo);
        await markAsCompletedReq("1")(fakeDispatch);
        const expectedFistDispatchArgs = { type: 'MARK_AS_COMPLETED', payload: { todo: fakeTodo } }

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFistDispatchArgs);
        fetchMock.reset();
    });
});

