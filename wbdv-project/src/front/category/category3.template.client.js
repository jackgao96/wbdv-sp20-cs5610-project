import React from "react";
import './CategoryTableComponent'
import CategoryTableComponent from "./CategoryTableComponent";

class Category3Component extends React.Component {
    state = {
        stocks: [],
        watchList: []
    }

    componentDidMount = async () => {
        //TODO: function to fetch the category's stocks and user's watchlist
        //const stocks = await getCategoryStocks("Category 3")
        const stocks = [{name:'Apple', symbol: 'AAPL', price: 100, recommendation: 'BUY'},
            {name:'Microsoft', symbol: 'MSFT', price: 200, recommendation: 'BUY'}]
        //const watchList = await fetchWatchlist(user)
        const watchList = [{name:'Apple', symbol: 'AAPL', price: 100, recommendation: 'BUY'}]
        this.setState({
            stocks: stocks,
            watchList: watchList
        })
    }

    addToWatchList = async (stock) => {
        this.setState(prevState => ({
            watchList: [...prevState.watchList, stock]
        }))
    }

    render() {
        return (
            <div>
                <CategoryTableComponent
                    category="Category 3"
                    stocks={this.state.stocks}
                    addToWatchList={this.addToWatchList}
                />
            </div>
        )
    }
}


export default Category3Component