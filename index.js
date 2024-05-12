
      var greenChicken = document.getElementById("greenChicken");
      if (greenChicken) {
        greenChicken.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='headingText3']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start" });
          }
        });
      }
      
      var pinkChicken = document.getElementById("pinkChicken");
      if (pinkChicken) {
        pinkChicken.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='text11']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start" });
          }
        });
      }
      
      var yellowChicken = document.getElementById("yellowChicken");
      if (yellowChicken) {
        yellowChicken.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='placeholderImage1']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start" });
          }
        });
      }
      
      var blueChicken = document.getElementById("blueChicken");
      if (blueChicken) {
        blueChicken.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='placeholderImage']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start" });
          }
        });
      }
