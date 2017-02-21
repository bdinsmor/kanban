import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../../route.animation";
import { widget1Data, widget4Data, widget3Data, widget2Data } from "../../data/widgetDemoData.data";
import { lineChartWidgetData } from "../../data/lineChartWidget.data";
import { sourceOverviewWidgetData } from "../../data/source-overview-widget.data";

@Component({
  selector: 'ms-dashboard-v1',
  templateUrl: './dashboard-v1.component.html',
  styleUrls: ['./dashboard-v1.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class DashboardV1Component implements OnInit {
  options;

  widget1Options;
  widget2Options;
  widget3Options;
  widget4Options;

  widget1Data;
  widget2Data;
  widget3Data;
  widget4Data;

  lineChartWidgetOptions;
  lineChartWidgetData;

  sourceOverviewWidgetOptions;
  sourceOverviewWidgetData;

  team;


  ngOnInit() {
    this.team = [
      {
        "name": {
          "first": "Laverne",
          "last": "Chaney"
        },
        "picture": "assets/img/avatars/15.png",
        "company": "BUZZNESS",
        "email": "laverne.chaney@buzzness.me",
        "phone": "+1 (821) 438-2168",
        "balance": "$1,484.35"
      },
      {
        "name": {
          "first": "Christensen",
          "last": "Little"
        },
        "picture": "assets/img/avatars/9.png",
        "company": "ANIMALIA",
        "email": "christensen.little@animalia.biz",
        "phone": "+1 (975) 437-2092",
        "balance": "$3,465.24"
      },
      {
        "name": {
          "first": "Hensley",
          "last": "Mccormick"
        },
        "picture": "assets/img/avatars/5.png",
        "company": "MAINELAND",
        "email": "hensley.mccormick@maineland.org",
        "phone": "+1 (902) 550-3925",
        "balance": "$1,648.43"
      },
      {
        "name": {
          "first": "Phillips",
          "last": "Cline"
        },
        "picture": "assets/img/avatars/12.png",
        "company": "ZENTIME",
        "email": "phillips.cline@zentime.tv",
        "phone": "+1 (803) 472-3384",
        "balance": "$1,410.87"
      },
      {
        "name": {
          "first": "Parks",
          "last": "Buckley"
        },
        "picture": "assets/img/avatars/6.png",
        "company": "KINETICA",
        "email": "parks.buckley@kinetica.biz",
        "phone": "+1 (970) 598-2567",
        "balance": "$2,833.12"
      },
      {
        "name": {
          "first": "Berger",
          "last": "Kennedy"
        },
        "picture": "assets/img/avatars/1.png",
        "company": "GOGOL",
        "email": "berger.kennedy@gogol.io",
        "phone": "+1 (912) 598-3397",
        "balance": "$1,416.68"
      },
      {
        "name": {
          "first": "Roxie",
          "last": "Higgins"
        },
        "picture": "assets/img/avatars/7.png",
        "company": "WATERBABY",
        "email": "roxie.higgins@waterbaby.co.uk",
        "phone": "+1 (845) 435-2041",
        "balance": "$2,237.80"
      },
      {
        "name": {
          "first": "Marcella",
          "last": "Mack"
        },
        "picture": "assets/img/avatars/8.png",
        "company": "OPTICOM",
        "email": "marcella.mack@opticom.info",
        "phone": "+1 (894) 476-2978",
        "balance": "$2,923.40"
      },
      {
        "name": {
          "first": "Hallie",
          "last": "Gilliam"
        },
        "picture": "assets/img/avatars/5.png",
        "company": "GOLISTIC",
        "email": "hallie.gilliam@golistic.ca",
        "phone": "+1 (998) 476-3035",
        "balance": "$3,032.34"
      },
      {
        "name": {
          "first": "Naomi",
          "last": "Warren"
        },
        "picture": "assets/img/avatars/3.png",
        "company": "SCENTY",
        "email": "naomi.warren@scenty.net",
        "phone": "+1 (854) 406-2360",
        "balance": "$3,958.67"
      },
      {
        "name": {
          "first": "Rochelle",
          "last": "Cohen"
        },
        "picture": "assets/img/avatars/2.png",
        "company": "CRUSTATIA",
        "email": "rochelle.cohen@crustatia.name",
        "phone": "+1 (851) 520-2579",
        "balance": "$1,934.25"
      }
    ];

    this.widget1Data = widget1Data;
    this.widget1Options = {
      icon: 'person',
      name: 'Users',
      number: this.widget1Data[0].values.reduce((a, b) => a + b.value, 0),
      gain: '14.8',
      description: '% compared to last week',
      arrow: 'arrow_upward'
    };


    this.widget2Data = widget2Data;
    this.widget2Options = {
      icon: 'flash_on',
      name: 'Visits',
      number: this.widget2Data[0].values.reduce((a, b) => a + b.value, 0),
      gain: '42.5',
      description: '% compared to last week',
      arrow: 'arrow_upward'
    };

    this.widget3Data = widget3Data;
    this.widget3Options = {
      icon: 'public',
      name: 'Total Clicks',
      number: this.widget3Data[0].values.reduce((a, b) => a + b.value, 0),
      gain: '-25.3',
      description: '% compared to last week',
      arrow: 'arrow_downward'
    };

    this.widget4Data = widget4Data;
    this.widget4Options = {
      icon: 'layers',
      name: 'Conversions',
      number: this.widget4Data[0].values.reduce((a, b) => a + b.value, 0),
      gain: '16.3',
      description: '% compared to last week',
      arrow: 'arrow_upward'
    };

    this.lineChartWidgetData = lineChartWidgetData;
    this.lineChartWidgetOptions = {
      icon: 'attach_money',
      name: 'Earnings Overview',
    };

    this.sourceOverviewWidgetData = sourceOverviewWidgetData;
    this.sourceOverviewWidgetOptions = {
      name: 'Traffic Sources'
    };
  }

}
