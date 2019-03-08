import { Component ,State, Method} from '@stencil/core';

@Component({
    tag: 'spi-candidat',
   styleUrl: 'spi-candidat.scss'
})
export class SpiCandidat {
    
 
    // Indicate that name should be a public property on the component
    @State() data :any[] ;
  
   
    apiRootUrl: string = 'http://api-dosispi.cleverapps.io/candidats';
   
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
          <div>
         <br/>


<center><strong class="tag is-black is-dark is-large">La liste des Candidats</strong> &nbsp;
      </center> 
      <br/>
   
                { 
   this.data.map((data) =>
   
   <div class="container">
   
   <div class="card ">
  <header class="card-header">
    <p class="card-header-title">
    <b>Nom Prenom  : {data.nom} {data.prenom}</b>


    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>

  
  <div class="card-content">
<table class="table is-bordered is-striped  is-hoverable is-fullwidth ">
 
      
      <tr>
    <td>
      <b>Ville</b> </td><td>{data.ville} </td> 
      </tr> 
      <tr>
    <td>
      <b>Pays d'Origine</b> </td><td>{data.paysOrigine} </td> 
      </tr> 
      
    <tr>
    <td>
      <b>Nationalité</b> </td><td>{data.nationalite} </td> </tr> 
    
    <tr >
      <td>
        <b>Mobile</b> :</td> <td> {data.mobile} </td></tr> 
    
    <tr>
      <td>
        <b>Email</b> :</td> <td>{data.email}</td></tr> 
    </table>
   </div>
   <br/>
  <footer class="card-footer">
    <a  class="button card-footer-item is-info" href={"/candidats/fetch/"+data.noCandidat}>Details</a>
    <a class="button card-footer-item is-success " href={"/candidats/edit/"+data.noCandidat} >Edit</a>
    <a class="button card-footer-item is-danger" href={"/candidats/delete/"+data.noCandidat} >Delete</a>
  </footer>
 
  </div>

  </div>
  ) 
                } 
             
             </div>  
        
                 
                  
                )
   
   
   
      }
      else {
     
     return (" Nothing to render Candidat ");
     
      } 
     
   
      
    }


}