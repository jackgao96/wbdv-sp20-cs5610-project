import {FIND_STOCKS_FOR_WATCHLIST, CREATE_STOCK, UPDATE_STOCK, DELETE_STOCK} from '../../actions/StockActions'
const initial = {
    stocks : []
}
const StockReducer = (state=initial, action) => {
    switch(action.type){
        case FIND_STOCKS_FOR_WATCHLIST:
            return {
                stocks: action.stocks
            }
        case CREATE_STOCK:
            return {
                stocks: [
                    ...state.stocks,
                    action.newStock
                ]
            }
        case DELETE_STOCK:
            return {
                stocks: state.stocks.filter(stock => stock.id!==action.stockId)
            }
        case UPDATE_STOCK:
            return {
                stocks: state.stocks.map(stock => 
                        stock.id===action.stockId ? action.stock : stock
                    )
            }
        default:
            return state
    }
}
export default StockReducer