import React from "react";
import WatchlistTableComponent from "./watchlistTableComponent";
import WatchlistService from "../../services/watchlistService";
import StockService from "../../services/StockService";
import UserService from "../../services/UserService";
import {Link} from "react-router-dom";

class WatchlistComponent extends React.Component {
    constructor(props) {
        super(props);
        this.WatchlistService = new WatchlistService();
        this.StockService = new StockService();
        this.UserService = new UserService();
        this.state={
            watchlist : [],
            profile: {
                id:'',
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: '',
                roles: []
            },
            newListTitle: 'Whatever',
            session:false
        }
    }
    logout(){
        this.UserService.logout();
        
        this.setState({
            profile:{},
            session:false
        })
    }
    updateForm = (e) =>
        this.setState({
            newListTitle: e.target.value
        })
    addWatchlist = async () =>
    {
        const newWatchlist = {
            title: this.state.newListTitle
        }
        console.log(newWatchlist)
        const actualWatchlist = await this.WatchlistService.createWatchlist(this.state.profile.id,newWatchlist)
        const allwatchlist = await this.WatchlistService.getWatchlistForUser(this.state.profile.id)
        this.setState({
            watchlist: allwatchlist
        })
    }
    deleteWatchlist = async (deletedWatchlist) => {
        const status = await this.WatchlistService.deleteWatchlist(deletedWatchlist._id)
        const allwatchlist = await this.WatchlistService.getWatchlistForUser(this.state.profile.id)
        this.setState({
            watchlist: allwatchlist
        })
    }
    updateWatchlist = async (updatedWatchlist) => {
        const status = await this.WatchlistService.updateWatchlist(updatedWatchlist._id)
        const allwatchlist = await this.WatchlistService.getWatchlistForUser(this.state.profile.id)
        this.setState({
            watchlist: allwatchlist
        })
    }
    componentDidMount = async () => {
        const profile = await this.UserService.getSession()
        if(profile.username !== "PLEASE LOGIN FIRST"){
            this.setState({
                profile: profile,
                session:true
            })
            const serviceList = await this.WatchlistService.getWatchlistForUser(this.state.profile.id)
            console.log(serviceList)
            this.setState({
                watchlist: serviceList,
            })
        }
    }

    render() {
        return (
            <div>
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
                            <button className="btn btn-outline-dark">self-research></button>
                        </Link>
                        <div hidden={this.state.session}>
                        <Link className="" to="/login">
                            <button className="btn btn-outline-primary">Log in</button>
                        </Link>
                        </div>
                        <div hidden={this.state.session}>
                        <Link to="/register">
                            <button className="btn btn-outline-primary">Sign up</button>
                        </Link>
                        </div>
                        <div hidden={!this.state.session}>
                            <button className="btn btn-outline-primary" onClick={()=>this.logout()}>Log out</button>
                        </div>
                        </form>
                    
                </div>
                {this.state.session && 
                <WatchlistTableComponent
                    profile = {this.state.profile}
                    watchlists ={this.state.watchlist}
                    updateForm = {this.updateForm}
                    deleteWatchlist = {this.deleteWatchlist}
                    addWatchlist = {this.addWatchlist}
                    updateWatchlist = {this.updateWatchlist}
                    newListTitle = {this.state.newListTitle}
                />}
                {!this.state.session && 
                    <h2>PLEASE login first!</h2>
                }
            </div>
        )
    }
}


export default WatchlistComponent