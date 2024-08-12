/** @format */

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#heading",
    { y: 0, opacity: 1 },
    {
      y: -180,
      opacity: 0,
      duration: 2,
      delay: 2,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#heading",
        start: "top 30%",
        end: "top 5%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#image",
    { y: 0, opacity: 1 },
    {
      y: -180,
      opacity: 0,
      duration: 2,
      delay: 2,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#heading",
        start: "top 10%",
        end: "top 5%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    "#mern",
    { y: 0, opacity: 1 },
    {
      y: -180,
      opacity: 0,
      duration: 2,
      delay: 1,
      stagger: 0.1,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#mern",
        start: "top 40%",
        end: "top 5%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#home p",
    { y: 0, opacity: 1 },
    {
      y: -180,
      opacity: 0,
      duration: 2,
      delay: 1,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#home p",
        start: "top 45%",
        end: "top 5%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    "#home a",
    { opacity: 1 },
    {
      opacity: 0,
      duration: 1,
      delay: 0.5,

      scrollTrigger: {
        trigger: "#home a",
        start: "top 35%",
        end: "top 5%",
        scrub: true,
      },
    }
  );

  const handleMouseEnter = () => {
    gsap.to("#image", {
      rotateY: 360,
      duration: 1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to("#image", {
      rotateY: 0,
      duration: 1,
    });
  };

  const imgElement = document.querySelector("#image");
  imgElement.addEventListener("mouseenter", handleMouseEnter);
  imgElement.addEventListener("mouseleave", handleMouseLeave);

  gsap.fromTo(
    "#about img",
    { y: -172 },
    {
      y: 0,
      duration: 2,
      stagger: 1,
      delay: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#about img",
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#about p",
    { opacity: 0, x: 330 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      stagger: 3,
      delay: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#about p",
        start: "top 85%",
        end: "top 20%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#about h1",
    { opacity: 0, y: 20 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.4,
      delay: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#about p",
        start: "top 85%",
        end: "top 20%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#skills h1",
    { opacity: 0, y: 50 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#skills h1",
        start: "top 100%",
        end: "top 20%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#skills li",

    { opacity: 0, x: 800 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.3,
      delay: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#skills li",
        start: "top 140%",
        end: "top 5%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#contact",
    { opacity: 0, x: 500 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.4,
      delay: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 90%",
        end: "top 20%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#form",
    { opacity: 0, x: -500 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.4,
      delay: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#form",
        start: "top 90%",
        end: "top 20%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#contact_form h1",
    { opacity: 0, y: 60 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#contact_form h1",
        start: "top 100%",
        end: "top 20%",
        scrub: true,
      },
    }
  );
});
(function () {
  emailjs.init("gwaeGhz4xOceO4tNd");
})();

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  emailjs.sendForm("service_p4hts9l", "template_vluzute", this).then(
    () => {
      alert("Message sent successfully!");
    },
    (error) => {
      alert("Failed to send message: " + JSON.stringify(error));
    }
  );
});
