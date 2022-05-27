export function semaforo(cor){
     let msg ="";
    if(cor=="verde"){
      msg="pode passar";
    }
    else if (cor=="vermelho"){
        msg="aguarde";
    }
    else{
        msg="invalido";
    }
    return msg;
}

export function diaSemana(dia){
    
    let msg = "";
    if(dia == 0 ){
        msg = "domingo"
    }

    else if(dia == 1 ){
        msg = "segunda"
    }
    else if(dia == 2 ){
        msg = "terça"
    }
    else if(dia == 3 ){
        msg = "Quarta"
    }
    else if(dia == 4 ){
        msg = "Quinta"
    }

    else if(dia == 5 ){
        msg = "Sexta"
    }
    else if(dia == 6 ){
        msg = "sabado"
    }
    else{
        msg = "invalido"
    }
    return msg;
}

export function fatorar(n){
    let cont=1;
    for(let i=n;i>1;i--){
        cont *=i;
    }
    return cont;
}

export function sequenciaPar(num){
    let array = []
    let a = 0;
    for(let i = 0; a < num; i+=2){
        array[a] = i;
        a++
    }
    return array
}
console.log(sequenciaPar(5))