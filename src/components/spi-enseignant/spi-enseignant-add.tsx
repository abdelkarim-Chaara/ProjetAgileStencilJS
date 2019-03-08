import { Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: 'spi-enseignant-add',
    styleUrl: 'spi-enseignant.scss'
  })

export class EnseignantAdd {
        
    @Prop() match: MatchResults;
    @State() enseignant: any;
             
    componentWillLoad() { 

      this.enseignant = {}

      }

    createEnseignant() {

      
        
        console.log(JSON.stringify( 
          this.enseignant
      ))
    return fetch('http://api-dosispi.cleverapps.io/enseignants', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( 
        this.enseignant
    ),
      }).then((response) => response.json())
          .then((responseJson) => {
            alert(' Enseignant Created with succeed !');
            location.href="/enseignants/"
            return responseJson;
          })
          .catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);
          });
}




handleSubmit = (ev: Event) => {
    ev.preventDefault();
    this.createEnseignant();
    
  }

  handleChange(event,property:string) {
    
    this.enseignant[property] = event.target.value;
    console.log(this.enseignant)

  }   
    render() {
        return (
          
            <div>
              <br/>
                 <div class="card ">
  

  <div class="card-content"> 
            <form onSubmit={this.handleSubmit}>
            <br></br>
            <nav class="panel">
            <center>
          <h1 class="panel-heading is-center"><i class="fas fa-chalkboard-teacher"></i>  &nbsp;Ajouter un nouveau Enseignant </h1> 
          </center>
                    </nav>
                    <br> </br>
            <div class="field">
            <label class="label">No Enseignant</label>
            <div class="control ">
                <input class="input" type="number" onInput={(event) => this.handleChange(event,"noEnseignant")} placeholder="No Enseignant" ></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Nom</label>
            <div class="control ">
             
              <input class="input" type="text" onInput={(event) => this.handleChange(event,"nom")} placeholder="Nom" value=""></input>
             
            </div>
            </div>
            <div class="field">
            <label class="label">Prenom</label>
            <div class="control">
              <input class="input" type="text" onInput={(event) => this.handleChange(event,"prenom")} placeholder="Prenom" value=""></input>
            </div>
            </div>
            <div class="field">  
<label class="label">Sexe</label>

<div class="control">
  <div class="select" onInput={(event) => this.handleChange(event,"sexe")} > 
    <select>
      <option value="M" selected>Masculin</option>
      <option value="F" >Feminin</option>
    </select>
  </div>
</div>
</div>
            <div class="field">
            <label class="label">Email UBO</label>
            <div class="control">
              <input class="input" type="email" onInput={(event) => this.handleChange(event,"emailUbo")} placeholder="Email UBO" value=""></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Email Perso</label>
            <div class="control">
              <input class="input" type="email" onInput={(event) => this.handleChange(event,"emailPerso")} placeholder="Email Personnel" value=""></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Mobile</label>
            <div class="control">
              <input class="input" type="tel" onInput={(event) => this.handleChange(event,"noEnseignant")} placeholder="Mobile" value=""></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Téléphone</label>
            <div class="control">
              <input class="input" type="tel" onInput={(event) => this.handleChange(event,"noEnseignant")} placeholder="Téléphone" value=""></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Pays</label>
            <div class="control">
              <input class="input" type="text" onInput={(event) => this.handleChange(event,"pays")} placeholder="Pays" value=""></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Ville</label>
            <div class="control">
              <input class="input" type="text" onInput={(event) => this.handleChange(event,"ville")} placeholder="Ville" value=""></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Adresse</label>
            <div class="control">
              <input class="input" type="address" onInput={(event) => this.handleChange(event,"adresse")} placeholder="Address" value=""></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Code Postal</label>
            <div class="control">
              <input class="input" type="text" onInput={(event) => this.handleChange(event,"codePostal")} placeholder="Code Postal" value=""></input>
            </div>
            </div>
            <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <input class="input" type="text" onInput={(event) => this.handleChange(event,"type")} placeholder="Type" value=""></input>
            </div>
            </div>
            <div class="field is-grouped is-grouped-centered">
            <p class="control">
          <button class="button is-primary is-large">Ajouter</button>
            </p>
            <p class="control">
            <stencil-route-link url='/enseignant'>
            <button class="button is-black is-large " onClick={()=> location.href="/enseignants/"} >Annuler</button>
            </stencil-route-link>
            </p>
            </div>
            </form>
            <br></br>
          </div></div></div>
        );
    }
}

