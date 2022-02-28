;(function () {

    'use strict';

    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}

document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.getElementById("btn-submit");
    var txtId = document.forms['loan-form']['id'];
    var txtName = document.forms['loan-form']['name'];
    var txtAddress = document.forms['loan-form']['address'];
    var txtPhone = document.forms['loan-form']['phone'];
    var txtLoanAmount = document.forms['loan-form']['loanAmount'];
    var txtRateOfInterest = document.forms['loan-form']['rateOfInterest'];
    var txtTeamOfLoan = document.forms['loan-form']['teamOfLoan'];
    btnSubmit.onclick = function () {
        var id = txtId.value;
        var name = txtName.value;
        var address = txtAddress.value;
        var phone = txtPhone.value;
        var loanAmount = txtLoanAmount.value;
        var rateOfInterest = txtRateOfInterest.value;
        var teamOfLoan = txtTeamOfLoan.value;
        var dataToSend = {
            "id": id,
            "name": name,
            "address": address,
            "phone": phone,
            "loanAmount": loanAmount,
            "rateOfInterest": rateOfInterest,
            "teamOfLoan": teamOfLoan
        }
        // xu ly request len server
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            // kiem tra trang thai request hoan thanh (readystate ==1) va tao thanh cong(status == 201)
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 201) {
                alert('Create loan success!');
                window.location.href = "/loan.html";
            }
        }
        xmlHttpRequest.open('post', 'http://localhost:8080/api/v1/loans', false);
        // sua kieu du lieu gui len co dang json phai dung sau open
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
        xmlHttpRequest.send(JSON.stringify(dataToSend)); //gui du lieu o dinh dang json
    }
})