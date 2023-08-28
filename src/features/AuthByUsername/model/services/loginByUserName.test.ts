import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

// describe("loginByUserName.test", () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;
//
//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });
//
//   test("", async () => {
//     const userValue = { username: "admin", id: "1" };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
//
//     const action = loginByUsername({ username: "admin", password: "123" });
//     const result = await action(dispatch, getState, undefined);
//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe("fulfilled");
//   });
//
//   test("", async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//
//     const action = loginByUsername({ username: "admin", password: "123" });
//     const result = await action(dispatch, getState, undefined);
//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe("rejected");
//   });
// });

describe("loginByUserName.test", () => {
  test("", async () => {
    const userValue = { username: "admin", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "admin", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  test("", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "admin", password: "123" });
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
