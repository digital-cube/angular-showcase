

export default class Controller {

    constructor($interval) {

        this.$interval = $interval;

        console.log("INTERVAL",$interval);

        self=this;

        this.interval_id = 0;
        this.start_interval();


    }

    startstop() {
        if (this.interval_id == 0)
            this.start_interval();
        else
            this.stop_interval();
    }

    start_interval() {

        this.my_var = 0;
        this.interval_id = this.$interval( ()=>{
            this.my_var++;
        }, 100);

    }

    stop_interval() {

        this.$interval.cancel(this.interval_id);
        this.interval_id=0;

    }


}


