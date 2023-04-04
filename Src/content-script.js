console.log('hey-hey')
const preEls = document.querySelectorAll('pre');
[...preEls].forEach(preEl =>{

    const root = document.createElement("div");
    root.style.position = "relative";
    const shadowRoot = root.attachShadow({mode : 'open'});

    const cssUrl = typeof browser === 'undefined'
        ? chrome.runtime.getURL("contentscript.css")
        : browser.runtime.getURL("contentscript.css");

    shadowRoot.innerHTML = '<link rel="stylesheet" type="text/css" href="' + cssUrl + '"></link>';


    const button = document.createElement("button");
    button.innerText = 'Copy';
    button.type = 'button';
    shadowRoot.prepend(button);

    preEl.prepend(root);

    const codeEl = preEl.querySelector('code');

    preEl.prepend(button);
    button.addEventListener('click', () => {
        navigator.clipboard.writeText(codeEl.innerText)
        console.log('hey-hey')
    });
})