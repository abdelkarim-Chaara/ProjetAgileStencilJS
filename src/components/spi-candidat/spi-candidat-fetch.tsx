import { Component, Prop ,State, Method} from '@stencil/core';

import { MatchResults } from '@stencil/router';
import { Candidat } from '../../global/candidat';

@Component({
    tag: 'spi-candidat-fetch',
    styleUrl: 'spi-candidat.scss'
  })
  
export class SpiCandidatFetch {
    
    @Prop() match: MatchResults;
    @State() candidat :Candidat =null ;
    @State() id :String ;

    @Method()
     
    componentWillLoad() { 
         this.id =this.match.params.id;

       if (this.id) {
          
        console.log("ID: "+this.id)
       return fetch('http://api-dosispi.cleverapps.io/candidats/'+this.id)
          .then((response: any) => {
            return response.json()
          }).then((Candidats) => {
            this.candidat = Candidats;
          });
  
       }
    
      }
  
      close() {

location.href="/candidats/"
      }

      
      render() {
          console.log(this.candidat);
        return (
          <div >
                
               { 
   
   
   <div class="container">
   <div class="card ">
    <table class="table is-responsive">
    <thead>
      <tr>
        <th>    <b>Nom Prenom  : {this.candidat.nom} {this.candidat.prenom}</b>
</th>
       
      </tr>
    </thead>

  <div class="card-content">
  <tbody>
  <tr >
      <td>
      <b>Formation</b>  :</td> 
      <td>
      {this.candidat.promotion.formation.nomFormation} 
      </td></tr> 
  

    <tr>
      <td><b>Session</b>  :</td>
      <td> {this.candidat.promotion.id.anneeUniversitaire}
       </td>
       </tr> 

       <tr>
      <td>
        <b>Sexe</b> :</td> <td>{this.candidat.sexe}   </td>
        </tr> 
       <tr>
       <td>
        <b>Date Naissance</b> :</td> <td>{this.candidat.dateNaissance}</td></tr> 
    <tr>
    <td>
      <b>Nationalité</b> </td><td>{this.candidat.nationalite} </td> </tr> 
    
    <tr >
      <td>
        <b>Mobile</b> :</td> <td> {this.candidat.mobile} </td></tr> 
    
    <tr>
      <td>
        <b>Email</b> :</td> <td>{this.candidat.email}</td></tr> 
        <tr>
      <td>
        <b>Sigle Promotion</b> :</td> <td>{this.candidat.promotion.siglePromotion}   </td>
        
        </tr> 
        <tr>
      <td>
        <b>Pays d'Origine</b> :</td> <td>{this.candidat.paysOrigine}   </td>
        
        </tr> 
        <tr>

      <td>
        <b>Address</b> :</td> <td>{this.candidat.adresse}</td></tr> 

      
        <tr>
      <td>
        <b>Ville</b> :</td> <td>{this.candidat.ville}   </td>
        
        </tr> 


        <tr>
      <td>
        <b>Code Postale</b> :</td> <td>{this.candidat.codePostal}   </td>
        
        </tr> 

        <tr>
      <td>
        <b>Université d'Origine</b> :</td> <td>{this.candidat.universiteOrigine}   </td>
        
        </tr> 

      
</tbody>
</div>
    </table> 
  <footer class="card-footer">
    <a class="button card-footer-item is-success " href={"/candidats/edit/"+this.id} >Edit</a>
    <a class="button card-footer-item is-danger"  onClick={() => this.close()} >Back</a>

  </footer>
  </div>
  </div>
  
} 
          

                   
                 
                   
             
              </div>
        );
    }

}