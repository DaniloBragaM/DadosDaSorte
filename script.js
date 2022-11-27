 /*Nome copiado do html anterior*/
 var paragrafo = document.querySelector("#name");
 paragrafo.textContent =  localStorage.getItem('valueText');
 var bank = document.querySelector("#bank");
 bank.textContent =  localStorage.getItem('valueNumber');

 
 var sorteio=document.getElementById("sorteio").addEventListener("click",()=>{ 
     var stake1=document.getElementById("stake1").value
     var stake2=document.getElementById("stake2").value
     var stake3=document.getElementById("stake3").value
     var stake4=document.getElementById("stake4").value
     var stake5=document.getElementById("stake5").value
     var stake6=document.getElementById("stake6").value
    if (stake1 > 0){
        var stake1=document.getElementById("stake1").value
        var bank=document.getElementById("bank").value
        sub = parseInt(bank) - parseInt(stake1) 
        var bank = document.getElementById("bank").value=sub
        alert("stake no lado 1\n feita com sucesso.\n Boa sorte!")
    } if (stake2 > 0){
        var stake2=document.getElementById("stake2").value
        var bank=document.getElementById("bank").value
        sub = parseInt(bank) - parseInt(stake2)
        var bank = document.getElementById("bank").value=sub
        alert("stake no lado 2\n feita com sucesso.\n Boa sorte!")
    } if (stake3 > 0){
        var stake3=document.getElementById("stake3").value
        var bank=document.getElementById("bank").value        
        var bank = document.getElementById("bank").value          
        bank = parseInt(bank) - parseInt(stake3)
        var bank = document.getElementById("bank").value=sub
        alert("stake no lado 3\n feita com sucesso.\n Boa sorte!")
    } if (stake4 > 0){
        var stake4=document.getElementById("stake4").value
        var bank=document.getElementById("bank").value
        var bank = document.getElementById("bank").value
        bank =parseInt(bank) - parseInt(stake4)
        var bank = document.getElementById("bank").value=sub
        alert("stake no lado 4\n feita com sucesso.\n Boa sorte!")
    } if (stake5 > 0){
        var stake5=document.getElementById("stake5").value
        var bank=document.getElementById("bank").value
        var bank = document.getElementById("bank").value
        bank = parseInt(bank) - parseInt(stake5)
        var bank = document.getElementById("bank").value=sub
        alert("stake no lado 5\n feita com sucesso.\n Boa sorte!")
    } if (stake6 > 0){
        var stake6=document.getElementById("stake6").value
        var bank=document.getElementById("bank").value
        var bank = document.getElementById("bank").value
        sub = parseInt(bank) - parseInt(stake6)
        var bank = document.getElementById("bank").value=sub
        alert("stake no lado 6\n feita com sucesso.\n Boa sorte!")
       }
      var sorteio = Math.floor(Math.random() * 6 + 1);
       switch(sorteio){
           case 1:
               document.getElementById("lado").src="./img/dado1.png";
               break;
               case 2:
               document.getElementById("lado").src = "./img/dado2.png";
               break;
               case 3:
               document.getElementById("lado").src = "./img/dado3.png";
               break;
           case 4:
               document.getElementById("lado").src = "./img/dado4.png";
               break;
           case 5:
               document.getElementById("lado").src = "./img/dado5.png";
               break;
           case 6:
               document.getElementById("lado").src = "./img/dado6.png";
               break;
           default:
               //caso contrário!
               break;
       }
    alert("O resultado foi "+ sorteio)
    if ((sorteio == 1) && (stake1 > 0)){
     var stake1=document.getElementById("stake1").value
     premio = parseInt(stake1) * 2 + parseInt(bank) 
     var bank = document.getElementById("bank").value=premio
     alert("Parabens!\n seu lucro foi "+ stake1 * 2)
    }
    if ((sorteio == 2) && (stake2 > 0)){
     var stake2=document.getElementById("stake2").value
     premio = parseInt(stake2) * 2 + parseInt(bank)
     var bank = document.getElementById("bank").value=premio
     alert("Parabens!\n seu lucro foi "+ stake2 * 2)
    }
    if ((sorteio == 3) && (stake3 > 0)){
     var stake3=document.getElementById("stake3").value
     premio = parseInt(stake3) * 3 + parseInt(bank)
     var bank = document.getElementById("bank").value=premio
     alert("Parabens!\n seu lucro foi "+ stake3 * 3)
    }
    if ((sorteio == 4) && (stake4 > 0)){
     var stake4=document.getElementById("stake4").value
     premio = parseInt(stake4) * 4 + parseInt(bank)
     var bank = document.getElementById("bank").value=premio
     alert("Parabens!")
    }
    if ((sorteio == 5) && (stake5 > 0)){
     var stake5=document.getElementById("stake5").value
     premio = parseInt(stake5) * 5 + parseInt(bank)
     var bank = document.getElementById("bank").value=premio
     alert("Parabens!")
    }
    if ((sorteio == 6) && (stake6 > 0)){
     var stake6=document.getElementById("stake6").value
     premio = parseInt(stake6) * 6 + parseInt(bank)
     var bank = document.getElementById("bank").value=premio
     alert("Parabens!")
    }
})
