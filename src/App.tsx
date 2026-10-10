import {
    ClockMateOverview,
    ClockMatePrivacy,
    ClockMateSupport,
    ClockMateTerms,
    NotFound,
    Portfolio,
    WalletyOverview,
    WalletyPrivacy,
    WalletySupport,
    WalletyTerms,
} from "@/pages";
import { Route, Switch } from "wouter";
import { RoutePaths } from "@/enums";
import { Path } from "@/utils";

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

            {/* ClockMate */}
            <Route
                path={Path.getExactRoutePath(RoutePaths.clockmate)}
                component={ClockMateOverview}
            />
            <Route
                path={Path.getExactRoutePath(RoutePaths.clockmate, RoutePaths.privacyPolicy)}
                component={ClockMatePrivacy}
            />
            <Route
                path={Path.getExactRoutePath(RoutePaths.clockmate, RoutePaths.terms)}
                component={ClockMateTerms}
            />
            <Route
                path={Path.getExactRoutePath(RoutePaths.clockmate, RoutePaths.support)}
                component={ClockMateSupport}
            />

            <Route component={NotFound} />
        </Switch>
    );
}

export default App;