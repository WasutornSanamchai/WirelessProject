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
import { ListPage } from '../list/list';
import { TaskPage } from '../task/task';

@Component({
  selector: 'page-subject',
  templateUrl: 'subject.html'
})
export class SubjectPage {
  DBinput = {};
  subject : string=null;
  Chapters =[];
  word:number = 0;
  isAuthenticated: boolean = false;
  vocabs:Array<any>=[];
  scores = [];
  ChaptersScore=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  ionViewDidLoad() {
    this.vocabs = this.navParams.get('vocabList');
    this.isAuthenticated = this.navParams.get('isAuthenticated');
    this.subject = this.vocabs[0].subject;
    this.Chapters = [];
    for(let i=0;i<this.vocabs.length;i++){
      this.addToArray(this.vocabs[i].chapterName);
    }
  }
  goBack() {
    this.navCtrl.pop();
  }
  goToList() {
    this.navCtrl.push(ListPage,{vocabList:this.vocabs});
  }
  goToTask(chapter:string) {
    let ArrayTemp:Array<any> = [];
    for(let i=0;i<this.vocabs.length;i++){
      if(this.vocabs[i].chapterName == chapter) ArrayTemp.push(this.vocabs[i]);
    }
    this.navCtrl.push(TaskPage,{
      vocabList:ArrayTemp,
      isAuthenticated: this.isAuthenticated
    });
  }

  addToArray(name:string){
    let isHas = false;
    for(let i=0;i<this.Chapters.length;i++){
      if(this.Chapters[i].name == name){
        isHas = true;
        break;
      }
    }
    if(!isHas) {
      this.Chapters.push({name:name});
     }
    }
  }

