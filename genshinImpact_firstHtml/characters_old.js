function myFunction(){
    var name = document.getElementById("nameChar").value;
    var level = document.getElementById("levelChar").value;
    if(name == "Fischl" && level == "0/20"){
        document.getElementById("elName").innerHTML = name;
        document.getElementById("weaponType").innerHTML = "Bow";
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
        document.getElementById("elImg").style.display='inline';
        //weapon
        document.getElementById("nameWeapon").innerHTML = "Hunter's Bow";
        document.getElementById("atkWeapon0").innerHTML = 23;
        document.getElementById("atkWeapon02").innerHTML = 56;
        document.getElementById("atkWeapon1").innerHTML = 68;
        document.getElementById("atkWeapon12").innerHTML = 102;
        document.getElementById("atkWeapon2").innerHTML = 113;
        document.getElementById("atkWeapon22").innerHTML = 130;
        document.getElementById("atkWeapon3").innerHTML = 141;
        document.getElementById("atkWeapon32").innerHTML = 158;
        document.getElementById("atkWeapon4").innerHTML = 169;
        document.getElementById("atkWeapon42").innerHTML = 185;
        //constellation
        document.getElementById("nameC1").innerHTML = "Gaze of the Deep";
        document.getElementById("nameC2").innerHTML = "Devourer of All Sins";
        document.getElementById("nameC3").innerHTML = "Wings of Nightmare";
        document.getElementById("nameC4").innerHTML = "Her Pilgrimage of Bleak";
        document.getElementById("nameC5").innerHTML = "Against the Fleeing Light";
        document.getElementById("nameC6").innerHTML = "Evernight Raven";
        //talents
        document.getElementById("normAtk").innerHTML = "Bolts of Downfall";
        document.getElementById("hit1").innerHTML = 44.12;
        document.getElementById("hit2").innerHTML = 46.78;
        document.getElementById("hit3").innerHTML = 58.14;
        document.getElementById("hit4").innerHTML = 57.71;
        document.getElementById("hit5").innerHTML = 72.07;
        document.getElementById("plungeDMG").innerHTML = 56.83;
        document.getElementById("lPlungeDMG").innerHTML = 113.63;
        document.getElementById("hPlungeDMG").innerHTML = 141.93;
        document.getElementById("aimedShot").innerHTML = 43.86;
        document.getElementById("fullyCharged").innerHTML = 124;

    }
}


/*console.log(fischl.name);
document.body.appendChild(fischl.img);*/
/*img: url("img/fischl.webp");*/