function calc() {
    let kreditSum = document.getElementById("kredit-sum").value;
    let yearPercent = document.getElementById("year-percent").value;
    let year = document.getElementById("year").value;
    let startPercent = document.getElementById("start-percent").value;
    let period = document.getElementById("year-period").value;
    let month = document.getElementById("month").value;
    let oylar = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];


    let startPayment = kreditSum * startPercent / 100;
    document.getElementById("start-payment").innerHTML = startPayment + "Sum";

    let givenSum = kreditSum - startPayment;
    document.getElementById("givin-sum").innerHTML = givenSum + "Sum";

    let monthPayment = givenSum / (period * 12);
    document.getElementById("month-payment").innerHTML = monthPayment + "Sum";

    let result = "";
    let percentPayment = givenSum * yearPercent / 1200;

    let total = 0;
    let oy = 0;
    let foiz = 0;

    for (let i = 0; i < period * 12; i++) {
        if (i !== 0 && ((parseInt(month) + i) % 12) === 0) {
            year = parseInt(year) + 1;
        }

        result +=
            "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + year + "</td>" +
            "<td>" + oylar[(parseInt(month) + parseInt(i)) % 12] + "</td>" +
            "<td>" + givenSum + " so'm</td>" +
            "<td>" + monthPayment + " so'm</td>" +
            "<td>" + percentPayment + " so'm</td>" +
            "<td>" + (monthPayment + percentPayment) + "</td>" +
            "</tr>";


        total +=
            (monthPayment + percentPayment);

        oy +=
            (monthPayment);

        foiz +=
            (percentPayment);

        givenSum -= monthPayment;
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("foot").innerHTML = (total + startPayment);
    document.getElementById("oylik").innerHTML = oy;
    document.getElementById("foiz").innerHTML = foiz;
}