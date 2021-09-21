import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ListsPageContainer } from '../pages/ListsPage/container';
import { ROUTES } from './routesNames';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
      <Route
        exact
        path={ROUTES.COUNTER_PAGE}
        component={() => <div>Counter page</div>}
      />
      <Route
        exact
        path={ROUTES.HOOK_COUNTER}
        component={() => <div>Hook page</div>}
      />
      <Route exact path={ROUTES.LISTS_PAGE} component={ListsPageContainer} />
    </Switch>
  );
};
