import Dexie from 'dexie'

export class TransactionsAppDB extends Dexie {
transactions :Dexie.Table<ITransaction,number>;//implementa la tabla con el tipo del id
    constructor(){
    super("MoneyMapAppDB");  //nombre de la base de datos
    this.version(1).stores({
        transactions: '++id,amount,lat,lng,title,imgUrl' //como esta definida la tabla
    });
    this.transactions.mapToClass(Transaction);
}

}

export interface ICategory{

}

export interface ITransaction {   //datos que voy a manejar de mi transaccion   cuando creo una interface obliga a que todos se implementen en la interface
    id?: number;        // ?significa que es opcional
    amount: number;
    lat: number;
    lng: number;
    title:string;
    imageUrl: string;
}

export class Transaction implements ITransaction {
    id?: number;        // ?significa que es opcional
    title:string;
    amount: number;
    lat: number;
    lng: number;
    imageUrl: string;
    constructor(amount: number, title:string, lat?:number, lng?:number, id?:number,imageUrl?:string){  //obligatoriamente amount title
        this.amount=amount; // se asigna directamente al atributo de la clase al objeto para que exista
        this.title = title;
        
        if(lat) this.lat=lat; // como es opcional se pone el if
        if(lng) this.lng=lng;
        if(imageUrl) this.imageUrl=imageUrl;
        if(id) this.id=id;
    }

    save(){
        return db.transactions.add(this);
    }

    static all(){
        return db.transactions.orderBy("id").reverse().toArray();
    }
}


export let db = new TransactionsAppDB();  //enlazar el modelo con la coniguraciònde la base de datos