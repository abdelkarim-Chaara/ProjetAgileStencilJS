import { Component, Prop } from '@stencil/core';
import { Formation } from '../../global/formation';

@Component({
  tag: 'spi-formation-one',
  styleUrl: 'spi-formation.scss'
})
export class SpiFormationOne {

  // Indicate that name should be a public property on the component


  @Prop() data: Formation;




  deleteFormation(item) {
    return fetch("https://api-dosispi.cleverapps.io/formations", {
      method: 'DELETE',
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item),
    }).then((response) => {
      alert(' Delete Formation Succeed !');
      location.href='/formations/';
      return response;
    }



    ).catch((error) => {
      alert(' Erreur de suppression ');
      console.error(error);
    })
  }

  render() {


    return (
      <div>



        <div class="columns">
          <div class="column is-one-fourth"></div>

          <div class="column is-three-fifths">

            <nav class="panel">

              <p class="panel-heading  ">
                <strong> <center> {this.data.nomFormation} </center> </strong>
              </p>
              <a class="panel-block is-active">
                <span class="panel-icon">
                  <i class="fas fa-key" aria-hidden="true"></i>
                </span>
                <strong>Code de Formation : </strong>  &nbsp;{this.data.codeFormation}
              </a>
              <a class="panel-block">
                <span class="panel-icon">
                  <i class="fas fa-table" aria-hidden="true"></i>
                </span>
                <strong> Debut Accreditation : </strong> &nbsp; {this.data.debutAccreditation}
              </a>
              <a class="panel-block">
                <span class="panel-icon">
                  <i class="fas fa-table" aria-hidden="true"></i>
                </span>
                <strong>Fin Accreditation</strong> &nbsp; {this.data.finAccreditation}
              </a>
              <a class="panel-block">
                <span class="panel-icon">
                  <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                <strong>Numero Annee:</strong>  &nbsp; {this.data.n0Annee}
              </a>

              <a class="panel-block">
                <span class="panel-icon">
                  <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                <strong>Diplome : </strong> &nbsp; {this.data.diplome}
              </a>
              <a class="panel-block">

                <span class="panel-icon">
                  <i class="fas fa-tools" aria-hidden="true"></i>
                </span>

             
                <stencil-route-link url={"/formations/edit/" + this.data.codeFormation} >
                <button class="button is-success is-active ">
                  <span class="text is-dark">Modifier&nbsp;</span>
                  <span><i class="fas fa-edit"></i></span>
                  </button>
                </stencil-route-link>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <stencil-route-link  onClick={() => this.deleteFormation(this.data)} >
            <button class="button is-danger is-active ">
                  <span >Supprimer&nbsp;</span>
                  <span>
                    <i class="fas fa-trash-alt"></i>
                  </span>
                  </button>
                </stencil-route-link>
                &nbsp;
      </a>

            </nav>
          </div>
          <div class="column is-one-fourth"></div>

        </div>

      </div>
    )





  }
}





