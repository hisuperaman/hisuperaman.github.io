import {NotFound, Portfolio, WalletyOverview, WalletyPrivacy, WalletySupport, WalletyTerms} from "@/pages";
import {Route, Switch} from "wouter";
import {RoutePaths} from "@/enums";
import {Path} from "@/utils";

function App() {
    return (
        <Switch>
            <Route
                path={Path.getExactRoutePath(RoutePaths.empty)}
                component={Portfolio}
            />

            {/* Wallety */}
            <Route
                path={Path.getExactRoutePath(RoutePaths.wallety)}
                component={WalletyOverview}
            />
            <Route
                path={Path.getExactRoutePath(RoutePaths.wallety, RoutePaths.privacyPolicy)}
                component={WalletyPrivacy}
            />
            <Route
                path={Path.getExactRoutePath(RoutePaths.wallety, RoutePaths.terms)}
                component={WalletyTerms}
            />
            <Route
                path={Path.getExactRoutePath(RoutePaths.wallety, RoutePaths.support)}
                component={WalletySupport}
            />

            <Route component={NotFound}/>
        </Switch>
    );
}

export default App;