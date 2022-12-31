// Fazendo Jogo da Forca
const palavra = "abelha"

const forca = {
    palavra,
    tracos: "".padStart(palavra.length, "_").split(""),
    guardaMembros: [],
    membros: ["🧑", "💪", "💪", "❤️", "🦵", "🦵"],
    verificarPalpite: function (palpite) {
        let achouLetra = false;

        for (let i = 0; i < this.palavra.length; i++) {
            if (palpite === this.palavra[i]) {
                this.tracos.splice(i, 1, palpite);
                achouLetra = true;
            }
        }

        if (this.tracos.includes("_")) {
            if (!achouLetra) {
                if (this.guardaMembros.length < 6) {
                    this.guardaMembros.push(this.membros[0]);
                    this.membros.shift()

                    if (this.guardaMembros.length === 6) {
                        console.log(this.guardaMembros, "FIM DE JOGO!");

                        this.resetGame();
                    } else {
                        console.log(this.guardaMembros);
                    }
                }
            } else {
                console.log(this.tracos.join(" "));
            }
        } else {
            console.log(this.tracos.join(" "));
            console.log(`PARABÉNS, VOCÊ GANHOU!`);

            this.resetGame();
        }
    },
    resetGame: function () {
        this.tracos = "".padStart(this.palavra.length, "_").split("")
        this.membros = ["🧑", "💪", "💪", "❤️", "🦵", "🦵"];
        this.guardaMembros = [];
    }
}

//GANHAR
forca.verificarPalpite("a");
forca.verificarPalpite("b");
forca.verificarPalpite("h");
forca.verificarPalpite("e");
forca.verificarPalpite("o");
forca.verificarPalpite("l");
forca.verificarPalpite("l");

//PERDER
// forca.verificarPalpite("a");
// forca.verificarPalpite("c");
// forca.verificarPalpite("b");
// forca.verificarPalpite("l");
// forca.verificarPalpite("h");
// forca.verificarPalpite("c");
// forca.verificarPalpite("c");
// forca.verificarPalpite("c");
// forca.verificarPalpite("c");
// forca.verificarPalpite("c");
// forca.verificarPalpite("l");