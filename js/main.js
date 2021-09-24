// const { async } = require("./solanaWeb3");

// const { async } = require("./solanaWeb3");

$(document).ready(async function() {


    "use strict";
    let redirectFlag = true;
    let addressBal = sessionStorage.getItem("addressBal");

    if (addressBal != undefined) {

        let addressBal2 = JSON.parse(addressBal);
        $(".walletInfo").append("<style>#connect { display:none !important;}</style>"); // $(".address").text(addressBal2.address._bn);
        $(".trigger-drop").text(addressBal2.address._bn.substring(0, 6) + ".." + addressBal2.address._bn.substring(addressBal2.address._bn.length - 4, addressBal2.address._bn.length));
        $(".balance").html(addressBal2.Balance);
        if (addressBal2.walletName == "phantom") {
            $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="img/phantom-logo.png" alt="walletConnect">`);
        } else if (addressBal2.walletName == "solfare") {
            $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="img/solfare-logo.png" alt="WalletConnect">`);
        } else if (addressBal2.walletName == "coin98") {
            $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="img/coin98-logo.png" alt="WalletConnect">`);
        } else if (addressBal2.walletName == "sollet") {
            $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="img/sollet.png" alt="WalletConnect">`);
        } else if (addressBal2.walletName == "slope") {
            $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="img/slope-logo.png" alt="WalletConnect">`);
        }
        $(".walletInfo").css("opacity", "1");

    } else {
        $(".walletInfo").append(`<style>@media only screen and (max-width: 650px) { #connect { display:inline-block !important;}} </style>`);
    }

    $("body").append(`<div class="sc-fujyUd cFRqqZ web3modal-modal-card"><div class="headClose"><div class="connect dis">Connect to a wallet</div><div class="close sc-eCApGN cjAFRf web3modal-provider-wrapper">X</div>
   </div><div class="sc-eCApGN cjAFRf web3modal-provider-wrapper"><div class="sc-hKFyIo jcNZzC web3modal-provider-container"><div class="sc-gtssRu bktcUM web3modal-provider-name">MetaMask</div><div class="sc-dlnjPT eFHlqH web3modal-provider-description">Phantom</div><div class="sc-bdnylx jMhaxE web3modal-provider-icon"><img src="img/wallet/phantom.png" alt="MetaMask"></div></div></div><div class="sc-eCApGN cjAFRf web3modal-provider-wrapper"><div class="sc-hKFyIo jcNZzC web3modal-provider-container"><div class="sc-gtssRu bktcUM web3modal-provider-name">MetaMask</div><div class="sc-dlnjPT eFHlqH web3modal-provider-description">Sollet</div><div class="sc-bdnylx jMhaxE web3modal-provider-icon"><img src="img/wallet/sollet.png" alt="MetaMask"></div></div></div><div class="sc-eCApGN cjAFRf web3modal-provider-wrapper"><div class="sc-hKFyIo jcNZzC web3modal-provider-container"><div class="sc-gtssRu bktcUM web3modal-provider-name">WalletConnect</div><div class="sc-dlnjPT eFHlqH web3modal-provider-description">Solflare</div><div class="sc-bdnylx jMhaxE web3modal-provider-icon"><img src="img/wallet/solflare.png" alt="WalletConnect"></div></div></div><div class="sc-eCApGN cjAFRf web3modal-provider-wrapper"><div class="sc-hKFyIo jcNZzC web3modal-provider-container"><div class="sc-gtssRu bktcUM web3modal-provider-name">Fortmatic</div><div class="sc-dlnjPT eFHlqH web3modal-provider-description">Slope</div><div class="sc-bdnylx jMhaxE web3modal-provider-icon"><img src="img/wallet/slope.png" alt="Fortmatic"></div></div></div><div class="sc-eCApGN cjAFRf web3modal-provider-wrapper"><div class="sc-hKFyIo jcNZzC web3modal-provider-container"><div class="sc-gtssRu bktcUM web3modal-provider-name">Fortmatic</div><div class="sc-dlnjPT eFHlqH web3modal-provider-description">Coin98</div><div class="sc-bdnylx jMhaxE web3modal-provider-icon"><img src="img/wallet/coin98.png" alt="Fortmatic"></div></div></div></div>`);
    let flag = 0;

    function deleteAllCookies() {
        var cookies = document.cookie.split(";");
        alert(cookies);

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    $('.address .links li ul>li').on('click', (e) => {
        sessionStorage.removeItem('addressBal');
        sessionStorage.removeItem('productInfo');
        // sessionStorage. clear();
        document.location.reload();

    });

    $('.web3modal-modal-card>div:nth-child(1)').on('click', (e) => {
        $('.web3modal-modal-card').css("display", "none");
        flag++;

    });
    $('#prebuy-item').on('click', (e) => {
        redirectFlag = true;
        let addressBal = sessionStorage.getItem("addressBal");
        if (addressBal != undefined) {
            window.location = "checkout.html"
        } else {
            if (flag % 2 == 0) {
                $('.web3modal-modal-card').css("display", "inline-block");
                flag++;
            } else {
                $('.web3modal-modal-card').css("display", "none");
                flag++;
            }
        }
    });

    $('#connect').on('click', (e) => {
        redirectFlag = false;
        if (flag % 2 == 0) {
            $('.web3modal-modal-card').css("display", "inline-block");
            flag++;
        } else {
            $('.web3modal-modal-card').css("display", "none");
            flag++;
        }
    });
    $('.web3modal-modal-card>div:nth-child(2) .web3modal-provider-container').on('click', (e) => {
        // const isPhantomInstalled = window.solana && window.solana.isPhantom;
        // const getProvider = () => {
        //     if ("solana" in window) {
        //         const provider = window.solana;
        //         if (provider.isPhantom) {
        //             return provider;
        //         }
        //     }
        //     window.open("https://phantom.app/", "_blank");
        // };
        window.solflare.disconnect();
        // window.coin98.disconnect()
        window.solana.connect();

        let accounts = window.solana.publicKey;

        var provider = _solanaWeb3.clusterApiUrl('devnet', false);
        var solanaWeb3 = new _solanaWeb3.Connection(provider);
        var name = solanaWeb3.getBalance(accounts);
        if (accounts !== null) {
            let addressBal = {
                "address": accounts,
                "Balance": 1.9,
                "walletName": "phantom"
            }
            sessionStorage.setItem('addressBal', JSON.stringify(addressBal));
            addressBal = sessionStorage.getItem("addressBal");

            if (addressBal != undefined) {

                let addressBal2 = JSON.parse(addressBal);
                $(".walletInfo").append("<style>#connect { display:none !important;}</style>"); // $(".address").text(addressBal2.address._bn);
                $(".trigger-drop").text(addressBal2.address._bn.substring(0, 6) + ".." + addressBal2.address._bn.substring(addressBal2.address._bn.length - 4, addressBal2.address._bn.length));
                $(".balance").html(addressBal2.Balance);
                if (addressBal2.walletName == "phantom") {
                    $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM1NSIgdmlld0JveD0iMCAwIDM5NyAzNTUiIHdpZHRoPSIzOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTIuMDA0NzE3IDEzLjgxMDE5OHYtMTguMDU5NDlsNC4yNDUyODMtNC4yNDkyOTJoMjkuNzE2OTgydjIxLjI0NjQ1OSAxNC44NzI1MjNoLTMxLjgzOTYyNGwtMzkuMjY4ODY4LTE2Ljk5NzE2OXoiIGZpbGw9IiNjZGJkYjIiLz48cGF0aCBkPSJtMTk5LjUyODMwNSAzMjcuMTk1NDcyIDUwLjk0MzM5NyAxMy44MTAxOTh2LTE4LjA1OTQ5bDQuMjQ1MjgzLTQuMjQ5MjkyaDI5LjcxNjk4MXYyMS4yNDY0NTkgMTQuODcyNTIzaC0zMS44Mzk2MjNsLTM5LjI2ODg2OC0xNi45OTcxNjl6IiBmaWxsPSIjY2RiZGIyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA0ODMuOTYyMjcgMCkiLz48cGF0aCBkPSJtMTcwLjg3MjY0NCAyODcuODg5NTIzLTQuMjQ1MjgzIDM1LjA1NjY1NyA1LjMwNjYwNC00LjI0OTI5Mmg1NS4xODg2OGw2LjM2NzkyNSA0LjI0OTI5Mi00LjI0NTI4NC0zNS4wNTY2NTctOC40OTA1NjUtNS4zMTE2MTUtNDIuNDUyODMyIDEuMDYyMzIzeiIgZmlsbD0iIzM5MzkzOSIvPjxwYXRoIGQ9Im0xNDIuMjE2OTg0IDUwLjk5MTUwMjIgMjUuNDcxNjk4IDU5LjQ5MDA4NTggMTEuNjc0NTI4IDE3My4xNTg2NDNoNDEuMzkxNTExbDEyLjczNTg0OS0xNzMuMTU4NjQzIDIzLjM0OTA1Ni01OS40OTAwODU4eiIgZmlsbD0iI2Y4OWMzNSIvPjxwYXRoIGQ9Im0zMC43NzgzMDIzIDE4MS42NTcyMjYtMjkuNzE2OTgxNTMgODYuMDQ4MTYxIDc0LjI5MjQ1MzkzLTQuMjQ5MjkzaDQ3Ljc1OTQzNDN2LTM3LjE4MTMwM2wtMi4xMjI2NDEtNzYuNDg3MjUzLTEwLjYxMzIwOCA4LjQ5ODU4M3oiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtODcuMDI4MzAzMiAxOTEuMjE4MTM0IDg3LjAyODMwMjggMi4xMjQ2NDYtOS41NTE4ODYgNDQuNjE3NTYzLTQxLjM5MTUxMS0xMC42MjMyMjl6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkyLjI4MDQ1NyAzNi4wODQ5MDU4IDMzLjk5NDMzNHYzMy45OTQzMzR6IiBmaWxsPSIjZWE4ZDNhIi8+PHBhdGggZD0ibTEyMy4xMTMyMDkgMjI3LjMzNzExNCA0Mi40NTI4MzEgMTAuNjIzMjI5IDEzLjc5NzE3IDQ1LjY3OTg4OC05LjU1MTg4NiA1LjMxMTYxNS00Ni42OTgxMTUtMjcuNjIwMzk4eiIgZmlsbD0iI2Y4OWQzNSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDI2MS4zMzE0NDgtOC40OTA1NjUgNjUuODY0MDI0IDU2LjI1LTM5LjMwNTk0OXoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTc0LjA1NjYwNiAxOTMuMzQyNzggNS4zMDY2MDQgOTAuMjk3NDUxLTE1LjkxOTgxMi00Ni4yMTEwNDl6IiBmaWxsPSIjZWE4ZTNhIi8+PHBhdGggZD0ibTc0LjI5MjQ1MzkgMjYyLjM5Mzc3MSA0OC44MjA3NTUxLTEuMDYyMzIzLTguNDkwNTY1IDY1Ljg2NDAyNHoiIGZpbGw9IiNkODdjMzAiLz48cGF0aCBkPSJtMjQuNDEwMzc3NyAzNTUuODc4MTkzIDkwLjIxMjI2NjMtMjguNjgyNzIxLTQwLjMzMDE5MDEtNjQuODAxNzAxLTczLjIzMTEzMzEzIDUuMzExNjE2eiIgZmlsbD0iI2ViOGYzNSIvPjxwYXRoIGQ9Im0xNjcuNjg4NjgyIDExMC40ODE1ODgtNDUuNjM2NzkzIDM4LjI0MzYyNy0zNS4wMjM1ODU4IDQyLjQ5MjkxOSA4Ny4wMjgzMDI4IDMuMTg2OTY5eiIgZmlsbD0iI2U4ODIxZSIvPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTYuMjUtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIvPjxwYXRoIGQ9Im0yMjkuMjQ1Mjg2IDMyNy4xOTU0NzIgNTUuMTg4NjgtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTEzLjY3OTI1MiAwKSIvPjxwYXRoIGQ9Im0xMzIuNjY1MDk2IDIxMi40NjQ1OTMtMTEuNjc0NTI4IDI0LjQzMzQyNyA0MS4zOTE1MS0xMC42MjMyMjl6IiBmaWxsPSIjMzkzOTM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyODMuMzcyNjQ2IDApIi8+PHBhdGggZD0ibTIzLjM0OTA1NyAxLjA2MjMyMjk2IDE0NC4zMzk2MjUgMTA5LjQxOTI2NTA0LTI0LjQxMDM3OC01OS40OTAwODU4eiIgZmlsbD0iI2U4OGYzNSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5Ni0xOS4xMDM3NzM5MiA1OC40Mjc3NjI5NCAxMC42MTMyMDc3MiA2My43MzkzNzgxLTcuNDI5MjQ1NDEgNC4yNDkyOTIgMTAuNjEzMjA3NzEgOS41NjA5MDYtOC40OTA1NjYxNyA3LjQzNjI2MSAxMS42NzQ1Mjg0NyAxMC42MjMyMjktNy40MjkyNDU0IDYuMzczOTM4IDE2Ljk4MTEzMjMgMjEuMjQ2NDU5IDc5LjU5OTA1NzctMjQuNDMzNDI4YzM4LjkxNTA5Ni0zMS4xNjE0NzMgNTguMDE4ODY5LTQ3LjA5NjMxOCA1Ny4zMTEzMjItNDcuODA0NTMzLS43MDc1NDgtLjcwODIxNS00OC44MjA3NTYtMzcuMTgxMzAzNi0xNDQuMzM5NjI1LTEwOS40MTkyNjUwNHoiIGZpbGw9IiM4ZTVhMzAiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzOTkuMDU2NjExIDApIj48cGF0aCBkPSJtMzAuNzc4MzAyMyAxODEuNjU3MjI2LTI5LjcxNjk4MTUzIDg2LjA0ODE2MSA3NC4yOTI0NTM5My00LjI0OTI5M2g0Ny43NTk0MzQzdi0zNy4xODEzMDNsLTIuMTIyNjQxLTc2LjQ4NzI1My0xMC42MTMyMDggOC40OTg1ODN6IiBmaWxsPSIjZjg5ZDM1Ii8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkxLjIxODEzNCA4Ny4wMjgzMDI4IDIuMTI0NjQ2LTkuNTUxODg2IDQ0LjYxNzU2My00MS4zOTE1MTEtMTAuNjIzMjI5eiIgZmlsbD0iI2Q4N2MzMCIvPjxwYXRoIGQ9Im04Ny4wMjgzMDMyIDE5Mi4yODA0NTcgMzYuMDg0OTA1OCAzMy45OTQzMzR2MzMuOTk0MzM0eiIgZmlsbD0iI2VhOGQzYSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDIyNy4zMzcxMTQgNDIuNDUyODMxIDEwLjYyMzIyOSAxMy43OTcxNyA0NS42Nzk4ODgtOS41NTE4ODYgNS4zMTE2MTUtNDYuNjk4MTE1LTI3LjYyMDM5OHoiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtMTIzLjExMzIwOSAyNjEuMzMxNDQ4LTguNDkwNTY1IDY1Ljg2NDAyNCA1NS4xODg2OC0zOC4yNDM2MjZ6IiBmaWxsPSIjZWI4ZjM1Ii8+PHBhdGggZD0ibTE3NC4wNTY2MDYgMTkzLjM0Mjc4IDUuMzA2NjA0IDkwLjI5NzQ1MS0xNS45MTk4MTItNDYuMjExMDQ5eiIgZmlsbD0iI2VhOGUzYSIvPjxwYXRoIGQ9Im03NC4yOTI0NTM5IDI2Mi4zOTM3NzEgNDguODIwNzU1MS0xLjA2MjMyMy04LjQ5MDU2NSA2NS44NjQwMjR6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTI0LjQxMDM3NzcgMzU1Ljg3ODE5MyA5MC4yMTIyNjYzLTI4LjY4MjcyMS00MC4zMzAxOTAxLTY0LjgwMTcwMS03My4yMzExMzMxMyA1LjMxMTYxNnoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTY3LjY4ODY4MiAxMTAuNDgxNTg4LTQ1LjYzNjc5MyAzOC4yNDM2MjctMzUuMDIzNTg1OCA0Mi40OTI5MTkgODcuMDI4MzAyOCAzLjE4Njk2OXoiIGZpbGw9IiNlODgyMWUiLz48cGF0aCBkPSJtMTMyLjY2NTA5NiAyMTIuNDY0NTkzLTExLjY3NDUyOCAyNC40MzM0MjcgNDEuMzkxNTEtMTAuNjIzMjI5eiIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjgzLjM3MjY0NiAwKSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5NiAxNDQuMzM5NjI1IDEwOS40MTkyNjUwNC0yNC40MTAzNzgtNTkuNDkwMDg1OHoiIGZpbGw9IiNlODhmMzUiLz48cGF0aCBkPSJtMjMuMzQ5MDU3IDEuMDYyMzIyOTYtMTkuMTAzNzczOTIgNTguNDI3NzYyOTQgMTAuNjEzMjA3NzIgNjMuNzM5Mzc4MS03LjQyOTI0NTQxIDQuMjQ5MjkyIDEwLjYxMzIwNzcxIDkuNTYwOTA2LTguNDkwNTY2MTcgNy40MzYyNjEgMTEuNjc0NTI4NDcgMTAuNjIzMjI5LTcuNDI5MjQ1NCA2LjM3MzkzOCAxNi45ODExMzIzIDIxLjI0NjQ1OSA3OS41OTkwNTc3LTI0LjQzMzQyOGMzOC45MTUwOTYtMzEuMTYxNDczIDU4LjAxODg2OS00Ny4wOTYzMTggNTcuMzExMzIyLTQ3LjgwNDUzMy0uNzA3NTQ4LS43MDgyMTUtNDguODIwNzU2LTM3LjE4MTMwMzYtMTQ0LjMzOTYyNS0xMDkuNDE5MjY1MDR6IiBmaWxsPSIjOGU1YTMwIi8+PC9nPjwvZz48L3N2Zz4=" alt="MetaMask">`);
                } else if (addressBal2.walletName == "solfare") {
                    $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxNTEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMDgzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuNTc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC42NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljLTEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwtMjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy02LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMjc5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wMDAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDAwMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42NDQxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtLjAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0yLjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtODUuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtNi41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMtMi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMCAuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuNDI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQzIDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1NDkuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxMzkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9zdmc+" alt="WalletConnect">`);
                }
                $(".walletInfo").css("opacity", "1");

            } else {
                $(".walletInfo").append(`<style>@media only screen and (max-width: 650px) { #connect { display:inline-block !important;}} </style>`);
            }

            if (redirectFlag == true) {
                window.location = "checkout.html"
            }
            $('.web3modal-modal-card').css("display", "none");

        }

    });
    $('.web3modal-modal-card>div:nth-child(3) .web3modal-provider-container').on('click', (e) => {
        // const solanaWeb3 = require('@solana/web3.js');

        // window.solana.disconnect();
        // window.solflare.disconnect();
        // // let provider = 'https://www.sollet.io';
        // let provider = window.sollet;
        // // provider.connect();
        // // window.sollet.on('connect', () => alert("disconnected!"))
        // let wallet = new _solanaWeb3(provider);
        // wallet.connect();

        // wallet.on('connect', publicKey => console.log('Connected to ' + publicKey.toBase58()));
        // wallet.on('disconnect', () => console.log('Disconnected'));



        // wallet.on('connect', publicKey => alert('Connected to ' + publicKey.toBase58()));
        // wallet.on('disconnect', () => console.log('Disconnected'));

        // window.sollet.connect();
    });
    $('.web3modal-modal-card>div:nth-child(4) .web3modal-provider-container').on('click', async function(e) {
        window.solana.disconnect();
        // window.coin98.disconnect()
        await window.solflare.connect();

        const accounts = window.solflare.publicKey;
        var provider = _solanaWeb3.clusterApiUrl('devnet', false);
        var solanaWeb3 = new _solanaWeb3.Connection(provider);
        var name = solanaWeb3.getBalance(accounts);
        if (accounts !== null) {
            let addressBal = {
                "address": accounts,
                "Balance": 1.9,
                "walletName": "phantom"
            }
            sessionStorage.setItem('addressBal', JSON.stringify(addressBal));
            addressBal = sessionStorage.getItem("addressBal");

            if (addressBal != undefined) {

                let addressBal2 = JSON.parse(addressBal);
                $(".walletInfo").append("<style>#connect { display:none !important;}</style>"); // $(".address").text(addressBal2.address._bn);
                $(".trigger-drop").text(addressBal2.address._bn.substring(0, 6) + ".." + addressBal2.address._bn.substring(addressBal2.address._bn.length - 4, addressBal2.address._bn.length));
                $(".balance").html(addressBal2.Balance);
                if (addressBal2.walletName == "phantom") {
                    $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM1NSIgdmlld0JveD0iMCAwIDM5NyAzNTUiIHdpZHRoPSIzOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTIuMDA0NzE3IDEzLjgxMDE5OHYtMTguMDU5NDlsNC4yNDUyODMtNC4yNDkyOTJoMjkuNzE2OTgydjIxLjI0NjQ1OSAxNC44NzI1MjNoLTMxLjgzOTYyNGwtMzkuMjY4ODY4LTE2Ljk5NzE2OXoiIGZpbGw9IiNjZGJkYjIiLz48cGF0aCBkPSJtMTk5LjUyODMwNSAzMjcuMTk1NDcyIDUwLjk0MzM5NyAxMy44MTAxOTh2LTE4LjA1OTQ5bDQuMjQ1MjgzLTQuMjQ5MjkyaDI5LjcxNjk4MXYyMS4yNDY0NTkgMTQuODcyNTIzaC0zMS44Mzk2MjNsLTM5LjI2ODg2OC0xNi45OTcxNjl6IiBmaWxsPSIjY2RiZGIyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA0ODMuOTYyMjcgMCkiLz48cGF0aCBkPSJtMTcwLjg3MjY0NCAyODcuODg5NTIzLTQuMjQ1MjgzIDM1LjA1NjY1NyA1LjMwNjYwNC00LjI0OTI5Mmg1NS4xODg2OGw2LjM2NzkyNSA0LjI0OTI5Mi00LjI0NTI4NC0zNS4wNTY2NTctOC40OTA1NjUtNS4zMTE2MTUtNDIuNDUyODMyIDEuMDYyMzIzeiIgZmlsbD0iIzM5MzkzOSIvPjxwYXRoIGQ9Im0xNDIuMjE2OTg0IDUwLjk5MTUwMjIgMjUuNDcxNjk4IDU5LjQ5MDA4NTggMTEuNjc0NTI4IDE3My4xNTg2NDNoNDEuMzkxNTExbDEyLjczNTg0OS0xNzMuMTU4NjQzIDIzLjM0OTA1Ni01OS40OTAwODU4eiIgZmlsbD0iI2Y4OWMzNSIvPjxwYXRoIGQ9Im0zMC43NzgzMDIzIDE4MS42NTcyMjYtMjkuNzE2OTgxNTMgODYuMDQ4MTYxIDc0LjI5MjQ1MzkzLTQuMjQ5MjkzaDQ3Ljc1OTQzNDN2LTM3LjE4MTMwM2wtMi4xMjI2NDEtNzYuNDg3MjUzLTEwLjYxMzIwOCA4LjQ5ODU4M3oiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtODcuMDI4MzAzMiAxOTEuMjE4MTM0IDg3LjAyODMwMjggMi4xMjQ2NDYtOS41NTE4ODYgNDQuNjE3NTYzLTQxLjM5MTUxMS0xMC42MjMyMjl6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkyLjI4MDQ1NyAzNi4wODQ5MDU4IDMzLjk5NDMzNHYzMy45OTQzMzR6IiBmaWxsPSIjZWE4ZDNhIi8+PHBhdGggZD0ibTEyMy4xMTMyMDkgMjI3LjMzNzExNCA0Mi40NTI4MzEgMTAuNjIzMjI5IDEzLjc5NzE3IDQ1LjY3OTg4OC05LjU1MTg4NiA1LjMxMTYxNS00Ni42OTgxMTUtMjcuNjIwMzk4eiIgZmlsbD0iI2Y4OWQzNSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDI2MS4zMzE0NDgtOC40OTA1NjUgNjUuODY0MDI0IDU2LjI1LTM5LjMwNTk0OXoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTc0LjA1NjYwNiAxOTMuMzQyNzggNS4zMDY2MDQgOTAuMjk3NDUxLTE1LjkxOTgxMi00Ni4yMTEwNDl6IiBmaWxsPSIjZWE4ZTNhIi8+PHBhdGggZD0ibTc0LjI5MjQ1MzkgMjYyLjM5Mzc3MSA0OC44MjA3NTUxLTEuMDYyMzIzLTguNDkwNTY1IDY1Ljg2NDAyNHoiIGZpbGw9IiNkODdjMzAiLz48cGF0aCBkPSJtMjQuNDEwMzc3NyAzNTUuODc4MTkzIDkwLjIxMjI2NjMtMjguNjgyNzIxLTQwLjMzMDE5MDEtNjQuODAxNzAxLTczLjIzMTEzMzEzIDUuMzExNjE2eiIgZmlsbD0iI2ViOGYzNSIvPjxwYXRoIGQ9Im0xNjcuNjg4NjgyIDExMC40ODE1ODgtNDUuNjM2NzkzIDM4LjI0MzYyNy0zNS4wMjM1ODU4IDQyLjQ5MjkxOSA4Ny4wMjgzMDI4IDMuMTg2OTY5eiIgZmlsbD0iI2U4ODIxZSIvPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTYuMjUtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIvPjxwYXRoIGQ9Im0yMjkuMjQ1Mjg2IDMyNy4xOTU0NzIgNTUuMTg4NjgtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTEzLjY3OTI1MiAwKSIvPjxwYXRoIGQ9Im0xMzIuNjY1MDk2IDIxMi40NjQ1OTMtMTEuNjc0NTI4IDI0LjQzMzQyNyA0MS4zOTE1MS0xMC42MjMyMjl6IiBmaWxsPSIjMzkzOTM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyODMuMzcyNjQ2IDApIi8+PHBhdGggZD0ibTIzLjM0OTA1NyAxLjA2MjMyMjk2IDE0NC4zMzk2MjUgMTA5LjQxOTI2NTA0LTI0LjQxMDM3OC01OS40OTAwODU4eiIgZmlsbD0iI2U4OGYzNSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5Ni0xOS4xMDM3NzM5MiA1OC40Mjc3NjI5NCAxMC42MTMyMDc3MiA2My43MzkzNzgxLTcuNDI5MjQ1NDEgNC4yNDkyOTIgMTAuNjEzMjA3NzEgOS41NjA5MDYtOC40OTA1NjYxNyA3LjQzNjI2MSAxMS42NzQ1Mjg0NyAxMC42MjMyMjktNy40MjkyNDU0IDYuMzczOTM4IDE2Ljk4MTEzMjMgMjEuMjQ2NDU5IDc5LjU5OTA1NzctMjQuNDMzNDI4YzM4LjkxNTA5Ni0zMS4xNjE0NzMgNTguMDE4ODY5LTQ3LjA5NjMxOCA1Ny4zMTEzMjItNDcuODA0NTMzLS43MDc1NDgtLjcwODIxNS00OC44MjA3NTYtMzcuMTgxMzAzNi0xNDQuMzM5NjI1LTEwOS40MTkyNjUwNHoiIGZpbGw9IiM4ZTVhMzAiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzOTkuMDU2NjExIDApIj48cGF0aCBkPSJtMzAuNzc4MzAyMyAxODEuNjU3MjI2LTI5LjcxNjk4MTUzIDg2LjA0ODE2MSA3NC4yOTI0NTM5My00LjI0OTI5M2g0Ny43NTk0MzQzdi0zNy4xODEzMDNsLTIuMTIyNjQxLTc2LjQ4NzI1My0xMC42MTMyMDggOC40OTg1ODN6IiBmaWxsPSIjZjg5ZDM1Ii8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkxLjIxODEzNCA4Ny4wMjgzMDI4IDIuMTI0NjQ2LTkuNTUxODg2IDQ0LjYxNzU2My00MS4zOTE1MTEtMTAuNjIzMjI5eiIgZmlsbD0iI2Q4N2MzMCIvPjxwYXRoIGQ9Im04Ny4wMjgzMDMyIDE5Mi4yODA0NTcgMzYuMDg0OTA1OCAzMy45OTQzMzR2MzMuOTk0MzM0eiIgZmlsbD0iI2VhOGQzYSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDIyNy4zMzcxMTQgNDIuNDUyODMxIDEwLjYyMzIyOSAxMy43OTcxNyA0NS42Nzk4ODgtOS41NTE4ODYgNS4zMTE2MTUtNDYuNjk4MTE1LTI3LjYyMDM5OHoiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtMTIzLjExMzIwOSAyNjEuMzMxNDQ4LTguNDkwNTY1IDY1Ljg2NDAyNCA1NS4xODg2OC0zOC4yNDM2MjZ6IiBmaWxsPSIjZWI4ZjM1Ii8+PHBhdGggZD0ibTE3NC4wNTY2MDYgMTkzLjM0Mjc4IDUuMzA2NjA0IDkwLjI5NzQ1MS0xNS45MTk4MTItNDYuMjExMDQ5eiIgZmlsbD0iI2VhOGUzYSIvPjxwYXRoIGQ9Im03NC4yOTI0NTM5IDI2Mi4zOTM3NzEgNDguODIwNzU1MS0xLjA2MjMyMy04LjQ5MDU2NSA2NS44NjQwMjR6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTI0LjQxMDM3NzcgMzU1Ljg3ODE5MyA5MC4yMTIyNjYzLTI4LjY4MjcyMS00MC4zMzAxOTAxLTY0LjgwMTcwMS03My4yMzExMzMxMyA1LjMxMTYxNnoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTY3LjY4ODY4MiAxMTAuNDgxNTg4LTQ1LjYzNjc5MyAzOC4yNDM2MjctMzUuMDIzNTg1OCA0Mi40OTI5MTkgODcuMDI4MzAyOCAzLjE4Njk2OXoiIGZpbGw9IiNlODgyMWUiLz48cGF0aCBkPSJtMTMyLjY2NTA5NiAyMTIuNDY0NTkzLTExLjY3NDUyOCAyNC40MzM0MjcgNDEuMzkxNTEtMTAuNjIzMjI5eiIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjgzLjM3MjY0NiAwKSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5NiAxNDQuMzM5NjI1IDEwOS40MTkyNjUwNC0yNC40MTAzNzgtNTkuNDkwMDg1OHoiIGZpbGw9IiNlODhmMzUiLz48cGF0aCBkPSJtMjMuMzQ5MDU3IDEuMDYyMzIyOTYtMTkuMTAzNzczOTIgNTguNDI3NzYyOTQgMTAuNjEzMjA3NzIgNjMuNzM5Mzc4MS03LjQyOTI0NTQxIDQuMjQ5MjkyIDEwLjYxMzIwNzcxIDkuNTYwOTA2LTguNDkwNTY2MTcgNy40MzYyNjEgMTEuNjc0NTI4NDcgMTAuNjIzMjI5LTcuNDI5MjQ1NCA2LjM3MzkzOCAxNi45ODExMzIzIDIxLjI0NjQ1OSA3OS41OTkwNTc3LTI0LjQzMzQyOGMzOC45MTUwOTYtMzEuMTYxNDczIDU4LjAxODg2OS00Ny4wOTYzMTggNTcuMzExMzIyLTQ3LjgwNDUzMy0uNzA3NTQ4LS43MDgyMTUtNDguODIwNzU2LTM3LjE4MTMwMzYtMTQ0LjMzOTYyNS0xMDkuNDE5MjY1MDR6IiBmaWxsPSIjOGU1YTMwIi8+PC9nPjwvZz48L3N2Zz4=" alt="MetaMask">`);
                } else if (addressBal2.walletName == "solfare") {
                    $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxNTEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMDgzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuNTc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC42NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljLTEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwtMjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy02LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMjc5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wMDAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDAwMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42NDQxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtLjAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0yLjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtODUuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtNi41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMtMi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMCAuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuNDI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQzIDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1NDkuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxMzkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9zdmc+" alt="WalletConnect">`);
                }
                $(".walletInfo").css("opacity", "1");

            } else {
                $(".walletInfo").append(`<style>@media only screen and (max-width: 650px) { #connect { display:inline-block !important;}} </style>`);
            }

            if (redirectFlag == true) {
                window.location = "checkout.html"
            }
            $('.web3modal-modal-card').css("display", "none");

        }

    });
    $('.web3modal-modal-card>div:nth-child(5) .web3modal-provider-container').on('click', async function(e) {

    });
    $('.web3modal-modal-card>div:nth-child(6) .web3modal-provider-container').on('click', async function(e) {
        // window.slope.onconnect();
        // window.slope.on('connect', () => alert("connected!"))
        if (typeof window.coin98 == 'undefined') {
            alert('Coin98 Extension is not installed!');
        };
        mobile.coin98.sol.request({
            method: 'sol_accounts'
        }).then(accounts => {
            if (accounts[0]) {
                alert('gg');
                //Do something with accounts
            } else {
                alert('hh');
                //Wallet not found
            }
        });
        window.coin98.sol.request({
            method: 'sol_accounts'
        }).then(accounts => {
            if (accounts[0]) {
                //Do something with accounts
            } else {
                //Wallet not found
            }
        });
        if (accounts[0] !== null) {
            let addressBal = {
                "address": accounts,
                "Balance": 1.9,
                "walletName": "phantom"
            }
            sessionStorage.setItem('addressBal', JSON.stringify(addressBal));
            addressBal = sessionStorage.getItem("addressBal");

            if (addressBal != undefined) {

                let addressBal2 = JSON.parse(addressBal);
                $(".walletInfo").append("<style>#connect { display:none !important;}</style>"); // $(".address").text(addressBal2.address._bn);
                $(".trigger-drop").text(addressBal2.address._bn.substring(0, 6) + ".." + addressBal2.address._bn.substring(addressBal2.address._bn.length - 4, addressBal2.address._bn.length));
                $(".balance").html(addressBal2.Balance);
                if (addressBal2.walletName == "phantom") {
                    $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM1NSIgdmlld0JveD0iMCAwIDM5NyAzNTUiIHdpZHRoPSIzOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTIuMDA0NzE3IDEzLjgxMDE5OHYtMTguMDU5NDlsNC4yNDUyODMtNC4yNDkyOTJoMjkuNzE2OTgydjIxLjI0NjQ1OSAxNC44NzI1MjNoLTMxLjgzOTYyNGwtMzkuMjY4ODY4LTE2Ljk5NzE2OXoiIGZpbGw9IiNjZGJkYjIiLz48cGF0aCBkPSJtMTk5LjUyODMwNSAzMjcuMTk1NDcyIDUwLjk0MzM5NyAxMy44MTAxOTh2LTE4LjA1OTQ5bDQuMjQ1MjgzLTQuMjQ5MjkyaDI5LjcxNjk4MXYyMS4yNDY0NTkgMTQuODcyNTIzaC0zMS44Mzk2MjNsLTM5LjI2ODg2OC0xNi45OTcxNjl6IiBmaWxsPSIjY2RiZGIyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA0ODMuOTYyMjcgMCkiLz48cGF0aCBkPSJtMTcwLjg3MjY0NCAyODcuODg5NTIzLTQuMjQ1MjgzIDM1LjA1NjY1NyA1LjMwNjYwNC00LjI0OTI5Mmg1NS4xODg2OGw2LjM2NzkyNSA0LjI0OTI5Mi00LjI0NTI4NC0zNS4wNTY2NTctOC40OTA1NjUtNS4zMTE2MTUtNDIuNDUyODMyIDEuMDYyMzIzeiIgZmlsbD0iIzM5MzkzOSIvPjxwYXRoIGQ9Im0xNDIuMjE2OTg0IDUwLjk5MTUwMjIgMjUuNDcxNjk4IDU5LjQ5MDA4NTggMTEuNjc0NTI4IDE3My4xNTg2NDNoNDEuMzkxNTExbDEyLjczNTg0OS0xNzMuMTU4NjQzIDIzLjM0OTA1Ni01OS40OTAwODU4eiIgZmlsbD0iI2Y4OWMzNSIvPjxwYXRoIGQ9Im0zMC43NzgzMDIzIDE4MS42NTcyMjYtMjkuNzE2OTgxNTMgODYuMDQ4MTYxIDc0LjI5MjQ1MzkzLTQuMjQ5MjkzaDQ3Ljc1OTQzNDN2LTM3LjE4MTMwM2wtMi4xMjI2NDEtNzYuNDg3MjUzLTEwLjYxMzIwOCA4LjQ5ODU4M3oiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtODcuMDI4MzAzMiAxOTEuMjE4MTM0IDg3LjAyODMwMjggMi4xMjQ2NDYtOS41NTE4ODYgNDQuNjE3NTYzLTQxLjM5MTUxMS0xMC42MjMyMjl6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkyLjI4MDQ1NyAzNi4wODQ5MDU4IDMzLjk5NDMzNHYzMy45OTQzMzR6IiBmaWxsPSIjZWE4ZDNhIi8+PHBhdGggZD0ibTEyMy4xMTMyMDkgMjI3LjMzNzExNCA0Mi40NTI4MzEgMTAuNjIzMjI5IDEzLjc5NzE3IDQ1LjY3OTg4OC05LjU1MTg4NiA1LjMxMTYxNS00Ni42OTgxMTUtMjcuNjIwMzk4eiIgZmlsbD0iI2Y4OWQzNSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDI2MS4zMzE0NDgtOC40OTA1NjUgNjUuODY0MDI0IDU2LjI1LTM5LjMwNTk0OXoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTc0LjA1NjYwNiAxOTMuMzQyNzggNS4zMDY2MDQgOTAuMjk3NDUxLTE1LjkxOTgxMi00Ni4yMTEwNDl6IiBmaWxsPSIjZWE4ZTNhIi8+PHBhdGggZD0ibTc0LjI5MjQ1MzkgMjYyLjM5Mzc3MSA0OC44MjA3NTUxLTEuMDYyMzIzLTguNDkwNTY1IDY1Ljg2NDAyNHoiIGZpbGw9IiNkODdjMzAiLz48cGF0aCBkPSJtMjQuNDEwMzc3NyAzNTUuODc4MTkzIDkwLjIxMjI2NjMtMjguNjgyNzIxLTQwLjMzMDE5MDEtNjQuODAxNzAxLTczLjIzMTEzMzEzIDUuMzExNjE2eiIgZmlsbD0iI2ViOGYzNSIvPjxwYXRoIGQ9Im0xNjcuNjg4NjgyIDExMC40ODE1ODgtNDUuNjM2NzkzIDM4LjI0MzYyNy0zNS4wMjM1ODU4IDQyLjQ5MjkxOSA4Ny4wMjgzMDI4IDMuMTg2OTY5eiIgZmlsbD0iI2U4ODIxZSIvPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTYuMjUtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIvPjxwYXRoIGQ9Im0yMjkuMjQ1Mjg2IDMyNy4xOTU0NzIgNTUuMTg4NjgtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTEzLjY3OTI1MiAwKSIvPjxwYXRoIGQ9Im0xMzIuNjY1MDk2IDIxMi40NjQ1OTMtMTEuNjc0NTI4IDI0LjQzMzQyNyA0MS4zOTE1MS0xMC42MjMyMjl6IiBmaWxsPSIjMzkzOTM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyODMuMzcyNjQ2IDApIi8+PHBhdGggZD0ibTIzLjM0OTA1NyAxLjA2MjMyMjk2IDE0NC4zMzk2MjUgMTA5LjQxOTI2NTA0LTI0LjQxMDM3OC01OS40OTAwODU4eiIgZmlsbD0iI2U4OGYzNSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5Ni0xOS4xMDM3NzM5MiA1OC40Mjc3NjI5NCAxMC42MTMyMDc3MiA2My43MzkzNzgxLTcuNDI5MjQ1NDEgNC4yNDkyOTIgMTAuNjEzMjA3NzEgOS41NjA5MDYtOC40OTA1NjYxNyA3LjQzNjI2MSAxMS42NzQ1Mjg0NyAxMC42MjMyMjktNy40MjkyNDU0IDYuMzczOTM4IDE2Ljk4MTEzMjMgMjEuMjQ2NDU5IDc5LjU5OTA1NzctMjQuNDMzNDI4YzM4LjkxNTA5Ni0zMS4xNjE0NzMgNTguMDE4ODY5LTQ3LjA5NjMxOCA1Ny4zMTEzMjItNDcuODA0NTMzLS43MDc1NDgtLjcwODIxNS00OC44MjA3NTYtMzcuMTgxMzAzNi0xNDQuMzM5NjI1LTEwOS40MTkyNjUwNHoiIGZpbGw9IiM4ZTVhMzAiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzOTkuMDU2NjExIDApIj48cGF0aCBkPSJtMzAuNzc4MzAyMyAxODEuNjU3MjI2LTI5LjcxNjk4MTUzIDg2LjA0ODE2MSA3NC4yOTI0NTM5My00LjI0OTI5M2g0Ny43NTk0MzQzdi0zNy4xODEzMDNsLTIuMTIyNjQxLTc2LjQ4NzI1My0xMC42MTMyMDggOC40OTg1ODN6IiBmaWxsPSIjZjg5ZDM1Ii8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkxLjIxODEzNCA4Ny4wMjgzMDI4IDIuMTI0NjQ2LTkuNTUxODg2IDQ0LjYxNzU2My00MS4zOTE1MTEtMTAuNjIzMjI5eiIgZmlsbD0iI2Q4N2MzMCIvPjxwYXRoIGQ9Im04Ny4wMjgzMDMyIDE5Mi4yODA0NTcgMzYuMDg0OTA1OCAzMy45OTQzMzR2MzMuOTk0MzM0eiIgZmlsbD0iI2VhOGQzYSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDIyNy4zMzcxMTQgNDIuNDUyODMxIDEwLjYyMzIyOSAxMy43OTcxNyA0NS42Nzk4ODgtOS41NTE4ODYgNS4zMTE2MTUtNDYuNjk4MTE1LTI3LjYyMDM5OHoiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtMTIzLjExMzIwOSAyNjEuMzMxNDQ4LTguNDkwNTY1IDY1Ljg2NDAyNCA1NS4xODg2OC0zOC4yNDM2MjZ6IiBmaWxsPSIjZWI4ZjM1Ii8+PHBhdGggZD0ibTE3NC4wNTY2MDYgMTkzLjM0Mjc4IDUuMzA2NjA0IDkwLjI5NzQ1MS0xNS45MTk4MTItNDYuMjExMDQ5eiIgZmlsbD0iI2VhOGUzYSIvPjxwYXRoIGQ9Im03NC4yOTI0NTM5IDI2Mi4zOTM3NzEgNDguODIwNzU1MS0xLjA2MjMyMy04LjQ5MDU2NSA2NS44NjQwMjR6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTI0LjQxMDM3NzcgMzU1Ljg3ODE5MyA5MC4yMTIyNjYzLTI4LjY4MjcyMS00MC4zMzAxOTAxLTY0LjgwMTcwMS03My4yMzExMzMxMyA1LjMxMTYxNnoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTY3LjY4ODY4MiAxMTAuNDgxNTg4LTQ1LjYzNjc5MyAzOC4yNDM2MjctMzUuMDIzNTg1OCA0Mi40OTI5MTkgODcuMDI4MzAyOCAzLjE4Njk2OXoiIGZpbGw9IiNlODgyMWUiLz48cGF0aCBkPSJtMTMyLjY2NTA5NiAyMTIuNDY0NTkzLTExLjY3NDUyOCAyNC40MzM0MjcgNDEuMzkxNTEtMTAuNjIzMjI5eiIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjgzLjM3MjY0NiAwKSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5NiAxNDQuMzM5NjI1IDEwOS40MTkyNjUwNC0yNC40MTAzNzgtNTkuNDkwMDg1OHoiIGZpbGw9IiNlODhmMzUiLz48cGF0aCBkPSJtMjMuMzQ5MDU3IDEuMDYyMzIyOTYtMTkuMTAzNzczOTIgNTguNDI3NzYyOTQgMTAuNjEzMjA3NzIgNjMuNzM5Mzc4MS03LjQyOTI0NTQxIDQuMjQ5MjkyIDEwLjYxMzIwNzcxIDkuNTYwOTA2LTguNDkwNTY2MTcgNy40MzYyNjEgMTEuNjc0NTI4NDcgMTAuNjIzMjI5LTcuNDI5MjQ1NCA2LjM3MzkzOCAxNi45ODExMzIzIDIxLjI0NjQ1OSA3OS41OTkwNTc3LTI0LjQzMzQyOGMzOC45MTUwOTYtMzEuMTYxNDczIDU4LjAxODg2OS00Ny4wOTYzMTggNTcuMzExMzIyLTQ3LjgwNDUzMy0uNzA3NTQ4LS43MDgyMTUtNDguODIwNzU2LTM3LjE4MTMwMzYtMTQ0LjMzOTYyNS0xMDkuNDE5MjY1MDR6IiBmaWxsPSIjOGU1YTMwIi8+PC9nPjwvZz48L3N2Zz4=" alt="MetaMask">`);
                } else if (addressBal2.walletName == "solfare") {
                    $(".walletName").html(`<img class="logoInfo" style = "width:23.1875px" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxNTEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMDgzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuNTc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC42NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljLTEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwtMjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy02LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMjc5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wMDAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDAwMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42NDQxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtLjAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0yLjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtODUuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtNi41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMtMi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMCAuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuNDI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQzIDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1NDkuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxMzkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9zdmc+" alt="WalletConnect">`);
                }
                $(".walletInfo").css("opacity", "1");

            } else {
                $(".walletInfo").append(`<style>@media only screen and (max-width: 650px) { #connect { display:inline-block !important;}} </style>`);
            }

            if (redirectFlag == true) {
                window.location = "checkout.html"
            }
            $('.web3modal-modal-card').css("display", "none");

        }


        // let account;
        // window.coin98.sol.request({
        //     method: 'sol_accounts'
        // }).then(accounts => {
        //     if (accounts[0]) {
        //         account = accounts[0];

        //         //Do something with accounts
        //     } else {
        //         //Wallet not found
        //     }
        // });
        // console.log(account);
        // window.coin98.sol.request({
        //     method: 'getBalance',
        //     params: account
        // }).then(Balance => {
        //     console.log(Balance);
        // });
    });
    //////// phantom wallet //////////
    // import { Connection, SystemProgram, Transaction, clusterApiUrl } from '@solana/web3.js';
    // alert('g');
    // let provider = 'https://www.sollet.io';

    // // For sollet extension use
    // // provider = window.sollet

    // let wallet = new Wallet(provider);
    // wallet.on('connect', publicKey => console.log('Connected to ' + publicKey.toBase58()));
    // wallet.on('disconnect', () => console.log('Disconnected'));
    // await wallet.connect();

    // // Sending a transaction
    // let connection = new Connection(clusterApiUrl('devnet'));

    // let transaction = new Transaction().add(
    //     SystemProgram.transfer({
    //         fromPubkey: wallet.publicKey,
    //         toPubkey: wallet.publicKey,
    //         lamports: 100,
    //     })
    // );
    // let { blockhash } = await connection.getRecentBlockhash();
    // transaction.recentBlockhash = blockhash;
    // transaction.feePayer = wallet.publicKey;
    // let signed = await wallet.signTransaction(transaction);
    // let txid = await connection.sendRawTransaction(signed.serialize());
    // await connection.confirmTransaction(txid);

    // // Phantom Wallet
    // window.solana.connect();
    // window.solana.on("connect", () => console.log("connected!"))

    // console.log(window.solana.publicKey);
    ///////// end ///////////
    // $('#prebuy-item').on('click', (e) => {
    //     // window.location = "checkout.html"

    // })
    let productName = $('#product-name').text();

    let productPrice = $('#product-price').text().replace("SFCN", "");
    const productInfo = {
        "name": productName,
        "price": productPrice
    }
    sessionStorage.setItem('productInfo', JSON.stringify(productInfo));
    /*==============================
    Menu
    ==============================*/
    $('.header__btn').on('click', function() {
        $(this).toggleClass('header__btn--active');
        $('.header__menu').toggleClass('header__menu--active');
    });

    $('.header__search .close, .header__action--search button').on('click', function() {
        $('.header__search').toggleClass('header__search--active');
    });

    /*==============================
    Multi level dropdowns
    ==============================*/
    $('ul.dropdown-menu [data-toggle="dropdown"]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass('show');
    });

    $(document).on('click', function(e) {
        $('.dropdown-menu').removeClass('show');
    });

    /*==============================
    Home slider
    ==============================*/
    $('.hero').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: false,
        smartSpeed: 600,
        autoHeight: true,
        items: 1,
        responsive: {
            0: {
                margin: 20,
            },
            576: {
                margin: 20,
            },
            768: {
                margin: 30,
            },
            1200: {
                margin: 30,
                mouseDrag: false,
            },
        }
    });

    /*==============================
    Carousel
    ==============================*/
    $('.main__carousel--collections').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: false,
        smartSpeed: 600,
        margin: 20,
        autoHeight: true,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 5,
                margin: 30,
                mouseDrag: false,
                dots: false,
            },
        }
    });

    $('.main__carousel--live').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 600,
        margin: 20,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 4,
                margin: 30,
                mouseDrag: false,
                dots: false,
            },
        }
    });

    $('.main__carousel--explore').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 600,
        margin: 20,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 4,
                margin: 30,
                mouseDrag: false,
                dots: false,
            },
        }
    });

    $('.main__carousel--authors').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 600,
        margin: 20,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 4,
                margin: 30,
                mouseDrag: false,
                dots: false,
            },
        }
    });

    $('.card__cover--carousel').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 800,
        smartSpeed: 800,
        margin: 20,
        items: 1,
    });

    /*==============================
    Navigation
    ==============================*/
    $('.main__nav--prev').on('click', function() {
        var carouselId = $(this).attr('data-nav');
        $(carouselId).trigger('prev.owl.carousel');
    });
    $('.main__nav--next').on('click', function() {
        var carouselId = $(this).attr('data-nav');
        $(carouselId).trigger('next.owl.carousel');
    });

    /*==============================
    Partners
    ==============================*/
    $('.partners').owlCarousel({
        mouseDrag: false,
        touchDrag: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        margin: 20,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
                margin: 20,
            },
            768: {
                items: 4,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 6,
                margin: 30,
            },
            1900: {
                items: 8,
                margin: 30,
            },
        }
    });

    /*==============================
    Modal
    ==============================*/
    $('.open-video, .open-map').magnificPopup({
        disableOn: 0,
        fixedContentPos: true,
        type: 'iframe',
        preloader: false,
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });

    $('.asset__img').magnificPopup({
        fixedContentPos: true,
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'my-mfp-zoom-in',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 400
        }
    });

    $('.open-modal').magnificPopup({
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: false,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
    });

    $('.modal__close').on('click', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });




    /*==============================
    Select
    ==============================*/
    $('.main__select').select2({
        minimumResultsForSearch: Infinity
    });

    /*==============================
    Copy
    ==============================*/
    $('.author__code button').on('click', function() {
        var copyText = document.getElementById('author-code');
        copyText.select(); /* Select the text field */
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy"); /* Copy the text inside the text field */

        /* Alert the copied text */
        $(this).addClass('active');
        setTimeout(function() {
            $('.author__code button').removeClass('active');
        }, 1200);
    });

    /*==============================
    Section bg
    ==============================*/
    $('.main__video-bg, .author__cover--bg, .main__author, .collection__cover, .hero__slide').each(function() {
        if ($(this).attr('data-bg')) {
            $(this).css({
                'background': 'url(' + $(this).data('bg') + ')',
                'background-position': 'center center',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            });
        }
    });

    /*==============================
    Upload file
    ==============================*/
    $('.sign__file-upload').on('change', function() {
        var videoLabel = $(this).attr('data-name');

        if ($(this).val() != '') {
            $(videoLabel).text($(this)[0].files[0].name);
        } else {
            $(videoLabel).text('Upload file');
        }
    });

    /*==============================
    Countdown
    ==============================*/
    $('.asset__clock').countdown('2022/12/01', function(event) {
        $(this).html(event.strftime('%D days %H:%M:%S'));
    });

    $('.card__clock--1').countdown('2022/12/01', function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
    });

    $('.card__clock--2').countdown('2023/11/01', function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
    });

    /*==============================
    Scrollbar
    ==============================*/
    var Scrollbar = window.Scrollbar;

    if ($('#asset__actions--scroll').length) {
        Scrollbar.init(document.querySelector('#asset__actions--scroll'), {
            damping: 0.1,
            renderByPixels: true,
            alwallysShowTracks: true,
            continuousScrolling: false,
        });
    }

    /*==============================
    	Take a bid
    	==============================*/



    $('#buy-item').on('click', (e) => {
        alert("tt");
        let aaa = document.getElementById("product-price").innerText;
        let price = aaa;
        let mprice = "";
        let c = 'f';
        for (let i = 0; i < price.length; i++) {
            if (price[i] === ' ') continue;
            if (price[i] === '.') {
                mprice += price[i];
                continue;
            }
            if (price[i] <= '9' && price[i] >= '0') {
                mprice += price[i];
                continue;
            }
            if (price[i] === 'B') {
                mprice = Number(mprice);
                mprice *= 1000000000;
                break;
            }
            if (price[i] === 'M') {
                mprice = Number(mprice);
                mprice *= 1000000;
                break;
            }
            if (price[i] === 'K') {
                mprice = Number(mprice);
                mprice *= 1000;
                break;
            }

            break;

        }
        sessionStorage.setItem('PrIcE', mprice);
        let amount = sessionStorage.getItem('PrIcE');
        let bid_ammound = "";
        for (let i = 0; i < amount.length; i++) {
            if (amount[i] === ' ') break;
            bid_ammound += amount[i];
        }
        console.log(bid_ammound)
        const product_name = document.getElementById('product-name').innerText;
        console.log(product_name)
        if (!bid_ammound) {
            alert('Enter a bid ammount!');
            return;
        }
        if (!product_name) {
            alert('try again!');
            return;
        }
        const data = {
            bid_ammound,
            product_name
        };


        sessionStorage.setItem('data', JSON.stringify(data));

        window.location = "checkout.html"
    })

    // Iframe height
    const width = $('#iframe-sec').width();
    let height = (1280 / 1920) * width;
    $('#iFrame1').attr("height", height + 'px');
    $('#iFrame1').attr("width", width + 'px');

    //buy now




});




