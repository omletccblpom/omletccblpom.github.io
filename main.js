//Данные маршрутов
function getRouteData() { 
   fetch(`https://edu.std-900.ist.mospolytech.ru/api/routes?api_key=7b693a08-10b5-41e0-b5bc-ad8203f49f31`, { 
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
       displayRouteTable(data);
     }); 
} 

function displayRouteTable(data) { 
   const tableBody = document.querySelector(".routetable");
   tableBody.innerHTML = ""; 
   for (let i = 0; i < data.length; i++) { 
   let row =`
            <tr> 
               <td class="p-3 border border-black">${data[i].name}</td> 
               <td class="p-3 border border-black">${data[i].description}</td> 
               <td class="p-3 border border-black">${data[i].mainObject}</td> 
            </tr>`; 
   tableBody.insertAdjacentHTML("beforeend", row); 
   } 
}

getRouteData();