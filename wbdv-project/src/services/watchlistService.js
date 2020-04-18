class watchlistService{
    getWatchlistForUser = async (userId) => {
        return await fetch(`https://infinite-retreat-10652.herokuapp.com/api/users/${userId}/watchlists`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }
    createWatchlist = async (userId, watchlist) => {
        const response = await fetch(`https://infinite-retreat-10652.herokuapp.com/api/users/${userId}/watchlists`, {
            method: "POST",
            body: JSON.stringify(watchlist),
            headers: {
                'content-type': 'application/json'
            }
        })
        return await response.json() 
    }
    deleteWatchlist = async (wid) => {
        const response = await fetch(`https://infinite-retreat-10652.herokuapp.com/api/watchlists/${wid}`, {
            method: 'DELETE'
        })
        return await response.json()
    }
    updateWatchlist = async (wid,watchlist) => {
        return await fetch(`https://infinite-retreat-10652.herokuapp.com/api/watchlists/${wid}`, {
            method: 'PUT',
            body: JSON.stringify(watchlist),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }
}
export default watchlistService;
