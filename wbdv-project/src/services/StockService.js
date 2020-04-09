class StockService{
    getStocksForCategory = (category) => {
            return fetch(`https://infinite-retreat-10652.herokuapp.com/api/${category}/stocks`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
    }
}
export default StockService;