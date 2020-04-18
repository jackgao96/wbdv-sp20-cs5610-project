class StockService{
    getStocksForCategory = (category) => {
            return fetch(`https://infinite-retreat-10652.herokuapp.com/api/${category}/stocks`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
    }

    addStockToWatchlist = async (wid, stock) => {
        return await fetch(`https://infinite-retreat-10652.herokuapp.com/api/watchlists/${wid}/stocks`, {
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