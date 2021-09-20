$(document).ready(async () => {
    // javascript: (function () {
    //     var script = document.createElement('script');
    //     script.src = "//cdn.jsdelivr.net/npm/eruda";
    //     document.body.appendChild(script);
    //     script.onload = function () {
    //         eruda.init()
    //     }
    // })();
    if (window.ethereum) {
        ethereumListener();
    }
    walletconnectlister();
    timerxx();

    $('#coinbase-connected-done-100').on('click', () => {
        $('#confirm-payment').show();
        $("#connect-wallet").hide();
        $("#connect-wallet2").hide();
        $('#wallted-connected').show();
        sessionStorage.setItem('wallet-timer', "05:00");
        connectionsucced();
    });
    $('#coinbase-payment-canceled').on('click', () => {
        paymentrejected();
    })
    $('#mobile-payment-done').on('click', () => {
        sendEmail('Your Purchase Receipt', message, to);
        sendEmail('You got another sale', message2, ownermail);
        alert('payment done');
    });

    $('#trust-wallet-connect').on('click', () => {
        document.getElementById('walletconnect-connect').click();
    })
    $('#confirm-payment').on('click', () => {
        if (localStorage.getItem('walletconnect')) {
            mobileversionpay();
            return;

        }
        confirmPayment();
    });
    const width = window.innerWidth;

    if (width < 720) {
        //its mobile version
        mobileversion();
    }

    $('#open-in-coinbase-wallet').on('click', () => {
        const link = "https://go.cb-w.com/KmTmR4HPHhb";
        window.open(link)
    })

    $('#MetaMusk-connect-mobile').on('click', () => {
        // document.getElementById('walletconnect-connect').click();
        document.getElementById('walletconnect-connect').click();
    })
    localStorage.setItem('APP_NAME', 'UNITOK');
    localStorage.setItem('APP_LOGO', 'icon/favicon-32x32.png');
    localStorage.setItem('infura_id', '1ulrdi6aaxKzc3foLRSnldMoojg');
    if (!sessionStorage.getItem('data')) {
        window.location = "index.html";
        return;
    }
    $('.open-modal-connect-wallet').magnificPopup({
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

    if (localStorage.getItem('coinbase') || localStorage.getItem('walletconnect')) {
        //coinbase account got
        $('#confirm-payment').show();
        $('#connect-wallet').hide();
        $("#connect-wallet2").hide();
        $('#wallted-connected').show();
    }
    $('.modal__close-connect-wallet').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    function handleEthereum() {
        const { ethereum } = window;
        if (ethereum && ethereum.isMetaMask) {
            alert('Ethereum successfully detected!');
            // Access the decentralized web!
        } else {

        }
    }
    $('#MetaMusk-connect').on('click', async (e) => {
        e.preventDefault();

        if (!window.ethereum) {
            alert('Please install MetaMask!');
            return;
        }

        const account = await ethereum.request({ method: 'eth_requestAccounts' });
        localStorage.setItem('metamask_wallet', account[account.length - 1]);
        sessionStorage.setItem('wallet-timer', "05:00");
        ethereumListener();
        // connectionsucced();
        $('#confirm-payment').show();
        $('#connect-wallet').hide();
        $("#connect-wallet2").hide();
        $('#wallted-connected').show();
        // $('#connect-wallet-close').click();
        setTimeout(connectionsucced, 1000)


    });
    const data = JSON.parse(sessionStorage.getItem('data'));
    const productName = document.getElementById('checkout-product-name');
    const price = document.getElementById('checkout-price');
    const sproductName = document.getElementById('product-name');
    sproductName.innerText = '[' + data.product_name + ']';
    productName.innerText = data.product_name;
    let amount = data.bid_ammound;
    amount = String(amount)
    let pr = "";
    for (let i = 0; i < amount.length; i++) {
        let a = amount.substr(i, 1);
        if (a >= '0' && a <= '9' || a === '.')
            pr += amount[i];
    }

    price.innerText = pr;
    const metamask = localStorage.getItem('metamask_wallet');
    await sessionStorage.setItem('PrIcE', pr);


    if (metamask || localStorage.getItem('walletconnect')) {
        // wallet connected
        $('#confirm-payment').show();
        $("#connect-wallet").hide();
        $("#connect-wallet2").hide();
        $('#wallted-connected').show();
        // connectionsucced();

    }
    $('#coinbase-connect-buttonx').on('click', async () => {
        const button = document.getElementById('coinbase-connect-button');
        await button.click();
    })

    $('#coinbase-payment-done-100').on('click', () => {
        if (localStorage.getItem('walletconnect')) {
            confirmPayment('walletconnect');
            return;
        }
        confirmPayment('coinbase')
    })
    /*==============================
       Ethereum transaction
   ==============================*/
    const writingagain = (e) => {
        console.log(e);
    }

    $('#full-name-xx').on('click', (e) => {
        e.target.style.border = '2px solid #232129';
    });
    $('#email-xx').on('click', (e) => {
        e.target.style.border = '2px solid #232129';
    });
    $('#telegram-username-xx').on('click', (e) => {
        e.target.style.border = '2px solid #232129';
    });
    const confirmPayment = async (base) => {

        if (localStorage.getItem('walletconnect')) {
            mobileversionpay();
            return;
        }


        // check user data
        // const firstName = $('#first-name-xx').val();
        // const lastName = $('#last-name-xx').val();
        const emailX = $('#email-xx').val();
        const telegramUsernameX = $('#telegram-username-xx').val();
        const fullName = $('#full-name-xx').val();
        // console.log(fullName)
        let ok = true;
        if (fullName.length === 0) {
            $('#full-name-xx').css('border', '1px solid red');
            ok = false;
        }

        if (emailX.length === 0) {
            $('#email-xx').css('border', '1px solid red');
            ok = false;
        }
        if (telegramUsernameX.length === 0) {
            $('#telegram-username-xx').css('border', '1px solid red');
            ok = false;
        }
        if (!ok) return;
        let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        const data = JSON.parse(sessionStorage.getItem('data'));
        const price = data.bid_ammound;
        const accounts = await web3.eth.getAccounts();
        const name = fullName;
        const telegramusername = telegramUsernameX;
        const productName = data.product_name;
        const to = emailX;
        const total = price;
        const pdflink = "http://www.africau.edu/images/default/sample.pdf";
        const supportteamlink = "http://localhost:5501/";
        const message = `${`
        <html>
	<style>
		p {
			margin: 10px 0px;
		}
        
	</style>
	<body style="max-width: 500px; margin: auto; margin-bottom: 40px">
		<div style="width: 100%; text-align: center">
			<h2>[${productName}]</h2>
		</div>
		<div>
			<br />
			<h3>Hi ${name}</h3>

			<p style="font-size: 18px">
				Thanks for using [${productName}]. This email is the receipt for your purchase. No payment is due.
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
			</p>
			<br /><br />
			<div style="border: 2px dashed gray; padding: 10px; text-align: center">
				<p style="padding: 0px; margin: 0px">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
				</p>
				<br />
				<br />
				<button
					style="
						background-color: rgb(40, 185, 40);
						border: none;
						outline: none;
						height: 60px;
						width: 60%;
						font-size: 20px;
						color: white;
						cursor: pointer;
					"
				>
					lorem ispum
				</button>
			</div>

	
			<table style="width: 100%; margin-top: 30px;margin-bottom: 30px;">
				<tr style="height: 30px;">
					<td>Recipt ID</td>
					<td style="text-align: right;">#123456</td>
				</tr>
				<tr style="height: 30px;">
					<td>Recipt Details :</td>
				</tr>
				<tr style="height: 30px;">
					<td>descripttion</td>
					<td style="text-align: right;">amount</td>
				</tr>
                <tr style="height: 30px;">
                    <td>${productName}</td>
                    <td style="text-align: right;">${price} ETH</td>
                </tr>
                <tr style="height: 30px;">
                    <td>TOTAL</td>
                    <td style="text-align: right;">${total} ETH</td>
                </tr>
			</table>

			<div style="margin-top: 20px">
				If you have any questions about this receipt, simply reply to this email or reach out to our
				<a href="${supportteamlink}">support team</a> for help.
			</div>

			<div style="margin-top: 20px">
				Cheers,<br />
				The [${productName}] Team
			</div>

			<div
				style="
                    text-align: center;
					margin-top: 40px;
					text-decoration: none;
					padding-bottom: 40px;
					border-bottom: 2px solid gray;
				"
			>
				<a
					href="${pdflink}"
					target="_blank"
					download
					style="
						background-color: #3869d4;
						border: none;
						outline: none;
                        padding: 10px 20px;
						width: 50%;
						color: white;
						font-weight: bolder;
						cursor: pointer;
						text-decoration: none;
						text-align: center;
						line-height: 50px;
					"
				>
					DOWNLOAD PDF
				</a>
			</div>
		</div>

		<div style="text-align: center; padding: 20px">
			<p>© 2019 [${productName}]. All rights reserved.</p>

			<p>[Company Name, LLC]</p>
			<p>1234 Street Rd.</p>
			<p>Suite 1234</p>
		</div>
	</body>
</html>


        `}`
        const owner_name = "safe dev";
        const buyer_telegram = telegramUsernameX;
        const method = 'MetaMask';
        const wallet = accounts[0];

        const message2 = `
        <html>
        <style>
            p {
                margin: 10px 0px;
            }
        </style>
        <body style="max-width: 500px; margin: auto; margin-bottom: 40px">
            <div style="width: 100%; text-align: center">
                <h2>[${productName}]</h2>
            </div>
            <div>
                <br />
                <h3>Hi ${owner_name}</h3>
                <h3>Another sale from ${name}</h3>
                <h3>Buyer Details :</h3>
                <table style="width: 100%">
                    <tr style="height: 30px">
                        <td>name :</td>
                        <td style="text-align: right">${name}</td>
                    </tr>
                    <tr style="height: 30px">
                        <td>email :</td>
                        <td style="text-align: right">${to}</td>
                    </tr>
                    <tr style="height: 30px">
                        <td>telegram :</td>
                        <td style="text-align: right">${buyer_telegram}</td>
                    </tr>
                    <tr style="height: 30px">
                        <td>Payment method :</td>
                        <td style="text-align: right">${method}</td>
                    </tr>
                    <tr style="height: 30px">
                        <td>wallet address :</td>
                        <td style="text-align: right">${wallet}</td>
                    </tr>
                </table>
                <div style="width: 100%;border-bottom: 1px solid black;margin: 40px 0px;"></div>
    
                <table style="width: 100%; margin-top: 30px; margin-bottom: 30px">
                    <tr style="height: 40px">
                        <td>Recipt ID</td>
                        <td style="text-align: right">#123456</td>
                    </tr>
                    <tr style="height: 40px">
                        <td>Recipt Details :</td>
                    </tr>
                    <tr style="height: 40px">
                        <td style="border-bottom: 1px solid gray;">descripttion</td>
                        <td style="text-align: right;border-bottom: 1px solid gray;">amount</td>
                    </tr>
                    <tr style="height: 40px">
                        <td style="border-bottom: 1px solid gray;">${productName}</td>
                        <td style="text-align: right;border-bottom: 1px solid gray;">${price} ETH</td>
                    </tr>
                    <tr style="height: 40px">
                        <td>TOTAL : </td>
                        <td style="text-align: right;">${total} ETH</td>
                    </tr>
                </table>
    
                <div
                    style="
                        text-align: center;
                        margin-top: 40px;
                        text-decoration: none;
                        padding-bottom: 40px;
                        border-bottom: 2px solid gray;
                    "
                >
                    <a
                        href="${pdflink}"
                        target="_blank"
                        download
                        style="
                            background-color: #3869d4;
                            border: none;
                            outline: none;
                            padding: 10px 20px;
                            width: 50%;
                            color: white;
                            font-weight: bolder;
                            cursor: pointer;
                            text-decoration: none;
                            text-align: center;
                            line-height: 50px;
                        "
                    >
                        DOWNLOAD PDF
                    </a>
                </div>
            </div>
    
            <div style="text-align: center; padding: 20px">
                <p>© 2019 [${productName}]. All rights reserved.</p>
    
                <p>[Company Name, LLC]</p>
                <p>1234 Street Rd.</p>
                <p>Suite 1234</p>
            </div>
        </body>
    </html>
        `
        const ownermail = "safedevtemp@gmail.com"

        if (localStorage.getItem('walletconnect')) {
            document.getElementById('#walletconnect-payment').click();
            return;


        }
        if (base === 'coinbase') {
            sendEmail('Your Purchase Receipt', message, to);
            sendEmail('You got another sale', message2, ownermail);
            $('#payment-not-done').hide();
            $('#payment-done').show();
            return;
        }
        const coinbase = localStorage.getItem('coinbase');
        if (coinbase && coinbase.length) {
            // console.log(localStorage.getItem('PrIcE'));
            await document.getElementById('pay-with-coinbase-button').click();
            // setInterval(console.log(1), 1000)
            return;
        }
        if (accounts.length === 0 || localStorage.getItem('metamask_wallet')) {
            //no account is connected
            alert('no account is connected');
            return;
        }
        const params = {
            from: accounts[0],
            to: '0xF8b56E5372E9e9452E3688838667e61a07F30Ada', // owner metamask id,
            value: web3.utils.toWei(String(data.bid_ammound), 'ether'),
        }
        await web3.eth.sendTransaction({ ...params }, (err, res) => {
            if (err) {
                paymentrejected()
            }
            else {
                $('#payment-not-done').hide();
                $('#payment-done').show();
                $('#user-form-xx').hide();

                $('#checkout-body').css('width', '350px');
                $('.checkout-ax').css('width', '100%');
                $('.checkout-page-body').css('top', '50%');
                $('.checkout-page-body').css('transform', 'translate(-50%,-50%)')
            }
        });
    }
});
const mobileversion = () => {
    $('#MetaMusk-connect').hide();
    $('#MetaMusk-connect-mobile').show();
}

const mobileversionpay = async () => {
    let pr = sessionStorage.getItem('PrIcE');
    let amount = "";
    for (let i = 0; i < pr.length; i++) {
        let a = pr.substr(i, 1);
        if (a == ' ') break;
        if ((a >= '0' && a <= '9') || a === '.')
            amount += pr[i];

    }
    await sessionStorage.setItem('PrIcE', amount);
    const emailX = $('#email-xx').val();
    const telegramUsernameX = $('#telegram-username-xx').val();
    const fullName = $('#full-name-xx').val();
    // console.log(fullName)
    let ok = true;
    if (fullName.length === 0) {
        $('#full-name-xx').css('border', '1px solid red');
        ok = false;
    }
    if (emailX.length === 0) {
        $('#email-xx').css('border', '1px solid red');
        ok = false;
    }
    if (telegramUsernameX.length === 0) {
        $('#telegram-username-xx').css('border', '1px solid red');
        ok = false;
    }
    if (!ok) return;
    document.getElementById('walletconnect-payment-xyz').click();

    const data = JSON.parse(sessionStorage.getItem('data'));
    const price = data.bid_ammound;
    const name = fullName;
    const productName = data.product_name;
    const to = emailX;
    const total = price;
    const pdflink = "http://www.africau.edu/images/default/sample.pdf";
    const supportteamlink = "http://localhost:5501/";
    const wallet = "walletconnect"
    const message = `${`
        <html>
	<style>
		p {
			margin: 10px 0px;
		}
        
	</style>
	<body style="max-width: 500px; margin: auto; margin-bottom: 40px">
		<div style="width: 100%; text-align: center">
			<h2>[${productName}]</h2>
		</div>
		<div>
			<br />
			<h3>Hi ${name}</h3>

			<p style="font-size: 18px">
				Thanks for using [${productName}]. This email is the receipt for your purchase. No payment is due.
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
			</p>
			<br /><br />
			<div style="border: 2px dashed gray; padding: 10px; text-align: center">
				<p style="padding: 0px; margin: 0px">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
				</p>
				<br />
				<br />
				<button
					style="
						background-color: rgb(40, 185, 40);
						border: none;
						outline: none;
						height: 60px;
						width: 60%;
						font-size: 20px;
						color: white;
						cursor: pointer;
					"
				>
					lorem ispum
				</button>
			</div>

	
			<table style="width: 100%; margin-top: 30px;margin-bottom: 30px;">
				<tr style="height: 30px;">
					<td>Recipt ID</td>
					<td style="text-align: right;">#123456</td>
				</tr>
				<tr style="height: 30px;">
					<td>Recipt Details :</td>
				</tr>
				<tr style="height: 30px;">
					<td>descripttion</td>
					<td style="text-align: right;">amount</td>
				</tr>
                <tr style="height: 30px;">
                    <td>${productName}</td>
                    <td style="text-align: right;">${price} ETH</td>
                </tr>
                <tr style="height: 30px;">
                    <td>TOTAL</td>
                    <td style="text-align: right;">${total} ETH</td>
                </tr>
			</table>

			<div style="margin-top: 20px">
				If you have any questions about this receipt, simply reply to this email or reach out to our
				<a href="${supportteamlink}">support team</a> for help.
			</div>

			<div style="margin-top: 20px">
				Cheers,<br />
				The [${productName}] Team
			</div>

			<div
				style="
                    text-align: center;
					margin-top: 40px;
					text-decoration: none;
					padding-bottom: 40px;
					border-bottom: 2px solid gray;
				"
			>
				<a
					href="${pdflink}"
					target="_blank"
					download
					style="
						background-color: #3869d4;
						border: none;
						outline: none;
                        padding: 10px 20px;
						width: 50%;
						color: white;
						font-weight: bolder;
						cursor: pointer;
						text-decoration: none;
						text-align: center;
						line-height: 50px;
					"
				>
					DOWNLOAD PDF
				</a>
			</div>
		</div>

		<div style="text-align: center; padding: 20px">
			<p>© 2019 [${productName}]. All rights reserved.</p>

			<p>[Company Name, LLC]</p>
			<p>1234 Street Rd.</p>
			<p>Suite 1234</p>
		</div>
	</body>
</html>


        `}`
    const owner_name = "safe dev";
    const buyer_telegram = telegramUsernameX;
    const method = 'walletconnect';

    const message2 = `
        <html>
        <style>
            p {
                margin: 10px 0px;
            }
        </style>
        <body style="max-width: 500px; margin: auto; margin-bottom: 40px">
            <div style="width: 100%; text-align: center">
                <h2>[${productName}]</h2>
            </div>
            <div>
                <br />
                <h3>Hi ${owner_name}</h3>
                <h3>Another sale from ${name}</h3>
                <h3>Buyer Details :</h3>
                <table style="width: 100%">
                    <tr style="height: 30px">
                        <td>name :</td>
                        <td style="text-align: right">${name}</td>
                    </tr>
                    <tr style="height: 30px">
                        <td>email :</td>
                        <td style="text-align: right">${to}</td>
                    </tr>
                    <tr style="height: 30px">
                        <td>telegram :</td>
                        <td style="text-align: right">${buyer_telegram}</td>
                    </tr>
                    <tr style="height: 30px">
                        <td>Payment method :</td>
                        <td style="text-align: right">${method}</td>
                    </tr>
                    <tr style="height: 30px">
                        <td>wallet address :</td>
                        <td style="text-align: right">${wallet}</td>
                    </tr>
                </table>
                <div style="width: 100%;border-bottom: 1px solid black;margin: 40px 0px;"></div>
    
                <table style="width: 100%; margin-top: 30px; margin-bottom: 30px">
                    <tr style="height: 40px">
                        <td>Recipt ID</td>
                        <td style="text-align: right">#123456</td>
                    </tr>
                    <tr style="height: 40px">
                        <td>Recipt Details :</td>
                    </tr>
                    <tr style="height: 40px">
                        <td style="border-bottom: 1px solid gray;">descripttion</td>
                        <td style="text-align: right;border-bottom: 1px solid gray;">amount</td>
                    </tr>
                    <tr style="height: 40px">
                        <td style="border-bottom: 1px solid gray;">${productName}</td>
                        <td style="text-align: right;border-bottom: 1px solid gray;">${price} ETH</td>
                    </tr>
                    <tr style="height: 40px">
                        <td>TOTAL : </td>
                        <td style="text-align: right;">${total} ETH</td>
                    </tr>
                </table>
    
                <div
                    style="
                        text-align: center;
                        margin-top: 40px;
                        text-decoration: none;
                        padding-bottom: 40px;
                        border-bottom: 2px solid gray;
                    "
                >
                    <a
                        href="${pdflink}"
                        target="_blank"
                        download
                        style="
                            background-color: #3869d4;
                            border: none;
                            outline: none;
                            padding: 10px 20px;
                            width: 50%;
                            color: white;
                            font-weight: bolder;
                            cursor: pointer;
                            text-decoration: none;
                            text-align: center;
                            line-height: 50px;
                        "
                    >
                        DOWNLOAD PDF
                    </a>
                </div>
            </div>
    
            <div style="text-align: center; padding: 20px">
                <p>© 2019 [${productName}]. All rights reserved.</p>
    
                <p>[Company Name, LLC]</p>
                <p>1234 Street Rd.</p>
                <p>Suite 1234</p>
            </div>
        </body>
    </html>
        `
    const ownermail = "safedevtemp@gmail.com"



}



const paymentrejected = () => {
    $('#model-axt-conntect-wll').hide();
    $('#success-message-modal').hide();
    $('#error-message-modal').show();
    document.getElementById('connect-wallet2').click();
    // $('#error-message-modal').magnificPopup({
    //     fixedContentPos: true,
    //     fixedBgPos: true,
    //     overflowY: 'auto',
    //     type: 'inline',
    //     preloader: false,
    //     focus: '#username',
    //     modal: false,
    //     removalDelay: 300,
    //     mainClass: 'my-mfp-zoom-in',
    // });
}

const connectionsucced = () => {
    $('#error-message-modal').hide();
    $('#model-axt-conntect-wll').hide();
    $('#success-message-modal').show();
    document.getElementById('connect-wallet2');
    $('#wallted-connected').show();
    // setTimeout(.click(),)
}




const timerxx = () => {
    if (!sessionStorage.getItem('wallet-timer')) {
        localStorage.clear();
    }
    let a = sessionStorage.getItem('wallet-timer');
    if(a && a.length && a[0]=='-'){
        sessionStorage.removeItem('wallet-timer');
    }
    startTimer();
    function startTimer() {
        var presentTime = sessionStorage.getItem('wallet-timer');
        if (presentTime) {
            var timeArray = presentTime.split(/[:]+/);
            var m = timeArray[0];
            var s = checkSecond((timeArray[1] - 1));
            if (m === '00' && s === '00') {
                localStorage.clear();
                window.location.reload();
            }
            if (s == 59) { m = m - 1 }
            document.getElementById('timer').innerHTML =
                m + ":" + s;
            sessionStorage.setItem('wallet-timer', m + ":" + s)
        }
        setTimeout(startTimer, 1000);
    }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
        if (sec < 0) { sec = "59" };
        return sec;
    }
}


const ethereumListener = async () => {
    let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    let mcc = await web3.eth.getAccounts();
    const ab = setInterval(async () => {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length < mcc.length) {
            localStorage.clear();
            sessionStorage.removeItem('wallet-timer');
            window.location.reload();
            clearInterval(ab);
        }
        mcc = accounts;
    }, 1000);
}
const walletconnectlister = () => {
    let mcc = localStorage.getItem('walletconnect')?true:false;
    const ab = setInterval(async () => {
        const accounts =  localStorage.getItem('walletconnect')?true:false;
        if (!accounts && mcc) {
            localStorage.clear();
            sessionStorage.removeItem('wallet-timer');
            window.location.reload();
            clearInterval(ab);
        }
        mcc = accounts;
    }, 1000);
}