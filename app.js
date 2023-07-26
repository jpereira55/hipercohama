const selector = (element) => document.querySelector(element);


pdvsJson.map((pdv) => {
  const pdvsclone = selector('.link').cloneNode(true);
    selector('.pdv-area').append(pdvsclone);

    pdvsclone.querySelector('.link a').href = pdv.link ;
    pdvsclone.querySelector('.card img').src = pdv.img;
    pdvsclone.querySelector('.card h2').innerHTML = pdv.name;
    pdvsclone.querySelector('.card p').innerHTML = pdv.descripion;


    if(pdv.descripion === 'Drive') {
      pdvsclone.querySelector('.card').style.background = '#E19200';
    }
    if(pdv.descripion === 'LANCHONETE') {
      pdvsclone.querySelector('.card').style.background = '#8B0000';
    }
    if(pdv.name === 'PDV 27') {
      pdvsclone.querySelector('.card').style.background = '#8B0000';
    }
    if(pdv.descripion === 'balcão atacado') {
      pdvsclone.querySelector('.card').style.background = '#002D58';
    }
    if(pdv.descripion === 'Mix Mais') {
      pdvsclone.querySelector('.card').style.background = '#004b23';
    }
    if(pdv.descripion === 'BOTECO') {
      pdvsclone.querySelector('.card').style.background = '#E19200';
    }
    if(pdv.descripion === 'ELETRO') {
      pdvsclone.querySelector('.card').style.background = '#5a189a';
    }
    if(pdv.descripion === 'RESERVA') {
      pdvsclone.querySelector('.card').style.background = '#212529';
    }
});
