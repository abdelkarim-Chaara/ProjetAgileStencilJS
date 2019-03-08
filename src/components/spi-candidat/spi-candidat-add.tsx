import { Component, Method, State } from '@stencil/core';


@Component({
    tag: 'spi-candidat-add',
    styleUrl: 'spi-candidat.scss'
})
export class SpiCandidatAdd {


    apiRootUrl: string = 'https://api-dosispi.cleverapps.io/promotions';

    @State() candidat: any = null;

    @State() promotions: any[] = [];
    @State() idPromotion: any = {};


    @State() id: String;
    @State() nom: String;
    @State() prenom: String;
    @State() sexe: String;
    @State() ville: String;
    @State() email: String;
    @State()adresse: String;;
    @State() nationalite: String;;
    @State()universiteOrigine: String;;
    @State()paysOrigine: String;;
    @State()lieuNaissance: String;;
    @State()dateNaissance: String;;
    @State() mobile: String;;
    @State() codePostal: String;;
    @State() codeFormation: String;;
    @State() anneeUniversitaire: String;;

    @Method()


    close() {
        location.href = "/candidats/"
    }

    loadPromo() {


        fetch(`${this.apiRootUrl}`).then(rsp => {
            return rsp.json();

        }).then(data => {
            console.log(data);
            this.promotions = data;

        }).catch((err) => {
            console.error('Could not load data', err);
        });



    }




    handleSubmit(event) {
        event.preventDefault();

        this.codeFormation = this.idPromotion.codeFormation,
        this.anneeUniversitaire = this.idPromotion.anneeUniversitaire;
        this.nom = this.candidat.nom;
        this.prenom = this.candidat.prenom;
        this.email = this.candidat.email;
        this.adresse = this.candidat.adresse;
        this.nationalite = this.candidat.nationalite;
        this.sexe = this.candidat.sexe;
        this.universiteOrigine = this.candidat.universiteOrigine;
        this.paysOrigine = this.candidat.paysOrigine;
        this.lieuNaissance = this.candidat.lieuNaissance;
        this.dateNaissance = this.candidat.dateNaissance;
        this.mobile = this.candidat.mobile;
        this.ville = this.candidat.ville;
        this.codePostal = this.candidat.codePostal;

        const data = {

          codeFormation : this.codeFormation,
          anneeUniversitaire:this.anneeUniversitaire,
          nom :  this.nom,
          prenom:this.prenom,
          email:this.email,
          addresse:this.adresse,
          nationalite:this.nationalite,
          sexe:this.sexe,
          universiteOrigine:this.universiteOrigine,
          paysOrigine:this.paysOrigine,
          lieuNaissance:this.lieuNaissance,
          dateNaissance:this.dateNaissance,
          mobile:this.mobile,
          ville:this.ville,
          codePostal:this.codePostal

        }
          

      
       



        return fetch('http://api-dosispi.cleverapps.io/candidats/', {
            method: 'POST',
            body: JSON.stringify(
                data
            ),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            alert("Operation Succeded "); location.href = "/candidats/"
        }
        ).catch((err) => {
            console.error('Could not load data', err)
        });


    }



    componentWillLoad() {

        this.candidat = {}
        this.loadPromo();


    }

    render() {


        return (
            <div >

                {


                    <div class="container">
                        <br></br>
                        <div class="card ">

                            <div class="card-content">


                                <form onSubmit={(e) => this.handleSubmit(e)}>


                                    <div class="field">
                                        <label class="label">Nom</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Nom" onInput={(e: any) => { this.candidat.nom = e.target.value; }} />
                                        </div>
                                    </div>


                                    <div class="field">
                                        <label class="label">Prenom</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Prenom" onInput={(e: any) => (this.candidat.prenom = e.target.value)} />
                                        </div>
                                    </div>


                                    <div class="field">
                                        <label class="label">Sexe</label>

                                        <div class="control">
                                            <div class="select" onInput={(e: any) => (this.candidat.sexe = e.target.value)}  >
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
                                            <div class="select" onInput={(e: any) => { this.idPromotion = JSON.parse(e.target.value); }} >
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
                                            <input class="input" type="text" placeholder="universiteOrigine" onInput={(e: any) => (this.candidat.universiteOrigine = e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Pays d'Origine</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="paysOrigine" onInput={(e: any) => (this.candidat.paysOrigine = e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">lieu de Naissance</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="lieu de Naissance" onInput={(e: any) => (this.candidat.lieuNaissance = e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Date Naissance</label>
                                        <div class="control">
                                            <input class="input" type="date" placeholder="Date Naissance" onInput={(e: any) => (this.candidat.dateNaissance = e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Nationalité</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Nationalité" onInput={(e: any) => (this.candidat.nationalite = e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Mobile</label>
                                        <div class="control">
                                            <input class="input" type="tel" placeholder="Mobile" onInput={(e: any) => (this.candidat.mobile = e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Email</label>
                                        <div class="control">
                                            <input class="input" type="email" placeholder="email" onInput={(e: any) => (this.candidat.email = e.target.value)} />
                                        </div>
                                    </div>


                                    <div class="field">
                                        <label class="label">Address</label>
                                        <div class="control">
                                            <input class="input" type="address" placeholder="Address" onInput={(e: any) => (this.candidat.adresse = e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Ville</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Ville" onInput={(e: any) => (this.candidat.ville = e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Code Postale</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Code Postale" onInput={(e: any) => (this.candidat.codePostal = e.target.value)} />
                                        </div>
                                    </div>

                                    <footer class="card-footer">
                                        <button class="button card-footer-item is-success " type="submit"> Sauvegarder</button>
                                        <a class="button card-footer-item is-danger" onClick={() => this.close()} >Annuler</a>
                                    </footer>
                                    <br />
                                </form>

                            </div>


                        </div>
                    </div>

                }






            </div>

        );
    }


}