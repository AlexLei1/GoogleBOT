// ==UserScript==
// @name         GoogleBOT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Google
// @author       Alexander Churkin
// @match        https://www.google.ru/*
// @match        https://www.napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress","Вывод произвольных типов записей и полей в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];
let googleInput = document.getElementsByName("q")[0]

if (btnK !== undefined) {
  let i = 0;
	let timerId = setInterval(() => {
		googleInput.value += keyword[i]
		i++
		if (i == keyword.length) {
			clearInterval(timerId) 
			btnK.click() 
		}
	}, 100)
} else if (location.hostname === 'napli.ru'){
	
} else {
	let nextGooglePage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
      let link = links[i];
			nextGooglePage = false;
      console.log("Нашел строку " + link);
      setTimeout(()=>{
				link.click();
			},getRandom(1500, 4000));
      break;
    }
  }
	if (document.querySelector('YyVfkd').innerText == '5'){
		nextGooglePage = false;
		location.href = 'https://www.google.ru/'
	}
	if (nextGooglePage) {
		setTimeout(()=>{
			pnnext.click();
		},getRandom(1500, 4000));
	}
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
