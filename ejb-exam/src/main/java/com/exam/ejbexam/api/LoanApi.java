package com.exam.ejbexam.api;

import com.exam.ejbexam.entity.Loan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/loans")
public class LoanApi{
    static ArrayList<Loan> list = new ArrayList<>();
    {

    }
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<ArrayList<Loan>> getList(){
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity save(@RequestBody Loan loan){
        list.add(loan);
        return new ResponseEntity<>(loan, HttpStatus.CREATED);
    }
}
