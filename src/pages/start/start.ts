import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  private tips: any;
  private nextContentIndex: 1;
  private currentContent : 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tips = [
       {
        heading: "Treffe Menschen aus aller Welt!",
        content: "Melde dich per Facebook an",
        isOpen: false,
        active: "buttonActive"
      },
      {
        heading: "",
        content: "erstelle dein Profil",
        isOpen: true,
        active: ""
      },
      {
        heading: "",
        content: "erstelle und suche nach Events",
        isOpen: true,
        active: ""
      },
      {
        heading: "",
        content: "sende dem Gastgaber eine coole Nachricht um deine Chance zu erhöhen!",
        isOpen: true,
        active: ""
      },
      {
        heading: "",
        content: "habe Spaß",
        isOpen: true,
        active: ""
      },
      {
        heading: "Nur noch einen Schritt entfernt! Melde dich per Facebook an",
        content: "",
        isOpen: true,
        active: ""
      }
    ];

  }

  ionViewDidLoad() {

   // this.showNextContentAutomaticly();
  }

  showNextContent(index) {
    let count = 0;

    this.tips.forEach((element,elementIndex) =>{

      if(index == elementIndex){
        element.isOpen = false;
        element.active = "buttonActive";
      }
      else{
        element.isOpen = true;
        element.active = "";
      }
    });
  }

  showNextContentAutomaticly() {

    var count = 0;
    var that = this;

      this.tips.forEach((tip,currentIndex) => {


        setTimeout(function(){

          if(currentIndex == that.currentContent) {
            tip.isOpen = true;
            tip.active = "";


            that.tips.forEach((nextContent,index) =>{

              if(index == that.nextContentIndex){
                  nextContent.isOpen = false;
                  nextContent.active = "buttonActive";
              }
              else{
                tip.isOpen = true;
                tip.active = "";
              }
            });
            that.currentContent++;
            that.nextContentIndex++;
          }
          else{
            tip.isOpen = true;
            tip.active = "";
          }
        },5000);
      });
  }
}