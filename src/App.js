import React from 'react';
import './App.css';

const FHIR =window.FHIR;

class App extends React.Component {



  clientWrite = (e) => {
    e.preventDefault();
    FHIR.oauth2.ready().then((client) => {
      client.patient.read().then(
        res => {
          console.log(JSON.stringify(res));
        },
        err => {
          console.log(err.stack);
        }
      )
      console.log(client);

      client.request("/Patient", { pageLimit: 2 }).then(
        res => {
          console.log(JSON.stringify(res));
        },
        err => {
          console.log(err.stack);
        }
      )
    })
  }

  render(){
    // FHIR.oauth2.ready().then(function(client) {
                    
    //   // Render the current patient (or any error)
    //   client.patient.read().then(
    //       function(pt) {
    //           console.log(JSON.stringify(pt, null, 4));
    //       },
    //       function(error) {
    //           console.log(error.stack);
    //       }
    //   );
      
    //   // Get MedicationRequests for the selected patient
    //   client.request("/MedicationRequest?patient=" + client.patient.id, {
    //       resolveReferences: [ "medicationReference" ],
    //       graph: true
    //   })
      
    //   // Reject if no MedicationRequests are found
    //   .then(function(data) {
    //       if (!data.entry || !data.entry.length) {
    //           throw new Error("No medications found for the selected patient");
    //       }
    //       return data.entry;
    //   })
      

    //   // Render the current patient's medications (or any error)
    //   .then(
    //       function(meds) {
    //           console.log(JSON.stringify(meds, null, 4));
    //       },
    //       function(error) {
    //           console.log(error.stack);
    //       }
    //   );

    // }).catch(console.error);

    return (
      <div className="App">
        <header className="App-header">
          SMART
        </header>
        <form>
          <input type="submit" onClick={this.clientWrite}></input>
        </form>
      </div>
    );
  }

}

export default App;
