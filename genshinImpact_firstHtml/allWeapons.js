fetch("http://localhost:port/genshin/weapons").then((data)=>{
    //console.log(data);
    return data.json(); //converted to object
}).then((objectData) =>{
    console.log(objectData[0].name);
    let tableData = "";
    //+= serve per far uscire tutti gli oggetti! 
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values.name}</td>
        <td>${values.type}</td>
        </tr>`;
    });
    document.getElementById("table-weap").innerHTML=tableData;
})
