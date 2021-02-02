export default function homeController() {
    this.$on('.some-guy', 'click', (event) => {
        if(!event.target.classList.contains('is-animating')) {
            event.target.classList.add('is-animating');
        }
    });

    this.$on('.some-guy', 'animationend', (event) => {
        if(event.target.classList.contains('is-animating')) {
            event.target.classList.remove('is-animating');
        }
    });
}
