package com.exam.ejbexam.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Loan {
    private int id;
    private String name;
    private String address;
    private String phone;
    private double loanAmount;
    private double rateOfInterest;
    private double teamOfLoan;
}
