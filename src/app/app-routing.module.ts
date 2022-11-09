import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFourniseurComponent } from './backoffice/add-fourniseur/add-fourniseur.component';
import { AddProductComponent } from './backoffice/add-product/add-product.component';
import { BackloginComponent } from './backoffice/backlogin/backlogin.component';
import { ConsulterreclamationComponent } from './backoffice/consulterreclamation/consulterreclamation.component';
import { DashbordComponent } from './backoffice/dashbord/dashbord.component';
import { DetailsCommandesComponent } from './backoffice/details-commandes/details-commandes.component';
import { GestutilisateurComponent } from './backoffice/gestutilisateur/gestutilisateur.component';
import { ListeCommandesComponent } from './backoffice/liste-commandes/liste-commandes.component';
import { MailFournisseurComponent } from './backoffice/mail-fournisseur/mail-fournisseur.component';
import { PubliciteComponent } from './backoffice/publicite/publicite.component';
import { ShowFourniseurComponent } from './backoffice/show-fourniseur/show-fourniseur.component';
import { ShowProductComponent } from './backoffice/show-product/show-product.component';
import { CategoryProduitComponent } from './category-produit/category-produit.component';
import { CodesecuriteComponent } from './codesecurite/codesecurite.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailsHistoriqueComponent } from './details-historique/details-historique.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HistoriqueCommandesComponent } from './historique-commandes/historique-commandes.component';

import { HomeComponent } from './home/home.component';
import { InfopersoComponent } from './infoperso/infoperso.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { PanierComponent } from './panier/panier.component';
import { ProfileComponent } from './profile/profile.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RegisterComponent } from './register/register.component';
import { SingleProduitComponent } from './single-produit/single-produit.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';



const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path :'admin', component:BackloginComponent},
  {path:'dashbord', component: DashbordComponent},
  {path:'showProduct', component: ShowProductComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'register', component: RegisterComponent},
  {path:'addProduct', component: AddProductComponent},
  {path:'singelProduct', component: SingleProduitComponent},
  {path:'showFournisseur', component: ShowFourniseurComponent},
  {path:'mailFournisseur', component: MailFournisseurComponent},
  {path:'publicite', component: PubliciteComponent},
  {path:'Category', component: CategoryProduitComponent},

//*****************salma***************************//
  {path:'detailsCommandes', component: DetailsCommandesComponent},
  {path:'listeCommandes', component: ListeCommandesComponent},
  {path:'panier', component: PanierComponent},
  {path:'livraison', component: LivraisonComponent},
  {path:'historiqueCommandes', component: HistoriqueCommandesComponent},
  {path:'detailsHistorique', component: DetailsHistoriqueComponent},
  {path:'gestutilisateur', component: GestutilisateurComponent},
  {path:'consulterreclamation', component: ConsulterreclamationComponent},







//*****************tasnime***************************//

{path:'forgetpassword', component: ForgetpasswordComponent},
{path:'codesecurite', component: CodesecuriteComponent},
{path:'infoperso', component: InfopersoComponent},
{path:'profile', component: ProfileComponent},
{path:'historique-rec', component: HistoriqueCommandesComponent},












  {path:'reclamation', component: ReclamationComponent},
  {path:'fff', component: UploadImagesComponent},
  {path:'addFournisseur', component: AddFourniseurComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
