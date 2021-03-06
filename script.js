document.addEventListener('DOMContentLoaded', function(){
	Typed.new(".type", {
    strings: ['"One destination for all your musical needs"'],
    stringsElement: null,
    // typing speed
    typeSpeed: 10,
    // time before typing starts
    startDelay: 600,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
  });
});