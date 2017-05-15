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
import { YearPage } from '../year/year';
import { AboutPage } from '../about/about';
import { AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    users: FirebaseListObservable<any[]>;
    currentUser: FirebaseListObservable<any[]>;
    userProfile: string = null;
    userFBID: string = null;
    userPhotoURL: string = null;
    userEmail: string = null;
    isAuthenticated: boolean = false;
    updateString: string = null;
    updateNum: number = 1;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public angularFire: AngularFire, private _auth: AuthService) {
      this.users = angularFire.database.list('/User');
    }

    ionViewDidLoad() { }
    chooseYear(Year: string){
      this.navCtrl.push(YearPage,{
        Year: Year,
        isAuthenticated: this.isAuthenticated
      });
    }

    goAbout(){
      this.navCtrl.push(AboutPage);
    }

    signInWithFacebook(): void {
      this._auth.signInWithFacebook().then(() => this.onSignInSuccess());
    }

    private onSignInSuccess(): void {
      this.addUser();
      this.isAuthenticated = true;
      this.userProfile = this._auth.displayName();
      this.userFBID = this._auth.displayUID();
      this.userEmail = this._auth.displayEmail();
      this.userPhotoURL = this._auth.displayImg();
    } 

    public addUser(): void {
      this.currentUser = this.angularFire.database.list('/User', {
        query: {
          orderByChild: 'username',
          equalTo: this._auth.displayName()
        }
      });

      this.currentUser.subscribe(queriedItems => {
        if(queriedItems.length === 0) {
          this.users.update(this.userFBID,{
            username: this._auth.displayName(),
            email: this._auth.displayEmail(),         
            ParallelAndDistributedSystems_ch1_Score: '0',
            ParallelAndDistributedSystems_ch2_Score: '0',
            ParallelAndDistributedSystems_ch3_Score: '0',
            ManagementInformationSystems_ch1_Score: '0',
            ManagementInformationSystems_ch2_Score: '0',
            ManagementInformationSystems_ch3_Score: '0',
            AdvancedMathematicsForComputerScience_ch1_Score: '0',
            AdvancedMathematicsForComputerScience_ch2_Score: '0',
            AdvancedMathematicsForComputerScience_ch3_Score: '0',
            DiscreteStructures_ch1_Score: '0',
            DiscreteStructures_ch2_Score: '0',
            DiscreteStructures_ch3_Score: '0',
            FundamentalsOfProgramming_ch1_Score: '0',
            FundamentalsOfProgramming_ch2_Score: '0',
            FundamentalsOfProgramming_ch3_Score: '0',
            ManAndSociety_ch1_Score: '0',
            ManAndSociety_ch2_Score: '0',
            ManAndSociety_ch3_Score: '0',
            PhysicalScienceAndComputation_ch1_Score: '0',
            PhysicalScienceAndComputation_ch2_Score: '0',
            PhysicalScienceAndComputation_ch3_Score: '0',
            AppliedStatisticsForComputing_ch1_Score: '0',
            AppliedStatisticsForComputing_ch2_Score: '0',
            AppliedStatisticsForComputing_ch3_Score: '0',
            ComputerOrganizationAndArchitecture_ch1_Score: '0',
            ComputerOrganizationAndArchitecture_ch2_Score: '0',
            ComputerOrganizationAndArchitecture_ch3_Score: '0',
            NumericalMethods_ch1_Score: '0',
            NumericalMethods_ch2_Score: '0',
            NumericalMethods_ch3_Score: '0',
            WebProgramming_ch1_Score: '0',
            WebProgramming_ch2_Score: '0',
            WebProgramming_ch3_Score: '0',
            ComputerDataCommunication_ch1_Score: '0',
            ComputerDataCommunication_ch2_Score: '0',
            ComputerDataCommunication_ch3_Score: '0',
            DatabaseManagementSystems_ch1_Score: '0',
            DatabaseManagementSystems_ch2_Score: '0',
            DatabaseManagementSystems_ch3_Score: '0',
            PrinciplesOfOperatingSystems_ch1_Score: '0',
            PrinciplesOfOperatingSystems_ch2_Score: '0',
            PrinciplesOfOperatingSystems_ch3_Score: '0',
            ComputerNetworks_ch1_Score: '0',
            ComputerNetworks_ch2_Score: '0',
            ComputerNetworks_ch3_Score: '0',
            HumanComputerInterface_ch1_Score: '0',
            HumanComputerInterface_ch2_Score: '0',
            HumanComputerInterface_ch3_Score: '0',
            ComputerAndCommunicationSecurity_ch1_Score: '0',
            ComputerAndCommunicationSecurity_ch2_Score: '0',
            ComputerAndCommunicationSecurity_ch3_Score: '0',
            WirelessAndMobileComputing_ch1_Score: '0',
            WirelessAndMobileComputing_ch2_Score: '0',
            WirelessAndMobileComputing_ch3_Score: '0',
          });
        }
      });
    }
}
