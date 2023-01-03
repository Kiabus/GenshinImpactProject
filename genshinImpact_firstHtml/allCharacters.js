fetch("http://localhost:8080/genshin/characters").then((data)=>{
    //console.log(data);
    return data.json(); //converted to object
}).then((objectData) =>{
    console.log(objectData[0].name);
    let tableData = "";
    //+= serve per far uscire tutti gli oggetti! (per ora esce solo Fischl perché c'é solo lei sul db)
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values.name}</td>
        <td>${values.baseHP}</td>
        <td>${values.baseATK}</td>
        <td>${values.baseDEF}</td>
        <td>${values.eleMaster}</td>
        <td>${values.maxStamina}</td>
        </tr>`;
    });
    document.getElementById("table-char").innerHTML=tableData;
})

