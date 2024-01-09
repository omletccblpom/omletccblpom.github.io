const API_KEY = "7b693a08-10b5-41e0-b5bc-ad8203f49f31"; 
const URL = "https://edu.std-900.ist.mospolytech.ru/api/routes"; 

function displayRoutesTable(data) { 
const tableBody = document.querySelector("#routetable"); 

tableBody.innerHTML = ""; 

for (let i = 0; i < data.length; i++) { 
   let row =`
            <tr class="table-row"> 
               <td class="table-element">${data[i].name}</td> 
               <td class="table-element">${data[i].description}</td> 
               <td class="table-element">${data[i].mainObject}</td> 
            </tr>`; 
   tableBody.insertAdjacentHTML("beforeend", row); 
   } 
}

//Получение данных о маршрутах 
function getRouteData() { 
   fetch(`${URL}?api_key=${API_KEY}`, { 
     method: "GET", 
}) 
    .then((response) => { 
       if (!response.ok) { 
          throw new Error(`Ошибка ${response.status}`); 
       } 
       return response.json(); 
     }) 
     .then((data) => { 
       console.log(data); 
       displayRoutesTable(data, row); 
     }); 
} 


getRouteData();