import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import TokenSlice from "./slice/TokenSlice"
import rootSaga from "../Saga/rootSaga"
import EditValues from "./slice/EditValues"
import SearchData from "./slice/SearchData"
import MenuValue from "./slice/MenuItem"
import DataRefresh from "./slice/DataRefresh"
import ImgDataSlice from "./slice/ImgData"
import initialValues from "./slice/initialValue"
import PaginationCount from "./slice/PaginationCount"
import ContentSearch from "./slice/ContentSearch"
import EditImgUrl from "./slice/EditImgUrl"
import RatingValue from "./slice/RatingValue"


const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer:{
        'Token':TokenSlice.reducer,
        'id':EditValues.reducer,
        'searchDataStore':SearchData.reducer,
        'saveMenuValue': MenuValue.reducer,
        'OnDelApiReload':DataRefresh.reducer,
        'imgHoldSlice':ImgDataSlice.reducer,
        'initialValue':initialValues.reducer,
        'paginationCount':PaginationCount.reducer,
        'ContentSearch':ContentSearch.reducer,
        'EditImgUrl':EditImgUrl.reducer,
        'RatingValue':RatingValue.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }).concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

export default store;