import React from 'react'

export default class StockTabComponent extends React.Component{
    componentDidMount(){
        this.props.findStocksForWatchlist(this.props.wid)
    }
    componentDidUpdate(prevState, prevProps, snapshot){
        if(prevState !== this.state || prevProps.wid != this.props.wid){
            this.props.findStocksForWatchlist(this.props.wid)
        }
    }
    state = {
        activeStockId: this.props.sid,
        stock: {title:''},
        currID: ''
    }
    render(){
        return(
            <ul className="nav nav-pills">
                {
                    this.props.stocks && this.props.stocks.map(stock => 
                        <li className={`nav-item`}
                            onClick={
                                ()=>{
                                    this.props.history.push(`/watchlist/${this.props.wid}/stock/${stock.id}`)
                                    this.setState({
                                        activeStockId: stock.id
                                    })
                                }
                            }
                            key={stock.id}>
                            <a className={`nav-item ${this.state.activeStockId===stock.id ? 'active':''}`}>
                                <span>{stock.name}</span>
                                <button onClick={
                                    ()=>this.props.deleteStock(this.props.wid, stock.id)
                                }>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </a>
                        </li>
                    )
                }
                
            </ul>
        )
    }
}