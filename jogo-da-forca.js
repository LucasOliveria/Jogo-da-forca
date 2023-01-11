// Fazendo Jogo da Forca
const word = "abelha"

const hangman = {
    word,
    dashes: "".padStart(word.length, "_").split(""),
    lostParts: [],
    parts: ["🧑", "💪", "💪", "❤️", "🦵", "🦵"],
    checkGuess: function (palpite) {
        let foundLetter = false;

        for (let i = 0; i < this.word.length; i++) {
            if (palpite === this.word[i]) {
                this.dashes.splice(i, 1, palpite);
                foundLetter = true;
            }
        }

        if (this.dashes.includes("_")) {
            if (!foundLetter) {
                if (this.lostParts.length < 6) {
                    this.lostParts.push(this.parts[0]);
                    this.parts.shift()

                    if (this.lostParts.length === 6) {
                        console.log(this.lostParts, "FIM DE JOGO!");

                        this.resetGame();
                    } else {
                        console.log(this.dashes.join(" "), this.lostParts);
                    }
                }
            } else {
                console.log(this.dashes.join(" "));
            }
        } else {
            console.log(this.dashes.join(" "));
            console.log(`PARABÉNS, VOCÊ GANHOU!`);

            this.resetGame();
        }
    },
    resetGame: function () {
        this.dashes = "".padStart(this.word.length, "_").split("")
        this.parts = ["🧑", "💪", "💪", "❤️", "🦵", "🦵"];
        this.lostParts = [];
    }
}

//WIN
hangman.checkGuess("a");
hangman.checkGuess("b");
hangman.checkGuess("h");
hangman.checkGuess("e");
hangman.checkGuess("o");
hangman.checkGuess("f");
hangman.checkGuess("i");
hangman.checkGuess("l");
hangman.checkGuess("l");

//LOSE
// hangman.checkGuess("a");
// hangman.checkGuess("c");
// hangman.checkGuess("b");
// hangman.checkGuess("l");
// hangman.checkGuess("h");
// hangman.checkGuess("c");
// hangman.checkGuess("c");
// hangman.checkGuess("c");
// hangman.checkGuess("c");
// hangman.checkGuess("c");
// hangman.checkGuess("l");
// hangman.checkGuess("a");