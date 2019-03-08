import { Component, State, Method, Prop } from '@stencil/core';
import { Formation } from '../../global/formation';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'spi-formation',
  styleUrl: 'spi-formation.scss'
})
export class SpiFormation {

  // Indicate that name should be a public property on the component
  @State() formations: Formation[];
  @Prop() history : RouterHistory;

  apiRootUrl: string = 'http://api-dosispi.cleverapps.io/formations';

  @Method()
  
  componentWillLoad() {
    console.log('Component is being rendered');
    return fetch(`${this.apiRootUrl}`).then(rsp => {
      return rsp.json();

    }).then(data => {
      this.formations = data;
      console.log(this.formations)
    }).catch((err) => {
      console.error('Could not load data', err);
    });
  }

  goBack(){
    this.history.goBack();
 }



  render() {

    return (
      <div class="container">
          <br/>


<center><strong class="tag is-black is-dark is-large">La liste des formations</strong> &nbsp;
      </center> 
      <br/>
      {
        this.formations.map((formation) => {
       
          return (<spi-formation-one data={formation}></spi-formation-one>)
        }
        )

      }
      </div>

    );

    

  }
}