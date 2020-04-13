import React from "react";
import './watchlistTableComponent'
import watchlistTableComponent from "./watchlistTableComponent";
import watchlistService from "../../services/watchlistService";
import stockService from "../../services/StockService"


class watchlistComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.userId = this.props.match.params.userId;
        this.watchlistService = new watchlistService();
        this.stockService = new stockService();
    }
    state = {
        watchlist : []
    }

    componentDidMount = async () => {
        const serviceList = await this.watchlistService.getWatchlistForUser(this.userId)
        console.log(serviceList)
        this.setState({
            watchlist: serviceList,
        })
    }

    removeFromWatchlist = async (stock) => {
        this.stockService.removeStockFromWatchlist(stock).
            then(this.setState(
                this.state.watchlist = this.watchlistService.getWatchlistForUser(this.userId)
        ))
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