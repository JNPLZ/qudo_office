/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;

WA.room.onEnterZone('clock', () => {
    const today = new Date();
    const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes(): today.getMinutes();
    const time = today.getHours() + ":" + minutes;
    currentPopup = WA.ui.openPopup("popupClock", time + " Uhr", []);
})
WA.room.onLeaveZone('clock', () => {
    closePopUp();
})

WA.room.onEnterZone('info', () => {
    currentPopup = WA.ui.openPopup("popupInfo", "πππ Hallo "+ WA.player.name +"! πππ " +
        "Sieh dich doch mal um!οΈ", []);
})
WA.room.onLeaveZone('info', () => {
    closePopUp();
})

WA.room.onEnterZone('silent', () => {
    currentPopup = WA.ui.openPopup("popupSilent", "Ruheraum. π€« Hier unten ΓΆffnen sich keine Videocalls mit anderen.", []);
})
WA.room.onLeaveZone('silent', () => {
    closePopUp();
})

WA.room.onEnterZone('server', () => {
    currentPopup = WA.ui.openPopup("popupServer", "π¨ Serverraum. Lass dich hier nicht vom Admin erwischen! π¨", []);
})
WA.room.onLeaveZone('server', () => {
    closePopUp();
})

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
