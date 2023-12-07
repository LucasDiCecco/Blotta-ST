import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FallasComponent } from "./fallas/fallas.component";
import { RepuestosComponent } from "./repuestos/repuestos.component";
import { VideosComponent } from "./videos/videos.component";
import { MCE1Component } from './fallas/mce1/mce1.component';
import { FH200Component } from './fallas/fh200/fh200.component';
import { UTL63Component } from './fallas/utl63/utl63.component';
import { M70Component } from './fallas/m70/m70.component';
import { AuthGuard } from "./Service/auth.guard";
import { CartillaComponent } from './cartilla/cartilla.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'soporte', component: FallasComponent},
        {path:'soporte/MCE1', component: MCE1Component, canActivate: [AuthGuard]},
        {path:'soporte/FH200', component: FH200Component, canActivate: [AuthGuard]},
        {path:'soporte/UTL63', component: UTL63Component, canActivate: [AuthGuard]},
        {path:'soporte/M70', component: M70Component, canActivate: [AuthGuard]},
    {path:'repuestos', component: RepuestosComponent},
    {path:'videos', component: VideosComponent},
    {path:'cartilla', component:CartillaComponent},
];

@NgModule({
    declarations:[
        AppComponent,
        HomeComponent,
        FallasComponent,
        RepuestosComponent,
        VideosComponent,
        MCE1Component,
        FH200Component,
        UTL63Component,
        M70Component,
        CartillaComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}


