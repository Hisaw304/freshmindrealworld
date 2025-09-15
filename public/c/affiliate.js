// $(document).ready(function() {

//     var params = new URLSearchParams(window.location.search);

//     if(!params) return;
//     console.log(params);

//     var links = document.querySelectorAll('a:not([ignore_aff])');
//     links.forEach(function (link) {
//       if (link.getAttribute('href')) {

//         link.search = params.toString();

//         //link.href = link.href;
//       }
//     });
// });

//affiliates
var params = new URLSearchParams(window.location.search);
var affiliateId = params.get("a");
var liveCode = params.get("live");
var gtm = params.get("gtm");
var origin = "https://www.jointherealworld.com";
var purchaseLink = affiliateId
  ? [origin + "/checkout?" + params.toString()].join("")
  : origin + "/checkout";
var loginLink = affiliateId
  ? ["http://app.jointherealworld.com?" + params.toString()].join("")
  : "http://app.jointherealworld.com";
var linkParams = affiliateId ? params.toString() : "";
liveCode = affiliateId ? liveCode : null;
if (liveCode) {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = liveCode;
  (function () {
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
} else {
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "z3s8zv7r",
  };
  // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/z3s8zv7r'
  (function () {
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
      ic("reattach_activator");
      ic("update", w.intercomSettings);
    } else {
      var d = document;
      var i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      w.Intercom = i;
      var l = function () {
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.intercom.io/widget/z3s8zv7r";
        var x = d.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
        if (window.location.pathname === "/support") Intercom("show");
      };
      if (document.readyState === "complete") {
        l();
      } else if (w.attachEvent) {
        w.attachEvent("onload", l);
      } else {
        w.addEventListener("load", l, false);
      }
    }
  })();
}
if (gtm) {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", gtm);
}
//checkout links
var buyButtons = document.querySelectorAll(".checkout-btn");
buyButtons.forEach(function (link) {
  if (
    link.getAttribute("href") &&
    link.getAttribute("href").includes("/checkout")
  ) {
    link.href = purchaseLink;
  }
});
//login links
var loginButtons = document.querySelectorAll(".login-btn");
loginButtons.forEach(function (link) {
  if (link.getAttribute("href")) {
    link.href = loginLink;
  }
});
// main links
var lpLinks = document.querySelectorAll(".lp-link");
lpLinks.forEach(function (link) {
  if (link.getAttribute("href")) {
    link.search = params.toString();
  }
});

$(".checkout-btn").on("click", function () {
  posthog.capture("join_now");
});
