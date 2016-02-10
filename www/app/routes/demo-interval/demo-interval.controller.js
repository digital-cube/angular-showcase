

export default class Controller {

    constructor($interval) {
        this.$interval = $interval;
        this.intervalId = 0;
        this.startInterval();
    }

    startStop() {
        if (this.intervalId === 0) {
            this.startInterval();
        } else {
            this.stopInterval();
        }
    }

    startInterval() {

        this.intervalCounter = 0;
        this.intervalId = this.$interval( ()=>{
            this.intervalCounter++;
        }, 100);

    }

    stopInterval() {

        this.$interval.cancel(this.intervalId);
        this.intervalId=0;

    }


}


