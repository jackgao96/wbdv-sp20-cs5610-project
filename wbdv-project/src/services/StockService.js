class StockService{
    getStocksForCategory = (category) => {
            return fetch(`http://localhost:8080/api/${category}/stocks`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
    }
}
export default StockService;