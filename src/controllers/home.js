export default function homeController() {
    this.$on('.some-guy', 'click', (event) => {
        event.target.classList.toggle('is-animating');
    });

    this.$on('.some-guy', 'animationend', (event) => {
        event.target.classList.toggle('is-animating');
    });
}
