import { Component, Prop ,State, Method} from '@stencil/core';

import { MatchResults } from '@stencil/router';

@Component({
    tag: 'spi-candidat-edit',
    styleUrl: 'spi-candidat.scss'
  })
export class SpiCandidatEdit {
    
  apiRootUrl: string = 'https://api-dosispi.cleverapps.io/promotions';

    @Prop() match: MatchResults;
    @State() candidat : any =null ;
    @State() promotions : any[]=[]; 
    @State() idPromotion : any = {};

  
    @State() id :String ;


    @Method()
 
   
      close() {
        location.href="/candidats/"
            }

      loadPromo() {

              
        fetch(`${this.apiRootUrl}`).then(rsp => {
          return   rsp.json();
      
        }).then(data => {
          console.log(data);
          this.promotions = data ;
     
        }).catch((err) => {
          console.error('Could not load data', err);
        }); 


  
      }
    
    


      handleSubmit ( event) {
        event.preventDefault();
        this.candidat.promotion.id.codeFormation =this.idPromotion.codeFormation;
        this.candidat.promotion.id.anneeUniversitaire =this.idPromotion.anneeUniversitaire;
        
    
         return fetch('http://api-dosispi.cleverapps.io/candidats/',{
            method: 'POST',
            body: JSON.stringify(
             this.candidat
          ),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then(()=> { alert("Operation Succeded ");  location.href="/candidats/"
        }
          ).catch((err) => {
            console.error('Could not load data', err) }) ;
      
            
      }


           
      componentWillLoad() { 

        this.candidat = {}
        this.id =this.match.params.id;

        if (this.id) { 
          
          this.loadPromo(); 

          fetch('http://api-dosispi.cleverapps.io/candidats/'+this.id).then(rsp => {
            return   rsp.json();
        
          }).then(data => {
            console.log(data);
            this.candidat = data ;
       
          }).catch((err) => {
            console.error('Could not load data', err);
          }); 

          

          
         
        
        }
       

      }

      render() {

if (this.candidat == null) {

  return "ERROR"
}
        return (
          <div >
                
               { 
   
   
   <div class="container">
   <div class="card ">
   <div class="card-content">
   <form onSubmit={(e) => this.handleSubmit(e)}>
   
   <div class="field">
      <label class="label">NoCandidat</label>
      <div class="control">
        <input class="input" type="text" value={this.candidat.noCandidat}   readonly placeholder="NoCandidat" onInput={(e: any) => (this.candidat.noCandidat= e.target.value)}  />
      </div>
    </div>

   <div class="field">
      <label class="label">Nom</label>
      <div class="control">
        <input class="input" type="text" value={this.candidat.nom}  placeholder="Nom" onInput={(e: any) => { this.candidat.nom= e.target.value;  } }  />
      </div>
    </div>


    <div class="field">
      <label class="label">Prenom</label>
      <div class="control">
        <input class="input" type="text" placeholder="Prenom" value={this.candidat.prenom} onInput={(e: any) => (this.candidat.prenom= e.target.value)} />
      </div>
    </div>


<div class="field">  
<label class="label">Sexe</label>

<div class="control">
  <div class="select"  onInput={(e: any) => (this.candidat.sexe = e.target.value)}  > 
    <select>
      <option value="M">Masculin</option>
      <option value="F" >Feminin</option>
    </select>
  </div>
</div>
</div>
<div class="field">  
<label class="label">Promotion</label>

<div class="control">
  <div class="select"  onInput={(e: any) => { this.idPromotion = JSON.parse(e.target.value ); } } > 
    <select>  

 {this.promotions.map((promotion) =>
                          <option value={JSON.stringify(promotion.id)} selected> {promotion.id.codeFormation} -  {promotion.id.anneeUniversitaire}</option>
                        )}    
    </select>
  </div>
</div>
</div>

<div class="field">  
  <label class="label">Universite d'Origine</label>
  <div class="control">
    <input class="input" type="text" placeholder="universiteOrigine" value={this.candidat.universiteOrigine}  onInput={(e: any) => (this.candidat.universiteOrigine= e.target.value)} />
  </div>
</div>

<div class="field">  
  <label class="label">Pays d'Origine</label>
  <div class="control">
    <input class="input" type="text" placeholder="paysOrigine"  value={this.candidat.paysOrigine} onInput={(e: any) => (this.candidat.paysOrigine= e.target.value)} />
  </div>
</div>

<div class="field">  
  <label class="label">lieu de Naissance</label>
  <div class="control">
    <input class="input" type="text" placeholder="lieu de Naissance" value={this.candidat.lieuNaissance} onInput={(e: any) => (this.candidat.lieuNaissance= e.target.value)} />
  </div>
</div>

<div class="field">  
  <label class="label">Date Naissance</label>
  <div class="control">
    <input class="input" type="date" placeholder="Date Naissance" value={this.candidat.dateNaissance} onInput={(e: any) => (this.candidat.dateNaissance= e.target.value)}/>
  </div>
</div>

<div class="field">  
  <label class="label">Nationalité</label>
  <div class="control">
    <input class="input" type="text" placeholder="Nationalité" value={this.candidat.nationalite} onInput={(e: any) => (this.candidat.nationalite= e.target.value)} />
  </div>
</div>

<div class="field">  
  <label class="label">Mobile</label>
  <div class="control">
    <input class="input" type="tel" placeholder="Mobile" value={this.candidat.mobile}  onInput={(e: any) => (this.candidat.mobile= e.target.value)}/>
  </div>
</div>

<div class="field">  
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="email" value={this.candidat.email}  onInput={(e: any) => (this.candidat.email= e.target.value)} />
  </div>
</div>


<div class="field">  
  <label class="label">Address</label>
  <div class="control">
    <input class="input" type="address" placeholder="Address" value={this.candidat.adresse}  onInput={(e: any) => (this.candidat.adresse= e.target.value)} />
  </div>
</div> 

<div class="field">  
  <label class="label">Ville</label>
  <div class="control">
    <input class="input" type="text" placeholder="Ville"  value={this.candidat.ville}   onInput={(e: any) => (this.candidat.ville= e.target.value)}  />
  </div>
</div> 

<div class="field">  
  <label class="label">Code Postale</label>
  <div class="control">
    <input class="input" type="text" placeholder="Code Postale"  value={this.candidat.codePostal}  onInput={(e: any) => (this.candidat.codePostal= e.target.value)}    />
  </div>
</div> 

<footer class="card-footer">
    <button class="button card-footer-item is-success " type="submit"> Sauvegarder</button>
    <a class="button card-footer-item is-danger"  onClick={() => this.close()} >Annuler</a>
  </footer>
  <br/>
</form>

</div>
   
 
  </div>
  </div>
  
} 
          

                   
                 
                   
             
</div>   

        );
    }


}