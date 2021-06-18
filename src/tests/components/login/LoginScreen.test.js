import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

describe("Pruebas en <LoginScreen />", () => {
  const historyMock = {
    replace: jest.fn(),
  };
  const contextValue = {
    dispatch: jest.fn(),
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );
  // Storage.prototype.getItem = jest.fn(() => lastPath)
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test("debe de realizar el dispatch y la navegacion", () => {
    const handleClick = wrapper.find("button").prop("onClick");
    const lastPath = '/marvel'
    const data = {
      type: types.login,
      payload: {
        name: "Paul",
        logged: true,
      },
    };
    handleClick();
    expect(contextValue.dispatch).toHaveBeenCalledWith(data);
    // expect(localStorage.getItem).toHaveBeenCalledWith('lastPath')
    expect(historyMock.replace).toHaveBeenCalledWith('/');
    localStorage.setItem('lastPath', lastPath)
    handleClick();
    expect(historyMock.replace).toHaveBeenCalledWith(lastPath);
  });
});
