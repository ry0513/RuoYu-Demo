new Vue({
  el: "#calendar",
  data: {
    currentTime: "00:00:00",
    currentDate: "",
    activeDay: "",
    days: {
      show: true,
      activeDay:
        new Date().formatYM("YYYY-MM-DD").current + "-" + new Date().getDate(),
      currentDay:
        new Date().formatYM("YYYY-MM-DD").current + "-" + new Date().getDate(),
      activeMonth: new Date().formatYM("YYYY-MM-DD").current,
      currentMonth: new Date().formatYM("YYYY-MM-DD").current,
      dateList: [],
    },

    calendarInfo: new Date().formatYM().current,
    mode: "day",
  },
  methods: {
    mousemove(event) {
      const borderLayer = this.$refs.mask;
      const bounding = borderLayer.getBoundingClientRect();
      borderLayer.style.webkitMaskPosition = `${event.x - bounding.x - 80}px ${
        event.y - bounding.y - 80
      }px`;
    },
    getTime() {
      let time = new Date();
      this.currentTime = `${time.getHours()}:${
        time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
      }:${
        time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
      }`;
      setTimeout(() => {
        this.getTime();
      }, 1000);
    },
    current() {
      this.days.activeMonth = this.days.currentMonth;
      this.calendarInfo = new Date(this.days.activeMonth).formatYM().current;
      this.days.activeDay = this.days.currentDay;
      this.getDate();
    },
    arrow(mode) {
      if (this.mode === "day") {
        if (mode === "previous") {
          this.days.activeMonth = new Date(this.days.activeMonth).formatYM(
            "YYYY-MM-DD"
          ).last;
        } else if (mode === "next") {
          this.days.activeMonth = new Date(this.days.activeMonth).formatYM(
            "YYYY-MM-DD"
          ).next;
        }
        this.calendarInfo = new Date(this.days.activeMonth).formatYM().current;
        this.getDate();
      }
    },
    getDate() {
      let dateList = [];
      this.days.dateList = dateList;
      const { last, current, next } = new Date(this.days.activeMonth).formatYM(
        "YYYY-MM-DD"
      );
      console.log(new Date(this.days.activeMonth).formatYM("YYYY-MM-DD"));
      let firstDayWeek = new Date(current).getDay() || 7;
      dateList =
        firstDayWeek > 1
          ? new Date(last).getdaylist().splice(-firstDayWeek + 1)
          : [];
      dateList = dateList.concat(new Date(current).getdaylist());
      dateList = dateList.concat(
        new Date(next)
          .getdaylist()
          .splice(0, 42 - new Date(current).days() - firstDayWeek + 1)
      );
      setTimeout(() => {
        this.days.dateList = dateList;
      }, 100);
    },
  },
  created() {
    this.getTime();
    this.days.activeDay = this.days.currentDay =
      new Date().formatYM("YYYY-MM-DD").current + "-" + new Date().getDate();
    this.currentDate =
      new Date().formatYMD() +
      " " +
      new Date().sloarToLunar().lunarMonth +
      new Date().sloarToLunar().lunarDay;
    this.getDate();
  },
});
