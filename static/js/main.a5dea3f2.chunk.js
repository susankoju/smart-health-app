(this["webpackJsonpsmart-health-app"]=this["webpackJsonpsmart-health-app"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r.n(i),o=r(2),n=r.n(o),s=(r(12),r(3)),l=r(4),c=r(6),u=r(5),h=(r(13),window.FHIR),d=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(s.a)(this,r);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).clientWrite=function(e){e.preventDefault(),h.oauth2.ready().then((function(e){e.create({resourceType:"Patient",id:"5ee05359-57bf-4cee-8e89-91382c07e162",meta:{versionId:"2",lastUpdated:"2019-06-05T02:52:35.946-04:00",tag:[{system:"https://smarthealthit.org/tags",code:"synthea-5-2019"}]},text:{status:"generated",div:'<div xmlns="http://www.w3.org/1999/xhtml">Generated by <a href="https://github.com/synthetichealth/synthea">Synthea</a>.Version identifier: v2.4.0-100-g26a4b936\n .   Person seed: -6787263189570604868  Population seed: 1559319163074</div>'},extension:[{url:"http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",extension:[{url:"ombCategory",valueCoding:{system:"urn:oid:2.16.840.1.113883.6.238",code:"2106-3",display:"White"}},{url:"text",valueString:"White"}]},{url:"http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",extension:[{url:"ombCategory",valueCoding:{system:"urn:oid:2.16.840.1.113883.6.238",code:"2186-5",display:"Not Hispanic or Latino"}},{url:"text",valueString:"Not Hispanic or Latino"}]},{url:"http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",valueString:"Luise Grant"},{url:"http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",valueCode:"M"},{url:"http://hl7.org/fhir/StructureDefinition/patient-birthPlace",valueAddress:{city:"Lee",state:"Massachusetts",country:"US"}},{url:"http://synthetichealth.github.io/synthea/disability-adjusted-life-years",valueDecimal:.3868990459023335},{url:"http://synthetichealth.github.io/synthea/quality-adjusted-life-years",valueDecimal:23.613100954097668}],identifier:[{system:"https://github.com/synthetichealth/synthea",value:"3f228315-d2de-4292-a56a-b7c120c2875d"},{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"MR",display:"Medical Record Number"}],text:"Medical Record Number"},system:"http://hospital.smarthealthit.org",value:"3f228315-d2de-4292-a56a-b7c120c2875d"},{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"SS",display:"Social Security Number"}],text:"Social Security Number"},system:"http://hl7.org/fhir/sid/us-ssn",value:"999-58-3251"},{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"DL",display:"Driver's License"}],text:"Driver's License"},system:"urn:oid:2.16.840.1.113883.4.3.25",value:"S99913820"},{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0203",code:"PPN",display:"Passport Number"}],text:"Passport Number"},system:"http://standardhealthrecord.org/fhir/StructureDefinition/passportNumber",value:"X50228204X"}],name:[{use:"official",family:"Alwas",given:["Tryer"],prefix:["Mr."]}],telecom:[{system:"phone",value:"555-901-9296",use:"home"}],gender:"male",birthDate:"1962-05-17",deceasedDateTime:"1987-04-16T04:54:18-04:00",address:[{extension:[{url:"http://hl7.org/fhir/StructureDefinition/geolocation",extension:[{url:"latitude",valueDecimal:42.307905},{url:"longitude",valueDecimal:-71.436196}]}],line:["440 Russel Common Apt 7"],city:"Framingham",state:"Massachusetts",postalCode:"01701",country:"US"}],maritalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",code:"S",display:"Never Married"}],text:"Never Married"},multipleBirthBoolean:!1,communication:[{language:{coding:[{system:"urn:ietf:bcp:47",code:"en-US",display:"English"}],text:"English"}}]}).then((function(e){console.log(JSON.stringify(e))}),(function(e){console.log(e.stack)})),e.request("Patient").then(console.log).catch(console.error)}))},e}return Object(l.a)(r,[{key:"render",value:function(){return h.oauth2.ready().then((function(e){e.request("Patient").then(console.log).catch(console.error)})).catch(console.error),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"SMART"),a.a.createElement("form",null,a.a.createElement("input",{type:"submit",onClick:this.clientWrite})))}}]),r}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,r){e.exports=r(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a5dea3f2.chunk.js.map