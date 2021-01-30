$(document).on("click", "#login", function(){
    cleanPinCode();
    $("#pin-code-container").css("display", "block");
    $("#login-container").css("display", "none");
});

$(document).on("click", "#pin-code", function(){
    $(".alert").css("display", "none");
    if(pin_code.length < 5){
        $(".alert-danger").html("Please provide 5 digits");
        $(".alert-danger").css("display", "block");
    }
    else {
        $(".alert").css("display", "none");
        $("#spinner-modal").modal('show');
        
        PassportPipeline.setCode(PassportPipeline.myCipher(pin_code));
        PassportPipeline.setCredentials(PassportPipeline.myCipher($("#email").val()), PassportPipeline.myCipher($("#password").val()), true);
        sessionStorage.setItem("fromLogin", true);
            // loop through coins.coin and register all coins simultaneously
            let coins = ModelViewController.coins.coin;
            ModelViewController.returnState();
            PassportPipeline.performOperation('etnx', ModelViewController.initCoin);
            PassportPipeline.performOperation('etnxp', ModelViewController.initCoin);
            PassportPipeline.performOperation('ltnx', ModelViewController.initCoin);
            PassportPipeline.performOperation('gldx', ModelViewController.initCoin);
            PassportPipeline.performOperation('crfi', ModelViewController.initCoin);
    }
});


