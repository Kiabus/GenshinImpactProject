fetch("http://localhost:port/genshin/characters/KujouSara").then((data)=>{
    //console.log(data);
    return data.json(); //converted to object
}).then((objectData) =>{
    console.log(objectData[0].name);
    let tableData = "";
    //+= serve per far uscire tutti gli oggetti! 
    objectData.map((values) => {
        tableData = `<tr>
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
