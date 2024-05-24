testdata = {
    "extra": [
        {
            "extra": [
                {
                    "bold": 1,
                    "color": "dark_red",
                    "text": "["
                },
                {
                    "bold": 1,
                    "color": "red",
                    "text": "OP"
                },
                {
                    "bold": 1,
                    "color": "dark_red",
                    "text": "] "
                },
                {
                    "color": "red",
                    "text": ""
               }
           ],
           "text": ""
       },
       {
           "extra": [
               {
                   "color": "red",
                   "text": "Parker2991"
               }
           ],
           "text": ""
       },
       {"":":"},
       {"":" "},
       {"":"e"}
   ],
   "text": ""
}

function parseMessage(message, color = true) {
    console.log(message);
    let ret = ""
    if (color) {
        for (thing in message) {
            console.log(thing);
        }
    } else {
        for (thing in message) {
            console.log(thing);
        }
    }
    return ret;
}

parseMessage(testdata)
