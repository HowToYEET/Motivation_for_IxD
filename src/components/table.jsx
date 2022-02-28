import React, { Component } from "react";
import Table from "react-bootstrap/Table";
export default class table extends Component {
  state = {};
  render() {
    return (
      <div className="table">
        <Table striped bordered hover variant="dark" className="t">
          <thead>
            <tr>
              <th colSpan={5}>Fag på Kandidat</th>
            </tr>
            <tr>
              <th></th>
              <th>Software (S)</th>
              <th>Interaktions design (IxD)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Internet</td>
              <td>Designstudie 1</td>
              <td>projekt</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Programmeringsparadigmer</td>
              <td>Designstudiemetoder</td>
              <td>oblitorisk fag</td>
            </tr>
            <tr>
              <td>3</td>
              <td> </td>
              <td>Udvalgte emner inden for HCI</td>
              <td>oblitorisk fag</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Web Intelligence</td>
              <td rowSpan={2}>multimodal perception og kognition</td>
              <td rowSpan={2}>valgfag</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Distribuerede systemer</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Test og verifikation</td>
              <td rowSpan={2}>Agil Software Engineering**</td>
              <td rowSpan={2}>valgfag</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Dataintensive systemer</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Mobilitet</td>
              <td>Designstudie 2</td>
              <td>projekt</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Udvalgte emner inden for programmering</td>
              <td>Udvikling af mobile applikationer</td>
              <td>oblitorisk fag</td>
            </tr>
            <tr>
              <td>10</td>
              <td></td>
              <td>Systemudvikling i praksis</td>
              <td>oblitorisk fag</td>
            </tr>
            <tr>
              <td>11</td>
              <td colSpan={2}>Software innovation</td>
              <td>valgfag</td>
            </tr>
            <tr>
              <td rowSpan={3}>10</td>
              <td>Mobilt HCI</td>
              <td rowSpan={3}>Embodied Interaction</td>
              <td rowSpan={3}>valgfag</td>
            </tr>
            <tr>
              <td>Processering af web information</td>
            </tr>
            <tr>
              <td>Mobile data og lokationsbestemte services</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Forspecialisering i software</td>
              <td>Forspecialisering i interaktionsdesign</td>
              <td>projekt/specialevalg</td>
            </tr>
            <tr>
              <td>13</td>
              <td colSpan={2}>Entreprenørskab</td>
              <td>oblitorisk fag</td>
            </tr>
            <tr>
              <td>14</td>
              <td>IT-ret</td>
              <td></td>
              <td>oblitorisk fag</td>
            </tr>
            <tr>
              <td>15</td>
              <td colSpan={2}>
                Specialiseringskursus i menneske-maskine interaktion*
              </td>
              <td>valgfag</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Specialiseringskursus i maskinintelligens</td>
              <td></td>
              <td>valgfag</td>
            </tr>
            <tr>
              <td>17</td>
              <td>Specialiseringskursus i programmeringsteknologi</td>
              <td></td>
              <td>valgfag</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Specialiseringskursus i semantik og verifikation</td>
              <td></td>
              <td>valgfag</td>
            </tr>
            <tr>
              <td>19</td>
              <td>Specialiseringskursus i distribuerede systemer</td>
              <td></td>
              <td>valgfag</td>
            </tr>
            <tr>
              <td>20</td>
              <td>Specialiseringskursus i databaseteknologi</td>
              <td></td>
              <td>valgfag</td>
            </tr>
            <tr>
              <td>21</td>
              <td colSpan={2}>Specialiseringskursus i systemudvikling</td>
              <td>valgfag</td>
            </tr>
            <tr>
              <td>22</td>
              <td colSpan={2}>Kandidatspeciale</td>
              <td>specialet</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
//colSpan={2}
