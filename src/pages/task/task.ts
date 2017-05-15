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
import { ResultPage } from '../result/result';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-task',
  templateUrl: 'task.html'
})
export class TaskPage {
  vocabs;
  DBinput : any = {};
  subject : string;
  chapter : string;
  isAuthenticated: boolean = false;
  point;
  statistic : string;
  currentWord = 0;
  question : string;
  choice : string[]=[];
  isCorrect="False";
  scores=[];
  tem :{};
  prevStat: string;
  currentSubject: string;
  currentChapterNo: number;
  chapterNo: number = 0;
  
  currentUser: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFire: AngularFire, public _auth: AuthService) {}

  ionViewDidLoad() {
    this.vocabs = this.navParams.get('vocabList');
    this.isAuthenticated = this.navParams.get('isAuthenticated');
    this.subject = this.currentSubject = this.vocabs[0].subject;
    this.chapter = this.vocabs[0].chapterName;
    this.currentChapterNo = this.vocabs[0].chapterNo;
    this.point = 0;
    this.makeChoices();
    this.makeQuestion();
  }

  goBack() { 
    this.navCtrl.pop();

  }

  getResult(choices:string) {
    if(choices == this.vocabs[this.currentWord].vocab){
      this.isCorrect = "True";
      this.point++;
    }
    else this.isCorrect = "False";

    if(this.currentWord==this.vocabs.length-1){
      this.statistic = this.point+"/"+this.vocabs.length;
      this.navCtrl.push(ResultPage,{
        prevStat: this.prevStat,
        isAuthenticated: this.isAuthenticated,
        isCorrect:this.isCorrect,
        word:this.vocabs[this.currentWord],
        statistic:this.statistic,
        currentSubject: this.subject,
        currentChapterNo: this.currentChapterNo
      });
    }
    else this.navCtrl.push(ResultPage,{
      prevStat: this.prevStat,
      isAuthenticated: this.isAuthenticated,
      isCorrect:this.isCorrect,
      word:this.vocabs[this.currentWord],
      currentSubject: this.subject,
      currentChapterNo: this.currentChapterNo
    });

    if(this.currentWord<this.vocabs.length-1){
      this.currentWord++;
      this.makeChoices();
      this.makeQuestion();
    }
  }

  getRandomInt(min, max) {
    if(this.isAuthenticated) {
      this.prevStat = this.navParams.get('prevStat');
      this.getPrevStat();
    }
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  randomChoicePosition(currentWord:number){
    while(true){
      let anotherChoice = this.getRandomInt(0,this.vocabs.length-1);
      if(currentWord != anotherChoice) return anotherChoice;
    }
  }

  checkIsHas(ArraySt:string[],value:string){
    for(let i=0;i<ArraySt.length;i++){
      if(ArraySt[i] == value) return true;
    }
    return false;
  }

  makeChoices(){
    let sizeOfChoice:number = 4;
    if(this.vocabs.length-1<4) sizeOfChoice = this.vocabs.length-1;
    let correctChoice = this.getRandomInt(0,sizeOfChoice-1); //random position of correct choice
    for(let j=0;j<sizeOfChoice;j++){
      if(j==correctChoice) this.choice[j] = this.vocabs[this.currentWord].vocab;//correct choice
      else { 
          let temp = this.vocabs[this.randomChoicePosition(this.currentWord)].vocab;
          this.choice[j] = temp;
        }
      }
  }

  makeQuestion(){
    this.question = this.vocabs[this.currentWord].def;
  }

  public rePlay(){
    this.currentWord = 0;
    this.point = 0;
  }

  getPrevStat(){
    this.currentUser = this.angularFire.database.list('/User', {
      query: {
        orderByChild: 'username',
        equalTo: this._auth.displayName()
      }
    });
    
    this.currentUser.subscribe(queriedItems => {
      if (this.currentSubject == "Parallel and Distributed Systems" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].ParallelAndDistributedSystems_ch1_Score;
      
      else if (this.currentSubject == "Parallel and Distributed Systems" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].ParallelAndDistributedSystems_ch2_Score;
      
      else if (this.currentSubject == "Parallel and Distributed Systems" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].ParallelAndDistributedSystems_ch3_Score;
      
      else if (this.currentSubject == "Management Information Systems" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].ManagementInformationSystems_ch1_Score;
      
      else if (this.currentSubject == "Management Information Systems" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].ManagementInformationSystems_ch2_Score;
      
      else if (this.currentSubject == "Management Information Systems" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].ManagementInformationSystems_ch3_Score;
      
      else if (this.currentSubject == "Advanced Mathematics for Computer Science" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].AdvancedMathematicsForComputerScience_ch1_Score;
      
      else if (this.currentSubject == "Advanced Mathematics for Computer Science" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].AdvancedMathematicsForComputerScience_ch2_Score;
      
      else if (this.currentSubject == "Advanced Mathematics for Computer Science" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].AdvancedMathematicsForComputerScience_ch3_Score;
    
      else if (this.currentSubject == "Discrete Structures" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].DiscreteStructures_ch1_Score;
      
      else if (this.currentSubject == "Discrete Structures" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].DiscreteStructures_ch2_Score;
      
      else if (this.currentSubject == "Discrete Structures" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].DiscreteStructures_ch3_Score;
      
      else if (this.currentSubject == "Fundamentals of Programming" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].FundamentalsOfProgramming_ch1_Score;
      
      else if (this.currentSubject == "Fundamentals of Programming" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].FundamentalsOfProgramming_ch2_Score;
      
      else if (this.currentSubject == "Fundamentals of Programming" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].FundamentalsOfProgramming_ch3_Score;
      
      else if (this.currentSubject == "Man and Society" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].ManAndSociety_ch1_Score;
      
      else if (this.currentSubject == "Man and Society" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].ManAndSociety_ch2_Score;
      
      else if (this.currentSubject == "Man and Society" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].ManAndSociety_ch3_Score;
      
      else if (this.currentSubject == "Physical Science and Computation" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].PhysicalScienceAndComputation_ch1_Score;
      
      else if (this.currentSubject == "Physical Science and Computation" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].PhysicalScienceAndComputation_ch2_Score;
      
      else if (this.currentSubject == "Physical Science and Computation" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].PhysicalScienceAndComputation_ch3_Score;
      
      else if (this.currentSubject == "Applied Statistics for Computing" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].AppliedStatisticsForComputing_ch1_Score;
      
      else if (this.currentSubject == "Applied Statistics for Computing" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].AppliedStatisticsForComputing_ch2_Score;
      
      else if (this.currentSubject == "Applied Statistics for Computing" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].AppliedStatisticsForComputing_ch3_Score;
      
      else if (this.currentSubject == "Computer Organization and Architecture" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].ComputerOrganizationAndArchitecture_ch1_Score;
      
      else if (this.currentSubject == "Computer Organization and Architecture" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].ComputerOrganizationAndArchitecture_ch2_Score;
      
      else if (this.currentSubject == "Computer Organization and Architecture" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].ComputerOrganizationAndArchitecture_ch3_Score;
      
      else if (this.currentSubject == "Numerical Methods" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].NumericalMethods_ch1_Score;
      
      else if (this.currentSubject == "Numerical Methods" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].NumericalMethods_ch2_Score;
      
      else if (this.currentSubject == "Numerical Methods" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].NumericalMethods_ch3_Score;
      
      else if (this.currentSubject == "Web Programming" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].WebProgramming_ch1_Score;
      
      else if (this.currentSubject == "Web Programming" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].WebProgramming_ch2_Score;
      
      else if (this.currentSubject == "Web Programming" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].WebProgramming_ch3_Score;
      
      else if (this.currentSubject == "Computer Data Communication" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].ComputerDataCommunication_ch1_Score;
      
      else if (this.currentSubject == "Computer Data Communication" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].ComputerDataCommunication_ch2_Score;
      
      else if (this.currentSubject == "Computer Data Communication" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].ComputerDataCommunication_ch3_Score;
      
      else if (this.currentSubject == "Database Management Systems" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].DatabaseManagementSystems_ch1_Score;
      
      else if (this.currentSubject == "Database Management Systems" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].DatabaseManagementSystems_ch2_Score;
      
      else if (this.currentSubject == "Database Management Systems" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].DatabaseManagementSystems_ch3_Score;
      
      else if (this.currentSubject == "Principles of Operating Systems" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].PrinciplesOfOperatingSystems_ch1_Score;
      
      else if (this.currentSubject == "Principles of Operating Systems" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].PrinciplesOfOperatingSystems_ch2_Score;
      
      else if (this.currentSubject == "Principles of Operating Systems" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].PrinciplesOfOperatingSystems_ch3_Score;
      
      else if (this.currentSubject == "Computer Networks" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].ComputerNetworks_ch1_Score;
      
      else if (this.currentSubject == "Computer Networks" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].ComputerNetworks_ch2_Score;
      
      else if (this.currentSubject == "Computer Networks" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].ComputerNetworks_ch3_Score;
      
      else if (this.currentSubject == "Human Computer Interface" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].HumanComputerInterface_ch1_Score;
      
      else if (this.currentSubject == "Human Computer Interface" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].HumanComputerInterface_ch2_Score;
      
      else if (this.currentSubject == "Human Computer Interface" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].HumanComputerInterface_ch3_Score;
      
      else if (this.currentSubject == "Computer and Communication Security" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].ComputerAndCommunicationSecurity_ch1_Score;
      
      else if (this.currentSubject == "Computer and Communication Security" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].ComputerAndCommunicationSecurity_ch2_Score;
      
      else if (this.currentSubject == "Computer and Communication Security" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].ComputerAndCommunicationSecurity_ch3_Score;
      
      else if (this.currentSubject == "Wireless and Mobile Computing" && this.currentChapterNo == 1)
        this.prevStat = queriedItems[0].WirelessAndMobileComputing_ch1_Score;
      
      else if (this.currentSubject == "Wireless and Mobile Computing" && this.currentChapterNo == 2)
        this.prevStat = queriedItems[0].WirelessAndMobileComputing_ch2_Score;
      
      else if (this.currentSubject == "Wireless and Mobile Computing" && this.currentChapterNo == 3)
        this.prevStat = queriedItems[0].WirelessAndMobileComputing_ch3_Score;
    });
  }
}
