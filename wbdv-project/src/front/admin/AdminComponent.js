import * as React from "react";

export default class AdminComponent extends React.Component {
    state = {
        stocks: [],
        users: [],
        profile: {}
    }
    DeleteUser = async (userid) => {
        fetch(`https://infinite-retreat-10652.herokuapp.com/api/users/` + userid, {
            method: 'DELETE',
            credentials: "include"
        }).then(status => console.log(this.state.profile))
            .then(result=>fetch(`https://infinite-retreat-10652.herokuapp.com/api/users`, {
            method: 'GET',
            credentials: "include"
        })).then(reseponse => reseponse.json()).then(users => this.setState({
            users: users
        })).then(status => console.log(this.state.profile))
        //this.props.history.push('/admin')

    }


    componentDidMount = async () => {

        fetch(`https://infinite-retreat-10652.herokuapp.com/profile`, {
            method: 'GET',
            credentials: "include"
        }).then(reseponse => reseponse.json()).then(profile => this.setState({
            profile: profile
        })).then(status => console.log(this.state.profile))

        fetch(`https://infinite-retreat-10652.herokuapp.com/api/users`, {
            method: 'GET',
            credentials: "include"
        }).then(reseponse => reseponse.json()).then(users => this.setState({
            users: users
        })).then(status => console.log(this.state.profile))

        fetch(`https://infinite-retreat-10652.herokuapp.com/api/stocks`, {
            method: 'GET',

        }).then(reseponse => reseponse.json()).then(stocks => this.setState({
            stocks: stocks
        })).then(status => console.log(this.state.stocks))

    }

    render() {
        return (
            <div class="container">

                <h5>User List</h5>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Password</th>
                        <th scope="col">Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(user =>
                            <tr>
                                <th scope="row">
                                    {user.id}
                                </th>
                                <td>
                                    {user.username}
                                </td>
                                <td>
                                    {user.password}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    <button
                                         class="btn btn-danger my-0"
                                        onClick={() => {
                                            this.DeleteUser(user.id)
                                        }
                                        }>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <h5>Stock List</h5>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Recommendation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.stocks.map(stock =>
                            <tr>
                                <th scope="row">
                                    {stock.id}
                                </th>
                                <td>
                                    {stock.name}
                                </td>
                                <td>
                                    {stock.category}
                                </td>
                                <td>
                                    {stock.recommendation}
                                </td>

                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>)
    }
}