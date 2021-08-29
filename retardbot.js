/*
  _____  ______ _______       _____  _____  ____   ____ _______ 
 |  __ \|  ____|__   __|/\   |  __ \|  __ \|  _ \ / __ \__   __|
 | |__) | |__     | |  /  \  | |__) | |  | | |_) | |  | | | |   
 |  _  /|  __|    | | / /\ \ |  _  /| |  | |  _ <| |  | | | |   
 | | \ \| |____   | |/ ____ \| | \ \| |__| | |_) | |__| | | |   
 |_|  \_\______|  |_/_/    \_\_|  \_\_____/|____/ \____/  |_|   

A CollabVM bot (based on Fylrobot aka Faggotbot) made to cause mass destruction.

How to load:
1. Come to a UserVM
2. Open the Console (CTRL+SHIFT+I)
3. Paste this entire script into there
At the very bottom, you should see a panel where you enter commands.

How to use:
Enter commands and press the Send button.

Commands:
!fuckerscript - have fun
!rapidname2 - get jjjj confused
!screenshot - takes a screenshot of the vm
!record - records the vm
!custommessage - says something as someone
!autotype - auto-types something into the vm
   __  ___        __      __          __  __          
  /  |/  /__ ____/ /__   / /  __ __  / /_/ /  ___ ___ 
 / /|_/ / _ `/ _  / -_) / _ \/ // / / __/ _ \/ -_) -_)
/_/  /_/\_,_/\_,_/\__/ /_.__/\_, /  \__/_//_/\__/\__/ 
                            /___/                     
*/
console.log("retardbot script loaded");

var ignoredUsers = [];
var turnspam; // saving for later
var rapidname; // also saving for later
var css =
        "body {\n  margin: 0px;\n  font-family: &quot;Arial&quot;;\n}\n\n.example {\n  padding: 20px;\n}\n\ninput[type=button] {\n  padding: 5px 10px;\n  margin: 10px 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  background: #ddd;\n  border: 1px solid #ccc;\n}\ninput[type=button]:hover {\n  background: #ccc;\n}\n\n.confirm {\n  display: none;\n}\n.confirm > div:first-of-type {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0px;\n  left: 0px;\n}\n.confirm > div:last-of-type {\n  padding: 10px 20px;\n  background: white;\n  position: absolute;\n  width: auto;\n  height: auto;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  border: 1px solid #333;\n}\n.confirm > div:last-of-type div:first-of-type {\n  min-width: 150px;\n  padding: 10px;\n}\n.confirm > div:last-of-type div:last-of-type {\n  text-align: right;\n}",
    cssElement = document.createElement("style");
(cssElement.innerHTML = css), document.head.appendChild(cssElement);
var ui = { confirm: async (n) => createConfirm(n) },
    createConfirm = (n) =>
        new Promise((e, i) => {
            $("#confirmMessage").text(n),
                $("#confirmYes").off("click"),
                $("#confirmNo").off("click"),
                $("#confirmYes").on("click", () => {
                    $(".confirm").hide(), e(!0);
                }),
                $("#confirmNo").on("click", () => {
                    $(".confirm").hide(), e(!1);
                }),
                $(".confirm").show();
        }),
    save = async () => {
        if (localStorage.getItem("noshow"));
        else {
            location.href = "#vm-view";
            if (await ui.confirm("welcome to retardbot.")) console.log("okay clicked");
            else {
                console.log("do not show again");
                localStorage.setItem("noshow", "yes");
            }
        }
    },
    confirmhtml =
        '<div class="confirm">\n  <div></div>\n  <div>\n    <div id="confirmMessage">welcome to retardbot.</div>\n    <div>\n      <input id="confirmYes" type="button" value="Okay" />\n      <input id="confirmNo" type="button" value="Don\'t show this again" />\n    </div>\n  </div>\n</div>',
    newDiv = document.createElement("div");
