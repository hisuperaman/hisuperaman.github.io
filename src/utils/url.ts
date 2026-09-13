export const isRouteActive = (
    pathname: string,
    href: string,
    exact = false,
): boolean => {
    return exact
        ? pathname === href
        : pathname === href || pathname.startsWith(`${href}/`);
}