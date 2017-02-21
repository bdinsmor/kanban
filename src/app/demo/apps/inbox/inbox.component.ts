import {
  Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef,
  Renderer, AfterViewChecked
} from '@angular/core';
import {Mail} from "./mail.model";
import {fadeInAnimation} from "../../../route.animation";
import * as _ from 'lodash';
import {Subscription} from "rxjs";
import {MailService} from "./mail.service";
import {MdDialog, MdSnackBar} from "@angular/material";
import {InboxComposeComponent} from "./inbox-compose/inbox-compose.component";

@Component({
  selector: 'ms-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class InboxComponent implements OnInit, OnDestroy, AfterViewChecked {

  shownMails: Mail[] = [ ];
  shownMailDetail: Mail;

  allMails: Mail[] = [ ];
  selectedMails: Mail[] = [ ];

  mailSubscription: Subscription;
  clickListeners: Function[] = [ ];

  shownMailsTypeGroup: string;
  respondActive: boolean;

  @ViewChildren('mailList')
  mailList: QueryList<ElementRef>;

  constructor(
    private mailService: MailService,
    private renderer: Renderer,
    public composeDialog: MdDialog,
    private snackBar: MdSnackBar,
  ) { }

  ngOnInit() {
    this.mailSubscription = this.mailService.mails$.subscribe((mails) => {
      this.allMails = _.sortBy(mails, 'when').reverse();
    });

    this.setShownMailsByGroup('primary');
  }

  ngAfterViewChecked() {
    this.createMailListClickListeners();
  }

  openComposeDialog() {
    let dialogRef = this.composeDialog.open(InboxComposeComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open(result);
      }
    });
  }

  createMailListClickListeners() {
    this.clickListeners.forEach((listener) => {
      listener();
    });

    this.mailList.forEach((elem, index) => {
      this.clickListeners.push(
        this.renderer.listen(elem.nativeElement, 'click', (event) => {
          if (event.target.className != 'md-checkbox-inner-container' && event.target.className != 'md-ripple-background') {
            this.showMailDetail(this.shownMails[index]);
          }
        })
      );
    });
  }

  resetTemporaries() {
    this.shownMailDetail = null;
    this.respondActive = false;
  }

  showMailDetail(mail: Mail) {
    this.shownMailDetail = mail;
    mail.read = true;
  }

  setShownMailsByGroup(group: string) {
    this.shownMails = this.allMails.filter((mail) => {
      return (mail.group == group)
    });

    this.shownMailsTypeGroup = group;
    this.resetTemporaries();
  }

  setShownMailsByType(type: string) {
    this.shownMails = this.allMails.filter((mail) => {
      return (mail.type == type)
    });

    this.shownMailsTypeGroup = type;
    this.resetTemporaries();
  }

  setShownMailsToStarred() {
    this.shownMails = this.allMails.filter((mail) => {
      return (mail.starred == true)
    });

    this.shownMailsTypeGroup = 'starred';
    this.resetTemporaries();
  }

  toggleSelectAllThreads() {
    if (this.selectedMails && this.selectedMails.length > 0) {
      this.selectedMails = this.shownMails;
    } else {
      this.selectedMails = [ ];
    }
  }

  toggleStarred(mail: Mail) {
    mail.starred = !mail.starred;
  }

  isSelected(mail) {
    return _.includes(this.selectedMails, mail);
  }

  unreadMailsCount(group): string {
    let count = this.allMails.filter((mail) => { return (mail.read == false && mail.group == group) }).length;
    let text = '';

    if (count > 0) {
      text = `(${count})`
    }

    return text;
  }

  setRespondActive(active: boolean) {
    this.respondActive = active;
  }

  ngOnDestroy() {
    this.mailSubscription.unsubscribe();

    this.clickListeners.forEach((listener) => {
      listener();
    })
  }
}
