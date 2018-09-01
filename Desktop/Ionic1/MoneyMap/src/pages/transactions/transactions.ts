import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Transaction} from '../../database';
import { AddingPage } from '../adding/adding';
/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  title : string = "Transacciones";
  transactions :any; //declarar la variable
  addingPage=AddingPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    //let transaction = new Transaction(20,'Mi Primera Transaccion');
    //transaction.save();
    console.log('ionViewDidLoad TransactionsPage');
    this.loadTransaction();
  }
loadTransaction(){
  Transaction.all()  //Dato asincronico (compromiso de que va a retornar el valor)  llamar al metodo
             .then((resultados) =>{this.transactions= resultados  //valor a retornar cuando se cumpla
             console.log(resultados)}); //Que debe ejecutar cuando se cumpla la promesa
}

}
