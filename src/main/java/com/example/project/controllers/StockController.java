package com.example.project.controllers;

import com.example.project.models.Stock;
import com.example.project.services.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StockController {
    @Autowired
    StockService service;
    @GetMapping("/api/stocks")
    public List<Stock> findAllStocks(){return service.findAllStocks();}
    @GetMapping("/api/stocks/{sid}")
    public Stock findStockById(@PathVariable("sid") Integer sid){return service.findStockById(sid);}
    @GetMapping("/api/watchlists/{wid}/stocks")
    public List<Stock> findStocksForWatchlist(@PathVariable("wid") String wid){
        int wwid;
        try{
            wwid = Integer.parseInt(wid);
            return service.findStocksForWatchlist(wwid);
        }catch (NumberFormatException e){
            List<Stock> result = new ArrayList<>();
            return result;
        }

    }
}
