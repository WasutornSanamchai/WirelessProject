/*--------------------------------------
This is the project for Wireless and Mobile Computing Subject, Year 3
at Faculty of ICT, Mahidol University
This project can be used to study. 
It cannot be used for commercial purposes.

Developed by The 3rd Year ICT Students:
Mr. Nutpapon Limsupavanich ID: 5788217 
Mr. Wasutorn Sanamchai ID: 5788243 
Miss. Wipawee Likhitaporn ID: 5788305
Miss. Supatjana Leardarpajit ID: 5788319
---------------------------------------*/
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  vocabs;
  subject : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, angFire: AngularFire) {  }

  ionViewDidLoad() {
    this.vocabs=[];
    this.vocabs = this.navParams.get('vocabList');
    this.subject = this.vocabs[0].subject;
  }
  goBack() {
    this.navCtrl.pop();
  }
}
