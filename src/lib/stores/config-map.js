import { writable } from 'svelte/store';
export const mapConfig = writable({
  "title": "Which EU countries lead the patent race?",
  "subtitle": "In 2024, as many as 69.852 patent applications were filed with the European Patent Office.",
  "colourSchemeClasses": 7,
  "data": "country,id,value,extraInfo\nBelgium,BE,22.10\nBulgaria,BG,0.82\nCzechia,CZ,23.12\nDenmark,DK,42.58\nGermany,DE,29.99\nEstonia,EE,5.38\nIreland,IE,20.88\nGreece,EL,1.03\nSpain,ES,4.51\nFrance,FR,15.99\nCroatia,HR,1.06\nItaly,IT,8.23\nCyprus,CY,6.41\nLatvia,LV,1.92\nLithuania,LT,2.53\nLuxembourg,LU,45.68\nHungary,HU,1.45\nMalta,MT,11.00\nNetherlands,NL,39.32\nAustria,AT,23.43\nPoland,PL,1.89\nPortugal,PT,3.26\nRomania,RO,0.33\nSlovenia,SI,7.34\nSlovakia,SK,1.14\nFinland,FI,42.82\nSweden,SE,46.79",
  "parsedData": [
    {
      "country": "Belgium",
      "id": "BE",
      "value": 22.1,
      "extraInfo": false
    },
    {
      "country": "Bulgaria",
      "id": "BG",
      "value": 0.82,
      "extraInfo": false
    },
    {
      "country": "Czechia",
      "id": "CZ",
      "value": 23.12,
      "extraInfo": false
    },
    {
      "country": "Denmark",
      "id": "DK",
      "value": 42.58,
      "extraInfo": false
    },
    {
      "country": "Germany",
      "id": "DE",
      "value": 29.99,
      "extraInfo": false
    },
    {
      "country": "Estonia",
      "id": "EE",
      "value": 5.38,
      "extraInfo": false
    },
    {
      "country": "Ireland",
      "id": "IE",
      "value": 20.88,
      "extraInfo": false
    },
    {
      "country": "Greece",
      "id": "EL",
      "value": 1.03,
      "extraInfo": false
    },
    {
      "country": "Spain",
      "id": "ES",
      "value": 4.51,
      "extraInfo": false
    },
    {
      "country": "France",
      "id": "FR",
      "value": 15.99,
      "extraInfo": false
    },
    {
      "country": "Croatia",
      "id": "HR",
      "value": 1.06,
      "extraInfo": false
    },
    {
      "country": "Italy",
      "id": "IT",
      "value": 8.23,
      "extraInfo": false
    },
    {
      "country": "Cyprus",
      "id": "CY",
      "value": 6.41,
      "extraInfo": false
    },
    {
      "country": "Latvia",
      "id": "LV",
      "value": 1.92,
      "extraInfo": false
    },
    {
      "country": "Lithuania",
      "id": "LT",
      "value": 2.53,
      "extraInfo": false
    },
    {
      "country": "Luxembourg",
      "id": "LU",
      "value": 45.68,
      "extraInfo": false
    },
    {
      "country": "Hungary",
      "id": "HU",
      "value": 1.45,
      "extraInfo": false
    },
    {
      "country": "Malta",
      "id": "MT",
      "value": 11,
      "extraInfo": false
    },
    {
      "country": "Netherlands",
      "id": "NL",
      "value": 39.32,
      "extraInfo": false
    },
    {
      "country": "Austria",
      "id": "AT",
      "value": 23.43,
      "extraInfo": false
    },
    {
      "country": "Poland",
      "id": "PL",
      "value": 1.89,
      "extraInfo": false
    },
    {
      "country": "Portugal",
      "id": "PT",
      "value": 3.26,
      "extraInfo": false
    },
    {
      "country": "Romania",
      "id": "RO",
      "value": 0.33,
      "extraInfo": false
    },
    {
      "country": "Slovenia",
      "id": "SI",
      "value": 7.34,
      "extraInfo": false
    },
    {
      "country": "Slovakia",
      "id": "SK",
      "value": 1.14,
      "extraInfo": false
    },
    {
      "country": "Finland",
      "id": "FI",
      "value": 42.82,
      "extraInfo": false
    },
    {
      "country": "Sweden",
      "id": "SE",
      "value": 46.79,
      "extraInfo": false
    }
  ],
  "datasetType": "values",
  "datasetUnit": "fullNumbers",
  "percentRounded": false,
  "colourSchemeType": "sequential",
  "colourScheme": "red",
  "colourSchemeReverse": false,
  "headlineAvailable": true,
  "subheadlineAvailable": true,
  "tooltipAvailable": true,
  "scaleBarAvailable": true,
  "overrideScaleValues": true,
  "legendAvailable": true,
  "textSourceAvailable": true,
  "textSourceDescription": "Source",
  "textSource": "Eurostat (2026)",
  "textNoteAvailable": true,
  "textNoteDescription": "Note",
  "textNote": "This indicator measures requests for the protection of an invention filed with the European Patent Office (EPO) regardless of whether they are granted or not. Applications are allocated according to the country of residence of the first applicant listed on the application form (first-named applicant principle) as well as according to the country of residence of the inventor.",
  "textDataAccessAvailable": true,
  "linkDataAccessDescription": "Access the data",
  "linkDataAccess": "https://ec.europa.eu/eurostat/databrowser/view/sdg_09_40/default/table?lang=en",
  "legend1": "No data available",
  "legend1Color": "#E0E0E0",
  "colorBarFirstValue": "0",
  "colorBarLastValue": "50",
  "customUnitLabelAvailable": true,
  "customUnitLabel": "per 100.000 residents",
  "tooltipExtraInfoLabel": "Click here",
  "translate": {
    "title": "Which EU countries lead the patent race?",
    "subtitle": "In 2024, as many as 69.852 patent applications were filed with the European Patent Office.",
    "textNoteDescription": "Note",
    "textNote": "This indicator measures requests for the protection of an invention filed with the European Patent Office (EPO) regardless of whether they are granted or not. Applications are allocated according to the country of residence of the first applicant listed on the application form (first-named applicant principle) as well as according to the country of residence of the inventor.",
    "textSourceDescription": "Source",
    "textSource": "Eurostat (2026)",
    "linkDataAccessDescription": "Access the data",
    "legend1": "No data available",
    "tooltipExtraInfoLabel": "Click here"
  },
  "clusters": [],
  "colorScale": null
});