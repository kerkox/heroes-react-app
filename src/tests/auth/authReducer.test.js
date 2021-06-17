import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const initial = { logged: false };
    const state = authReducer(initial, {});
    expect(state).toEqual(initial);
  });

  test("debe de autenticar y colocar el name del usuario", () => {
    const payload = { name: "Paul" };
    const action = {
      type: types.login,
      payload,
    };
    const state = authReducer({ logged:false}, action);
    expect(state).toEqual({ ...payload, logged: true });
  });

  test("debe de borrar el name del usuario y logged en false", () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ name: "Paul", logged: true }, action);
    expect(state).toEqual({ logged: false });
  });
});
