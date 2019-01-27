let domen_form_input_btn = document.getElementById('domen-form-input-btn');
let domen_form_input_name = document.getElementById('domen-form-input-name');

// let next_page = document.getElementById('next-page');

let businesscard = document.getElementById('businesscard');
let dns = document.getElementById('dns');
let certificate = document.getElementById('certificate');
let autorenewal = document.getElementById('autorenewal');
let cloud = document.getElementById('cloud');
let freessl = document.getElementById('freessl');
let dnssec = document.getElementById('dnssec');
let redirect = document.getElementById('redirect');

domen_form_input_btn.onclick = function () {
    if(domen_form_input_name.value.length>0){
        document.getElementById('domen-form-input').style.border='';
        document.getElementById('domen-form-subtitle-status').innerHTML
            = 'Домен '+ domen_form_input_name.value + '.ru &#8212; свободен';
        document.getElementById('domen-form-subtitle-status').style.color = 'white';
    }else {
        document.getElementById('domen-form-input').style.border='1px solid red';
        document.getElementById('domen-form-subtitle-status').innerHTML = 'Обязательное поле для ввода';
        document.getElementById('domen-form-subtitle-status').style.color = 'red';
    }
    console.log(document.getElementById('domen-form-input-name').value);

};

// next_page.onclick = function () {
//     console.log(window.location.hash);
//     window.location.hash='second-list-logo';
//     console.log(window.location.hash);
// };


    function CleanLi(){
        let item_lenght=document.getElementById('item-list').children.length;

        for (let i=0; i<item_lenght; i++){
            if(document.getElementById('item-list').children[i].childNodes[3].style.display ==='block'){
                document.getElementById('item-list').children[i].childNodes[3].style.display ='none';
                document.getElementById('item-list').children[i].style.marginBottom='';
            }
        }
    }

businesscard.onclick = function () {
    let state = businesscard.childNodes[3].style.display;

    if (state ==='block'){
        CleanLi();
        businesscard.childNodes[3].style.display='none';
        businesscard.style.marginBottom = '';
    }else {
        CleanLi();
        businesscard.childNodes[3].style.display='block';
        businesscard.style.marginBottom = '154px';
    }
};

dns.onclick = function () {
    let state = dns.childNodes[3].style.display;

    if (state ==='block'){
        CleanLi();
        dns.childNodes[3].style.display='none';
        dns.style.marginBottom = '';
    }else {
        CleanLi();
        dns.childNodes[3].style.display='block';
        dns.style.marginBottom = '154px';
    }
};

certificate.onclick = function () {
    let state = certificate.childNodes[3].style.display;

    if (state ==='block'){
        CleanLi();
        certificate.childNodes[3].style.display='none';
        certificate.style.marginBottom = '';
    }else {
        CleanLi();
        certificate.childNodes[3].style.display='block';
        certificate.style.marginBottom = '115px';
    }
};

autorenewal.onclick = function () {
    let state = autorenewal.childNodes[3].style.display;

    if (state ==='block'){
        CleanLi();
        autorenewal.childNodes[3].style.display='none';
        autorenewal.style.marginBottom = '';
    }else {
        CleanLi();
        autorenewal.childNodes[3].style.display='block';
        autorenewal.style.marginBottom = '115px';
    }
};

cloud.onclick = function () {
    let state = cloud.childNodes[3].style.display;

    if (state ==='block'){
        CleanLi();
    cloud.childNodes[3].style.display='none';
    cloud.style.marginBottom = '';
    }else {
        CleanLi();
    cloud.childNodes[3].style.display='block';
    cloud.style.marginBottom = '135px';
    }
};

freessl.onclick = function () {
    let state = freessl.childNodes[3].style.display;

    if (state ==='block'){
        CleanLi();
    freessl.childNodes[3].style.display='none';
    freessl.style.marginBottom = '';
    }else {
        CleanLi();
    freessl.childNodes[3].style.display='block';
    freessl.style.marginBottom = '175px';
    }

};

dnssec.onclick = function () {
    let state = dnssec.childNodes[3].style.display;

    if (state ==='block'){
        CleanLi();
    dnssec.childNodes[3].style.display='none';
    dnssec.style.marginBottom = '';
    }else {
        CleanLi();
    dnssec.childNodes[3].style.display='block';
    dnssec.style.marginBottom = '155px';
    }
};

redirect.onclick = function () {
    let state = redirect.childNodes[3].style.display;

    if (state ==='block'){
        CleanLi();
    redirect.childNodes[3].style.display='none';
    redirect.style.marginBottom = '';
    }else {
        CleanLi();
    redirect.childNodes[3].style.display='block';
    redirect.style.marginBottom = '175px';
    }
};

