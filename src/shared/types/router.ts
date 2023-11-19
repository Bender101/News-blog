import {RouteProps} from "react-router-dom";
import {UserRole} from "src/entities/User";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
