var id_revive="0cceecb9cae9f51a31123c541910d59b";function extCheck(e,t){var a=RegExp("(\\W|^)"+t+"(\\W|$)","gi");if(e.match(a))return!0}function extTagging(e,t,a){var n=document.getElementsByTagName("meta"),r=(n.namedItem("keywords")||n.namedItem("Keywords")||n.namedItem("KEYWORDS")||{}).content;try{extCheck(r,t)&&create_ins(e,t,a)}catch(m){console.log(m)}}function create_ins(e,t,a){for(var n=document.getElementsByClassName("dtk-ins-"+a),r=0;r<n.length;r++){var m=document.getElementsByClassName("dtk-ins-"+a)[r];m.setAttribute("data-revive-zoneid",a),m.setAttribute("data-revive-id",id_revive),m.setAttribute("data-revive-"+e,t)}}function getKeywords(){var e=document.getElementsByTagName("meta");return(e.namedItem("keywords")||e.namedItem("Keywords")||e.namedItem("KEYWORDS")||e.namedItem("keyword")||meta.namedItem("Keyword")||e.namedItem("KEYWORD")||{}).content.toLowerCase().split(",").map(function(e){return e.trim().replace(/\s\s+/g," ")})}function dtkRefreshBanner(){try{var e=document.getElementsByClassName("dtkRefreshBanner");if(e.length>0){for(var t=0;t<e.length;t++)e[t].removeAttribute("data-revive-loaded");window.reviveAsync&&window.reviveAsync[id_revive].refresh()}slot_dfp_remove.length>0&&googletag.cmd.push(function(){googletag.pubads().refresh(slot_dfp_remove)})}catch(a){console.log(a.name),console.log(a.message)}}