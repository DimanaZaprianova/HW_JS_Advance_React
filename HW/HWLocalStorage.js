const nodes = {
	// choice:document.querySelector('bgChoice'),
    btnSet:document.getElementById('btnSet'),
    myBackgroundColor: document.getElementById('BackgroundColor'),
    options: document.querySelectorAll('option'),
    myPage:document.querySelector('body'),
}
    let selectedElementIndex = nodes.myBackgroundColor.selectedIndex;
 
    let backgroundColorEl = nodes.myBackgroundColor[selectedElementIndex];
   
    let selectedColor = backgroundColorEl.value;
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
if (storageAvailable('localStorage')){
        selectedColor = localStorage.getItem('backgroundColor');
        document.body.style.backgroundColor = localStorage['backgroundColor'];
        localStorage.setItem('backgroundColor', selectedColor)
    };
nodes.btnSet.addEventListener('click', function(e){
	// prevent default action on submit button click
	e.preventDefault();
    
    let selectedElementIndex = nodes.myBackgroundColor.selectedIndex;
 
    let backgroundColorEl = nodes.myBackgroundColor[selectedElementIndex];
   
    let selectedColor = backgroundColorEl.value;
     
        document.body.style.backgroundColor = selectedColor;
        console.log(selectedColor); 
        localStorage.setItem('backgroundColor', selectedColor);
        console.log(localStorage['backgroundColor']);
         
})

