import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { LegendComponent, LegendEntryComponent } from '@swimlane/ngx-charts';
import { ECommerceLegendChartComponent } from './e-commerce/legend-chart/legend-chart.component';
import { EarningCardComponent } from './e-commerce/earning-card/earning-card.component';
import { ECommerceProgressSectionComponent } from './e-commerce/progress-section/progress-section.component';
import { ECommerceUserActivityComponent } from './e-commerce/user-activity/user-activity.component';
import { SlideOutComponent } from './e-commerce/slide-out/slide-out.component';
import { TemperatureComponent } from './dashboard/temperature/temperature.component';
import { WeatherComponent } from './dashboard/weather/weather.component';
import { SecurityCamerasComponent } from './dashboard/security-cameras/security-cameras.component';
import { TemperatureDraggerComponent } from './dashboard/temperature/temperature-dragger/temperature-dragger.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { ElectricityChartComponent } from './dashboard/electricity/electricity-chart/electricity-chart.component';
import { ElectricityComponent } from './dashboard/electricity/electricity.component';
import { KittenComponent } from './dashboard/kitten/kitten.component';
import { ListComponent } from './layout/list/list.component';
import { StepperComponent } from './layout/stepper/stepper.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [ { 

  path: '',
  component: PagesComponent,
  children: [
   
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },

      {
        path: 'legend-chart',
        component: ECommerceLegendChartComponent,
      },
      
      {
        path: 'earning-chart',
        component: EarningCardComponent,
      },

      
 
    {
      path: 'iot-dashboard',
    
    
    children: [
      {
      path: 'weather',
      component: WeatherComponent,
     },
    
  
     {
      path: 'temperature',
      component: TemperatureComponent,
     },

     {
      path: 'security-cameras',
      component: SecurityCamerasComponent,
     }

    ],  
  },
  {
    path: 'layout',
    component: LayoutComponent,
  
  children: [
  {
    path: 'list',
    component: ListComponent,
   },
  

   {
    path: 'stepper',
    component: StepperComponent,
   },

   {
    path: 'tabs',
    component: TabsComponent,
   },
  ]
},
  
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
