/* Apenas um comentario para deixar salvo.
Alem de testar a alteração dentro do VS Code */



function acaoBotao() {
    var sairLoop, valor1, valor2
    do{
        valor1 = prompt("Digite o primeiro valor: ")
        valor2 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor1) + parseInt(valor2))
        sairLoop = prompt("Deseja sair? S/N").toLowerCase()
    
    }while(sairLoop == "n")

}

document.getElementById("paragrafo").innetText = nome + "você é maior de idade!"