import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav
        class="navbar is-light has-shadow is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-item">
            <a href="/">
            <i class="fas fa-university"></i>&nbsp;
              <strong>UBO</strong></a>
            </span>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-content"
              onClick={() => this.toggleBurger()}
              ref={el => (this.burger = el)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />

            </a>
          </div>

          <div
            id="navbar-content"
            class="navbar-menu"
            ref={el => (this.menu = el)}
          >
            <div class="navbar-start">
              <span class="navbar-item has-dropdown is-hoverable">
                <stencil-route-link url="/formations/" activeClass="none">
                  <span class="has-text-primary">
                    <i class="fas fa-book-open"></i>
                  </span>{" "}
                  Formations
                </stencil-route-link>

                <div class="navbar-dropdown">
                  <a class="navbar-item" href="/formations/add">
                    <i class="fas fa-plus"></i>
                    Nouvelle Formation
          </a>
                </div>
              </span>
              <span class="navbar-item has-dropdown is-hoverable">
                <stencil-route-link url="/enseignants/" activeClass="none">
                  <span class="has-text-primary">
                    <i class="fas fa-chalkboard-teacher"></i>
                  </span>{" "}
                  Enseignants
                </stencil-route-link>
                <div class="navbar-dropdown">
                  <a class="navbar-item" href="/enseignants/add">
                    <i class="fas fa-plus"></i>
                    Nouveau Enseignant
          </a>
                </div>

              </span>

              <span class="navbar-item has-dropdown is-hoverable ">
                <stencil-route-link url="/candidats/" activeClass="none">
                  <span class="has-text-primary">
                    <i class="fas fa-user-graduate"></i>
                  </span>{" "}
                  Candidats
                </stencil-route-link>

                <div class="navbar-dropdown">
                  <a class="navbar-item" href="/candidats/add">
                    <i class="fas fa-plus"></i>
                    Nouveau Candidat
          </a>
                </div>

              </span>

              <span class="navbar-item">
                <stencil-route-link url="/promotions/" activeClass="none">
                  <span class="has-text-primary">
                    <i class="fas fa-graduation-cap"></i>
                  </span>{" "}
                  Promotions
                </stencil-route-link>
              </span>



            </div>

          </div>
        </div>
      </nav>
    );
  }
}