//custom JS


$('head').append('<link href="libs/bootstrap/css/bootstrap-grid.css" rel="stylesheet"><link href="css/main1bce.css?v=6" rel="stylesheet"><link href="css/media.css" rel="stylesheet"><script src="js/jquery.js"></script><script src="js/functions30f4.js?v=3"></script>');

// $(".header__content").append('<div id="navigation"><div class="container"><div class="navigation__box"><div class="navigation__list"><ul class=""><li><a href="http://safecitydemo.com/home/">HOME</a></li><li><a href="http://safecitydemo.com/app/">APP</a></li><li><a href="http://safecitydemo.com/home/whitepaper.html" target="_blank">WHITEPAPER</a></li><li><a href="http://safecitydemo.com/home/roadmap.html"  ,>ROADMAP</a></li><li><a href="https://map.safecitydemo.com/"  ,>EXPLORE</a></li><li><a href="https://safe.city/safex/metavarse.html"  ,>MARKETPLACE</a></li></ul></div></div></div></div><div id="top__line"><div class="top_line container"><div class="row justify-content-between align-items-center"><div class="top__line-left"><div class="top__line-logo"><a href="http://safecitydemo.com/home" class="logo"><img src="img/logo.png" alt=""></a></div><div class="menu_list"><ul class=""><li><a href="http://safecitydemo.com/home">HOME</a></li><li><a href="http://safecitydemo.com/app/">APP</a></li><li><a href="http://safecitydemo.com/home/whitepaper.html" target="_blank">WHITEPAPER</a></li><li><a href="http://safecitydemo.com/home/roadmap.html"  ,>ROADMAP</a></li><li><a href="https://map.safecitydemo.com/"  ,>EXPLORE</a></li><li><a href="https://safe.city/safex/metavarse.html"  ,>MARKETPLACE</a></li><li class="buyBtn"><a href="http://safecitydemo.com/app/safeswap.html"  ,>BUY SFCN</a></li></ul></div></div><div class="top__line-right"><button class="buyBtn" onclick="window.location.href=\'http://safecitydemo.com/app/safeswap.html\'">BUY SFCN</button><div class="button_toogle button_toogle-nav"><button class="c-hamburger c-hamburger--htx btn-open"><span></span></button></div></div></div></div></div></div></header>')
//     //$(".header__content").append('<div id="navigation"><div class="container"><div class="navigation__box"><div class="navigation__list"><ul class=""><li><a href="http://safecitydemo.com/home/">HOME</a></li><li><a href="http://safecitydemo.com/app/">APP</a></li><li><a href="http://safecitydemo.com/home/whitepaper.html" target="_blank">WHITEPAPER</a></li><li><a href="http://safecitydemo.com/home/roadmap.html"  ,>ROADMAP</a></li><li><a href="https://map.safecitydemo.com/"  ,>EXPLORE</a></li><li><a href="https://safe.city/safex/metavarse.html"  ,>MARKETPLACE</a></li></ul></div></div></div></div><div id="top__line"><div class="top_line container"><div class="row justify-content-between align-items-center"><div class="top__line-left"><div class="top__line-logo"><a href="http://safecitydemo.com/home" class="logo"><img src="img/logo.png" alt=""></a></div><div class="menu_list"><ul class=""><li><a href="http://safecitydemo.com/home">HOME</a></li><li><a href="http://safecitydemo.com/app/">APP</a></li><li><a href="http://safecitydemo.com/home/whitepaper.html" target="_blank">WHITEPAPER</a></li><li><a href="http://safecitydemo.com/home/roadmap.html"  ,>ROADMAP</a></li><li><a href="https://map.safecitydemo.com/"  ,>EXPLORE</a></li><li><a href="https://safe.city/safex/metavarse.html"  ,>MARKETPLACE</a></li><li class="buyBtn"><a href="http://safecitydemo.com/app/safeswap.html"  ,>BUY SFCN</a></li></ul></div></div><div class="top__line-right"><button class="buyBtn" onclick="window.location.href=\'http://safecitydemo.com/app/safeswap.html\'">BUY SFCN</button><div class="button_toogle button_toogle-nav"><button class="c-hamburger c-hamburger--htx btn-open"><span></span></button></div></div></div></div></div></div></header>')
//     //document.getElementById("buy-item").innerHTML ='BID NOW <img src="icon/arw.png">';

