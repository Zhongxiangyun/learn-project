import { init, RematchRootState } from '@rematch/core';

import demo from './models/demo';

const models = {
    demo,
};

const store = init({
    models,
});

export type IStore = typeof store;
export type IDispatch = typeof store.dispatch;
export type IRootState = RematchRootState<typeof models>;

export default store;