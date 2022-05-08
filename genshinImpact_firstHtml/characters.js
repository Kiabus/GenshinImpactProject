function myFunction(){
    var name = document.getElementById("nameChar").value;
    var level = document.getElementById("levelChar").value;
    if(name == "Fischl" && level == "0/20"){
        document.getElementById("elName").innerHTML = name;
        document.getElementById("elHP").innerHTML = 770;
        document.getElementById("elAtk").innerHTML = 20;
        document.getElementById("elDef").innerHTML = 50;
        document.getElementById("elMaster").innerHTML = 0;
        document.getElementById("elStamina").innerHTML = 224;
        document.getElementById("elCritRate").innerHTML = 5.0;
        document.getElementById("elCritDmg").innerHTML = 50.0;
        document.getElementById("elHealBonus").innerHTML = 0.0;
        document.getElementById("elInHeal").innerHTML = 0.0;
        document.getElementById("elEnerRech").innerHTML = 100.0;
        document.getElementById("elCDRed").innerHTML = 0.0;
        document.getElementById("elShieldStrenght").innerHTML = 0.0;
        document.getElementById("elPyroDMG").innerHTML = 0.0;
        document.getElementById("elPyroRes").innerHTML = 0.0;
        document.getElementById("elHydroDMG").innerHTML = 0.0;
        document.getElementById("elHydroRes").innerHTML = 0.0;
        document.getElementById("elDendroDMG").innerHTML = 0.0;
        document.getElementById("elDendroRes").innerHTML = 0.0;
        document.getElementById("elCryoDMG").innerHTML = 0.0;
        document.getElementById("elCryoRes").innerHTML = 0.0;
        document.getElementById("elElectroDMG").innerHTML = 0.0;
        document.getElementById("elElectroRes").innerHTML = 0.0;
        document.getElementById("elAnemoDMG").innerHTML = 0.0;
        document.getElementById("elAnemoRes").innerHTML = 0.0;
        document.getElementById("elGeoDMG").innerHTML = 0.0;
        document.getElementById("elGeoRes").innerHTML = 0.0;
        document.getElementById("elPhysicalDMG").innerHTML = 0.0;
        document.getElementById("elPhysicalRes").innerHTML = 0.0;
        document.getElementById("elImg").style.display='inline-block';
    }
}


/*console.log(fischl.name);
document.body.appendChild(fischl.img);*/
/*img: url("img/fischl.webp");*/