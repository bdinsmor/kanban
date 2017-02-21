import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { MaterialModule, MdIconRegistry } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SidenavItemComponent } from './core/sidenav-item/sidenav-item.component';
import { SidenavService } from "./core/sidenav/sidenav.service";
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { IconSidenavDirective } from './core/sidenav/icon-sidenav.directive';
import { RoutingModule } from './app-routing.module';
import { DashboardV1Component } from './demo/custom-pages/dashboard-v1/dashboard-v1.component';
import { ButtonsComponent } from './demo/components/buttons/buttons.component';
import { HighlightModule } from './core/highlightjs/highlight.module';
import { FormElementsComponent } from './demo/forms/form-elements/form-elements.component';
import { SearchComponent } from './core/search/search.component';
import { BreadcrumbsComponent } from './core/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from './core/breadcrumb/breadcrumb.service';
import { ListsComponent } from './demo/components/lists/lists.component';
import { WidgetComponent } from './core/widgets-v1/widget-v1/widget-v1.component';
import { D3ChartService } from './core/nvD3/nvD3.service';
import { nvD3 } from './core/nvD3/nvD3.component';
import { LineChartWidgetComponent } from './core/widgets-v1/line-chart-widget/line-chart-widget.component';
import { SourceOverviewWidgetComponent } from './core/widgets-v1/source-overview-widget/source-overview-widget.component';
import { SimpleTableComponent } from './demo/tables/simple-table/simple-table.component';
import { FixedHeaderTableComponent } from './demo/tables/fixed-header-table/fixed-header-table.component';
import { FormWizardComponent } from './demo/forms/form-wizard/form-wizard.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GoogleMapsComponent } from './demo/maps/google-maps/google-maps.component';
import { CardsComponent } from './demo/components/cards/cards.component';
import { DialogsComponent, DemoDialog } from './demo/components/dialogs/dialogs.component';
import { IconsComponent } from './demo/icons/icons.component';
import { GridListComponent } from './demo/components/grid-list/grid-list.component';
import { MenuComponent } from './demo/components/menu/menu.component';
import { SliderComponent } from './demo/components/slider/slider.component';
import { SnackBarComponent } from './demo/components/snack-bar/snack-bar.component';
import { TooltipComponent } from './demo/components/tooltip/tooltip.component';
import { DynamicMenuComponent } from './demo/dynamic-menu/dynamic-menu.component';
import { environment } from '../environments/environment';
import { Level5Component } from './demo/levels/level5/level5.component';
import {DynamicMenuService} from './demo/dynamic-menu/dynamic-menu.service';
import { AdminComponent } from './core/admin/admin.component';
import { LoginComponent } from './demo/custom-pages/login/login.component';
import { RegisterComponent } from './demo/custom-pages/register/register.component';
import { ForgotPasswordComponent } from './demo/custom-pages/forgot-password/forgot-password.component';
import { QuillModule } from 'ngx-quill';
import { EditorComponent } from './demo/editor/editor.component';
import { KanbanComponent } from './demo/kanban/kanban.component';
import { QuickpanelComponent } from './core/quickpanel/quickpanel.component';
import { DashboardComponent } from './demo/dashboard/dashboard.component';
import { BarChartComponent } from './core/widgets/bar-chart/bar-chart.component';
import { LineChartComponent } from './core/widgets/line-chart/line-chart.component';
import { RecentSalesComponent } from './core/widgets/recent-sales/recent-sales.component';
import { PieChartComponent } from './core/widgets/pie-chart/pie-chart.component';
import { GoogleMapsWidgetComponent } from './core/widgets/google-maps-widget/google-maps-widget.component';
import { ActivityComponent } from './core/widgets/activity/activity.component';
import { TrafficSourcesComponent } from './core/widgets/traffic-sources/traffic-sources.component';
import { LoadingOverlayComponent } from './core/loading-overlay/loading-overlay.component';
import {SortablejsModule, SortablejsOptions} from 'angular-sortablejs';
import { DragAndDropComponent } from './demo/drag-and-drop/drag-and-drop.component';
import { InboxComponent } from './demo/apps/inbox/inbox.component';
import { MailService } from './demo/apps/inbox/mail.service';
import { InboxComposeComponent } from './demo/apps/inbox/inbox-compose/inbox-compose.component';
import {CalendarModule} from 'angular-calendar';
import { CalendarComponent } from './demo/apps/calendar/calendar.component';
import { CalendarEditComponent } from './demo/apps/calendar/calendar-edit/calendar-edit.component';
import { ChatComponent } from './demo/apps/chat/chat.component';
import {CommonModule} from '@angular/common';

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const sortablejsConfig: SortablejsOptions = {
  animation: 300
};

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavItemComponent,
    IconSidenavDirective,
    DashboardV1Component,
    ButtonsComponent,
    FormElementsComponent,
    SearchComponent,
    BreadcrumbsComponent,
    ListsComponent,
    WidgetComponent,
    KanbanComponent,
    nvD3,
    LineChartWidgetComponent,
    SourceOverviewWidgetComponent,
    SimpleTableComponent,
    FixedHeaderTableComponent,
    FormWizardComponent,
    GoogleMapsComponent,
    CardsComponent,
    DialogsComponent,
    DemoDialog,
    IconsComponent,
    GridListComponent,
    MenuComponent,
    SliderComponent,
    SnackBarComponent,
    TooltipComponent,
    DynamicMenuComponent,
    Level5Component,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    EditorComponent,
    QuickpanelComponent,
    DashboardComponent,
    BarChartComponent,
    LineChartComponent,
    RecentSalesComponent,
    PieChartComponent,
    GoogleMapsWidgetComponent,
    ActivityComponent,
    TrafficSourcesComponent,
    LoadingOverlayComponent,
    DragAndDropComponent,
    InboxComponent,
    InboxComposeComponent,
    CalendarComponent,
    CalendarEditComponent,
    ChatComponent
  ],
  entryComponents: [
    DemoDialog,
    InboxComposeComponent,
    CalendarEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleApi
    }),
    QuillModule,
    HighlightModule,
    SortablejsModule,
    CalendarModule.forRoot(),
  ],
  providers: [
    SidenavService,
    MdIconRegistry,
    BreadcrumbService,
    DynamicMenuService,
    D3ChartService,
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
