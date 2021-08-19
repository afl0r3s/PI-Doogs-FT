import { render, screen } from '@testing-library/react';
//import Index from './index';
import App from './App';
import configureStore from 'redux-mock-store';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from './4_components/1_Landing/landing';
//import Home from './4_components/2_Home/0_Home/home';
import Add from './4_components/4_Create/create';
import Error404 from './4_components/5_Error404/error404';


configure({ adapter: new Adapter() });

describe('Index', () => {
	let store;
	const middlewares = [];
	const mockStore = configureStore(middlewares);

	beforeEach(() => {
		store = mockStore([]);
	});

	describe('Test de renderizacion de componenetes', () => {
		it('El componente LandingPage debe renderizar en la ruta / (Sólo en la ruta "/")', () => {
			const wrapper = mount(
				<Provider store={store}>
					<MemoryRouter initialEntries={['/']}>
						<App />
					</MemoryRouter>
				</Provider>,
			);
			expect(wrapper.find(LandingPage)).toHaveLength(1);
		});
		xit('El componente Home debe renderizar en la ruta /home (Sólo en la ruta "/home")', () => {
			const wrapper = mount(
				<Provider store={store}>
					<MemoryRouter initialEntries={['/add']}>
						<App />
					</MemoryRouter>
				</Provider>,
			);
			expect(wrapper.find(Add)).toHaveLength(0);
		});
    it('El componente Error404 debe renderizar en cualquier ruta que no sean las principales', () => {
			const wrapper = mount(
				<Provider store={store}>
					<MemoryRouter initialEntries={['*']}>
						<App />
					</MemoryRouter>
				</Provider>,
			);
			expect(wrapper.find(Error404)).toHaveLength(1);
		});
	});
});
