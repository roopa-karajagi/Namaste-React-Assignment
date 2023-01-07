
        // Plain JS code
        const p_2 = document.createElement('p');
         p_2.innerHTML = "Love REACT by Coding";
         p_2.setAttribute("id", "p_2")
        let container = document.getElementById('container');
        container.appendChild(p_2);

        //React Code -- by Create Element
        console.log("To check browser understands react" , React);
        const first_element = React.createElement("h1" ,{key:'1'} ,"Hello People!!!");
        const sec_element = React.createElement("h2" , {key:'2'} ,"Hope you are doing great")
        const container1 = React.createElement('div' , {id: 'container'} , [first_element,sec_element]);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(container1);