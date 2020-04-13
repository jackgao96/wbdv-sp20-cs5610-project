class StockService{
    getStocksForCategory = (category) => {
            return fetch(`https://localhost:8080/api/${category}/stocks`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
    }

    addStockToWatchlist = (stock) => {
        return fetch("https://localhost:8080/api/watchlists/{wid}/stocks", {
            method: 'POST',
            body: JSON.stringify(stock),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    removeStockFromWatchlist = (stockId) => {
        return fetch(`https://localhost:8080//api/watchlists/{wid}/stocks/{stockId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    }
}
export default StockService;