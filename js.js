const amount = document.getElementById('amount');   //pobiera referencje do elementow form
const phoneNumber = document.getElementById('phoneNumber');
const form = document.getElementById('form');
const errorElement = document.getElementById('errorDisplay');
const outputSection = document.getElementById('output');
const submitBtn = document.getElementById('submitBtn');
const popUp = document.getElementById('output-pop-up');

form?.addEventListener('submit', (e)=>{
    let errorMessages = []
    if(phoneNumber.value?.length!==9){
        errorMessages.push("Podano zły numer") // waidacja numeru
    }
    if(amount.value>4){
        errorMessages.push("Nie można zapisać na kurs więcej niż 4 osoby")  // walidacja liczby osob
    }

    if(errorMessages.length>0){   //oblusga bledow
        e.preventDefault()
        errorElement.innerText = errorMessages.join(', ')
    }
    else{
        displayInfo()  //wyswietlania info
        asyncCall();
    }
});

function displayInfo(){  // funkcja ktora wyswietla info o zapisie w sekcji wyjsciowej
     const name = document.getElementById('name');
     const surname = document.getElementById('surname');
     const email = document.getElementById('email');
     let objInfo = {   // tworzy obiekt z info
        Imię: name.value,
        Nazwisko: surname.value,
        Liczba_uczestników: amount.value,
        Email: email.value,
        Nr_telefonu: phoneNumber.value,
      };

    outputSection.innerHTML = JSON.stringify(objInfo);
}

function openPopUp(){
    popUp.classList.add('open-output-pop-up');
}

function closePopUp(){
    popUp.classList.remove('open-output-pop-up');
}

function resolvePopUp() { // opoznienie 2 sekundy pop upu
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling resolvePopUp');
    const result = await resolvePopUp();
    openPopUp();
  }
  //Funkcja asyncCall jest zainicjowana z użyciem słowa kluczowego async.

/*Wewnątrz funkcji asyncCall występuje wywołanie funkcji resolvePopUp z użyciem operatora await. Operator await spowoduje, że wykonanie funkcji asyncCall zostanie wstrzymane do momentu zakończenia obietnicy zwracanej przez resolvePopUp.

Funkcja resolvePopUp jest opakowana w obietnicę (Promise). Wewnątrz tej funkcji występuje opóźnienie z użyciem setTimeout na 2000 milisekund (2 sekundy).

Po upływie 2 sekund funkcja resolve obietnicy zostaje wykonana, co oznacza, że obietnica została spełniona.

Po spełnieniu obietnicy, funkcja asyncCall kontynuuje swoje wykonanie, a zmienna result otrzymuje wartość zwróconą przez funkcję resolvePopUp.

W wyniku otrzymania wartości, funkcja asyncCall wywołuje funkcję openPopUp, która otwiera okno pop-up. */