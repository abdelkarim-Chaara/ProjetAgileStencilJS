import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/formations/" component="spi-formation" exact={true}  />
              <stencil-route url="/formations/add" component="spi-formation-add" exact={true}  />
              <stencil-route url="/formations/edit/:id" component="spi-formation-edit" />


              <stencil-route url="/enseignants/" component="spi-enseignant" exact={true} />
              <stencil-route url="/enseignants/add" component="spi-enseignant-add" exact={true} />
              <stencil-route url="/enseignants/fetch/:id" component="spi-enseignant-fetch"  />

              <stencil-route url="/promotions/" component="spi-promotion"  exact={true} />
              
              <stencil-route url="/candidats/" component="spi-candidat" exact={true} />
              <stencil-route url="/candidats/add" component="spi-candidat-add" exact={true} />
              <stencil-route url="/candidats/fetch/:id" component="spi-candidat-fetch"  />
              <stencil-route url="/candidats/edit/:id" component="spi-candidat-edit"  />



            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
