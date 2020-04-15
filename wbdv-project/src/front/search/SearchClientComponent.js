import {connect, Provider} from "react-redux";
import React from "react";
import SearchDetail from "./SearchDetail";

class SearchClientComponent extends React.Component {
    state = {
        stockname: '',
        gainstock: [],
        losestock: [],
        profile: {
            id:'',
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            roles: []
        },
        viewdetail: 0
    }

    componentDidMount = async () => {
        const initstock = await this.props.initGainer()
        const initstock2 = await this.props.initLoser()
        fetch(`https://infinite-retreat-10652.herokuapp.com/profile`, {
            method: 'GET',
            credentials: "include"
        }).then(reseponse => reseponse.json()).then(profile => this.setState({
            profile: profile
        })).then(status => console.log(this.state.profile))

        this.setState({
            gainstock: initstock,
            losestock: initstock2
        })
        console.log(this.state.profile)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props)
        if (this.props.stock !== prevProps.stock) {
            this.setState({stock: this.props.stock})
        }
    }

    logout = () => {
        fetch(`https://infinite-retreat-10652.herokuapp.com/logout`, {
            method: 'POST',
            credentials: "include"
        })


    }

    render() {
        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/home">Navbar with our cool logo</a>
                    </nav>
                </div>
                <div className="container">
                    <h1>self-research</h1>
                    <div className="row">
                        <hr/>
                        Hi {this.state.profile.username}!
                    </div>
                    <div className="row">
                        <hr/>
                        <div className="pull-right">
                            <button
                                onClick={() => {

                                    this.logout()
                                    this.props.history.push('/home')

                                }}

                                className={`btn btn-danger`}>
                                Logout
                            </button>
                        </div>
                    </div>
                    <div className="input-group-prepend">
                        <input type="text" className="form-control" placeholder="Search the Stock"
                               onChange={(e) => {
                                   const newStock = e.target.value
                                   this.setState(prevState => ({
                                       stockname: newStock
                                   }))
                               }}
                               value={this.state.stockname}/>
                        <div className="input-group-prepend">
                            <button className="btn bg-info btn-rounded my-0" type="submit"
                                    onClick={() => {
                                        this.props.searchStock(this.state.stockname)
                                            .then(() =>
                                                this.setState({
                                                    stockname: ''
                                                })
                                            )
                                    }
                                    }>Search
                            </button>
                        </div>
                    </div>
                    {this.props.stock.profile &&
                    <div className="container">
                        <div>
                            <h3 className="alert alert-info">
                                Search Result
                            </h3>
                        </div>
                        {this.state.viewdetail == 0 &&
                        <div>
                            <p><h5>Stock Name:</h5>{this.props.stock.profile.companyName}</p>
                            <button
                                className="btn bg-info btn-rounded my-0" type="submit"
                                onClick={() =>
                                    this.setState({
                                        viewdetail: 1
                                    })
                                }
                            >Show Details
                            </button>
                        </div>}
                        {this.state.viewdetail == 1 &&
                        <div>
                            <SearchDetail stock={this.props.stock}></SearchDetail>
                            <button
                                className="btn bg-info btn-rounded my-0" type="submit"
                                onClick={() =>
                                    this.setState({
                                        viewdetail: 0
                                    })
                                }
                            >Hide Details
                            </button>
                        </div>
                        }
                    </div>
                    }
                </div>
                    <div className="row container">
                        <div className="col-sm-6">
                            <h3 className="alert alert-success">
                                Today's Top Gainer
                            </h3>

                            {
                                this.state.gainstock.mostGainerStock && this.state.gainstock.mostGainerStock.map(itstock =>
                                    <div className="row container">
                                        <h5>Name:</h5> {itstock.companyName}
                                        {itstock.ticker}
                                        <h5>Percentage:</h5>
                                        {itstock.changesPercentage}
                                        <h5>Price:</h5>
                                        {itstock.price}
                                    </div>
                                )
                            }
                        </div>
                        <div className={"col-sm-6"}>
                            <h3 className="alert alert-danger">
                                Today's Top Loser
                            </h3>

                            {
                                //console.log(this.state.initstock.mostGainerStock)
                                this.state.losestock.mostLoserStock && this.state.losestock.mostLoserStock.map(itstock =>
                                    <div className="row container">
                                        <h5>Name:</h5> {itstock.companyName}
                                        {itstock.ticker}
                                        <h5>Percentage:</h5>
                                        {itstock.changesPercentage}
                                        <h5>Price:</h5>
                                        {itstock.price}
                                    </div>
                                )
                            }
                        </div>
                    </div>

            </div>

        )
    }
}

const stateToPropertyMapper = (state) => ({
        //topics: state.topics.topics
        stock: state.stock.stock,
        initstock: state.stock.initstock

    }

)
const dispatcherToPropertyMapper = (dispatcher) => ({
    searchStock: stockid =>
        fetch('https://financialmodelingprep.com/api/v3/company/profile/' + stockid)
            .then(response => response.json())
            .then(stock => dispatcher({
                type: 'SEARCH_STOCK',
                stock: stock
            })),
    initGainer: async () =>
        fetch('https://financialmodelingprep.com/api/v3/stock/gainers')
            .then(response => response.json()),
    initLoser: async () =>
        fetch('https://financialmodelingprep.com/api/v3/stock/losers')
            .then(response => response.json())

})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(SearchClientComponent)

