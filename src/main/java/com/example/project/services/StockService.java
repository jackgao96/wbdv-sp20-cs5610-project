package com.example.project.services;

import com.example.project.models.Stock;
import com.example.project.models.Watchlist;
import com.example.project.repositories.StockRepository;
import com.example.project.repositories.WatchlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;
    @Autowired
    private WatchlistRepository watchlistRepository;

    public List<Stock> findAllStocks(){
        return stockRepository.findAllStocks();
    }
    public Stock findStockById(Integer sid){
        return stockRepository.findStockById(sid);
    }

    public List<Stock> findStocksForWatchlist(Integer wid){
        Watchlist tempwl = watchlistRepository.findWatchlistById(wid);
        if(tempwl==null){
            return null;
        }else{
            return tempwl.getStocks();
        }
    }
}
