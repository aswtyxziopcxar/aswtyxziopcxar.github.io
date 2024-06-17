(function(global) {
    const messageLogAlerts = [];

    function createMessageLogAlert() {
        const messageLogAlert = document.createElement("div");
        messageLogAlert.className = "message-log-alert";
        document.body.appendChild(messageLogAlert);
        return messageLogAlert;
    }

    const style = document.createElement("style");
    style.innerHTML = `
        .message-log-alert {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #ffffffc2;
            font-size: 15px;
            border-radius: 20px;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            transition: max-width 0.8s ease-in-out, min-width 0.8s ease-in-out, padding 0.8s ease-in-out;
            z-index: 10000;
        }
        
        .message-log-alert.show {
            max-width: 300px;
            min-width: 200px;
            padding: 15px 15px;
        }
        
        .message-log-alert.hide {
            max-width: 0;
            min-width: 0;
            padding: 15px 0;
        }
    `;
    document.head.appendChild(style);

    function showAlert(message) {
        const messageLogAlert = createMessageLogAlert();
        messageLogAlerts.push(messageLogAlert);

        messageLogAlert.textContent = message;

        const reflow = messageLogAlert.offsetWidth;
        messageLogAlert.classList.add("show");

        setTimeout(() => {
            messageLogAlert.classList.remove("show");
            messageLogAlert.classList.add("hide");

            messageLogAlert.addEventListener("transitionend", function handleHideTransitionEnd() {
                if (messageLogAlert.classList.contains("hide")) {
                    document.body.removeChild(messageLogAlert);
                    messageLogAlerts.splice(messageLogAlerts.indexOf(messageLogAlert), 1);
                    messageLogAlert.removeEventListener("transitionend", handleHideTransitionEnd);
                }
            });
        }, 3000);
    }

    global.sistem = global.sistem || {};
    global.sistem.message = global.sistem.message || {};
    global.sistem.message.log = showAlert;
})(window);

(function(global) {
    const messageSistemInfo = [];

    function createMessageSistemInfo() {
        const elementMessageSistemInfo = document.createElement("div");
        const h1MessageSistemInfo = document.createElement("h1");
        const pMessageSistemInfo = document.createElement("p");
        const btnMessageSistemInfo = document.createElement("button");
        
        elementMessageSistemInfo.className = "message-sistem-info";
        document.body.appendChild(elementMessageSistemInfo);
        elementMessageSistemInfo.appendChild(h1MessageSistemInfo);
        elementMessageSistemInfo.appendChild(pMessageSistemInfo);
        elementMessageSistemInfo.appendChild(btnMessageSistemInfo);
        
        btnMessageSistemInfo.textContent = "OK";
        btnMessageSistemInfo.onclick = () => {
            document.body.removeChild(elementMessageSistemInfo);
            const index = messageSistemInfo.indexOf(elementMessageSistemInfo);
            if (index > -1) {
                messageSistemInfo.splice(index, 1);
            }
        };
        
        return elementMessageSistemInfo;
    }
    
    const style2 = document.createElement("style");
    style2.innerHTML = `
        .message-sistem-info {
            position: fixed;
            width: 60%;
            height: 40%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            box-shadow: 0 0 8px #888;
            border-radius: 15px;
            overflow-x: hidden;
            overflow-y: scroll;
            padding: 25px;
            font-family: "Arial", sans-serif;
            backdrop-filter: blur(5px);
        }
        
        .message-sistem-info > h1 {
            font-size: 18px;
            margin: 0;
            color: #000;text-align: center;
        }
        
        .message-sistem-info > p {
            font-size: 14px;
            margin: 10px 0;
            color: #232323;
            overflow-y: auto;
            max-height: calc(100% - 50px);
            text-align: left;
        }
        
        .message-sistem-info > button {
            position: absolute;
            bottom: 0;
            right: 0;
            margin: 10px;
            font-size: 15px;
            background: transparent;
            border: none;
            color: #e42f26;
        }
    `;
    document.head.appendChild(style2);
    
    function showMessageSistemInfo(message) {
        const elementMessageSistemInfo = createMessageSistemInfo();
        messageSistemInfo.push(elementMessageSistemInfo);

        elementMessageSistemInfo.querySelector("h1").textContent = "Information From Web";
        elementMessageSistemInfo.querySelector("p").textContent = message;
    }

    global.sistem = global.sistem || {};
    global.sistem.message = global.sistem.message || {};
    global.sistem.message.info = showMessageSistemInfo;
})(window);
