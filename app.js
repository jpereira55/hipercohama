const selector = (element) => document.querySelector(element);


pdvsJson.map((pdv) => {
  const pdvsclone = selector('.link').cloneNode(true);
    selector('.pdv-area').append(pdvsclone);

    pdvsclone.querySelector('.link a').href = pdv.link ;
    pdvsclone.querySelector('.card img').src = pdv.img;
    pdvsclone.querySelector('.card h2').innerHTML = pdv.name;
    pdvsclone.querySelector('.card p').innerHTML = pdv.descripion;


    if(pdv.descripion === 'Rotisseria') {
      pdvsclone.querySelector('.card').style.background = '#000000';
    }
    if(pdv.descripion === 'LANCHONETE') {
      pdvsclone.querySelector('.card').style.background = '#8B0000';
    }
    if(pdv.descripion === 'Adega') {
      pdvsclone.querySelector('.card').style.background = '#8B0000';
    }
    if(pdv.descripion === 'Boteco') {
      pdvsclone.querySelector('.card').style.background = '#002D58';
    }
    if(pdv.descripion === 'Super Drive') {
      pdvsclone.querySelector('.card').style.background = '#004b23';
    }
    if(pdv.descripion === 'Café') {
      pdvsclone.querySelector('.card').style.background = '#A52A2A';
    }
    if(pdv.descripion === 'ELETRO') {
      pdvsclone.querySelector('.card').style.background = '#5a189a';
    }
    if(pdv.descripion === 'RESERVA') {
      pdvsclone.querySelector('.card').style.background = '#212529';
    }
});
