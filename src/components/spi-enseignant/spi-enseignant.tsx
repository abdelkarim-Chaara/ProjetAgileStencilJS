import { Component ,State, Method} from '@stencil/core';


@Component({
    tag: 'spi-enseignant',
   styleUrl: 'spi-enseignant.scss'
})
export class SpiEnseignant {
    

 // Indicate that name should be a public property on the component
 @State()
 data: any;

 apiRootUrl: string = 'http://api-dosispi.cleverapps.io/enseignants';

 @Method()
 load () {
 
   return fetch(`${this.apiRootUrl}`).then(rsp => {
     return   rsp.json();
 
   }).then(data => {
     this.data = data;
 
   }).catch((err) => {
     console.error('Could not load data', err);
   }); 
 }


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



 componentWillLoad() { 
   console.log('Component is being rendered');

   this.load();
 }
 componentDidLoad() {
   this.load();

   console.log('Component has been rendered');
 }



 render() {
   if(this.data && this.data.length>0) {

     return (

      
      <div class="container is-center">

<br/>
<div class="card ">
  

<div class="card-content">

<center><strong class="tag is-black is-dark is-large">La liste des enseignants</strong> &nbsp;

      </center>
      <br/>
        <table class="table  is-hoverable  is-fullwidth  is-striped">
          <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email UBO</th>
            <th> Action </th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {this.data.map(item =>
            <tr>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td>{item.emailUbo}</td>
              <stencil-route-link url={"/enseignants/fetch/"+ item.noEnseignant}>
                <td><a class="button is-info " >Details</a></td>
              </stencil-route-link>
              <td><a class="button is-danger" onClick={() => this.deleteEnseignant(item)}>Supprimer</a> </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

      </div></div>
              
               
             )



   }
   else {
  
  return (" Nothing to render ");
  
   } 
  

   
 }


}