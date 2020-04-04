package com.example.project.services;

import com.example.project.models.User;
import com.example.project.models.Watchlist;
import com.example.project.repositories.UserRepository;
import com.example.project.repositories.WatchlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class WatchlistService {
    @Autowired
    private WatchlistRepository watchlistRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Watchlist> findAllWatchlists(){
        return watchlistRepository.findAllWatchlists();
    }

    public Watchlist findWatchlistById(Integer wid){
        return watchlistRepository.findWatchlistById(wid);
    }

    public List<Watchlist> findWatchlistsForUser(Integer uid){
        User tempuser = userRepository.findUserById(uid);
        if(tempuser==null){
            return null;
        }else{
            return tempuser.getWatchlists();
        }

    }

}
