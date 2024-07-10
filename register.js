const tabs = document.querySelectorAll(".art")
const forms = document.querySelectorAll(".form")

function toogleRegistrationPage(id){
    for (let i = 0; i < tabs.length; i++) {
        const element = tabs[i];
        const c_form = forms[i]

        const page = id === 0 ? "user" : "artisan"

        if(i == id){
            element.className = "art user"
            c_form.className = "form active-form"
            updateUrlParameter('page',page)
        }else{
            element.className = "art"
            c_form.className = "form"
        }
    }
}

function updateUrlParameter(paramName, paramValue) {
    var url = new URL(window.location.href);
    url.searchParams.set(paramName, paramValue);
    window.history.replaceState({}, '', url);
}

window.addEventListener('load', function() {
    // Get the current URL
    var currentUrl = new URL(window.location.href);
    
    // Get the value of the parameter
    var parameterValue = currentUrl.searchParams.get('page');
    
    if (parameterValue === "artisan") {
        toogleRegistrationPage(1);
    }
});