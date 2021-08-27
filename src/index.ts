/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

let currentPopup: any = undefined;

WA.room.onEnterZone('clock', () => {
    const today = new Date();
    const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes(): today.getMinutes();
    const time = today.getHours() + ":" + minutes;
    currentPopup = WA.ui.openPopup("popupClock", "Es ist " + time, []);
})
WA.room.onLeaveZone('clock', () => {
    closePopUp();
})

WA.room.onEnterZone('entry', () => {
    currentPopup = WA.ui.openPopup("popupEntry", "💛💛💛 Hallo "+ WA.player.name +"! 💛💛💛" +
        "Meetingräume mit Jitsi: ↘️Besprechungsraum (rechts unten), ↖️Kickerraum (links, vor der Küche), ⬅️Lounge (blauer Teppich mittig links). 🤫Stillarbeit: Räume ganz links unten↙️", []);
})
WA.room.onLeaveZone('entry', () => {
    closePopUp();
})

WA.room.onEnterZone('silent', () => {
    currentPopup = WA.ui.openPopup("popupSilent", "🤫 Stillarbeitszone. Wenn du in den beiden Räumen hier unten bist, öffnen sich keine Videocalls beim Zusammentreffen mit anderen.", []);
})
WA.room.onLeaveZone('silent', () => {
    closePopUp();
})

WA.room.onEnterZone('server', () => {
    currentPopup = WA.ui.openPopup("popupServer", "🚨 Serverraum. Lass dich hier nicht von Tobias erwischen! 🚨", []);
})
WA.room.onLeaveZone('server', () => {
    closePopUp();
})

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
