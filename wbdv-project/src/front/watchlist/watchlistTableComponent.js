import React from "react";
import WatchlistTableRow from './WatchlistTableRow'

class WatchlistTableComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className= "container-fluid">
                <h1 id = "uid">{this.props.profile.username}'s watchlist</h1>
                <div className="collapse navbar-collapse">
                    <label className="navbar-brand">WatchList</label>
                </div>
                <div>
                    <div className="input-group">
                        <input
                            type="text" 
                            className="form-control" 
                            onChange={this.props.updateForm}
                            value={this.props.newListTitle}/>
                        <div className="input-group-append">
                                <button 
                                    className="btn btn-outline-secondary" 
                                    onClick={this.props.addWatchlist}>
                                    <i className="fa fa-fw fa-plus"></i>
                                </button>
                        </div>
                    </div>
                </div>
                {this.props.watchlists.length===0 &&
                    <h2>No Watchlist Created!</h2>
                }
                {this.props.watchlists.length!==0 &&
                    <ul className="list-group">
                        {
                            this.props.watchlists.map(watchlist => 
                                <li className="list-group-item">
                                    {watchlist.title}
                                </li>
                                )
                        }
                    </ul>
                }
                
            </div>
        )
    }

}

export default WatchlistTableComponent