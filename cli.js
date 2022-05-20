import chalk from "chalk";
import pegarArquivo from "./index.js";
import validaURL from "./arquivos/http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegarArquivo(caminhoDoArquivo[2]);

    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('links validados '),await validaURL(resultado));

    }else{
        console.log(chalk.yellow('links validados'), resultado);
    }
    //console.log(chalk.yellow("Lista de Link"), resultado);
}

processaTexto(caminho);