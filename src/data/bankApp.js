import login from "../images/bank-app/login.png";
import signUp from "../images/bank-app/sign-up.png";
import deposit from "../images/bank-app/deposit.png";
import withdraw from "../images/bank-app/withdraw.png";
import transfer from "../images/bank-app/transfer.png";
import transaction from "../images/bank-app/transactions.png";

const bankApp = [
    {
        title: "bank app",
        subtitle:
            "A simple banking app that allows users to deposit, store and withdraw money into three accounts.",
        images: [login, signUp, deposit, withdraw, transfer, transaction],
        desc: "This project was a simple bank app. The frontend was coded in react and used bootstrap to style the site. The backend of this project utilized .NET and used Entity Framework to work with the data within a mysql database. This project had a login system and signup process to verify credentials which had a minimum requirement validation implemented. Once sucessful the username, hashed and salted password is stored in the mysql database. Once logged into the system you are allowed to withdraw money, deposit money, transfer money, see transactions on your accounts and logout.",
        snippets: [
            `
        This section of code I contributed to handle depositing money into the selected account type, this 
        project was my first experience writing code in react.
    
    
        const handleChange = (selectedAccount) => {
            setSelectedAccount(selectedAccount);
        };
    
        const getAccountType = (accountType) => {
            switch (Number(accountType)) {
                case 1:
                    return "Checking";
                case 2:
                    return "Savings";
                default:
                    return "Money Market";
            }
        };`,
            `
        //This section figured out how to handle the event that a deposit event occured, 
        it uses axios to make the api call to the backend.
    
        const handleSubmit = (e) => {
            const user = sessionStorage.getItem("userID");
    
            if (amount <= 0 || isNaN(amount)) {
                setMsg("Enter a vaild amount");
            } else if (
                selectedAccount === undefined ||
                selectedAccount === "Select an Account"
            ) {
                setMsg("Select an account");
            } else {
                axios({
                    method: "get",
                    url:"http://localhost:5000/api/account/user/",
                })
                    .then((res) => {
                        if (res?.data) {
                            let id = res.data.find((a) => a.type == selectedAccount).id;
                            return axios({
                                method: "patch",
                                url: "http://localhost:5000/api/account/balance",
                                data: {
                                    amount: parseInt(amount * 100),
                                    accountId: id,
                                    userId: user,
                                    accountType: getAccountType(selectedAccount),
                                },
                            });
                        }
                    })
                    .then((res) => {
                        if (res.status === 200) {
                            navigate("../transactions");
                        }
                    })
                    .catch((err) => {
                        console.log("there were an errer");
                    });
            }
        };
        `,
        ],
    },
];

export default bankApp;
