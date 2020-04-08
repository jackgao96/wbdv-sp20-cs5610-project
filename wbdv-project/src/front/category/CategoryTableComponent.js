import React from "react";
import CategoryTableRow from './CategoryTableRow'

class CategoryTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount = async() => {

    }

    render(){
        return(
            <div className= "container-fluid">
                <h1 id = "categoryHeading">{this.props.category}</h1>
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

                        this.props.stocks.map(function (stock, index) {
                            return <CategoryTableRow
                                addToWatchlist={this.props.addToWatchList}
                                stock={stock}/>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default CategoryTableComponent