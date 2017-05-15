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
import { StatisticPage } from '../statistic/statistic';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {
  word;
  vocab : string;
  def : string;
  isCorrect: string;
  statistic : string;
  isAuthenticated: boolean = false;
  currentSubject: string;
  currentChapterNo : number;
  prevStat: string;
  public bg;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.word = this.navParams.get('word');
    this.isAuthenticated = this.navParams.get('isAuthenticated');
    this.prevStat = this.navParams.get('prevStat');
    this.isCorrect = this.navParams.get('isCorrect');
    if(this.isCorrect == "True") this.bg = "#b2ff97";
    else this.bg = "#ff9797";
    this.def = this.word.def;
    this.vocab = this.word.vocab;
    this.statistic  = this.navParams.get('statistic');
    this.currentSubject = this.navParams.get('currentSubject');
    this.currentChapterNo = this.navParams.get('currentChapterNo');
  }

  goTask() {
    if(this.statistic) {
      this.navCtrl.push(StatisticPage,{
        statistic:this.statistic,
        prevStat: this.prevStat,
        isAuthenticated: this.isAuthenticated,
        currentSubject: this.currentSubject,
        currentChapterNo: this.currentChapterNo
      });
      
    }
    else this.navCtrl.pop();
    
  }

}
