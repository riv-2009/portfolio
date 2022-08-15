import gameover from "../images/hangman/game-over.png";
import game from "../images/hangman/game.png";
import hangmanLogin from "../images/hangman/login.png";
import hangmanSignup from "../images/hangman/signup.png";
import hangmanResults from "../images/hangman/results.png";

const hangman = [
    {
        title: "Hangman Game",
        subtitle:
            "A word game where the goal is to find the missing word or words.",
        images: [game, gameover, hangmanResults, hangmanLogin, hangmanSignup],
        desc:
            "This project introduced me to php. The goal of this project was to make a hangman game with three main parts" +
            " a login system, game logic and a high score page. First time the program is ran it takes you to the login" +
            " section, if you don't have an account you can click the link to signup. The signup form checks the database" +
            " to determine if the username has already been taken and that all fields are valid. For authentication" +
            " the password is hashed with a SHA-256 algorithm and salted. When the game commences words are randomly" +
            " choosen from a list of animals and the game continues until the word is found. I implemented a algorithm" +
            " to determine the score to be stored in a mysql database and after the game ends it displays the high" +
            " score table. There is a different highscore table for each word length that is guessed. This project is" +
            " also hosted online through and infinity free acount. ",
        snippets: [
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
        ],
    },
];

export default hangman;
