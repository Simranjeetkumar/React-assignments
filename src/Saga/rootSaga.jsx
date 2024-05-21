import { all, call } from 'redux-saga/effects'
import mySaga1 from './Saga1';
import mySaga2 from './Saga2';
import mySaga3 from './Saga3';
import mySaga4 from './Saga4';
import mySaga5 from './Saga5';
import mySaga6 from './Saga6';

function* rootSaga(){
    yield all([
        call(mySaga1),
        call(mySaga2),
        call(mySaga3),
        call(mySaga4),
        call(mySaga5),
        call(mySaga6),

    ])
}

export default rootSaga;