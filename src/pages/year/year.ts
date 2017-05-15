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
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavController, NavParams } from 'ionic-angular';
import { SubjectPage } from '../subject/subject';

@Component({
  selector: 'page-year',
  templateUrl: 'year.html'
})
export class YearPage {
  vocabs:Array<any> = [];
  subject1: Array<string> = [];
  subject2: Array<string> = [];
  year : string;
  isAuthenticated: boolean;
  isHave : boolean = false;
  ArrayTemp : Array<any>=[];
  subjectTemp;
  constructor(public navCtrl: NavController, public navParams: NavParams,public angFire: AngularFire) {  }

  ionViewDidLoad() {
    this.year = this.navParams.get('Year');
    this.isAuthenticated = this.navParams.get('isAuthenticated');
    this.subjectTemp = this.angFire.database.list('/Vocab', {
      query: {
        orderByChild: 'year',
        equalTo: this.year
      }
    });

  }

  goBack() { this.navCtrl.pop(); }

  goToOtherPage(Subject:string) {
    this.ArrayTemp = [];
    for(let i=0;i<this.vocabs.length;i++){
      if(this.vocabs[i].subject == Subject) 
        this.ArrayTemp.push(this.vocabs[i]);
    }
    this.navCtrl.push(SubjectPage,{
      vocabList:this.ArrayTemp,
      isAuthenticated: this.isAuthenticated  
    });
  }

  addToArray(object:Array<string>, subject:string){
    let isHas = false;
    for(let i=0;i<object.length;i++){
      if(object[i]==subject){
        isHas = true;
        break;
      }
    }
    if(!isHas)object.push(subject);
  }

  createObject(object:any){
    let isHas = false;
    for(let i=0;i<this.vocabs.length;i++){
      if(this.vocabs[i].vocab==object.vocab){
        isHas = true;
        break;
      }
    }
    if(!isHas){
      this.vocabs.push(object);
      if(object.semester == 1) this.addToArray(this.subject1,object.subject);
      if(object.semester == 2) this.addToArray(this.subject2,object.subject);
    }
  }
}
