class UserService{
    getWatchlistForUser = (userId) => {
        return fetch(`https://localhost:8080/api/users/${userId}/watchlists`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    updateWatchlist = (watchlist) => {
        return fetch(`https://localhost:8080/api/watchlists/${wid}"`, {
            method: 'PUT',
            body: JSON.stringify(watchlist),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }
}
export default UserService;