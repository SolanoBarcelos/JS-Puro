function calculadora() {
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)"));

    if (!operacao || operacao > 6) {
        alert("Digite uma opção valida para escolher uma operação matemática!");
        calculadora();
    }

    else {
        
        let n1 = Number(prompt("insira o primeiro valor"));

            if (!n1) {
                alert ("Digite numeros para fazer operações matemáticas!");
                calculadora();
            }

        let n2 = Number(prompt("insira o segundo valor")); 

            if (!n2) {
                alert ("Digite numeros para fazer operações matemáticas!");
                calculadora();            
            }
            
        let resultado;          
        
        

            function soma () {
                resultado = n1 + n2
                alert (`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function subtracao () {
                resultado = n1 - n2
                alert (`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function multiplicacao () {
                resultado = n1 * n2
                alert (`${n1} x ${n2} = ${resultado }`)
                novaOperacao();
            }
    
            function divisaoReal () {
                resultado = n1 / n2 
                alert (`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function divisaoInteira () {
                resultado = n1 % n2
                alert (`O resto da divisão de ${n1} por ${n2} é ${resultado}`)
                novaOperacao();
            }
    
            function potenciacao () {
                resultado = n1 ** n2
                alert (`${n1} elevado a ${n2} é ${resultado}`)
                novaOperacao();
            }




        function novaOperacao () {
            let opcao = prompt("Deseja fazer uma nova operação? \n 1 - SIM \n 2 - NÂO");

            if (opcao == 1) {
                calculadora();
            }

            else if (opcao == 2) {
                alert("Ate mais!");
                calculadora();
            }

            else {
                alert("Operacão invalida, digite opção 1 ou 2.");
                novaOperacao();
            }
        }


        // if (operacao == 1) {
        //     soma();
        // }

        // else if (operacao == 2) {
        //     subtracao();
        // }

        // else if (operacao == 3) {
        //     multiplicacao();
        // }

        // else if (operacao == 4) {
        //     divisaoReal();
        // }

        // else if (operacao == 5) {
        //     divisaoInteira();
        // }

        // else if (operacao == 6){
        //     potenciacao()
        // }   

        switch (operacao) {
            
            case 1:
                soma();
            break;

            case 2:
                subtracao();
            break;

            case 3:
                multiplicacao();
            break

            case 4:
                divisaoReal();
            break

            case 5:
                divisaoInteira();
            break

            case 6:
                potenciacao();
            break;

        }

    }
}

calculadora();