$(".header__content").append('<div id="navigation"><div class="container"><div class="navigation__box"><div class="navigation__list"><ul class=""><li><a href="http://safecitydemo.com/home/">HOME</a></li><li><a href="http://safecitydemo.com/app/">APP</a></li><li><a href="http://safecitydemo.com/home/whitepaper.html" target="_blank">WHITEPAPER</a></li><li><a href="http://safecitydemo.com/home/roadmap.html"  ,>ROADMAP</a></li><li><a href="https://map.safecitydemo.com/"  ,>EXPLORE</a></li><li><a href="https://safe.city/safex/metavarse.html"  ,>MARKETPLACE</a></li></ul><button class="buyBtn menu" onclick="window.location.href=\'http://safecitydemo.com/app/safeswap.html\'">BUY SFCN</button></div></div></div></div><div id="top__line"><div class="top_line container"><div class="row justify-content-between align-items-center"><div class="top__line-left"><div class="top__line-logo"><a href="http://safecitydemo.com/home" class="logo"><img src="img/logo.png" alt=""></a></div><div class="menu_list"><ul class=""><li><a href="http://safecitydemo.com/home">HOME</a></li><li><a href="http://safecitydemo.com/app/">APP</a></li><li><a href="http://safecitydemo.com/home/whitepaper.html" target="_blank">WHITEPAPER</a></li><li><a href="http://safecitydemo.com/home/roadmap.html"  ,>ROADMAP</a></li><li><a href="https://map.safecitydemo.com/"  ,>EXPLORE</a></li><li><a href="https://safe.city/safex/metavarse.html"  ,>MARKETPLACE</a></li><li class="buyBtn"><a href="http://safecitydemo.com/app/safeswap.html"  ,>BUY SFCN</a></li></ul></div></div><div class="top__line-right"><button id="connect" class="buyBtn">CONNECT</button><div class="button_toogle button_toogle-nav"><button class="c-hamburger c-hamburger--htx btn-open"><span></span></button></div></div></div></div></div></div></header>');
$(".top_line").append(`<div class="walletInfo"><div class="balance">ETH</div>&nbsp;&nbsp;<div class="address"><ul class="links">
<li class="dropdown"><a href="#" class="trigger-drop"></a>
  <ul class="drop">
    <li><a href="#">Art</a></li>
    <li><a href="#">Photography</a></li>
    <li><a href="#">Audio</a></li>
    <li><a href="#">Films</a></li>
  </ul>
</li></ul></div><div class="walletName"></div></div>`);