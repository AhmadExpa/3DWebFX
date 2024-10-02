Shery.imageEffect(".background", {
  style: 4,
  debug: true,
  config: {
    uColor: { value: true },
    uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 3.5, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.993769419582336 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});
var elems = document.querySelectorAll(".elem");
elems.forEach((elem) => {
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animation = false;
  window.addEventListener("click", () => {
    if (!animation) {
      animation = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animation = false;
        },
      });
      if (index === h1s.length - 1) {
        index = 0;
      } else {
        index++;
      }
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});

// gsap.registerPlugin(ScrollTrigger);
// var h1s = elem.querySelectorAll("h1");
// var index = 0;
// var animation = false;
// // Define the trigger point
// ScrollTrigger.create({
//   trigger: "body", // Use the ID of the trigger element
//   start: "center center",
//   end: "center center",
//   onToggle: function (self) {
//     if (self.isActive) {
//       if (!animation) {
//         animation = true;
//         gsap.to(h1s[index], {
//           top: "-=100%",
//           ease: Expo.easeInOut,
//           duration: 1,
//           onComplete: function () {
//             gsap.set(this._targets[0], { top: "100%" });
//             animation = false;
//           },
//         });
//         if (index === h1s.length - 1) {
//           index = 0;
//         } else {
//           index++;
//         }
//         gsap.to(h1s[index], {
//           top: "-=100%",
//           ease: Expo.easeInOut,
//           duration: 1,
//         });
//       }
//     }
//   },
// });
