const fedaultState={
 item:[],
 loading:false,
 page:0
}


const reducer = (state = fedaultState, action) => {
    switch (action.type) {
      case 'GET_ITEM':
        return { ...state, loading: true };
      case 'ITEM_RECEIVED':
        return { ...state, item: state.item.concat(action.item), loading: false, page: action.page+1 }
      default:
        return state;
    }
  };
  
  export default reducer;