export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLES = "articles",
    ARTICLES_DETAILS = "article_details",
    ARTICLE_CREATE = "article_create",
    ARTICLE_EDIT = "article_edit",
    ADMIN_PANEL = "admin_panel",
    FORBIDDEN = "forbidden",
    // last
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/",
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLES_DETAILS]: "/articles/",
    [AppRoutes.ARTICLE_CREATE]: "/articles/new",
    [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
    [AppRoutes.ADMIN_PANEL]: "/admin",
    [AppRoutes.FORBIDDEN]: "/forbidden",

    [AppRoutes.NOT_FOUND]: "*",
};
