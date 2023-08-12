const timer = document.getElementById('timer-1');
const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');

class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;

    //   this.refs = {
    //     days: this.timerRef.querySelector('[data-value="days"]'),
    //     hours: this.timerRef.querySelector('[data-value="hours"]'),
    //     mins: this.timerRef.querySelector('[data-value="mins"]'),
    //     secs: this.timerRef.querySelector('[data-value="secs"]'),
    //   };
    }
  
    start() {
        setInterval(() => {
            const timeLeft = this.targetDate - Date.now();
            console.log(timeLeft);
            const time = this.getTimeComponents(timeLeft);
            this.updateClockFace(time);
        }, 1000);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    getTimeComponents(time) {
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return {days, hours, mins, secs};
    }

    updateClockFace({days, hours, mins, secs}) {
        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minsEl.textContent = mins;
        secsEl.textContent = secs;
    }
  }
  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2023'), // Change the target date as needed
  });
  