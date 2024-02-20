$(document).ready(function () {
  $(".dropshadowBox").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("fiveHundreds")) {
      $(".progress-bar .progressbar-movable").css("width", "100%");
      $(".package-details")
        .html(`<div class="d-flex align-items-center" style="max-width: 393px;">
            <div class="text-success fw-bold" style="font-size: 46px;">100%</div>
            <div style="text-align: left;border-left: 2px solid green;margin-left:20px;padding-left:20px">Earn a 100% bonus when you deposit between 0 and 500 USD.</div>
          </div>
          <div><span class="shadow-sm" style="background-color: white;padding:4px 5px;border-radius: 3px;">Example:</span> When you deposit 100 USD, you’ll have a total trading equity of 200 USD to trade with!
              <br><br>
              <a href="" class="btn btn-success px-5 fs-4">Deposit</a>
          </div>`);
    } else if ($(this).hasClass("tenThousand")) {
      $(".progress-bar .progressbar-movable").css("width", "50%");
      $(".package-details")
        .html(`<div class="d-flex align-items-center" style="max-width: 336px;">
              <div class="text-success fw-bold" style="font-size: 46px;">50%</div>
              <div style="text-align: left;border-left: 2px solid green;margin-left:20px;padding-left:20px">Deposits of 10,001 USD and above earn a 25% bonus.</div>
          </div>
          <div><span class="shadow-sm" style="background-color: white;padding:4px 5px;border-radius: 3px;">Example:</span> With a 20,000 USD deposit, your total trading equity becomes an impressive 25,000 USD!
              <br><br>
              <a href="" class="btn btn-success px-5 fs-4">Deposit</a> 
          </div>`);
    } else if ($(this).hasClass("beyondTenThousand")) {
      $(".progress-bar .progressbar-movable").css("width", "25%");
      $(".package-details")
        .html(`<div class="d-flex align-items-center" style="max-width: 336px;">
            <div class="text-success fw-bold" style="font-size: 46px;">25%</div>
            <div style="text-align: left;border-left: 2px solid green;margin-left:20px;padding-left:20px">Deposits of 10,001 USD and above earn a 25% bonus.</div>
          </div>
          <div><span class="shadow-sm" style="background-color: white;padding:4px 5px;border-radius: 3px;">Example:</span> With a 20,000 USD deposit, your total trading equity becomes an impressive 25,000 USD!
              <br><br>
              <a href="" class="btn btn-success px-5 fs-4">Deposit</a>
              
          </div>`);
    } else {
      console.log("nothing");
    }
  });
});
