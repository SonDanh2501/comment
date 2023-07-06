import MomentUtils from '@date-io/moment';
import '@fake-db';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import history from '@history';
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { create } from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { Route, Router, Switch } from 'react-router-dom';
import AppContext from './AppContext';
import { Auth } from './auth';
import routes from './fuse-configs/routesConfig';
import '@fortawesome/fontawesome-svg-core/styles.css';
import store from './store';
import Delivery from './main/delivery';

const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, jssExtend(), rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});

const generateClassName = createGenerateClassName();

const App = () => {
	return (
		<>
			<Router history={history}>
				<Switch>
					<Route path="/delivery">
						<Delivery />
					</Route>
					<Route path="/*">
						<AppContext.Provider
							value={{
								routes
							}}
						>
							<StylesProvider jss={jss} generateClassName={generateClassName}>
								<Provider store={store}>
									<MuiPickersUtilsProvider utils={MomentUtils}>
										<Auth>
											<FuseAuthorization>
												<FuseTheme>
													<FuseLayout />
												</FuseTheme>
											</FuseAuthorization>
										</Auth>
									</MuiPickersUtilsProvider>
								</Provider>
							</StylesProvider>
						</AppContext.Provider>
					</Route>
				</Switch>
			</Router>
		</>

	);
};

export default App;
