class Message {
    constructor(text, created = Date.now()){
        this.text = text;
        this.created = created; //Date.now();
    }
    // metodos getters e setters
    get created(){
        return this._created;
    }
    set created(created){
        if(!created || isNaN(created)){
            throw new Error('invalid created');
        }
        this._created = created;
    }

    toString(){
        //return 'Message\'s toString';
        // ele chama o get created()
        return `Message's created at: ${this.created} - Text: ${this.text}`;
    }
}

class ImageMessage extends Message {
    constructor(text = '', created = Date.now(), url='', thumbnail=''){
        super(text, created);
        this.url = url;
        this.thumbnail = thumbnail;
    }
    toString(){
        return `Photo ${super.toString()} ` +
                `- url: ${this.url} ` +
                `- thumbnail: ${this.thumbnail}`;
    }
}

var text = 'Some text';
var created = Date.now();

var duckTypeMessage = {
    /* quando a var tem o mesmo nome nao preciso atribuir, pode ser feito como abaixo
    text: text,
    created: created
    */
    text,
    created
};

console.log(duckTypeMessage);

var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(emptyMessage);
console.log(emptyMessage + '');
console.log(textMessage);
console.log(textMessage + '');
console.log(photoMessage + '');

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(emptyMessage instanceof ImageMessage);
console.log(textMessage instanceof ImageMessage);
console.log(duckTypeMessage instanceof ImageMessage);