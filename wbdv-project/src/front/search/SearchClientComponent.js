import {connect, Provider} from "react-redux";
import React from "react";
import SearchDetail from "./SearchDetail";
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";
import AdminService from "../../services/AdminService";

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
        admin:{},
        viewdetail: 0,
        session:false
    }

    logout(){
        UserService.logout();
        AdminService.logout();
        this.setState({
            profile:{},
            admin:{}
        })
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

        fetch(`https://infinite-retreat-10652.herokuapp.com/admin/profile`, {
            method: 'GET',
            credentials: "include"
        }).then(reseponse => reseponse.json()).then(profile => this.setState({
            admin: profile
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
                    <div
                        className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                        <h5 className="my-0 mr-md-auto font-weight-normal"> Logo Here </h5>
                        <img src=""/>
                        <a> About </a>
                    </div>
                    <div
                        className="d-flex flex-column align-items-center bg-white border-bottom shadow-sm">

                        <form className="form-inline">
                            <Link to="/home">
                                <button className="btn btn-outline-dark">home</button>
                            </Link>
                            <Link to="/watchlist">
                                <button className="btn btn-outline-dark">watch-list</button>
                            </Link>
                            <Link to="/research">
                                <button className="btn btn-outline-dark">self-research</button>
                            </Link>
                            <div hidden={this.state.profile.password}>
                                <Link className="" to="/login">
                                    <button className="btn btn-outline-primary">Log in</button>
                                </Link>
                            </div>
                            <div hidden={this.state.profile.password}>
                                <Link to="/register">
                                    <button className="btn btn-outline-primary">Sign up</button>
                                </Link>
                            </div>
                            <div hidden={!this.state.profile.password}>
                                <button className="btn btn-outline-primary" onClick={()=>this.logout()}>Log out</button>
                            </div>
                            <div hidden={!this.state.profile.password}>
                                <Link to="/profile">
                                    <button className="btn btn-outline-primary">Profile</button>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="container">
                    <h1>self-research</h1>
                    <div className="row">
                        <hr/>
                        Hi {this.state.profile.username}
                        {this.state.admin.username}!
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
                            <div class="row">
                            <button
                                className="btn bg-info btn-rounded my-0" type="submit"
                                onClick={() =>
                                    this.setState({
                                        viewdetail: 1
                                    })
                                }
                            >Show Details
                            </button>
                            <button
                                className="btn bg-info btn-rounded my-0" type="submit"
                                onClick={() =>
                                    this.setState({
                                        viewdetail: 1
                                    })
                                }
                            >Add to Watchlist
                            </button>
                            </div>
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

