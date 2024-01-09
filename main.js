//fetch('http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=7b693a08-10b5-41e0-b5bc-ad8203f49f31')
fetch('https://edu.std-900.ist.mospolytech.ru/api/routes?api_key=7b693a08-10b5-41e0-b5bc-ad8203f49f31')
.then(function(response){
   return response.json();
})

.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let route of products){
      out += `
         <tr>
            <td>${route.id}</td>
            <td>${route.name}</td>
            <td>${route.description}</td>
            <td>${route.mainObject}</td>
            <td>${route.coords}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});