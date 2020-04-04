package com.example.project.controllers;

import com.example.project.models.Watchlist;
import com.example.project.services.WatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WatchlistController {
    @Autowired
    WatchlistService service;
    @GetMapping("/api/watchlists")
    public List<Watchlist> findAllWatchlists(){
        return service.findAllWatchlists();
    }
    @GetMapping("/api/watchlists/{wid}")
    public Watchlist findWatchlistById(@PathVariable("wid") Integer wid){
        return service.findWatchlistById(wid);
    }
    @GetMapping("/api/users/{uid}/watchlists")
    public List<Watchlist> findWatchlistsForUser(@PathVariable("uid") String uid){
        int uuid;
        try{
            uuid = Integer.parseInt(uid);
            return service.findWatchlistsForUser(uuid);
        }catch (NumberFormatException e){
            List<Watchlist> result = new ArrayList<>();
            return result;
        }
    }

}
