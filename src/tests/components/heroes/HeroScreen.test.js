import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { HeroScreen } from "../../../components/heroes/HeroScreen";

describe("Pruebas en <HeroScreen />", () => {
  const historyMock = {
    length:10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  const wrapper = mount(
    <MemoryRouter initialEntries={['/hero']}>
      <HeroScreen history={historyMock} />
    </MemoryRouter>
  );

  test("debe de mostrar el componente redirect si no hay argumentos en el URL", () => {
    expect(wrapper.find('Redirect').exists()).toBe(true)
    // expect(wrapper).toMatchSnapshot()
  });

  test('debe de mostrar ', () => {
    
  })
  
});
