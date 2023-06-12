var arrow = document.getElementById("top-arrow");
arrow.addEventListener("click", function (e) {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.smoothScroll = function (target) {
    var scrollContainer = target;
    do {
        //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 10;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while ((target = target.offsetParent));

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + ((b - a) / 30) * i - 20;
        setTimeout(function () {
            scroll(c, a, b, i);
        }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

function handleSubmitForm(event) {
    const emailId = document.getElementById("user-email").value;
    const url =
        "http://project1-elb-871616855.ap-south-1.elb.amazonaws.com:5000";

    const requestHeaders = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };
    const userAccessMutation = `mutation Gm_UserAccessRequest($input: gi_UserAccessRequest) {
    gm_UserAccessRequest(input: $input)
    }`;
    const variables = {
        input: {
            email: emailId,
            //Ip: ""
            //Location: "",
        },
    };
    const requestBody = JSON.stringify({
        query: userAccessMutation,
        variables,
    });

    postEmailData(url, requestHeaders, requestBody).then(res => {
        const { data } = res;
        if (data.gm_UserAccessRequest) {
            const elem = document.getElementById("registartion-response");
            elem.innerHTML = "Registration Done";
        } else {
            const elem = document.getElementById("registartion-response");
            elem.innerHTML = "Registration Failed. Please try again!";
        }
    });
    event.preventDefault();
    event.stopPropagation();
}

async function postEmailData(url = "", requestHeaders, requestBody) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: requestHeaders,
        body: requestBody,
    });
    return response.json();
}
