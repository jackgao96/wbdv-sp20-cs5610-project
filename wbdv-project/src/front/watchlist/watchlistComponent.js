import React from "react";
import './watchlistTableComponent'
import watchlistTableComponent from "./watchlistTableComponent";
import StockService from "../../services/StockService";

class watchlistComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.userId = this.props.match.params.userId;
        this.stockService = new StockService();
    }
    state = {
        watchlist : []
    }

    componentDidMount = async () => {
        const serviceList = await this.stockService.getStocksForCategory(this.userId)
        console.log(serviceList)
        this.setState({
            watchlist: serviceList,
        })
    }

    removeFromWatchlist = async (stock) => {
        // this.setState(prevState => ({
        //     watchList: [...prevState.watchList, stock]
        // }))
        alert(stock.getName() + " removed from watchlist!")
    }

    render() {
        return (
            <div>
                <watchlistTableComponent
                    userId = {this.userId}
                    stocks ={this.state.watchlist}
                    removeFromWatchlist = {this.removeFromWatchlist}
                />
            </div>
        )
    }
}


export default watchlistComponent