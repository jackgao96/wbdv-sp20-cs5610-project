class StockService{
    getStocksForCategory = (category) => {
            return fetch(`https://infinite-retreat-10652.herokuapp.com/api/${category}/stocks`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
    }

    addStockToWatchlist = (wid, stock) => {
        return fetch(`https://infinite-retreat-10652.herokuapp.com/api/watchlists/${wid}/stocks`, {
            method: 'POST',
            body: JSON.stringify(stock),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    removeStockFromWatchlist = (wid, stockId) => {
        return fetch(`https://infinite-retreat-10652.herokuapp.com/api/watchlists/${wid}/stocks/${stockId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    }
}
export default StockService;