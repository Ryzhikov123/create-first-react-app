import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './routesNames';
import { HomePage } from '../pages/HomePage';
import { listPageContainer } from '../pages/ListsPage/container'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
            <Route exact path={ROUTES.COUNTER_PAGE} component={() => <div>Counter Page</div>} />
            <Route exact path={ROUTES.HOOK_PAGE} component={() => <div>Hook page</div>} />
            <Route exact path={ROUTES.LISTS_PAGE} component={listPageContainer} />
        </Switch>
    )
};