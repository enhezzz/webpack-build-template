<template>
  <div
    class="dcCard-container"
    @mouseenter="onMouseEnterHandler"
    @mouseleave="onMouseLeaveHandler"
    @mousemove="onMouseMoveHandler"
    ref="cardContainer"
  >
    <div ref="card" class="wraper">
      <slot class="card"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "DyCard",
  mounted() {
    this.cardRef = this.$refs.card;
    // console.log(this.$refs)
    this.cardContainerRef = this.$refs.cardContainer;
    // console.log(this.cardRef, this.cardContainerRef)
    this.mouse.setOrigin(this.cardContainerRef);
  },
  methods: {
    isTimeToUpdate() {
      return this.counter++ % this.updateRate === 0;
    },
    onMouseEnterHandler(event) {
      this.update(event);
    },
    onMouseLeaveHandler() {
      this.cardRef.style = "";
    },
    onMouseMoveHandler() {
      if (this.isTimeToUpdate(event)) {
        this.update(event);
      }
    },
    update(event) {
      this.mouse.updatePosition(event);
      this.updateTransformStyle(
        (this.mouse.y / this.cardRef.offsetHeight / 2).toFixed(2),
        (this.mouse.x / this.cardRef.offsetWidth / 2).toFixed(2)
      );
    },
    updateTransformStyle(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      this.cardRef.style.transform = style;
      this.cardRef.style.webkitTransform = style;
      this.cardRef.style.mozTransform = style;
      this.cardRef.style.msTransform = style;
      this.cardRef.style.oTransform = style;
    }
  },
  data() {
    return {
      mouse: {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
          var e = event || window.event;
          this.x = e.clientX - this._x;
          this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
          // var _e = e
          let boundingClientRect = e.getBoundingClientRect();
          var dcCardOffsetLeft = boundingClientRect.left,
            dcCardOffsetTop = boundingClientRect.top;
          // while (e) {
          //     console.log(e, e.offsetLeft, e.offsetTop)
          //     dcCardOffsetLeft += e.offsetLeft;
          //     dcCardOffsetTop += e.offsetTop;
          //     e = e.offsetParent
          // }
          // console.log(dcCardOffsetLeft, dcCardOffsetTop)
          this._x = dcCardOffsetLeft + Math.floor(e.offsetWidth / 2);
          this._y = dcCardOffsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
          return "(" + this.x + ", " + this.y + ")";
        }
      },
      counter: 0,
      updateRate: 10,
      cardRef: null,
      cardContainerRef: null
    };
  }
};
</script>
<style scoped>
.dcCard-container {
  /* margin-top: 300px; */
  perspective: 20px;
  perspective-origin: 50% 50%;
  /* width: 100%;
    height: 100%; */
}
.dcCard-container > .wraper {
  width: 100%;
  height: 100%;
  /* box-shadow: 0 0 12px 1px; */
  transition: transform 0.5s;
}

.dcCard-container img {
  width: 100%;
  height: 100%;
  /* box-shadow: 0 0 12px 1px; */
  transition: transform 0.5s;
}
</style>
