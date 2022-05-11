$(document).ready(function ()
 {
    const userDeposit = $("#amount");
    totalamount =1000;
    var arr = JSON.parse(localStorage.getItem("amount")) || [];
    document.getElementById("balance").innerHTML = arr[arr.length - 1];
    if (arr.length == 0) {
        var arr = []
        arr.push(totalamount);
        localStorage.setItem("amount", JSON.stringify(arr));

}
    console.log(arr);
    $("#deposit").click(function () {
        var arr = JSON.parse(localStorage.getItem("amount")) || [];
        var balance = arr[arr.length - 1];
        var amount = Number(userDeposit.val());
        balance =balance+ amount;
        arr.push(balance);
        document.getElementById("balance").innerHTML = arr[arr.length - 1];
        localStorage.setItem("amount", JSON.stringify(arr))
        console.log(arr);

    });
    $("#withdraw").click(function () {
        var arr = JSON.parse(localStorage.getItem("amount")) || [];
        var balance = arr[arr.length - 1]
        var amount = Number(userDeposit.val())
        balance= balance-amount;
        arr.push(balance);
        document.getElementById("balance").innerHTML = arr[arr.length - 1];
        localStorage.setItem("amount", JSON.stringify(arr))
        console.log(arr);
    });
    $("#logout").click(function () {
        window.location.href="jointAccountLogin.html"
    });
});