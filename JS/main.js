var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
let items = Array.from(document.getElementsByClassName('nav-link'));

function scroll() {
    items.forEach((e) => {
        e.onclick = () => {
            $("html, body").animate({ scrollTop: document.getElementById(e.name).offsetTop }, 600);


        }


    })
}


let nCount = selector => {
    $(selector).each(function() {
        $(this)
            .animate({
                Counter: $(this).text()
            }, {
                // A string or number determining how long the animation will run.
                duration: 4000,
                // A string indicating which easing function to use for the transition.
                easing: "swing",
                /**
                 * A function to be called for each animated property of each animated element. 
                 * This function provides an opportunity to
                 *  modify the Tween object to change the value of the property before it is set.
                 */
                step: function(value) {
                    $(this).text(Math.ceil(value));
                }
            });
    });
};




var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    console.log("load")
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    if (isSafari) {
        scroll();
    }
};



window.onbeforeunload = function() {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0, 0)
}

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
    setTimeout(() => {
        console.log("tuime")
        document.getElementById("navbar").style.backgroundColor = "transparent"
        document.getElementById("navbar").style.top = "-70px";
    }, 900);

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {

        document.getElementById("navbar").style.backgroundColor = "#0b2b50"
        document.getElementById("navbar").style.top = "0";


    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent"
        document.getElementById("navbar").style.top = "-70px";


    }
    prevScrollpos = currentScrollPos;
}

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});



//for safari

if (isSafari) {
    window.addEventListener('scroll', () => {
        var elmnt = document.getElementsByTagName('html')[0];
        var x = elmnt.scrollLeft;
        var y = elmnt.scrollTop;

        if (y == 0) {
            document.getElementById("navbar").style.backgroundColor = "#0b2b50"
            document.getElementById("navbar").style.top = "0"
        }
    })


    window.addEventListener('resize', () => {

        items.forEach((e) => {
            e.onclick = () => {
                console.log('click')
                $("html, body").animate({ scrollTop: document.getElementById(e.name).offsetTop }, 600);
                document.getElementById("navbar").style.backgroundColor = "transparent"
                document.getElementById("navbar").style.top = "-70px";



            }


        })
    })


}

//end of for safari

Array.from(document.getElementsByClassName('form-control')).forEach((e) => {
    e.onfocus = () => {
        e.style.backgroundColor = "#252222"
        e.style.color = "white"

    }
})


let collapsediv = Array.from(document.getElementsByClassName('cpdiv'));
console.log(collapsediv)

collapsediv.forEach((e) => {
    e.onclick = () => {
        console.log(e.childNodes[3].childNodes[1].childNodes[1].className)

        if (e.childNodes[3].childNodes[1].childNodes[1].className == "fas fa-plus collapsed") {
            e.childNodes[3].childNodes[1].childNodes[1].className = "fas fa-minus"
            return
        }
        if (e.childNodes[3].childNodes[1].childNodes[1].className == "fas fa-minus") {
            e.childNodes[3].childNodes[1].childNodes[1].className = "fas fa-plus"
            return


        }


    }
})