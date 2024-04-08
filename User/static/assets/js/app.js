// regex for validation
const strRegex =  /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const digitRegex = /^\d+$/;

const mainForm = document.getElementById('cv-form');
const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
}

// user inputs elements
let nomElem = mainForm.nom,
    PrenomsElem = mainForm.Prenoms,
    imageElem = mainForm.image,
    emailElem = mainForm.email,
    NumeroElem = mainForm.Numero,
    sitmatriElem = mainForm.sitmatri,
    lieuNaissanceElem = mainForm.lieuNaissance,
    dateElem = mainForm.date,
    AddresseElem = mainForm.Addresse;
    TailleElem = mainForm.Taille;
    genreElem = mainForm.genre;

// display elements
let nameDsp = document.getElementById('fullname_dsp'),
    imageDsp = document.getElementById('image_dsp'),
    NumeroDsp = document.getElementById('Numero_dsp'),
    emailDsp = document.getElementById('email_dsp'),
    AddresseDsp = document.getElementById('addresse_dsp'),
    sitmatriDsp = document.getElementById('sitmatri_dsp'),
    lieuNaissanceDsp = document.getElementById('lieuNaissance_dsp'),
    dateDsp = document.getElementById('date_Dsp'),
    TailleDsp = document.getElementById('Taille_dsp'),
    genreDsp = document.getElementById('genre_dsp'),
    COMPETENCESDsp = document.getElementById('COMPETENCES_dsp'),
    CURSUSDsp = document.getElementById('CURSUS_dsp'),
    EXPERIENCESDsp = document.getElementById('EXPERIENCES_dsp'),
    LANGUESDsp = document.getElementById('LANGUES_dsp'),
    LOISIRSDsp = document.getElementById('LOISIRS_dsp');

// first value is for the attributes and second one passes the nodelists
const fetchValues = (attrs, ...nodeLists) => {
    let elemsAttrsCount = nodeLists.length;
    let elemsDataCount = nodeLists[0].length;
    let tempDataArr = [];

    // first loop deals with the no of repeaters value
    for(let i = 0; i < elemsDataCount; i++){
        let dataObj = {}; // creating an empty object to fill the data
        // second loop fetches the data for each repeaters value or attributes 
        for(let j = 0; j < elemsAttrsCount; j++){
            // setting the key name for the object and fill it with data
            dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }

    return tempDataArr;
}

const getUserInputs = () => {

    // COMPETENCES 
    let COMPETENCESspecialitesElem = document.querySelectorAll('.Specialites'),
   
    degreeyearElem = document.querySelectorAll('.degree_year'),
    degreetitleElem = document.querySelectorAll('.degree_title'),
    institutionElem = document.querySelectorAll('.institution'),
   

    // education
    let contrattypeElem = document.querySelectorAll('.contrat_type'),
    startdateElem = document.querySelectorAll('.start_date'),
    endDateElem = document.querySelectorAll('.end_date'),
    posteoccupeElem = document.querySelectorAll('.poste_occupe');

    let langueElem = document.querySelectorAll('.Langue');

    let loisirsElem = document.querySelectorAll('.loisirs');

    // event listeners for form validation
    nomElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Nom'));
    PrenomsElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT_EMP, 'Prenoms'));
    NumeroElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.NUMERO, 'Numero de telephone'));
    emailElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.EMAIL, 'Email'));
    AddresseElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Addresse'));
    dateElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Date de naissance'));
    sitmatriElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'situation matrimoniale'));
    lieuNaissanceElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Lieu de naissance'));
    genreElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Genre'));
    TailleElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.NUMERO, 'Taille'));

    COMPETENCESspecialitesElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'specialites')));
    degreeyearElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Annees')));
    degreetitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Diplome')));
    institutionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, "Etablissement")));
    (document.querySelectorAll('.exp_compagny')).forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, "Entreprise")));
    contrattypeElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, "Type de contrat")));
    startdateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'Date de debut')));
    enddateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Date de fin')));
    PosteoccupeElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Poste occupe')));
    langueElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Langue')));
    loisirsElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Loisirs')));

    return {
        nom: nomElem.value,
        Prenoms: PrenomsElem.value,
        AddresseElem: AddresseElem.value,
        email: emailElem.value,
        Numero: NumeroElem.value,
        lieuNaissance: lieuNaissanceElem.value,
        genre: genreElem.value,
        Taille: TailleElem.value,
        sitmatri: sitmatriElem.value,
        date: dateElem.value,

        COMPETENCES: fetchValues(['specialites'], COMPETENCESspecialitesElem),
        CURSUS: fetchValues(['degree_year', 'degree_title', 'institution'], degreeyearElem, degreetitleElem, institutionElem),
        EXPERIENCES: fetchValues(['exp_company', 'contrat_type', 'star_date', 'end_date', 'poste_occupe'], document.querySelectorAll('.exp_compagny'), contrattypeElem, stardateElem, enddateElem, posteoccupeElem),
        LANGUES: fetchValues(['langue'], langueElem),
        LOISIRS: fetchValues(['LOISIRS'], LOISIRSElem)
    }
};

function validateFormData(elem, elemType, elemName){
    // checking for text string and non empty string
    if(elemType == validType.TEXT){
        if(!strRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for only text string
    if(elemType == validType.TEXT_EMP){
        if(!strRegex.test(elem.value)) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for email
    if(elemType == validType.EMAIL){
        if(!emailRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for phone number
    if(elemType == validType.Numero){
        if(!phoneRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for only empty
    if(elemType == validType.ANY){
        if(elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
}

// adding the invalid text
function addErrMsg(formElem, formElemName){
    formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
}

// removing the invalid text 
function removeErrMsg(formElem){
    formElem.nextElementSibling.innerHTML = "";
}

// show the list data
const showListData = (listData, listContainer) => {
    listContainer.innerHTML = "";
    listData.forEach(listItem => {
        let itemElem = document.createElement('div');
        itemElem.classList.add('preview-item');
        
        for(const key in listItem){
            let subItemElem = document.createElement('span');
            subItemElem.classList.add('preview-item-val');
            subItemElem.innerHTML = `${listItem[key]}`;
            itemElem.appendChild(subItemElem);
        }

        listContainer.appendChild(itemElem);
    })
}

const displayCV = (userData) => {
    nomDsp.innerHTML = userData.nom + " " + userData.Prenoms;
    NumeroDsp.innerHTML = userData.Numero;
    emailDsp.innerHTML = userData.email;
    AddresseDsp.innerHTML = userData.Addresse;
    dateDsp.innerHTML = userData.date;
    genreDsp.innerHTML = userData.genre;
    TailleDsp.innerHTML = userData.Taille;
    sitmatriDsp.innerHTML = userData.sitmatri;
    lieuNaissanceDsp.innerHTML = userData.lieuNaissance;
    showListData(userData.achievements, COMPENTECESDsp);
    showListData(userData.skills, EXPERIENCESDsp);
    showListData(userData.educations, LANGUESDsp);
    showListData(userData.experiences, LOISIRSDsp);
}

// generate CV
const generateCV = () => {
    let userData = getUserInputs();
    displayCV(userData);
    console.log(userData);
}

function previewImage(){
    let oFReader = new FileReader();
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function(ofEvent){
        imageDsp.src = ofEvent.target.result;
    }
}

// print CV
function printCV(){
    window.print();
}