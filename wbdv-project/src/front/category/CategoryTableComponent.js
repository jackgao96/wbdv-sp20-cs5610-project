import React from "react";
import CategoryTableRow from './CategoryTableRow'

const CategoryTableComponent = ({category, stocks, addToWatchList}) =>
    <div className= "container-fluid">
        <h1 id = "categoryHeading">{category}</h1>
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
                stocks.map(function (stock, index) {
                    return <CategoryTableRow
                        addToWatchlist={addToWatchList}
                        stock={stock}/>
                })
            }
            </tbody>
        </table>
    </div>
export default CategoryTableComponent