import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchItem() {
    
    const json = yield fetch('https://api.unsplash.com/photos?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02&page='+Math.floor(Math.random() * 100))
      .then(response => response.json(), );
    yield put({ type: "ITEM_RECEIVED", item: json});
    
  }

function* actionWatcher() {
    yield takeLatest('GET_ITEM', fetchItem)
  }

  export default function* rootSaga() {
    yield all([
      actionWatcher(),
    ]); 
  }