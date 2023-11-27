'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            allImages: [
                { url: 'https://picsum.photos/900/500?random=1', titolo: 'Image 1', descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quas voluptate, unde iste molestias reiciendis, dignissimos odit velit, perspiciatis optio officiis doloremque. Dicta sint alias minima optio eligendi voluptas quisquam?' },
                { url: 'https://picsum.photos/900/500?random=2', titolo: 'Image 2', descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda id, voluptate, facere quidem rem eos laudantium, ipsum quia dolore eligendi? Magnam fugit quos voluptatum nihil sed quo aspernatur temporibus.' },
                { url: 'https://picsum.photos/900/500?random=3', titolo: 'Image 3', descrizione: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis commodi quos quisquam nam, obcaecati fugiat dolore voluptas at, voluptate mollitia vitae vero quam eius rem alias velit tempora ex!' },
                { url: 'https://picsum.photos/900/500?random=4', titolo: 'Image 4', descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error blanditiis possimus harum vero officia. Sequi, fuga dicta cupiditate sed esse laborum molestias sint culpa, doloribus voluptas consequatur facere aspernatur tempora?' },
                { url: 'https://picsum.photos/900/500?random=5', titolo: 'Image 5', descrizione: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, similique tempore! Facere rerum, vitae blanditiis quo ipsum deleniti quidem, ducimus illo adipisci iste minus sapiente nobis qui minima provident doloribus?' },],

            currentIndex: 0,
            autoplayDirection: 'next',
            autoplayInterval: null,
        };
    },
    methods: {
        prev() {
            this.autoplayDirection = 'prev';
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.allImages.length - 1;
            }
        },
        next() {
            this.autoplayDirection = 'next';
            this.currentIndex++;
            if (this.currentIndex > this.allImages.length - 1) {
                this.currentIndex = 0;
            }
        },
        changeImage(index) {
            this.currentIndex = index;
        },
        autoplayOff() {
            clearInterval(this.autoplayInterval);
        },

        autoplayOn() {
            this.autoplayInterval = setInterval(() => {
                if (this.autoplayDirection === 'next') {
                    this.next();
                } else if (this.autoplayDirection === 'prev') {
                    this.prev();
                }
            }, 3000);
        },
    },
    mounted() {
        this.autoplayInterval = setInterval(() => this.next(), 3000);
    },
}).mount('#app');