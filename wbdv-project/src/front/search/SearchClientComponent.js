import {connect, Provider} from "react-redux";
import React from "react";

class SearchClientComponent extends React.Component {
    state = {
        stockname: '',
        gainstock: [],
        losestock: [],
        profile: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            roles: []
        }
    }

    componentDidMount = async () => {
        const initstock = await this.props.initGainer()
        const initstock2 = await this.props.initLoser()

        fetch(`https://infinite-retreat-10652.herokuapp.com/profile`, {
            method: 'POST',
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
                    <div class="row">
                        <hr/>
                        Hi {this.state.profile.username}!
                    </div>
                    <div class="row">
                        <hr/>
                        <div class=" pull-right">
                            <button
                                onClick={()=>{

                                    this.logout()
                                    this.props.history.push('/home')

                                }}

                                className={`btn btn-danger`}>
                                Logout
                            </button>
                        </div>
                    </div>
                    <div class="input-group-prepend">
                        <input type="text" className="form-control" placeholder="Search the Stock"
                               onChange={(e) => {
                                   const newStock = e.target.value
                                   this.setState(prevState => ({
                                       stockname: newStock
                                   }))
                               }}
                               value={this.state.stockname}/>
                        <div className="input-group-prepend">
                            <button class="btn bg-info btn-rounded my-0" type="submit"
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
                    <div class="row">
                        <div class="col-sm-6">
                            <h3 class="alert alert-success">
                                Today's Top Gainer
                            </h3>

                            {
                                //console.log(this.state.initstock.mostGainerStock)
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
                                //console.log(this.props.initstock)
                            }
                        </div>
                        <div class={"col-sm-6"}>
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
                                //console.log(this.props.initstock)
                            }
                        </div>
                    </div>
                    {this.props.stock.profile &&
                    <div className="container">
                        <div>
                            <h3 className="alert alert-info">
                                Search Result
                            </h3>
                        </div>
                        <img src={this.props.stock.profile.image}/>
                        <p><h5>Stock Name:</h5>{this.props.stock.symbol}</p>
                        <p><h5>Company website:</h5><a href={this.props.stock.profile.website}>{this.props.stock.profile.website}</a></p>
                        <p><h5>Current Price:</h5>{this.props.stock.profile.price}</p>
                        <p><h5>Description:</h5>{this.props.stock.profile.description}</p>
                        <p><h5>Recommendation:</h5> Strong Buy</p>
                    </div>
                    }
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

