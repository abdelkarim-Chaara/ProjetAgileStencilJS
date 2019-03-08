import { Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
    tag: 'spi-formation-edit',
    styleUrl: 'spi-formation.scss'
})




export class SpiFormationEdit {

    @Prop() match: MatchResults;

    @State() formation: any;
    @State() id: String;

    postFormation(f) {
        f.preventDefault();

        console.log(JSON.stringify(
            this.formation
        ))

        return fetch('http://api-dosispi.cleverapps.io/formations', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                this.formation
            ),
        }).then((response) => response.json())
            .then((responseJson) => {
                alert(' Formation Edited with succeed !');
                location.href = '/formations/';

                return responseJson;
            })
            .catch((error) => {
                alert(' Error ! please retry !! ');
                console.error(error);
            });

    }




    componentWillLoad() {

        this.formation = {}

        this.id = this.match.params.id;

        if (this.id) {
            console.log("ID:" + this.id)

            console.log("obj:" + this.formation)

            return fetch('http://api-dosispi.cleverapps.io/formations/' + this.id).then(rsp => {
                return rsp.json();

            }).then(data => {
                this.formation = data;

            }).catch((err) => {
                console.error('Could not load data', err);
            });

        }

    }


    render() {
        return (


            <form><br />
                <center>
                    <h1 class="panel-heading is-center"><i class="fas fa-book-open"></i>  &nbsp;Ajouter une nouvelle formation </h1> </center>
                <div class="columns is-multiline is-mobile ">
                    <div class="column is-half control has-icons-left has-icons-right">
                        <label>Code Formation</label>
                        <input type="text" placeholder="code Formation" class="input is-info  is-medium" readonly value={this.formation.codeFormation} onInput={(e: any) => (this.formation.codeFormation = e.target.value)} />
                    </div>
                    <div class="column is-half">
                        <label>Debut Accreditation</label>
                        <input type="date" placeholder="Debut Accreditation" class="input is-info  is-medium" value={this.formation.debutAccreditation} onInput={(e: any) => (this.formation.debutAccreditation = e.target.value)} />
                    </div>

                    <div class="column is-half">
                        <label>Fin d'Accreditation</label>
                        <input type="date" placeholder="Fin Accreditation" class="input is-info  is-medium" value={this.formation.finAccreditation} onInput={(e: any) => (this.formation.finAccreditation = e.target.value)} />
                    </div>
                    <div class="column is-half">
                        <label>Nombre d'Années</label>

                        <input type="number" placeholder="Nombre d'Années" class="input is-info is-medium" value={this.formation.n0Annee} onInput={(e: any) => (this.formation.n0Annee = e.target.value)} />
                    </div>

                    <div class="column is-half">
                        <label>Nom Formation</label>
                        <input type="text" placeholder="Nom Formation" class="input is-info  is-medium" value={this.formation.nomFormation} onInput={(e: any) => (this.formation.nomFormation = e.target.value)} />
                    </div>
                    <div class="column is-half">
                        <div><label>Diplome</label></div>
                        <div class="select is-info is-medium">
                            <select onInput={(e: any) => (this.formation.diplome = e.target.value)}>
                                <option value="M" selected>Master</option>
                                <option value="L">Licence</option>
                                <option value="D">DEUG</option>
                            </select>
                        </div>


                    </div>

                    <div class="column is-half">
                        <div> <label>Double Diplomation</label></div>


                        <div class="select is-info is-medium">

                            <select onInput={(e: any) => (this.formation.doubleDiplome = e.target.value)}>
                                <option value="O">Oui</option>
                                <option value="n" selected>Non</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div class="field is-grouped is-grouped-centered ">
                    <p class="control">

                        <button onClick={this.postFormation.bind(this)} class="button is-large is-success" >
                            <span class="icon is-small">
                                <i class="fas fa-check"></i>
                            </span>
                            <span>Submit</span></button>
                    </p>
                    <p class="control">
                        <button type="reset" value="reset" class="button is-large is-danger" >
                            <span>Reset</span>
                            <span class="icon is-small">
                                <i class="fas fa-times"></i>
                            </span>
                        </button>

                    </p>
                </div>

            </form>


        );
    }
}