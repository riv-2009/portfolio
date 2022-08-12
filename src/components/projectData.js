import login from "../images/bank-app/login.png";
import signUp from "../images/bank-app/sign-up.png";
import deposit from "../images/bank-app/deposit.png";
import withdraw from "../images/bank-app/withdraw.png";
import transfer from "../images/bank-app/transfer.png";
import transaction from "../images/bank-app/transactions.png";
import gameover from "../images/hangman/game-over.png";
import game from "../images/hangman/game.png";
import hangmanLogin from "../images/hangman/login.png";
import hangmanSignup from "../images/hangman/signup.png";
import hangmanResults from "../images/hangman/results.png";
import stock from "../images/stock/stock.png";
import stock1 from "../images/stock/stock1.png";
import stock2 from "../images/stock/stock2.png";
import stock3 from "../images/stock/stock3.png";
import stock4 from "../images/stock/stock4.png";
import word2 from "../images/word/word2.png";
import word3 from "../images/word/word3.png";
import word5 from "../images/word/word5.png";
import word6 from "../images/word/word6.png";
import word7 from "../images/word/word7.png";
import { Heading, Center, Box } from "@chakra-ui/react";
import ProjectContainer from "./projectContainer";
import { useState } from "react";

const ProjectData = () => {
    const [imgHangmanApp] = useState([
        game,
        gameover,
        hangmanResults,
        hangmanLogin,
        hangmanSignup,
    ]);
    const [imgBankApp] = useState([
        login,
        signUp,
        deposit,
        withdraw,
        transfer,
        transaction,
    ]);
    const [imgStockApp] = useState([stock, stock1, stock2, stock3, stock4]);
    const [imgWordApp] = useState([word2, word3, word6, word7, word5]);

    const hangmanSubTitle =
        "A word game where the goal is to find the missing word or words.";
    const hangmanDesc =
        "This project introduced me to php. The goal of this project was to make a hangman game with three main parts a login system, game logic and a high score page. First time the program is ran it takes you to the login section, if you don't have an account you can click the link to signup. The signup form checks the database to determine if the username has already been taken and that all fields are valid. For authentication the password is hashed with a SHA-256 algorithm and salted. When the game commences words are randomly choosen from a list of animals and the game continues until the word is found. I implemented a algorithm to determine the score to be stored in a mysql database and after the game ends it displays the high score table. There is a different highscore table for each word length that is guessed. This project is also hosted online through and infinity free acount.  ";
    const bankSubTitle =
        "A simple banking app that allows users to deposit, store and withdraw money into three accounts.";
    const bankDesc =
        "This project was a simple bank app. The frontend was coded in react and used bootstrap to style the site. The backend of this project utilized .NET and used Entity Framework to work with the data within a mysql database. This project had a login system and signup process to verify credentials which had a minimum requirement validation implemented. Once sucessful the username, hashed and salted password is stored in the mysql database. Once logged into the system you are allowed to withdraw money, deposit money, transfer money, see transactions on your accounts and logout.";
    const stockSubTitle =
        "A game simulating how to invest in the stock market by looking at prior data.";
    const stockDesc = "This stock investing practice app was coded in c#, entity framework, and mysql on the server side and the client side ui was coded in react and used bootstrap and material ui. The goal of this project was to simulate how your investments would perform if you bought stock on a random consective days in the past, you have the choice to buy, sell, hold, or quit the game early and try to see if you make or lose money over that period. The project used polygon.io to make api calls against in order to get the historical data of the stock ticker that you select. The program used asynchronous communication through signalr to send data. The ui also had three options to enter data to buy or sell the stock, they were through a slider, input box and pie chart.";
    const wordSubTitle =
        "A two player asynchronous game, where both players see the same grid and compete for a higher score.";
    const wordDesc = "This project was coded in C# and used entity framework and mysql on the server side and the frontend used react and chakra-ui to style the program. The goal of this project was to make a two player asynchronous game and to accomplish this my group used signalr. The game itself organizes letters in a 4x4 grid similar to the game of boggle. Both players see the same grid when the game starts and a two minunte timer starts for them to find as many words as they can before the time is up. Each letter in the grid has a 40 percent chance of generating a vowel but the letter were tweaked so that more comman constants would show up. We imported around 375,000 words into a database for the server side code to check against and then relayed back to the player via signalr if the word was valid. The end of the game shows a result screen of who won. This game was also designed to be mobile freindly using the chakra ui library.";

    const [hangmanCode, setHangmanCode] = useState([
        `
    I wrote this section in php.
    insert-db.php was just used to initialize my database with words from word.txt
    

    require_once 'connection-info.php';
    
    insertAnimalsDB($conn);
    
    
    function insertAnimalsDB($conn){
        //get words from word.txt file
        $fh = fopen('word.txt', 'r') or die ("could not open file.");
        while(! feof($fh)){
            $words[] = fgets($fh);
        }
        fclose($fh);
     
        foreach ($words as $word) {
            $str = str_replace(' ', '', $word); 
            $length = strlen($str)-2; 
            $sql = "INSERT INTO animals (name, length) VALUES ('$word', '$length')";
            $conn->query($sql);
        }
        $conn->close();
    }`,
        `//put letters a-z in an array for UI
    $letters = array();
    $a = 'a';
    for ($i=0; $i < 26; $i++) {
        $letters[$i] = $a++;
    }
    
    //get random word from database returns array( word and length)
    if(!isset($_POST['showScores'])){
      $word = getWordsDB($conn);
      $length = $word[1];
      $hangmanWord = $word[0];
      $_SESSION['word'] = $hangmanWord;
    }
    // update high score table
    if(isset($_POST['showScores'])){
      $_SESSION['attempts'] =$_POST['attempts'];
      $highScore = intval($_POST['highscore']);
      $_SESSION['score'] = $highScore;
      $ln = $_POST['ln'];
      $sql = "INSERT INTO highscore (id, name, score, ln ) VALUES (NULL, '$user', '$highScore', '$ln')";
      $conn->query($sql);
      $_SESSION['ln'] = $_POST['ln'];
      header("Location: high-scores.php"); 
    }`,
    ]);
    const [bankCode, setBankCode] = useState([
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
    ]);
    const [stockCode, setStockCode] = useState([
        `
        I wrote the code in react, this section implement's a slider that synced up with the input 
        box and pie chart so the user could use any three of the options to adjust stock 
        shares to purchase.

        import * as React from "react";
        import Box from "@mui/material/Box";
        import Slider from "@mui/material/Slider";

        const StockSlider = ({ sharesPurchased, shares, Value, setValue, Action }) => {
            return (
                <Box width={300}>
                    {Action == "buy" && (
                        <Slider
                            value={Value}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            max={Math.trunc(shares)}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                    )}
                    {Action == "sell" && (
                        <Slider
                            value={Value}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            max={Math.trunc(sharesPurchased)}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                    )}
                </Box>
            );
        };
        export default StockSlider;
    `,
        `
        I wrote the code in this section using Signalr C# version, it's triggered when the user selects
        to purchase or sell shares of stock. Then it make an api call to polygon.io to get 
        stock data for random consecutive 14 day's within the last two years and then returns 
        the price to the signalr client.

        using Microsoft.AspNetCore.SignalR;
        using Newtonsoft.Json;
        using RestSharp;
        using StockInvesting.Models;
        using StockInvesting.Controllers;

        namespace StockInvesting.Hubs
        {
            public class StockHub: Hub<IStockHubClient>
            {
                public async Task StockTickerMessage(string message)
                {
                    //randomDay.GetRandomDay()
                    //Returns a random day between (august 1, 2020 and febuary 5, 2022)
                    RandomDay randomDay = new RandomDay();
                    DateTime date = randomDay.GetRandomDay();

                    string url = $"https://api.polygon.io/v2/aggs/ticker/" +
                        $"{message.ToUpper()}/range/1/day/{date.ToString("yyyy-MM-dd")}/" +
                        $"{date.AddDays(14).ToString("yyyy-MM-dd")}?apiKey=IIrxKiZhCrJaV0LKZpUVYatFWopiLbxO";

                    var client = new RestClient(url);
                    var request = new RestRequest();
                    var response = await client.GetAsync(request);

                    message = response.Content;

                    await Clients.All.ReceiveMessage(message);
                }
            }
        }
   
    `,
    ]);
    const [wordCode, setWordCode] = useState([`
    In this code snippet I wrote these signalr methods in C#, in order communticate 
    with the client asynchronously. I found it a challenge to work with signlr at first 
    I couldn't figure out why the frontend wasn't working like expected, after further 
    debugging I realized I was sending the message to all clients instead of just the 
    caller. It was a good learning experience and I implement the changes in the 
    following code snippet.

    using Microsoft.AspNetCore.SignalR;
    using Database;
    using WordFinder.Controllers;

    namespace WordFinder.Hubs
    {
        public class WordHub: Hub<IWordHubClient>
        {
            private WordCheckerRepo _checkerRepo;
            private static int count = 0;
            private static string player1 = "";
            private static string player2 = "";
            private static int player1Score = 0;
            private static int player2Score = 0;
            private List<string> player1List;
            private List<string> player2List;

            public WordHub(WordCheckerRepo checkerRepo) {
                _checkerRepo = checkerRepo;
            }

            public async Task NumPlayers(string username)
            {
                count++;
                if (count == 1)
                {
                    player1 = username;
                }
                if(count == 2)
                {
                    player2 = username;
                }
                await Clients.All.NumPlayersCount(count);
            }
            public async Task GetLetters()
            {
                RandomLetter randomLetter = new RandomLetter();
                List<char> letters = randomLetter.getLetters();
                await Clients.All.SendRandomLetters(letters);
            }
            public async Task IsValidWord(string word)
            {
                string w = word.ToLower();
                var wordIsValid = await _checkerRepo.checkIfWordExists(w);
                await Clients.Caller.SendIsValidWord(!wordIsValid);
            }
            public async Task NerdleWinner(string username, int score, List<string> wordsFound)
            {
                if (username == player1)
                {
                    player1Score = score;
                    if (wordsFound != null)
                    {
                        player1List = wordsFound;
                    }
                    
                }
                if(username == player2)
                {
                    player2Score = score;
                    if (wordsFound != null)
                    {
                        player2List = wordsFound;
                    }
                }

                string winner = "";
                if (player1Score == player2Score)
                {
                    winner = "YOU TIED!";
                }
                else if (player1Score > player2Score)
                {
                    winner = player1 + " WINS!";
                }
                else
                    winner = player2 + " WINS!"; ;
                await Clients.All.SendNerdleWinner(winner,player1,player2, player1Score, player2Score, player1List, player2List);
            }
            public async Task FoundWord(string username)
            {
                await Clients.Others.SendFoundWord(username + " found a word.");  
            }     
        }
    }
    `, `
    I wrote this section to display the results of who won the game. Later I implemented 
    another component to display more detailed data and then added the TWOPLAYERSCREEN below. 
    This section of code was written in React and used chakra-ui.

    import { useState, useEffect } from "react";
    import TwoPlayerScreen from "./twoPlayerScreen";
    import { Center, Text, ChakraProvider } from "@chakra-ui/react";

    const ResultScreen = ({ Words, username, connection }) => {
        const [score, setScore] = useState(0);
        const [player1, setPlayer1] = useState();
        const [player2, setPlayer2] = useState();
        const [p1Score, setP1Score] = useState(0);
        const [p2Score, setP2Score] = useState(0);
        const [winner, setWinner] = useState("");
        const [player1Words, setPlayer1Words] = useState([]);
        const [player2Words, setPlayer2Words] = useState([]);
        
        useEffect(() => {
            getScore();
        }, [Words]);

        useEffect(() => {
            connection
                .invoke("NerdleWinner", username, score, Words)
                .catch((err) => console.error(err.toString()));
        }, [score]);

        useEffect(() => {
            connection.on(
                "SendNerdleWinner",
                (winner, p1, p2, p1Score, p2Score, p1Words, p2Words) => {
                    setWinner(winner);
                    setPlayer1(p1);
                    setPlayer2(p2);
                    setP1Score(p1Score);
                    setP2Score(p2Score);
                    if (p1Words != null) {
                        setPlayer1Words(p1Words);
                    }
                    if (p2Words != null) {
                        setPlayer2Words(p2Words);
                    }
                }
            );
        },[player2Words]);

        const getScore = () => {
            {
                let pts = 0;
                for (let i in Words) {
                    switch (Words[i].length) {
                        case 3:
                            pts = pts + 1;
                            setScore(pts);
                            break;
                        case 4:
                            pts = pts + 2;
                            setScore(pts);
                            break;
                        case 5:
                            pts = pts + 4;
                            setScore(pts);
                            break;
                        case 6:
                            pts = pts + 6;
                            setScore(pts);
                            break;
                        case 7:
                            pts = pts + 8;
                            setScore(pts);
                            break;
                        case 8:
                            pts = pts + 10;
                            setScore(pts);
                            break;
                        default:
                            pts = pts + 15;
                            setScore(pts);
                            break;
                    }
                }
            }
        };
        return (
            <ChakraProvider>
                <Center m={50}>
                    <Text
                        bgGradient="linear(to-l,orange.500, orange.200  )"
                        bgClip="text"
                        fontSize="5xl"
                        fontWeight="extrabold"
                    >
                        {winner.toUpperCase()}
                    </Text>
                </Center>
                <TwoPlayerScreen
                    username={player1}
                    score={p1Score}
                    Words={player1Words}
                ></TwoPlayerScreen>
                <TwoPlayerScreen
                    username={player2}
                    score={p2Score}
                    Words={player2Words}
                ></TwoPlayerScreen>
            </ChakraProvider>
        );
    };
    export default ResultScreen;
    `]);
    return (
        <Box m={20}>
            <Center>
                <Heading id="project" m={10} fontWeight="bold">
                    My <span className="green">Projects</span>
                </Heading>
            </Center>
            <hr />

            <ProjectContainer
                id="hangman"
                img={imgHangmanApp}
                title="hangman"
                subTitle={hangmanSubTitle}
                desc={hangmanDesc}
                front="hang-front-end"
                back=""
                code={hangmanCode}
                header="Hangman conde snippets"
                snippet="hang-snippet"
            ></ProjectContainer>
            <hr />
            <ProjectContainer
                id="bank"
                img={imgBankApp}
                title="bank app"
                subTitle={bankSubTitle}
                desc={bankDesc}
                front="bank-front-end"
                back="bank-back-end"
                code={bankCode}
                header="Bank app code snippets"
                snippet="bank-snippet"
            ></ProjectContainer>
            <hr />

            <ProjectContainer
                id="stock"
                img={imgStockApp}
                title="stock investing practice"
                subTitle={stockSubTitle}
                desc={stockDesc}
                front="stock-front-end"
                back="stock-back-end"
                code={stockCode}
                header="Stock Investing Practice code snippets"
                snippet="stock-snippet"
            ></ProjectContainer>
            <hr />
            <ProjectContainer
                id="word"
                img={imgWordApp}
                title="word finder"
                subTitle={wordSubTitle}
                desc={wordDesc}
                front="word-front-end"
                back="word-back-end"
                code={wordCode}
                header="Word Finder code snippets"
                snippet="word-snippet"
            ></ProjectContainer>
            <hr />
        </Box>
    );
};
export default ProjectData;
