fetch("http://localhost:8080/api/characters/Fischl").then((data)=>{
    //console.log(data);
    return data.json(); //converted to object
}).then((objectData) =>{
    console.log(objectData[0].name);
    let tableData = "";
    //+= serve per far uscire tutti gli oggetti! (per ora esce solo Fischl perché c'é solo lei sul db)
    objectData.map((values) => {
        tableData = `<tr>
        <td>${values.critRate}</td>
        <td>${values.critDmg}</td>
        <td>${values.healingBonus}</td>
        <td>${values.incomingHealing}</td>
        <td>${values.energyRecharge}</td>
        <td>${values.cdReduction}</td>
        <td>${values.shieldStrenght}</td>
        </tr>`;
    });
    document.getElementById("table-adv").innerHTML=tableData;

})