import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { SearchScreen } from "../../../components/search/SearchScreen"

describe('Pruebas en <SearchScreen />', () => {

  test('debe de mostrarse correctamente con valores por defecto', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
  })

  test('debe de mostrar a batman y el unput con el valor del queryString', () => {
    const name_hero = 'batman' 
    const wrapper = mount(
       <MemoryRouter initialEntries={[`/search?q=${name_hero}`]}>
         <Route path="/search" component={SearchScreen} />
       </MemoryRouter>
     );
    expect(wrapper.find('input').prop('value')).toBe(name_hero)
    expect(wrapper).toMatchSnapshot()
  })
  
  
  
})
