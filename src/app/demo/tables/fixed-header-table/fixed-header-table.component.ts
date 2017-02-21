import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { routeAnimation } from "../../../route.animation";
declare let ResizeSensor;

@Component({
  selector: 'ms-fixed-header-table',
  templateUrl: './fixed-header-table.component.html',
  styleUrls: ['./fixed-header-table.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class FixedHeaderTableComponent implements OnInit, AfterViewInit {

  rows;

  @ViewChild('tbody')
  tbody: ElementRef;

  cellWidths = [ ];

  tableHover: boolean = true;
  tableStriped: boolean = true;
  tableCondensed: boolean = true;
  tableBordered: boolean;

  constructor() { }

  ngAfterViewInit() {
    let cells = this.tbody.nativeElement.children[0].children;

    for (let cell of cells) {
      this.cellWidths.push(cell.offsetWidth);
    }

    let resizeSensor = new ResizeSensor(this.tbody.nativeElement, () => {
      this.cellWidths.length = 0;

      for (let cell of cells) {
        this.cellWidths.push(cell.offsetWidth);
      }
    });


  }

  ngOnInit() {

    this.rows = [
      {
        "name": {
          "first": "Jeanne",
          "last": "Riddle"
        },
        "picture": "assets/img/avatars/3.png",
        "company": "SUPPORTAL",
        "email": "jeanne.riddle@supportal.co.uk",
        "phone": "+1 (999) 474-3922",
        "balance": "$1,193.14"
      },
      {
        "name": {
          "first": "Decker",
          "last": "Bates"
        },
        "picture": "assets/img/avatars/13.png",
        "company": "DATACATOR",
        "email": "decker.bates@datacator.us",
        "phone": "+1 (894) 465-3124",
        "balance": "$1,317.23"
      },
      {
        "name": {
          "first": "Bobbie",
          "last": "Camacho"
        },
        "picture": "assets/img/avatars/18.png",
        "company": "SYNKGEN",
        "email": "bobbie.camacho@synkgen.info",
        "phone": "+1 (848) 510-2798",
        "balance": "$3,373.16"
      },
      {
        "name": {
          "first": "Burke",
          "last": "Mcclure"
        },
        "picture": "assets/img/avatars/20.png",
        "company": "INQUALA",
        "email": "burke.mcclure@inquala.io",
        "phone": "+1 (836) 527-2494",
        "balance": "$3,333.40"
      },
      {
        "name": {
          "first": "Ellison",
          "last": "Salas"
        },
        "picture": "assets/img/avatars/2.png",
        "company": "VIASIA",
        "email": "ellison.salas@viasia.ca",
        "phone": "+1 (935) 540-2655",
        "balance": "$2,832.23"
      },
      {
        "name": {
          "first": "Mallory",
          "last": "Stevenson"
        },
        "picture": "assets/img/avatars/2.png",
        "company": "VIXO",
        "email": "mallory.stevenson@vixo.net",
        "phone": "+1 (828) 461-2664",
        "balance": "$1,531.64"
      },
      {
        "name": {
          "first": "Ola",
          "last": "Perez"
        },
        "picture": "assets/img/avatars/11.png",
        "company": "INSURON",
        "email": "ola.perez@insuron.name",
        "phone": "+1 (811) 419-2398",
        "balance": "$2,488.98"
      },
      {
        "name": {
          "first": "Beverly",
          "last": "Mcintyre"
        },
        "picture": "assets/img/avatars/8.png",
        "company": "LUNCHPOD",
        "email": "beverly.mcintyre@lunchpod.biz",
        "phone": "+1 (943) 495-2938",
        "balance": "$3,639.15"
      },
      {
        "name": {
          "first": "Silvia",
          "last": "Willis"
        },
        "picture": "assets/img/avatars/6.png",
        "company": "KOG",
        "email": "silvia.willis@kog.biz",
        "phone": "+1 (981) 491-3905",
        "balance": "$1,244.21"
      },
      {
        "name": {
          "first": "Golden",
          "last": "Franklin"
        },
        "picture": "assets/img/avatars/3.png",
        "company": "UNISURE",
        "email": "golden.franklin@unisure.com",
        "phone": "+1 (937) 502-3222",
        "balance": "$2,036.64"
      },
      {
        "name": {
          "first": "Dale",
          "last": "Hayden"
        },
        "picture": "assets/img/avatars/2.png",
        "company": "MOTOVATE",
        "email": "dale.hayden@motovate.tv",
        "phone": "+1 (980) 455-2446",
        "balance": "$1,954.39"
      },
      {
        "name": {
          "first": "Wendy",
          "last": "Browning"
        },
        "picture": "assets/img/avatars/2.png",
        "company": "OATFARM",
        "email": "wendy.browning@oatfarm.me",
        "phone": "+1 (960) 529-3965",
        "balance": "$2,195.33"
      },
      {
        "name": {
          "first": "Myers",
          "last": "Shields"
        },
        "picture": "assets/img/avatars/16.png",
        "company": "FARMEX",
        "email": "myers.shields@farmex.co.uk",
        "phone": "+1 (934) 582-3368",
        "balance": "$3,290.54"
      },
      {
        "name": {
          "first": "Harrington",
          "last": "Figueroa"
        },
        "picture": "assets/img/avatars/10.png",
        "company": "CODAX",
        "email": "harrington.figueroa@codax.us",
        "phone": "+1 (978) 557-3570",
        "balance": "$2,571.18"
      },
      {
        "name": {
          "first": "Jana",
          "last": "Whitney"
        },
        "picture": "assets/img/avatars/18.png",
        "company": "ENTOGROK",
        "email": "jana.whitney@entogrok.info",
        "phone": "+1 (946) 586-2922",
        "balance": "$1,255.98"
      },
      {
        "name": {
          "first": "Krystal",
          "last": "Weiss"
        },
        "picture": "assets/img/avatars/11.png",
        "company": "COMVERGES",
        "email": "krystal.weiss@comverges.io",
        "phone": "+1 (962) 453-2642",
        "balance": "$1,110.59"
      },
      {
        "name": {
          "first": "Lawson",
          "last": "Dunlap"
        },
        "picture": "assets/img/avatars/9.png",
        "company": "CHORIZON",
        "email": "lawson.dunlap@chorizon.ca",
        "phone": "+1 (853) 492-2346",
        "balance": "$1,518.05"
      },
      {
        "name": {
          "first": "Suzette",
          "last": "Hubbard"
        },
        "picture": "assets/img/avatars/5.png",
        "company": "OCTOCORE",
        "email": "suzette.hubbard@octocore.net",
        "phone": "+1 (924) 421-3925",
        "balance": "$1,947.02"
      },
      {
        "name": {
          "first": "Virginia",
          "last": "Nixon"
        },
        "picture": "assets/img/avatars/3.png",
        "company": "NORSUP",
        "email": "virginia.nixon@norsup.name",
        "phone": "+1 (858) 434-2894",
        "balance": "$1,231.14"
      },
      {
        "name": {
          "first": "Mccormick",
          "last": "Barry"
        },
        "picture": "assets/img/avatars/19.png",
        "company": "VIAGREAT",
        "email": "mccormick.barry@viagreat.biz",
        "phone": "+1 (892) 481-2106",
        "balance": "$1,972.35"
      },
      {
        "name": {
          "first": "Aguirre",
          "last": "Edwards"
        },
        "picture": "assets/img/avatars/13.png",
        "company": "FISHLAND",
        "email": "aguirre.edwards@fishland.biz",
        "phone": "+1 (816) 506-3960",
        "balance": "$3,954.43"
      },
      {
        "name": {
          "first": "Reynolds",
          "last": "Wiley"
        },
        "picture": "assets/img/avatars/12.png",
        "company": "ZISIS",
        "email": "reynolds.wiley@zisis.com",
        "phone": "+1 (992) 581-2149",
        "balance": "$1,773.69"
      },
      {
        "name": {
          "first": "Kathy",
          "last": "Mcmahon"
        },
        "picture": "assets/img/avatars/18.png",
        "company": "PROSURE",
        "email": "kathy.mcmahon@prosure.tv",
        "phone": "+1 (881) 594-2014",
        "balance": "$2,642.83"
      },
      {
        "name": {
          "first": "Della",
          "last": "Gonzalez"
        },
        "picture": "assets/img/avatars/6.png",
        "company": "AMTAS",
        "email": "della.gonzalez@amtas.me",
        "phone": "+1 (919) 560-3480",
        "balance": "$2,953.71"
      },
      {
        "name": {
          "first": "Lenore",
          "last": "Mcguire"
        },
        "picture": "assets/img/avatars/4.png",
        "company": "ZILLACON",
        "email": "lenore.mcguire@zillacon.co.uk",
        "phone": "+1 (831) 453-2064",
        "balance": "$1,396.53"
      },
      {
        "name": {
          "first": "Penelope",
          "last": "Jacobs"
        },
        "picture": "assets/img/avatars/4.png",
        "company": "CIPROMOX",
        "email": "penelope.jacobs@cipromox.us",
        "phone": "+1 (952) 569-2514",
        "balance": "$1,214.28"
      },
      {
        "name": {
          "first": "Bettye",
          "last": "Conrad"
        },
        "picture": "assets/img/avatars/18.png",
        "company": "SULTRAXIN",
        "email": "bettye.conrad@sultraxin.info",
        "phone": "+1 (885) 487-2230",
        "balance": "$2,015.66"
      },
      {
        "name": {
          "first": "Louisa",
          "last": "Savage"
        },
        "picture": "assets/img/avatars/18.png",
        "company": "EZENT",
        "email": "louisa.savage@ezent.io",
        "phone": "+1 (836) 461-2129",
        "balance": "$1,260.52"
      },
      {
        "name": {
          "first": "Black",
          "last": "Patton"
        },
        "picture": "assets/img/avatars/20.png",
        "company": "EVIDENDS",
        "email": "black.patton@evidends.ca",
        "phone": "+1 (990) 599-3912",
        "balance": "$2,517.43"
      },
      {
        "name": {
          "first": "Gilmore",
          "last": "Donovan"
        },
        "picture": "assets/img/avatars/5.png",
        "company": "PYRAMIA",
        "email": "gilmore.donovan@pyramia.net",
        "phone": "+1 (865) 536-2179",
        "balance": "$3,221.32"
      },
      {
        "name": {
          "first": "Abbott",
          "last": "Farmer"
        },
        "picture": "assets/img/avatars/5.png",
        "company": "CALCU",
        "email": "abbott.farmer@calcu.name",
        "phone": "+1 (909) 516-2360",
        "balance": "$1,415.31"
      },
      {
        "name": {
          "first": "Ferrell",
          "last": "Wilder"
        },
        "picture": "assets/img/avatars/13.png",
        "company": "ZILLADYNE",
        "email": "ferrell.wilder@zilladyne.biz",
        "phone": "+1 (839) 464-3973",
        "balance": "$3,754.11"
      },
      {
        "name": {
          "first": "Delia",
          "last": "Horn"
        },
        "picture": "assets/img/avatars/7.png",
        "company": "GOKO",
        "email": "delia.horn@goko.biz",
        "phone": "+1 (873) 577-2753",
        "balance": "$3,204.10"
      },
      {
        "name": {
          "first": "Josefina",
          "last": "Mcdaniel"
        },
        "picture": "assets/img/avatars/15.png",
        "company": "BOINK",
        "email": "josefina.mcdaniel@boink.com",
        "phone": "+1 (816) 588-3229",
        "balance": "$2,783.07"
      },
      {
        "name": {
          "first": "Walls",
          "last": "Kelly"
        },
        "picture": "assets/img/avatars/6.png",
        "company": "SKINSERVE",
        "email": "walls.kelly@skinserve.tv",
        "phone": "+1 (972) 473-2027",
        "balance": "$3,439.00"
      },
      {
        "name": {
          "first": "Kinney",
          "last": "Cochran"
        },
        "picture": "assets/img/avatars/11.png",
        "company": "ECOLIGHT",
        "email": "kinney.cochran@ecolight.me",
        "phone": "+1 (876) 472-2157",
        "balance": "$2,948.15"
      },
      {
        "name": {
          "first": "Althea",
          "last": "York"
        },
        "picture": "assets/img/avatars/20.png",
        "company": "MAGNINA",
        "email": "althea.york@magnina.co.uk",
        "phone": "+1 (859) 557-2700",
        "balance": "$1,131.21"
      },
      {
        "name": {
          "first": "Lula",
          "last": "Walker"
        },
        "picture": "assets/img/avatars/16.png",
        "company": "ZIGGLES",
        "email": "lula.walker@ziggles.us",
        "phone": "+1 (955) 434-2394",
        "balance": "$2,500.72"
      },
      {
        "name": {
          "first": "Craft",
          "last": "Ramos"
        },
        "picture": "assets/img/avatars/13.png",
        "company": "ANDERSHUN",
        "email": "craft.ramos@andershun.info",
        "phone": "+1 (901) 578-2231",
        "balance": "$3,485.08"
      },
      {
        "name": {
          "first": "Mckinney",
          "last": "English"
        },
        "picture": "assets/img/avatars/7.png",
        "company": "BALOOBA",
        "email": "mckinney.english@balooba.io",
        "phone": "+1 (851) 497-3114",
        "balance": "$2,163.44"
      },
      {
        "name": {
          "first": "Kirsten",
          "last": "Mcfarland"
        },
        "picture": "assets/img/avatars/16.png",
        "company": "REMOLD",
        "email": "kirsten.mcfarland@remold.ca",
        "phone": "+1 (987) 570-3370",
        "balance": "$1,735.32"
      },
      {
        "name": {
          "first": "Dale",
          "last": "Kramer"
        },
        "picture": "assets/img/avatars/9.png",
        "company": "MAROPTIC",
        "email": "dale.kramer@maroptic.net",
        "phone": "+1 (871) 489-3969",
        "balance": "$1,500.19"
      },
      {
        "name": {
          "first": "Owens",
          "last": "Buchanan"
        },
        "picture": "assets/img/avatars/4.png",
        "company": "DATAGEN",
        "email": "owens.buchanan@datagen.name",
        "phone": "+1 (921) 459-3242",
        "balance": "$2,131.18"
      },
      {
        "name": {
          "first": "Castro",
          "last": "Combs"
        },
        "picture": "assets/img/avatars/8.png",
        "company": "MEDALERT",
        "email": "castro.combs@medalert.biz",
        "phone": "+1 (887) 492-2937",
        "balance": "$1,206.68"
      },
      {
        "name": {
          "first": "Jeannette",
          "last": "Fitzgerald"
        },
        "picture": "assets/img/avatars/12.png",
        "company": "GRUPOLI",
        "email": "jeannette.fitzgerald@grupoli.biz",
        "phone": "+1 (855) 547-2184",
        "balance": "$1,065.40"
      },
      {
        "name": {
          "first": "Laurie",
          "last": "Mays"
        },
        "picture": "assets/img/avatars/14.png",
        "company": "EURON",
        "email": "laurie.mays@euron.com",
        "phone": "+1 (952) 465-3803",
        "balance": "$3,464.62"
      },
      {
        "name": {
          "first": "Ivy",
          "last": "Booker"
        },
        "picture": "assets/img/avatars/2.png",
        "company": "EMPIRICA",
        "email": "ivy.booker@empirica.tv",
        "phone": "+1 (875) 482-2565",
        "balance": "$3,105.96"
      },
      {
        "name": {
          "first": "Isabelle",
          "last": "Avery"
        },
        "picture": "assets/img/avatars/16.png",
        "company": "MYOPIUM",
        "email": "isabelle.avery@myopium.me",
        "phone": "+1 (922) 525-2137",
        "balance": "$2,661.55"
      },
      {
        "name": {
          "first": "Beryl",
          "last": "Holcomb"
        },
        "picture": "assets/img/avatars/6.png",
        "company": "INDEXIA",
        "email": "beryl.holcomb@indexia.co.uk",
        "phone": "+1 (838) 450-2157",
        "balance": "$3,114.98"
      },
      {
        "name": {
          "first": "Lorene",
          "last": "West"
        },
        "picture": "assets/img/avatars/14.png",
        "company": "PRINTSPAN",
        "email": "lorene.west@printspan.us",
        "phone": "+1 (896) 467-3407",
        "balance": "$2,982.99"
      },
      {
        "name": {
          "first": "Allie",
          "last": "Flowers"
        },
        "picture": "assets/img/avatars/8.png",
        "company": "EXIAND",
        "email": "allie.flowers@exiand.info",
        "phone": "+1 (949) 469-2348",
        "balance": "$2,976.61"
      }
    ];
  }

}
