// ==UserScript==
// @author Kiwec
// @match http://www.jeuxvideo.com/*
// @match http://www.forumjv.com/*
// @run-at document-end
// @version 1.0.0
// @grant none
// @noframes
// ==/UserScript==

console.log('on');
var instance = -1;
reload();

// Compatibilite Respeed
addEventListener('instantclick:newpage', reload);

function reload()
{
    clearTimeout(instance);
    instance = setTimeout(checkConnectes, 5000);
}

function checkConnectes()
{
    $.ajax({
        type: 'GET',
        url: document.URL,
        timeout: 5000,
        success: function(data) {
            $('.nb-connect-fofo').text($(data).find('.nb-connect-fofo').text());
            reload();
        },
        error: checkConnectes
    });
}
