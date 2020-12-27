var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
let items = Array.from(document.getElementsByClassName('nav-link'))

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
        console.log("xyz")
    }
};


(function($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function() {
        $(this).on('blur', function() {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })



    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit', function() {
        var check = true;

        if ($(name).val().trim() == '') {
            showValidate(name);
            check = false;
        }


        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }

        if ($(message).val().trim() == '') {
            showValidate(message);
            check = false;
        }

        return check;
    });


    $('.validate-form .input2').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);


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
    }, 700);

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