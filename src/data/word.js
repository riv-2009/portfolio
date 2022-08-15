import word2 from "../images/word/word2.png";
import word3 from "../images/word/word3.png";
import word5 from "../images/word/word5.png";
import word6 from "../images/word/word6.png";
import word7 from "../images/word/word7.png";

const wordApp = [
    {
        title: "",
        subtitle:
            "A two player asynchronous game, where both players see the same grid and compete for a higher score.",
        images: [word2, word3, word6, word7, word5],
        desc: "This project was coded in C# and used entity framework and mysql on the server side and the frontend used react and chakra-ui to style the program. The goal of this project was to make a two player asynchronous game and to accomplish this my group used signalr. The game itself organizes letters in a 4x4 grid similar to the game of boggle. Both players see the same grid when the game starts and a two minunte timer starts for them to find as many words as they can before the time is up. Each letter in the grid has a 40 percent chance of generating a vowel but the letter were tweaked so that more comman constants would show up. We imported around 375,000 words into a database for the server side code to check against and then relayed back to the player via signalr if the word was valid. The end of the game shows a result screen of who won. This game was also designed to be mobile freindly using the chakra ui library.",
        snippets: [
            `
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
        `,
            `
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
        `,
        ],
    },
];

export default wordApp;
