import React from "react";


//"stock, addToWatchlist"

class CategoryTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocknow: '',
            rating: ''
        }
        this.stock = props.stock
        this.addToWatchlist = props.addToWatchList
    }

    componentDidMount = async () => {
        const stock = await this.searchStock()
        const rating = await this.ratingStock()
        //console.log(rating.rating.recommendation)
        this.setState(
            {
                stocknow: stock.profile.price,
                rating: rating
            }
        )
    }
    searchStock = () =>
        fetch('https://financialmodelingprep.com/api/v3/company/profile/' + this.stock.symbol)
            .then(response => response.json())
    ratingStock = () =>
        fetch('https://financialmodelingprep.com/api/v3/company/rating/' + this.stock.symbol)
            .then(response => response.json())

    render() {
        return (
            <tr>
                <td>{this.stock.name}</td>
                <td>{this.stock.symbol}</td>
                <td>{this.state.stocknow}</td>
                {this.state.rating.rating &&
                <td>{this.state.rating.rating.recommendation}</td>
                }
                {!this.state.rating.rating &&
                <td>Not Clear</td>
                }
                <button>Add to Watchlist</button>
            </tr>
        )
    }
}

export default CategoryTableRow

