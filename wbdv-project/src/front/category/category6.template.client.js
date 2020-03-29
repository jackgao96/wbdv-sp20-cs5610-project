import React from "react";
import './CategoryTableComponent'
import CategoryTableComponent from "./CategoryTableComponent";

class Category6Component extends React.Component {
    state = {
        stocks: [],
        watchList: []
    }

    componentDidMount = async () => {
        //TODO: function to fetch the category's stocks and user's watchlist
        const stocks = await getCategoryStocks("Category 6")
        const watchList = fetchWatchlist(user)
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
                    category="Category 6"
                    stocks={stocks}
                    addToWatchList={this.addToWatchList}
                />
            </div>
        )
    }
}


export default Category6Component