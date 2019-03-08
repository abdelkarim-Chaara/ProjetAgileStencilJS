import { Component ,State, Method} from '@stencil/core';


@Component({
    tag: 'spi-promotion',
    styleUrl: 'spi-promotion.scss'
})
export class SpiPromotion {
    
  
 // Indicate that name should be a public property on the component
 @State()
 data: any[]=[]; 
 apiRootUrl: string = 'https://api-dosispi.cleverapps.io/promotions';

 
 

 @Method()
 load () {
 
   return fetch(`${this.apiRootUrl}`).then(rsp => {
     return   rsp.json();
 
   }).then(data => {
     console.log(data);
     this.data = data ;
     console.log(this.data );

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

     
     <div class="container is-center">

<br/>
<div class="card ">
  

<div class="card-content">

<center><strong class="tag is-black is-dark is-large">La liste des Promotions</strong> &nbsp;

     </center> 
     <br/>
       <table class="table  is-hoverable  is-fullwidth  is-striped  is-narrow is-rounded">
         <thead>
         <tr>
       
           <th>ID</th>
           <th>sigle Promotion</th>
           <th>NombreMaxEtudiant</th>
           <th>Nom Formation</th>
         </tr>
         </thead>
         <tbody>
         {this.data.map(item =>
           <tr>
             <td>{item == null ? "null":item.id.anneeUniversitaire+" "+item.id.codeFormation}</td>
             
             <td>{item == null ? "null":item.siglePromotion}</td>
             <td>{item == null ? "null":item.nbMaxEtudiant }</td>
             <td>{item == null ? "null":item.formation.nomFormation}</td>
          
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


