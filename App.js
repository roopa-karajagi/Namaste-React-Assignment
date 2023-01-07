import React, { startTransition } from "react";
import ReactDOM from "react-dom/client";

        //React Code -- by Create Element
        console.log("To check browser understands react" , React);
        const first_element = React.createElement("h1" ,{key:'1'} ,"Hello People!!!");
        const sec_element = React.createElement("h2" , {key:'2'} ,"Hope you are doing great")
        const container1 = React.createElement('div' , {id: 'container'} , [first_element,sec_element]);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(container1);


        //npx parcel index.html -- execute parcel with entry point of application 
        //npx parcel build index.html --> production build app 
        // npx --> npm run 
        // npm run start --> npm start
        // npm run build --> npm run build