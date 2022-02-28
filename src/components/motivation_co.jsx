import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Table from "./table";

export default class Motivation extends Component {
  state = {
    q2: "Hvordan jeg har fået kendskab til studiet:",
    q1: "Hvorfor jeg ønsker at læse interaktionsdesign:",
  };
  render() {
    return (
      <div>
        <Carousel className="motivation">
          <Carousel.Item className="info">
            <h1>{this.state.q1}</h1>
            <p>
              Mit ønske er at blive IT-konsulent, hvor jeg mener at kontakten
              med mennesker er vigtig for at få det bedste produkt. På software
              uddannelse har jeg lært meget om at lave IT-løsninger og den har
              givet mig en god forståelse for programmeringssprog, opbyggelse af
              programmer, analyse og design af kode og generel backend
              forståelse, men interessen for frontend er ikke rigtig blevet
              mødt. Nu ønsker jeg at lære om at rette det mod mennesker, så
              andre kan få gavn af løsningerne.
            </p>
            <p>
              Jeg ønsker gode kompetencer mellem det teknologiske og mennesker
              da jeg mener at performance af teknologiske løsninger er lige så
              vigtig som selve løsningen. Jeg har mere passion for UI/UX og at
              lave et godt design til brugeren end blot at lave produktet.
            </p>
            <p>
              Jeg ser mange ligheder mellem interaktionsdesign og software i
              form af kurser der bliver udbudt på kandidaterne. De ting der dog
              ikke går igen er lige præcis de kurser med det fokus som jeg gerne
              vil have, aka HCI, praksis udførelse af systemudvikling,
              designmetoder. Så skiftet til interaktionsdesign har været et nemt
              valg for mig.
            </p>
          </Carousel.Item>
          <Carousel.Item className="info">
            <h1>{this.state.q2}</h1>
            <p>
              Jeg har en kammerat der er i gang med interaktionsdesign
              bacheloren. Efter at have snakket med ham om begge vores studier
              og hvad jeg gerne vil bruge min uddannelse til, har han anbefalet
              at jeg undersøgte interaktionsdesign.
            </p>
          </Carousel.Item>
          <Carousel.Item className="info">
            <h1>Tabel oversigt over hvilke fag på de to studier</h1>
            <p>
              Jeg har nøje læst de tilgængelige kurser for at få en fornemmelse over om IxD er
              noget for mig og siden de samme kursuser, der går igen, er mine
              primære valg så har jeg besluttet mig for at skifte.
            </p>
            <Table />
            <p>
              * Jeg vælger Specialiseringskursus i menneske-maskine interaktion
            </p>
            <p>
              ** Jeg har allerede haft dette kursus, så jeg vælger det andet
              valgfagskursus istedet
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
