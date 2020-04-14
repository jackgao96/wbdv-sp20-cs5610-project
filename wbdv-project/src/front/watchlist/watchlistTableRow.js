import React from "react";

const watchlistTableRow = ({stock, removeFromWatchlist}) =>
    <React.Fragment>
        <table className = "table">
            <tdead className = "tdead-light ">
                <tr className='row'>
                    <td className = "d-none d-sm-table-cell" scope="col">{stock.name}</td>
                    <td className = "d-none d-md-table-cell" scope="col">{stock.symbol}</td>
                    <td className = "d-none d-md-table-cell" scope="col">{stock.price}</td>
                    <td className = "d-none d-md-table-cell" scope="col">{stock.recommendation}</td>
                    <td scope="col">
                        <button className= "btn btn-success" onClick={removeFromWatchlist(stock.getId())}>Remove from watchlist</button>
                    </td>
                </tr>
            </tdead>
        </table>
    </React.Fragment>
export default watchlistTableRow
