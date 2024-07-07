function forExtraColor(part) {
    let ret = "";
    const colorMap = {"black": "0", "dark_blue": "1", "dark_green": "2", "dark_aqua": "3", "dark_red": "4", "dark_purple": "5", "gold": "6", "gray": "7", "dark_gray": "8", "blue": "9", "green": "a", "aqua": "b", "red": "c", "light_purple": "e", "white": "f"}
    for (let index in part) {
        if (!!part[index]["extra"]) ret += forExtraColor(part[index]["extra"]);
        else {
            let data = part[index];
            let text = data["text"] != undefined? data["text"] : data[""];
            if (data["bold"] == 1) ret += "§l";
            if (!!data["color"]) ret += "§" + colorMap[data["color"]];
            if (data["obfuscated"] == 1) ret += "§k";
            if (data["strikethrough"] == 1) ret += "§m";
            if (data["underline"] == 1) ret += "§n";
            if (data["italic"] == 1) ret += "§o";
            ret += text;
            if (data["bold"] == 1 || !!data["color"] || data["obfuscated"] == 1 || data["strikethrough"] == 1 || data["underline"] == 1 || data["italic"] == 1) ret += "§r";
        }
    }
    return ret;
}

function forExtra(part) {
    let ret = "";
    for (let index in part) {
        if (!!part[index]["extra"]) ret += forExtra(part[index]["extra"]);
        else {
            let data = part[index];
            let text = data["text"] != undefined? data["text"] : data[""];
            ret += text;
        }
    }
    return ret;
}

function parseMessage(message, color = true) {
    let ret = "";
    if (color) {
        for (let label in message) {
            if (label == "extra") ret += forExtraColor(message[label]);
        }
    } else {
        for (let label in message) {
            if (label == "extra") ret += forExtra(message[label]);
        }
    }
    if (!ret) console.warn("Message parsing resulted in no output! Raw message follows.", message)
    return ret;
}

module.exports = { parseMessage }