(newDiv.innerHTML = confirmhtml), document.body.appendChild(newDiv), save();
function crash() {
    var txt = "a";
    while (1) {
        txt = txt += "a";
    }
}
var tunnel = {};
var userName = document.getElementById("chat-user").innerHTML;
tunnel.changeName = function (user) {
    var usern = document.getElementById("username-box");
    var ok = document.getElementById("username-ok-btn");
    usern.value = user;
    ok.click();
};
tunnel.chat = function (phrase) {
    var chatI = document.getElementById("chat-input");
    chatI.value = phrase;
    document.getElementById("chat-send-btn").click();
};
tunnel.takeTurn = function () {
    document.getElementById("turn-btn").click();
};
tunnel.endTurn = function () {
    document.getElementById("end-turn-btn").click();
};
tunnel.vote = function (vote) {
    var vy = document.getElementById("vote-yes");
    var vn = document.getElementById("vote-no");
    if (vote === 0) {
        vy.click();
        if (vote === 1) {
            vn.click();
        }
    }
};
var autotyper = {};
autotyper.typePhrase = function (str) {
    function optKey(letter) {
        var num = letter.charCodeAt(0);
        let element = document.querySelector("canvas");
        element.dispatchEvent(new KeyboardEvent("keydown", { key: letter, code: "Key" + letter, keyCode: num, which: num, shiftKey: false, ctrlKey: false, metaKey: false }));
        element.dispatchEvent(new KeyboardEvent("keyup", { key: letter, code: "Key" + letter, keyCode: num, which: num, shiftKey: false, ctrlKey: false, metaKey: false }));
    }
    for (var i = 0; i < str.length; i++) {
        var curLetter = str.charAt(i);
        optKey(curLetter);
    }
};
function atPrompt() {
    var k = prompt("What do you want to autotype? (Focus on VM display before it starts autotyping)");
	var tgg = prompt("How many milliseconds? (1000ms = 1s)");
    document.querySelector("canvas").focus();
    setTimeout(function () {
        autotyper.typePhrase(k);
    }, tgg);
}
var name = document.getElementById("chat-user").innerHTML;
// tunnel.changeName("Fylrobot");
// tunnel.chat("Fylrobot has been invited by @" + name + "!");
tunnel.changeName(name);
var input = document.createElement("input");
input.placeholder = "Bot commands here...";
input.id = "inp";
document.body.appendChild(input);
var btn = document.createElement("button");
btn.onclick = getInput;
btn.innerHTML = "Send!";
document.body.appendChild(btn);
var btn2 = document.createElement("button");
btn2.onclick = function () {
    window.open("https://unzor.github.io/FylrobotJS/commands.txt");
};
btn2.innerHTML = "Commands";
document.body.appendChild(btn2);
input.style = "color:#999; margin: auto; padding:9px; font-size: 12px;border:2px solid gray; border-radius:2px; background-color:#FFF;";
btn.style = "background-color: #4CAF50; border: 2px solid gray;color: white;padding: 9px;  text-align: center; text-decoration: none;display: inline-block;font-size: 12px;border-radius:2px; margin-left:6px;";
btn2.style = "background-color: #4CAF50; border: 2px solid gray;color: white;padding: 9px;  text-align: center; text-decoration: none;display: inline-block;font-size: 12px;border-radius:2px; margin-left:6px;";
function getInput() {
    // tunnel.chat(input.value); nah fuck you im not telling everyone what im doing
    if (input.value === "!fuckerscript") {
        input.value = "";
		alert("press shift+f to stop");
		var p = "GET FUCKED LMFAO"
        var b = p + "                 ";
		tunnel.vote("vote", "1");
        rapidname = setInterval(function () {
			var rArray = ["RETARDBOT_","jjjjbot_","GETFUCKED_","TROLLED_","OBAMA_","Janusbot_","HILDAFAGBOT_","HILDABOT_","AUTISM_","VMRAPER_","guest","AUTISMBOT_","MVBOT_","EGGBOT_","MDMCKBOT_","CUMBOT_","jjjj_","URFUCKED_","HOTVMSEX","DARKOKBOT_","KYS_","SHITURSELF_","NIGGABOT_","STRAGBOT_","STRAGGOTBOT_"];
			var num = Math.floor(Math.random() * rArray.length);
            tunnel.changeName(rArray[num] + Math.floor(Math.random() * 100000));
        }, 10);
        turnspam = setInterval(function () {
            tunnel.takeTurn();
        }, 10);
        var i1 = setInterval(function () {
            tunnel.chat(p);
        }, 1250);
        var i2 = setInterval(function () {
            tunnel.chat(b);
        }, 2750);
        document.addEventListener("keydown", function (event) {
            if (event.shiftKey && event.keyCode == 70) {
                clearInterval(i1);
                clearInterval(i2);
				clearInterval(turnspam);
				clearInterval(rapidname);
				tunnel.changeName(name);
				tunnel.endTurn();
            }
        // tunnel.changeName("Fylrobot");
        // tunnel.chat("get crashed");
        // tunnel.changeName(name);
        // crash();
		});
	}
    if (input.value === "!turnspam") {
        input.value = "";
        // tunnel.changeName("Fylrobot");
        // tunnel.chat("Turnspam is on. Message by Fylrobot, at unzor.github.io/FylrobotJS.");
        tunnel.changeName(name);
        turnspam = setInterval(function () {
            tunnel.takeTurn();
        }, 10);
		alert("to stop, press shift+r");
		document.addEventListener("keydown", function (event) {
            if (event.shiftKey && event.keyCode == 82) {
                clearInterval(turnspam);
            }
        });
    }
    if (input.value === "!spam") {
        input.value = "";
        // tunnel.changeName("Fylrobot");
        // tunnel.chat("Spam turned on. To stop spam, press CTRL+Q. Message by Fylrobot, at unzor.github.io/FylrobotJS.");
        tunnel.changeName(userName);
        var p = prompt("What would you like to spam?");
		var p3 = prompt("How fast? (in ms)");
        var b = p + "                 ";
        var i1 = setInterval(function () {
            tunnel.chat(p);
        }, p3);
        var i2 = setInterval(function () {
            tunnel.chat(b);
        }, p3 + 1500);
        document.addEventListener("keydown", function (event) {
            if (event.ctrlKey && event.keyCode == 81) {
                clearInterval(i1);
                clearInterval(i2);
            }
        });
        var div = document.createElement("div");
        div.style.backgroundColor = "black";
        div.style.color = "white";
        div.innerHTML = "Note: to stop spam, press CTRL+Q.";
        div.style.position = "fixed";
        div.style.bottom = "90%";
        div.style.left = "42%";
        div.style.zIndex = "999999999";
        document.body.appendChild(div);
        setTimeout(function () {
            div.style.display = "none";
        }, 4000);
    }
    if (input.value === "!rapidname") {
        input.value = "";
        // tunnel.changeName("Fylrobot");
        // tunnel.chat("Rapid name turned on.");
        tunnel.changeName(name);
        rapidname = setInterval(function () {
			var rArray = ["RETARDBOT_","jjjjbot_","GETFUCKED_","TROLLED_","OBAMA_","Janusbot_","HILDAFAGBOT_","HILDABOT_","AUTISM_","VMRAPER_","guest","AUTISMBOT_","MVBOT_","EGGBOT_","MDMCKBOT_","CUMBOT_","jjjj_","URFUCKED_","HOTVMSEX","DARKOKBOT_","KYS_","SHITURSELF_","NIGGABOT_","STRAGBOT_","STRAGGOTBOT_"];
			var num = Math.floor(Math.random() * rArray.length);
            tunnel.changeName(rArray[num] + Math.floor(Math.random() * 100000));
        }, 10);
		alert("to stop, press shift+s");
		document.addEventListener("keydown", function (event) {
            if (event.shiftKey && event.keyCode == 83) {
                clearInterval(rapidname);
				tunnel.changeName(name);
            }
        });
    }
    if (input.value === "!rapidname2") {
        input.value = "";
        // tunnel.changeName("Fylrobot");
        // tunnel.chat("Rapid name turned on.");
        tunnel.changeName(name);
        rapidname = setInterval(function () {
			var rArray = ["jjjj2","kkkk","bbbb","xxxx","gggg","eeee","aaaa","DarkOK","Hildaboo","jjjj_2","jjjj v2"];
			var num = Math.floor(Math.random() * rArray.length);
            tunnel.changeName(rArray[num]);
        }, 10);
		alert("to stop, press shift+s");
		document.addEventListener("keydown", function (event) {
            if (event.shiftKey && event.keyCode == 83) {
                clearInterval(rapidname);
				tunnel.changeName(name);
            }
        });
    }
    if (input.value === "!randommessage") {
        input.value = "";
        var rArray = ["MAD?"];
        var num = Math.floor(Math.random() * 4);
        tunnel.changeName("Niggers");
        tunnel.chat(rArray[num]);
        tunnel.changeName(name);
    }
    if (input.value === "!breakkeyboard") {
        input.value = "";
        tunnel.changeName("Fylrobot");
        tunnel.chat("crashed you for being a forkie");
        tunnel.changeName(name);
        crash();
    }
    if (input.value === "!screenshot") {
        input.value = "";
        var vmimage = document.querySelector("canvas").toDataURL();
        var oj = document.createElement("a");
        oj.href = vmimage;
        oj.innerHTML = "a";
        oj.download = "download";
        oj.style.opacity = "0";
        document.body.appendChild(oj);
        oj.click();
    }
    if (input.value === "!help") {
        input.value = "";
        // tunnel.changeName("Fylrobot");
        alert("Please see the top comment in the script.");
        // tunnel.changeName(name);
    }
    if (input.value === "!advertise") {
        input.value = "";
		alert("fuck off");
        /*
		setInterval(function () {
            // tunnel.changeName("Fylrobot");
            // tunnel.chat("Want Fylrobot for yourself? Go to unzor.github.io/FylrobotJS to get it.");
            tunnel.changeName(name);
        }, 100000);
		*/
    }
    if (input.value === "!custommessage") {
        input.value = "";
        var p = prompt("What would you like to say?");
		var p22 = prompt("As who?");
        tunnel.changeName(p22);
        tunnel.chat(p);
        tunnel.changeName(name);
    }
    if (input.value === "!disconnect") {
        input.value = "";
        location.reload();
    }
    if (input.value === "!record") {
        input.value = "";
        var seconds = prompt("How long to record?");
        var mss = seconds + "000";
        // tunnel.changeName("Fylrobot");
        // tunnel.chat("Video of VM will be downloaded. Message by Fylrobot, at unzor.github.io/FylrobotJS/");
        tunnel.changeName(name);
        var canvas = document.querySelector("canvas");
        var stream = canvas.captureStream(25);
        var recordedChunks = [];
        console.log(stream);
        var options = { mimeType: "video/webm; codecs=vp9" };
        mediaRecorder = new MediaRecorder(stream, options);
        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.start();
        function handleDataAvailable(event) {
            console.log("data-available");
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
                console.log(recordedChunks);
                download();
            } else {
            }
        }
        function download() {
            var blob = new Blob(recordedChunks, { type: "video/webm" });
            var url = URL.createObjectURL(blob);
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "vm-recording.mp4";
            a.click();
            window.URL.revokeObjectURL(url);
        }
        setTimeout((event) => {
            console.log("stopping");
            mediaRecorder.stop();
        }, mss);
    }
    if (input.value === "!customscript") {
        input.value = "";
        var url = prompt("What is the the URL to the script you want to add?");
        var scrept = document.createElement("script");
        scrept.src = url;
        document.head.appendChild(scrept);
		alert("custom script added");
        // tunnel.changeName("Fylrobot");
        // tunnel.chat("Custom script added. Message by Fylrobot, at unzor.github.io/FylrobotJS.");
        tunnel.changeName(name);
    }
    if (input.value === "!darkmode") {
        input.value = "";
        ("use strict");
        var styleElem = document.createElement("style");
        styleElem.type = "text/css";
        styleElem.innerHTML = ` body { background-color: #222; } .navbar>.container-fluid, .thumbnail { background-color: #333 !important; background-image: none !important; } .btn { background-color: #333 !important; background-image: none !important; border-color: #444 !important; color: #ccc !important; text-shadow: none !important; } .list-group-item.disabled { background-color: #444 !important; color: #ccc; filter: none; } .list-group-item { background-color: black; } #chat-panel, #chat-input, #chat-user, .guac-keyboard-disabled, .modal-content, .alert { color: white; background-color: #111; } .message-pane li { border-bottom: 1px solid #333; box-shadow: 0 1px 0 0 #666; } .navbar, .page-header, .thumbnail { border-color: #444 !important; border-bottom-color: #444 !important; } .navbar-brand, .navbar-collapse>ul>li>a, .page-header>h2, #vm-list, .thumbnail>.caption>h4 { color: #ddd !important; } .username::before { color: #fff; } .username, .message-pane .username { color: white; } .input-group-addon, .form-control { border-color: #333; } .list-group-item { border-color: #444; } .panel { border-color: #444; } .message-pane li:hover { background-color: #2b2b2b; } .has-turn.list-group-item { background-color: #365c6b; color: white; } .waiting-turn.list-group-item { background-color: #66662C; color: white; } .alert-info { background-image: none; border-color: #434343; color: white; } `;
        document.head.appendChild(styleElem);
    }
    if (input.value === "!autotype") {
        atPrompt();
    }
    if (input.value === "!voteyes") {
        input.value = "";
        tunnel.vote("vote", "1");
    }
    if (input.value === "!voteno") {
        input.value = "";
        tunnel.vote(1);
    }
    if (input.value.includes("!ignore")) {
        // tunnel.changeName("Fylrobot");
        alert("User " + input.value.split("!ignore ").pop() + " ignored. Use !unignore to unhide the person.");
        tunnel.changeName(name);
        var targetNode = document.body;
        var config = { attributes: true, childList: true, subtree: true };
        var callback = function (mutationsList, observer) {
            for (const mutation of mutationsList) {
                if (mutation.type === "childList") {
                    ignoredUsers.forEach(function (element) {
                        if (mutation.addedNodes[0].querySelector(".username").innerHTML === element) {
                            document.getElementById("chat-sound-btn").click();
                            mutation.addedNodes[0].remove();
                            document.getElementById("chat-sound-btn").click();
                        }
                    });
                } else if (mutation.type === "attributes") {
                }
            }
        };
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
        ignoredUsers.push(input.value.split("!ignore ").pop());
        input.value = "";
    }
    if (input.value.includes("!unignore")) {
        ignoredUsers.splice(ignoredUsers.indexOf(input.value.split("!unignore ").pop()));
        // tunnel.changeName("Fylrobot");
        alert("User " + input.value.split("!unignore ").pop() + " unignored.");
        tunnel.changeName(name);
    }
}
