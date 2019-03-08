import { Component, State, Prop, Method } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
    tag: 'spi-enseignant-fetch',
    styleUrl: 'spi-enseignant.scss'
})
export class SpiEnseignantFetch {
    
    @Prop() match: MatchResults;
    @State() enseignant :any ;

    @State() id :String ;
    
    @Method()



    deleteEnseignant(item) {
  
        return fetch("https://api-dosispi.cleverapps.io/enseignants", {
          method: 'DELETE',
          headers: {
            Accept: "application/json, text/plain, /",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item),
        }).then((response) => {
          alert(' Delete Enseignant Succeed !');
          location.href='/enseignants/';
        
          return response;
        }
      
      
      
        ).catch((error) => {
          alert(' Erreur de suppression ');
          console.error(error);
        })
        
      }
    
    close() {

        location.href="/enseignants/"
              }

    componentWillLoad() { 
        this.enseignant = {};
       this.id =this.match.params.id;

     if (this.id) {
        
      console.log("ID: "+this.id)
     return fetch('http://api-dosispi.cleverapps.io/enseignants/'+this.id)
        .then((response: any) => {
          return response.json()
        }).then((data) => {
          this.enseignant = data;
        });

     }
  
    }
    
    render() {
        console.log(this.enseignant);
      return (
        <div >
              
             { 
 
 
 <div class="container">
 <br/>
 <div class="card ">
  

<div class="card-content">
<table class="table is-responsive is-fullwidth">
<center><strong class="tag is-black is-dark is-large is-fullwidth">{this.enseignant.nom} {this.enseignant.prenom}  </strong> &nbsp;
      </center>

<tbody>

<tr>
    <td>
      <b>noEnseignant</b> :</td> <td>{this.enseignant.noEnseignant}   </td>
      
      </tr> 

<tr>
    <td>
      <b>Type</b> :</td> <td>{this.enseignant.type}   </td>
      
      </tr> 

  <tr>
    <td>
      <b>Sexe</b> :</td> <td>{this.enseignant.sexe}   </td>
      </tr> 
   
 
  
  <tr >
    <td>
      <b>Mobile</b> :</td> <td> {this.enseignant.mobile} </td></tr> 
  
  <tr>
    <td>
      <b>Email</b> :</td> <td>{this.enseignant.emailUbo}</td></tr> 
      
      <tr>
    <td>
      <b>Pays</b> :</td> <td>{this.enseignant.pays}   </td>
      
      </tr> 
      <tr>

    <td>
      <b>Address</b> :</td> <td>{this.enseignant.adresse}</td></tr> 

    
      <tr>
    <td>
      <b>Ville</b> :</td> <td>{this.enseignant.ville}   </td>
      
      </tr> 


      <tr>
    <td>
      <b>Code Postale</b> :</td> <td>{this.enseignant.codePostal}   </td>
      
      </tr> 

    

    
</tbody>

  </table> </div>
<footer class="card-footer">
  <a class="button card-footer-item is-black " onClick={()=> {location.href="/enseignants/"}} >Retourner</a>
  <a class="button card-footer-item is-danger"  onClick={() => this.deleteEnseignant(this.enseignant)} >Supprimer</a>
  

</footer>
</div>
</div>

} 
        

                 
               
                 
           
            </div>
      );
  }
}