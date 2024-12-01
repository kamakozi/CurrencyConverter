let currency = document.getElementById("currency") as HTMLSelectElement;
let currency1 = document.getElementById("currency1") as HTMLSelectElement;
let amount = document.getElementById("amount") as HTMLInputElement;
let convertBtn = document.getElementById("convertBtn") as HTMLButtonElement;
let result = document.getElementById("result") as HTMLHeadingElement;
let list = document.getElementById("list") as HTMLOListElement;
let clear = document.getElementById("clear") as HTMLButtonElement;

convertBtn.addEventListener("click", () => {
    if(currency.value == "USD"){
        if (currency1.value == "USD"){
            alert("Can't convert to the same currency!")
            return;
        }else if(currency1.value == "EUR"){
            let eur = 0.95
            let converter = Number(amount.value) * eur;
            result.innerHTML ="Total: " + converter.toString() + "€";
            let history = document.createElement("li");
            history.innerHTML= "From " + amount.value + "$ to " + result.innerHTML;
            list.appendChild(history);
        }else if (currency1.value == "GBP"){
            let gbp = 0.79;
            let converter = Number(amount.value) * gbp;
            result.innerHTML = "Total: " + converter.toString() + "£";
            let history = document.createElement("li");
            history.innerHTML= "From " + amount.value + "$ to " + result.innerHTML;
            list.appendChild(history);
        }

    }else if(currency.value == "GBP"){
        if(currency1.value == "GBP"){
            alert("Can't convert to the same currency!")
            return;
        }else if(currency1.value == "EUR"){
            let eur = 1.20
            let converter = Number(amount.value) * eur;
            result.innerHTML = "Total: " + converter.toString() + "€"
            let history = document.createElement("li");
            history.innerHTML= "From " + amount.value + "£ to " + result.innerHTML;
            list.appendChild(history);
        }else if (currency1.value == "USD"){
            let usd = 1.27
            let converter = Number(amount.value) * usd;
            result.innerHTML = "Total: " + converter.toString() + "$"
            let history = document.createElement("li");
            history.innerHTML= "From " + amount.value + "£ to " + result.innerHTML;
            list.appendChild(history);
        }
    }else if(currency.value == "EUR"){
        if(currency1.value == "EUR"){
            alert("Can't convert to the same currency!")
            return;
        }else if(currency1.value == "GBP"){
            let gbp = 0.83
            let converter = Number(amount.value) * gbp;
            result.innerHTML = "Total: " + converter.toString() + "£"
            let history = document.createElement("li");
            history.innerHTML= "From " + amount.value + "€ to " + result.innerHTML;
            list.appendChild(history);
        }else if (currency1.value == "USD"){
            let usd = 1.06
            let converter = Number(amount.value) * usd;
            result.innerHTML = "Total: " + converter.toString() + "$"
            let history = document.createElement("li");
            history.innerHTML= "From " + amount.value + "€ to " + result.innerHTML;
            list.appendChild(history);
        }
    }

    clear.addEventListener("click", () => {
    list.innerHTML = "";
    })
})

