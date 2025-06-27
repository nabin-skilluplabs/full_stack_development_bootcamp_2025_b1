class FAQ {
    #items = [];
    constructor(title, intro) {
        this.title = title;
        this.intro = intro;
    }

    addItem(item) {
        this.#items.push(item);
    }

    getItems() {
        return this.#items;
    }

    renderTitle() {
        const titleElement = document.getElementById("title");
        const descriptionElement = document.getElementById("description");
        titleElement.textContent = this.title;
        descriptionElement.textContent = this.intro;
    }

    renderItems() {
       const items =  this.#items.map((item) => {
            return `
                <div>
                    <h3 class="text-2xl bg-black text-white px-4 py-1">${item.question}</h3>
                    <p                                                                                                        >${item.answer}</p>
                </div>
            `;
        });
        const accordionElement = document.getElementById("accordion");
        accordionElement.innerHTML = items.join("");

        const questionElements = accordionElement.querySelectorAll("h3");
        questionElements.forEach((questionElement) => {
            questionElement.addEventListener("click", () => {
                const answerElement = questionElement.nextElementSibling;
                answerElement.classList.toggle("hidden");
            })
        });
    }
}

class FAQItem {
    constructor(question, answer, isVisible = false) {
        this.question = question;
        this.answer = answer;
        this.isAnswerVisible = isVisible;
    }
}

(() => {
    const faq = new FAQ("Frequently Asked Questions", "Here are some common questions and answers.");
    faq.renderTitle();

    const faqItem1 = new FAQItem("What is Skillup Labs?", "Skillup Labs is an innovative learning platform designed to help individuals build job-ready skills in technology, business, and creative fields. We offer hands-on training through courses, workshops, and mentorship from industry professionals.", true)
    faq.addItem(faqItem1);

    const faqItem2 = new FAQItem("Who can enroll in Skillup Labs programs?", "Our programs are open to anyone—students, professionals, or career switchers—looking to upskill or reskill. Whether you're a beginner or have prior experience, there's a course tailored to your level and goals.");
    faq.addItem(faqItem2);

    faq.renderItems();
})();