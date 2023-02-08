(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const tabHeader = document.querySelectorAll("[data-tab]");
    const tabCards = document.querySelectorAll("[data-tab-content]");
    tabHeader.forEach((item => {
        item.addEventListener("click", (function(e) {
            tabCards.forEach((el => {
                el.classList.add("hidden");
            }));
            const tabCard = document.querySelector("#" + this.dataset.tab);
            tabCard.classList.remove("hidden");
        }));
    }));
    const openButtons = document.querySelectorAll("[data-modal-button]");
    const closeButtons = document.querySelectorAll("[data-modal-close]");
    openButtons.forEach((function(button) {
        button.addEventListener("click", (function() {
            const currentModalBtn = this.dataset.modalButton;
            const currentModalId = document.querySelector("#" + currentModalBtn);
            currentModalId.classList.remove("hidden");
            currentModalId.querySelector(".wrapper-modal__box").addEventListener("click", (function(e) {
                e.stopPropagation();
            }));
        }));
    }));
    closeButtons.forEach((button => {
        button.addEventListener("click", (function(e) {
            this.closest("[data-modal]").classList.add("hidden");
        }));
    }));
    const wrapperModal = document.querySelectorAll("[data-modal]");
    wrapperModal.forEach((function(el) {
        el.addEventListener("click", (function(e) {
            this.classList.add("hidden");
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();