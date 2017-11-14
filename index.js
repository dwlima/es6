// escopo de variaveis
// local
// var a = 10;
// global
// a = 10;

// escopo de bloco, abriu e fechou a chave {} mudou o bloco
// const - constante
// let - variavel, escopo de bloco e nao escopo de funcao como var

const Message = require('./message.model');
const ImageMessage = require('./image-message.model');
const fs = require('fs');
const path = require('path');

class MessagesService {
    constructor(){
        let resolvePromise;
        let rejectPromise;
        const filePath = path.join(__dirname, 'messages.json');
        this.messagesPromise = new Promise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        // esse metodo sera executado pelo fs nao aqui no MessageServices
        // na pratica o this vai ser de quem vai executar (escopo)
        //console.log(this);
        //fs.readFile(filePath, { encoding: 'utf-8'}, function (err, data){

        // se modifico o metodo para arrow, o this passa a ser o MessagesService
        // vale para arraw functions e show hand functions
        fs.readFile(filePath, { encoding: 'utf-8'}, (err, data) => {
            //console.log(this);
            //console.log(JSON.parse(data));

            if(err){
                rejectPromise(err);
            } else {
                const dataArray = JSON.parse(data);
                /*
                const dataObj = dataArray.map((item) => {
                    return new Message(item.text, item.created);
                });
                */
                const dataObj = dataArray.map(item =>
                   new Message(item.text, item.created));

                //resolvePromise(JSON.parse(data));
                resolvePromise(dataObj);
            }


        });

    }
    get messages(){
        return this.messagesPromise;
    }
}

const messagesService = new MessagesService();
messagesService.messages.then((messages) => {
    // assim nao chama o toString pq estou imprimindo o a colecao
    //console.log(messages);
    //for(let x=0; x < messages.length; x++){
    for(let x=0; x < messages.length; x+=1){
        console.log(String(messages[x]));
    }
}).catch((err) => {
    console.log(err);
});

/*
const emptyMessage = new Message();
const emptyImageMessage = new ImageMessage();

console.log(emptyMessage);
console.log(emptyImageMessage);

let a = 10;
function add(number){
    {
        let a = number + 1;
        var a = number + 1;
    }
    return a;
}

console.log(add(20));
console.log(a);
*/