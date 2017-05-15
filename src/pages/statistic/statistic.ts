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
import { AuthService } from '../../providers/auth-service';
import { TaskPage } from '../task/task';

@Component({
  selector: 'page-statistic',
  templateUrl: 'statistic.html'
})
export class StatisticPage {
  statistic : string;
  currentSubject: string;
  currentChapterNo: number;
  user: FirebaseListObservable<any>;
  currentUser: FirebaseListObservable<any>;
  userFBID: string;
  prevStat: string;
  isAuthenticated: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFire: AngularFire, public _auth:AuthService) {
    this.user = angularFire.database.list('/User',{
      query: {
        orderByChild: 'username',
        equalTo: this._auth.displayName()
      }
    });
    this.userFBID = this._auth.displayUID();
  }

  ionViewDidLoad() {
    this.currentSubject = this.navParams.get('currentSubject');
    this.currentChapterNo = this.navParams.get('currentChapterNo');
    this.isAuthenticated = this.navParams.get('isAuthenticated');
    this.statistic  = this.navParams.get('statistic');
    this.prevStat = this.navParams.get('prevStat');
    
    if(this.isAuthenticated) {
      if(this.prevStat == '0') this.prevStat = 'You have not finished any groups of tasks'
      this.updateFirebase();
    }
  }
  goHome() {
    this.navCtrl.remove(3,3);
    this.navCtrl.pop();
  }
  goSubject() {
      this.navCtrl.remove(3,2);
      this.navCtrl.pop();
  }

  updateFirebase(){
    if (this.currentSubject == "Parallel and Distributed Systems" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        ParallelAndDistributedSystems_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Parallel and Distributed Systems" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        ParallelAndDistributedSystems_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Parallel and Distributed Systems" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        ParallelAndDistributedSystems_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Management Information Systems" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        ManagementInformationSystems_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Management Information Systems" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        ManagementInformationSystems_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Management Information Systems" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        ManagementInformationSystems_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Advanced Mathematics for Computer Science" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        AdvancedMathematicsForComputerScience_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Advanced Mathematics for Computer Science" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        AdvancedMathematicsForComputerScience_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Advanced Mathematics for Computer Science" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        AdvancedMathematicsForComputerScience_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Discrete Structures" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        DiscreteStructures_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Discrete Structures" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        DiscreteStructures_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Discrete Structures" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        DiscreteStructures_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Fundamentals of Programming" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        FundamentalsOfProgramming_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Fundamentals of Programming" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        FundamentalsOfProgramming_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Fundamentals of Programming" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        FundamentalsOfProgramming_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Man and Society" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        ManAndSociety_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Man and Society" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        ManAndSociety_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Man and Society" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        ManAndSociety_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Physical Science and Computation" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        PhysicalScienceAndComputation_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Physical Science and Computation" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        PhysicalScienceAndComputation_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Physical Science and Computation" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        PhysicalScienceAndComputation_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Applied Statistics for Computing" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        AppliedStatisticsForComputing_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Applied Statistics for Computing" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        AppliedStatisticsForComputing_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Applied Statistics for Computing" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        AppliedStatisticsForComputing_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Computer Organization and Architecture" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        ComputerOrganizationAndArchitecture_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Computer Organization and Architecture" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        ComputerOrganizationAndArchitecture_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Computer Organization and Architecture" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        ComputerOrganizationAndArchitecture_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Numerical Methods" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        NumericalMethods_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Numerical Methods" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        NumericalMethods_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Numerical Methods" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        NumericalMethods_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Web Programming" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        WebProgramming_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Web Programming" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        WebProgramming_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Web Programming" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        WebProgramming_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Computer Data Communication" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        ComputerDataCommunication_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Computer Data Communication" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        ComputerDataCommunication_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Computer Data Communication" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        ComputerDataCommunication_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Database Management Systems" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
        DatabaseManagementSystems_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Database Management Systems" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
        DatabaseManagementSystems_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Database Management Systems" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
        DatabaseManagementSystems_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Principles of Operating Systems" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
       PrinciplesOfOperatingSystems_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Principles of Operating Systems" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
       PrinciplesOfOperatingSystems_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Principles of Operating Systems" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
       PrinciplesOfOperatingSystems_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Computer Networks" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
       ComputerNetworks_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Computer Networks" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
       ComputerNetworks_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Computer Networks" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
       ComputerNetworks_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Human Computer Interface" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
       HumanComputerInterface_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Human Computer Interface" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
       HumanComputerInterface_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Human Computer Interface" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
       HumanComputerInterface_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Computer and Communication Security" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
       ComputerAndCommunicationSecurity_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Computer and Communication Security" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
       ComputerAndCommunicationSecurity_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Computer and Communication Security" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
       ComputerAndCommunicationSecurity_ch3_Score: this.statistic
    });
    else if (this.currentSubject == "Wireless and Mobile Computing" && this.currentChapterNo == 1)
      this.user.update(this.userFBID,{ 
       WirelessAndMobileComputing_ch1_Score: this.statistic
    });
    else if (this.currentSubject == "Wireless and Mobile Computing" && this.currentChapterNo == 2)
      this.user.update(this.userFBID,{ 
       WirelessAndMobileComputing_ch2_Score: this.statistic
    });
    else if (this.currentSubject == "Wireless and Mobile Computing" && this.currentChapterNo == 3)
      this.user.update(this.userFBID,{ 
       WirelessAndMobileComputing_ch3_Score: this.statistic
    }); 
  }
}