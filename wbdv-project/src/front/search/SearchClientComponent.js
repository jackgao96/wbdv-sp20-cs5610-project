import {connect, Provider} from "react-redux";
import React from "react";

class SearchClientComponent extends React.Component {
    state = {
        stockname: ''
    }

    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props)
        if (this.props.stock !== prevProps.stock) {
            this.setState({stock: this.props.stock})
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar with our cool logo</a>
                    </nav>
                </div>
                <div className="container">
                    <h1>self-research</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search the Stock"
                               aria-label="Recipient's username" aria-describedby="button-addon2"
                               onChange={(e) => {
                                   const newStock = e.target.value
                                   this.setState(prevState => ({
                                       stockname: newStock
                                   }))
                               }}
                               value={this.state.stockname}/>

                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                                    onClick={() => {
                                        this.props.searchStock(this.state.stockname)
                                            .then(() =>
                                                this.setState({
                                                    stockname: ''
                                                })
                                            )
                                        console.log(this.props)
                                    }
                                    }
                            >Search
                            </button>
                        </div>
                        {
                            console.log(this.props.stock)
                        }
                        {this.props.stock.price &&
                        <div className="container">
                            <p>Stock Name:{this.props.stock.symbol}</p>
                            <p>Current Price:{this.props.stock.price}</p>
                            <p>Recommendation: Strong Buy</p>
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
        //topics: state.topics.topics
        stock: state.stock.stock

    }

)
const dispatcherToPropertyMapper = (dispatcher) => ({
    searchStock: stockid =>
        fetch('https://financialmodelingprep.com/api/v3/stock/real-time-price/' + stockid)
            .then(response => response.json())
            .then(stock => dispatcher({
                type: 'SEARCH_STOCK',
                stock: stock
            }))
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(SearchClientComponent)

