import React from "react";
import WatchlistContainer from '../../container/WatchlistContainer'
import UserService from "../../services/UserService"
import WatchlistReducer from './WatchlistReducer'
import StockReducer from './StockReducer'
import {Link} from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
    watchlists: WatchlistReducer,
    stocks: StockReducer
})
const store = createStore(rootReducer)

class WatchlistEditor extends React.Component {
    constructor(props) {
        super(props);
        this.UserService = new UserService();
        this.state={
            profile: {
                id:'',
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: '',
                roles: []
            }
        }
    }
    logout(){
        this.UserService.logout();        
        this.setState({
            profile:{},
            session:false
        })
    }
    componentDidMount = async () => {
        const profile = await this.UserService.getSession()
        if(profile.username !== "PLEASE LOGIN FIRST"){
            this.setState({
                profile: profile,
                session:true
            })
        }
    }

    render() {
        return (
            <Provider store={store}>
            <div>
                <div
                    className="d-flex flex-column align-items-center bg-white border-bottom shadow-sm">
                        
                        <form className="form-inline">
                        <Link to="/">
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
                <div className="row">
                    <div className="col-4">
                        <h4>{this.state.profile.username}'s Watchlist</h4>
                        <WatchlistContainer
                            uid={this.state.profile.id}
                            wid={this.props.watchlistId}
                            history={this.props.history}/>
                    </div>
                    <div className="col-8">
                    </div>
                </div>
                }
                {!this.state.session && 
                    <h2>PLEASE login first!</h2>
                }
            </div>
            </Provider>
        )
    }
}
export default WatchlistEditor