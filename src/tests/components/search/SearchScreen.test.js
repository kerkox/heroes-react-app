import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

describe("Pruebas en <SearchScreen />", () => {
  test("debe de mostrarse correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe("Search a hero");
  });

  test("debe de mostrar a batman y el unput con el valor del queryString", () => {
    const name_hero = "batman";
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${name_hero}`]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find("input").prop("value")).toBe(name_hero);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar un error si no muestra un hero", () => {
    const name_hero_no_exist = "batman123";
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${name_hero_no_exist}`]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find("input").prop("value")).toBe(name_hero_no_exist);
    expect(wrapper.find(".alert-danger").text().trim()).toBe(
      `There is no a hero with ${name_hero_no_exist}`
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar el push del history", () => {
    const historyMock = {
      push: jest.fn(),
    };
    const name_hero = "batman";

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${name_hero}`]}>
        <Route path="/search" component={() => <SearchScreen history={historyMock}/>} />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name:'searchText',
        value: name_hero
      }
    })

    wrapper.find('form').prop('onSubmit')({
      preventDefault( ){}
    })

    expect(historyMock.push).toHaveBeenCalledWith(`?q=${name_hero}`)
  });
});
