import React from "react";
import watchlistTableRow from './watchlistTableRow'

class watchlistTableComponent extends React.Component {

    render(){
        return(
            <div className= "container-fluid">
                <h1 id = "uid">{this.props.userId}'s watchlist</h1>
                <table className = "table">
                    <thead className = "thead-light ">
                    <tr className='row'>
                        <th scope="col">Title</th>
                        <th className = "d-none d-sm-table-cell" scope="col">Stock name</th>
                        <th className = "d-none d-md-table-cell" scope="col">Stock symbol</th>
                        <th className = "d-none d-md-table-cell" scope="col">Market price</th>
                        <th className = "d-none d-md-table-cell" scope="col">Recommendation</th>
                        <th scope="col">
                        </th>

                    </tr>
                    </thead>

                    <tbody>
                    {

                        this.props.stocks.map ( (stock, index) =>
                            <watchlistTableRow
                                removeFromWatchlist={this.props.removeFromWatchlist}
                                stock={stock}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default watchlistTableComponent