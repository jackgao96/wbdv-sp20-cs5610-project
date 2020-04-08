import React from "react";
import './CategoryTableComponent'
import CategoryTableComponent from "./CategoryTableComponent";
import StockService from "../../services/StockService";

class CategoryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.catName = this.props.match.params.catName;
        this.stockService = new StockService();
        // this.catStocks = []
    }
    state = {
        // catStocks: [{name:'Apple', symbol: 'AAPL', price: 100, recommendation: 'BUY'},
        //      {name:'Microsoft', symbol: 'MSFT', price: 200, recommendation: 'BUY'}]
        catStocks : []
    }

    componentDidMount = async () => {
        //TODO: function to fetch the category's stocks and user's watchlist
        //const stocks = await getCategoryStocks("Category 1")
        // const stocks = [{name:'Apple', symbol: 'AAPL', price: 100, recommendation: 'BUY'},
        //     {name:'Microsoft', symbol: 'MSFT', price: 200, recommendation: 'BUY'}]
        // //const watchList = await fetchWatchlist(user)
        // const watchList = [{name:'Apple', symbol: 'AAPL', price: 100, recommendation: 'BUY'}]
        // console.log(this.catName)
        const serviceCatStocks = await this.stockService.getStocksForCategory(this.catName)
        // this.catStocks = await this.stockService.getStocksForCategory(this.catName)
        this.setState({
            catStocks: serviceCatStocks,
        })
    }

    addToWatchList = async (stock) => {
        // this.setState(prevState => ({
        //     watchList: [...prevState.watchList, stock]
        // }))
        alert(stock.getName() + " added to watchlist!")
    }

    render() {
        return (
            <div>
                <CategoryTableComponent
                    category = {this.catName}
                    stocks ={this.state.catStocks}
                    addToWatchList = {this.addToWatchList}
                />
            </div>
        )
    }
}


export default CategoryComponent