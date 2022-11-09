import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './backoffice/add-product/add-product.component';
import { BackfooterComponent } from './backoffice/backfooter/backfooter.component';
import { BackloginComponent } from './backoffice/backlogin/backlogin.component';
import { BacknavbarComponent } from './backoffice/backnavbar/backnavbar.component';
import { BacksidebarComponent } from './backoffice/backsidebar/backsidebar.component';
import { DashbordComponent } from './backoffice/dashbord/dashbord.component';
import { ShowProductComponent } from './backoffice/show-product/show-product.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PanierComponent } from './panier/panier.component';
import { SingleProduitComponent } from './single-produit/single-produit.component';
import { RegisterComponent } from './register/register.component';
import { AddFourniseurComponent } from './backoffice/add-fourniseur/add-fourniseur.component';
import { ShowFourniseurComponent } from './backoffice/show-fourniseur/show-fourniseur.component';
import { FormsModule } from '@angular/forms';
import { MailFournisseurComponent } from './backoffice/mail-fournisseur/mail-fournisseur.component';
import { PubliciteComponent } from './backoffice/publicite/publicite.component';
import { CategoryProduitComponent } from './category-produit/category-produit.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { DetailsCommandesComponent } from './backoffice/details-commandes/details-commandes.component';
import { ListeCommandesComponent } from './backoffice/liste-commandes/liste-commandes.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { HistoriqueCommandesComponent } from './historique-commandes/historique-commandes.component';
import { DetailsHistoriqueComponent } from './details-historique/details-historique.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { CodesecuriteComponent } from './codesecurite/codesecurite.component';
import { InfopersoComponent } from './infoperso/infoperso.component';
import { ProfileComponent } from './profile/profile.component';

import { GestutilisateurComponent } from './backoffice/gestutilisateur/gestutilisateur.component';
import { HistoriqueRecComponent } from './historique-rec/historique-rec.component';
import { ConsulterreclamationComponent } from './backoffice/consulterreclamation/consulterreclamation.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PanierComponent,
    DashbordComponent,
    ShowProductComponent,
    BacknavbarComponent,
    BacksidebarComponent,
    BackfooterComponent,
    HomeComponent,
    BackloginComponent,
    ConnexionComponent,
    RegisterComponent,
    AddProductComponent,
    SingleProduitComponent,
    AddFourniseurComponent,
    ShowFourniseurComponent,
    MailFournisseurComponent,
    PubliciteComponent,
    CategoryProduitComponent,
    ReclamationComponent,
    UploadImagesComponent,
    DetailsCommandesComponent,
    ListeCommandesComponent,
    LivraisonComponent,
    HistoriqueCommandesComponent,
    DetailsHistoriqueComponent,
    ForgetpasswordComponent,
    CodesecuriteComponent,
    InfopersoComponent,
    ProfileComponent,
  HistoriqueRecComponent,
    GestutilisateurComponent,
    ConsulterreclamationComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
