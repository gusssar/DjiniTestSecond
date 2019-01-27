let businesscard = document.getElementById('businesscard');
let dns = document.getElementById('dns');
let certificate = document.getElementById('certificate');
let autorenewal = document.getElementById('autorenewal');
let cloud = document.getElementById('cloud');
let freessl = document.getElementById('freessl');
let dnssec = document.getElementById('dnssec');
let redirect = document.getElementById('redirect');


businesscard.onclick = function () {
        let state = businesscard.childNodes[3].style.display;
        console.log(state);
            if (state ==='none'){
                businesscard.childNodes[3].style.display='block';
            }else {
                businesscard.childNodes[3].style.display='none';
            }
    };

dns.onclick = function () {
    let state = dns.childNodes[3].style.display;
    console.log(state);
    if (state ==='none'){
        dns.childNodes[3].style.display='block';
    }else {
        dns.childNodes[3].style.display='none';
    }
};

certificate.onclick = function () {
    let state = certificate.childNodes[3].style.display;
    console.log(state);
    if (state ==='none'){
        certificate.childNodes[3].style.display='block';
    }else {
        certificate.childNodes[3].style.display='none';
    }
};

autorenewal.onclick = function () {
    let state = autorenewal.childNodes[3].style.display;
    console.log(state);
    if (state ==='none'){
        autorenewal.childNodes[3].style.display='block';
    }else {
        autorenewal.childNodes[3].style.display='none';
    }
};

cloud.onclick = function () {
    let state = cloud.childNodes[3].style.display;
    console.log(state);
    if (state ==='none'){
        cloud.childNodes[3].style.display='block';
    }else {
        cloud.childNodes[3].style.display='none';
    }
};

freessl.onclick = function () {
    let state = freessl.childNodes[3].style.display;
    console.log(state);
    if (state ==='none'){
        freessl.childNodes[3].style.display='block';
    }else {
        freessl.childNodes[3].style.display='none';
    }
};

dnssec.onclick = function () {
    let state = dnssec.childNodes[3].style.display;
    console.log(state);
    if (state ==='none'){
        dnssec.childNodes[3].style.display='block';
    }else {
        dnssec.childNodes[3].style.display='none';
    }
};

redirect.onclick = function () {
    let state = redirect.childNodes[3].style.display;
    console.log(state);
    if (state ==='none'){
        redirect.childNodes[3].style.display='block';
    }else {
        redirect.childNodes[3].style.display='none';
    }
};