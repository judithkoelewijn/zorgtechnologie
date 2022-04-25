AFRAME.registerComponent("input-listen", {
    init: function () {
        //Called when trigger is pressed 
        //squeeze button in WebXR debugger
        this.el.addEventListener("triggerdown", function (e) {
            console.log("triggerdown check:consolelog", e.target.id);
        });



        this.el.addEventListener("triggerup", function (e) {
            console.log("triggerup check: consolelog", e.target.id);
        });



        this.el.addEventListener("thumbstickchanged", function (e) {
            console.log("thumbstickchanged check: consolelog", e.target.id);
        });

    }


});



this.hitEl;
this.el.addEventListener("hit", function (e) {

    //haal het element op waar we tegenaan zitten
    const hitEl = e.detail.el;
    //check of het element null is
    if (!hitEl || this.hitEl || hitEl.attributes.color.value == "purple") {
        return;
    }
    console.log(hitEl.attributes.color.value);
    hitEl.attributes.color.value = "purple";
    console.log(hitEl.attributes.color.value);
});



/**
 * Listen to thumbstickdown event
 * Show a target circle
 */
this.el.addEventListener("thumbstickdown", function (e) {
    console.log("thumbstickdown", e.target.id);
    this.emit('teleportstart'); // Show the circle
});

/**
 * Listen to thumbstickup event
 * Teleport to the target circle
 */
this.el.addEventListener("thumbstickup", function (e) {
    console.log("thumbstickup", e.target.id);
    this.emit('teleportend'); // Jump to circle
});