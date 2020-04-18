import React from "react";
import '../../css/style.css'
import {Link} from "react-router-dom";
class WatchlistComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newListTitle: "New Watchlist",
            editingwid: '',
            activewid: '',
            watchlist: {title: ''},
            currID: ''
        }
    }

    componentWillMount() {
        this.props.findWatchlistsForUser(this.props.uid)
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.uid !== this.props.uid){
            this.props.findWatchlistsForUser(this.props.uid)
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div>
                        <div className="inline">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => this.setState({
                                newListTitle: e.target.value
                                    })}
                                value={this.state.newListTitle}/>
                        </div>
                        <div className="inline">
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => {
                                    const newWatchlist = {title: this.state.newListTitle}
                                    this.props.createWatchlist(this.props.uid, newWatchlist)
                                    }}>
                                <i className="fa fa-fw fa-plus"></i>
                            </button>
                        </div>
                    </div>
                                
                    {!this.props.watchlists &&
                        <h2>No Watchlist Created yet!</h2>
                    }
                    {this.props.watchlists &&
                        <ul className="list-group">
                            {this.props.watchlists.map(watchlist =>
                               <li className="list-group-item"
                                    onClick={() => {
                                        const wid = watchlist.id                                            
                                        this.props.history.push(`/watchlist/${wid}`)
                                        this.setState({activewid: watchlist.id})
                                        }}
                                    key={watchlist.id}>
                                    <a className={`list-group-item
                                        ${(this.state.editingwid === watchlist.id || this.state.activewid === watchlist.id) ? 'active' : ''}`}>
                                        {this.state.editingwid !== watchlist.id &&
                                            <span>{watchlist.title}</span>
                                        }
                                        {this.state.editingwid === watchlist.id &&
                                            <input
                                                onChange={(e) => this.setState({watchlist: {title: e.target.value}})}
                                                value={this.state.watchlist.title}/>
                                        }
                                        {this.state.editingwid === watchlist.id &&
                                            <button onClick={() => {
                                                console.log(this.state.currID)
                                                console.log(this.state.watchlist)
                                                this.props.updateWatchlist(this.state.currID, this.state.watchlist)
                                                    .then(() => this.setState({editingwid: ''}))
                                                }}>
                                                <i className="fa fa-save"></i>
                                            </button>
                                        }
                                        {this.state.editingwid === watchlist.id &&
                                            <button onClick={
                                                () => this.props.deleteWatchlist(watchlist.id)
                                                }>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        }
                                        {this.state.editingwid !== watchlist.id &&
                                            <button onClick={() => {
                                                const wid = watchlist.id
                                                this.props.history.push(`/watchlist/${wid}`)
                                                this.setState({
                                                    watchlist: watchlist,
                                                    currID: watchlist.id,
                                                    editingwid: watchlist.id
                                                })

                                                console.log(watchlist.id)
                                                console.log(this.state.editingwid)
                                                console.log(this.state.editingwid === watchlist.id)
                                                }}>
                                                <i className="fa fa-pencil"></i>
                                            </button>
                                        }
                                    </a>
                                </li>)
                            }
                        </ul>
                    }
                </div>
            </div>
        )
    }
}


export default WatchlistComponent
