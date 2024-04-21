fetch("http://localhost:8080/api/weapons/elegyend").then((data)=>{
    //console.log(data);
    return data.json(); //converted to object
}).then((objectData) =>{
    console.log(objectData[0].name);
    let tableData = "";
    //+= serve per far uscire tutti gli oggetti! 
    objectData.map((values) => {
        tableData = `<tr>
        <td>${values.name}</td>
        <td>${values.type}</td>
        <td>${values.baseATK}</td>
        <td>${values.bonusEffect}</td>
        <td>${values.skill}</td>
        </tr>`;
    });
    document.getElementById("table-char").innerHTML=tableData;
})