import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurretUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)