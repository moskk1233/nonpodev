const ModalWindow = {
    init() {
        document.addEventListener("click", e => {
            if (e.target.classList.contains("modal__close")) {
                this.closeModal(e.target);
            }
        })
    },

    getHTMLTemplate(modalOptions) {
        document.body.style.overflow = "hidden";
        return `
        <div class="modal__overlay" onselectstart="return false;" oncontextmenu="return false;">
            <div class="modal__window">
                <div class="modal__titlebar">
                    <span class="modal__title">${modalOptions.title}</span>
                    <button  class="modal__close material-icons">close</button>
                </div>
                <div class="modal__content">
                    ${modalOptions.content}
                </div>
            </div>
        </div>
        `;
    },

    openModal(modalOptions = {}) {
        modalOptions = Object.assign({
            title: 'Modal Title',
            content: 'Modal Content'
        }, modalOptions);

        const modalTemplate = this.getHTMLTemplate(modalOptions);
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
    },

    closeModal(closeButton) {
        const modalOverlay = closeButton.parentElement.parentElement.parentElement;
        document.body.removeChild(modalOverlay);
        document.body.style.overflow = "auto";
    }
};
document.addEventListener("DOMContentLoaded", () => ModalWindow.init());

const Alert = () => {
    ModalWindow.openModal({
        title: 'คำเตือน',
        content: 'คุณไม่สามารถทำสิ่งนี้ได้ !!'
    });
}