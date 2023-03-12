const qb = {
    "ILJO": {
        "See {L}{Z}":
        {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9ghlFeAtAeglBeg0CeBtAegli0RpAeAtglAezhRpil?KeAgH",
            "minimals": "v115@9gB8R4Rph0A8whA8R4A8Rpg0B8whF8g0B8whI8whJe?AgH",
            "cover": 0.142857143,
            "queues": (queue) => {
                return see(queue, "LZ")
            }
        },
        "See {J}{S}":
        {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@+gQ4Feh0AeR4CeglBeg0Aeg0Q4AeRpilg0Aei0Rpzh?JeAgH",
            "minimals": "v115@9gwhA8hlRpBtB8whB8glRpA8BtA8whB8glF8whI8Je?AgH",
            "cover": 0.142857143,
            "queues": (queue) => {
                return see(queue, "JS")
            }
        },
        "Stick's 3p":
        {
            "type": "general",
            "saves": {
                "T": "96.43%",
                "O": "1.59%"
            },
            "fumen": "v115@Rhg0DeglBeRpi0ilBeRpJeAgH",
            "minimals": "v115@9gilR4AtxhRpglg0R4BtxhRpA8i0AtA8xhH8xhB8Je?AgWaA1CoAB4ngHBFbcRASEpRBZLaHBQecRAylAAA9gQ4Bti?0xhRpR4Btglg0xhRpA8Q4ilA8xhH8xhB8JeAAA9gQ4hlh0A?txhRpR4glg0BtxhRpA8Q4glg0AtA8xhH8xhB8JeAAPaA08n?ABzngHBFbcRASEB6AYOaHBQecRAylAAA9gilR4Atzhglg0R?4BtzhA8i0AtA8RpH8RpB8JeAAPaAT73UB4ngHBFbcRAS02K?BWLaHBQecRAylAAA9gQ4Btzhi0R4Btglzhg0A8Q4ilA8RpH?8RpB8JeAAPaAT4XHByngHBFbcRAS0eHBTUaHBQecRAylAAA?9gRpg0zhR4glRpi0BtilA8zhA8BtH8R4B8JeAAPaAS+HOB2?ngHBFbcRAS0W9AUUaHBQecRAylAAA9gQ4Bt0hRpR4i0hlwh?RpA8Q4Btg0A8glwhH8glwhB8JeAAPaAy8fRBxngHBFbcRAS?0W9AQIaHBQecRAylAAA9gRpilBti0RpglzhR4g0A8zhA8R4?H8BtB8JeAAPaAy5/DBzngHBFbcRAS0m2AYIaHBQecRAylAA?A9gQ4zhAtwhh0glR4RpBtwhilA8Q4RpAtA8whg0H8whg0B8?JeAAPZARB45A5ngHBFbcRASkO6A2mv2AUo78AZAAAA9gBtz?hhlRpzhR4h0RpA8BtR4A8g0glH8g0glB8JeAAPZAx/P9A0n?gHBFbcRASUELB4mv2AUo78AZAAAA9gzhglBti0ywzhR4g0A?8wwilA8R4H8BtB8JeAAPXAQFMVBFrnRASo78AYeMzAVYt2A?Fr4AA9gywR4Atwhh0glzhBtwhilA8wwR4AtA8whg0H8whg0?B8JeAAA",
            "notes": "As long as you do the {L}{Z}/{J}{S} qb when possible,<br>this setup is 100% save {T}."
        }
    },
    "IJLS": {
        "See {Z}, {Z} before {S}":
        {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@Chh0BeAtEeg0BeBtEeg0R4AtglzhAeR4ilJeAgH",
            "minimals": "v115@9gh0hlwhB8R4A8g0RpglwhA8R4B8g0RpglwhI8whE8?JeAgH9gglRpg0whB8R4A8glRpg0whA8R4B8hlh0whI8whE8?JeAgH",
            "cover": 0.142857143,
            "queues": (queue) => {
                if (queue == "TSZ" || queue == "STZ") return false;
                return see(queue, "Z")
            },
            "notes": "Simple shoe setup, complete the box with {J}{S}, and just a simple {I}{J}{L}{O} 4x4 box on the left"
        },
        "See {S}{Z}, {S} before {Z}":
        {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@JhBthlAeR4Aeg0zhglT4i0BtglAeR4KeAgH",
            "minimals": "v115@HhRpzhh0hlRpD8g0B8glF8g0B8glJeAgH",
            "cover": 0.142857143,
            "queues": (queue) => {
                if (see(queue, "OSZ")) return true;
                if (queue.indexOf("S") == 2) return false;
                return see(queue, "SZ")
            }
        },
        "See {L}{O}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@Khg0glBeglRpAeR4g0jlRpR4h0hlzhJeAgH",
            "minimals": "v115@Hhh0R4Btzhg0R4B8BtC8g0I8JeAgH",
            "queues": (queue) => {
                return see(queue, "LO")
            }
        },
        "See {J}{O}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@Hhi0BeRpCeg0ilzhR4g0gli0RpR4KeAgH",
            "minimals": "v115@HhzhR4BthlC8R4B8BtglI8glJeAgH",
            "queues": (queue) => {
                return see(queue, "JO")
            }
        },
        "See {J}{S}/{L}{S}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@NhT4Deg0T4glzhi0ilJeAgH",
            "minimals": "v115@HhBthlRpzhg0BtglRpD8i0glF8JeAgHHhgli0Rpzhg?lBtg0RpD8hlBtF8JeAgH",
            "queues": (queue) => {
                return see(queue, "LS") || see(queue, "JS")
            }
        },
        "See {I}{S}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@ChQ4Deh0CeR4Ceg0ilzhR4g0glzhS4KeAgH",
            "minimals": "v115@Hhi0RpA8BthlB8g0RpB8BtglI8glJeAgH",
            "queues": (queue) => {
                return see(queue, "IS")
            }
        },
        "See {O}{S}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9gQ4IeR4FeRpilR4g0zhglS4Aei0RpJeAgH",
            "minimals": "v115@HhA8Bthlg0zhB8Btgli0F8glE8JeAgH",
            "queues": (queue) => {
                return see(queue, "OS")
            }
        },
        "See {I}{O}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9gwhIewhIewhg0Geglwhi0CeilJeAgH",
            "minimals": "v115@9gA8ilwhh0R4AtA8glRpwhg0R4BtB8Rpwhg0R4AtE8?whR4C8JeAgH9gA8RpBtg0zhA8RpR4i0R4B8R4BtglR4E8il?C8JeAgH9gA8ilg0AtzhA8glRpBtT4B8RpAtT4E8i0C8JeAg?H9gA8ilBtzhA8glRph0T4B8Rpg0T4E8g0BtC8JeAgH9gA8Q?4zhilAtA8R4Rpi0BtB8Q4RpR4g0AtE8R4glC8JeAgH",
            "queues": (queue) => {
                return see(queue, "IO")
            },
            "notes": "1st minimal: {Z} before {S}\n2nd minimal: {Z} last\n3rd/4th minimal: {J} or {Z} last\n 5th minimal: {L} last, {S} before {J}",
        },
        "See {L}{J}, early {J}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9gwhQ4HewhR4Gewhg0Q4Gewhi0PeAgH",
            "minimals": "v115@9gB8hlQ4zhAtC8glR4RpBtC8glg0Q4RpAtglD8i0il?JeAgH9gB8hlBtRpR4C8hlBtR4g0C8hlzhg0D8hlRph0JeAg?H9gB8R4BtglRpwhC8Btg0glRpwhC8R4g0ilwhD8h0ilwhJe?AgH9gB8R4BtglRpwhC8R4g0glRpwhC8Btg0ilwhD8h0ilwh?JeAgH",
            "queues": (queue) => {
                return see(queue, "LJ")
            },
            "queues4p": (queue) => {
                if (queue.indexOf("J") < 3 && queue.indexOf("I") < 3) return true;
                if (queue.indexOf("J") < 2) return true;
                return false;
            },
            "notes": "1st minimal: {I} last (grace system)\n2nd minimal: {O} last\n 3rd/4th minimal: {S}/{Z} last ({S}{Z} reduction)"
        },
        "See {L}{J}, early {I}{L}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@FhR4GeR4glGeilFezhJeAgH",
            "minimals": "v115@9gQ4zhAth0B8R4RpBtg0C8g0Q4RpAtglg0C8i0ilD8?JeAgH9gBtRpR4h0B8glBtR4h0C8glzhh0C8hlRph0D8JeAg?H9gwhRpg0R4BtB8whRpg0glR4C8whi0glBtC8whi0hlD8Je?AgH9gwhRpg0R4BtB8whRpg0glBtC8whi0glR4C8whi0hlD8?JeAgH",
            "queues": (queue) => {
                return see(queue, "LJ")
            },
            "queues4p": (queue) => {
                return (queue.indexOf("I") < 2 && queue.indexOf("L") < 3)
            },
            "notes": "1st minimal: {I} last (grace system)\n2nd minimal: {O} last\n 3rd/4th minimal: {S}/{Z} last ({S}{Z} reduction)"
        },
        "See {L}{J}, early {S}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@Ehi0GeglQ4g0GeglR4GehlQ4JeAgH",
            "minimals": "v115@9gQ4zhAtwhC8R4RpBtwhC8g0Q4RpAtglwhC8i0ilwh?C8JeAgH9gBtRpR4whC8glBtR4g0whC8glzhg0whC8hlRph0?whC8JeAgH9gBtR4RpwhC8glBtg0RpwhC8glR4i0whC8hl0h?C8JeAgH9gBtR4RpwhC8glR4g0RpwhC8glBti0whC8hl0hC8?JeAgH",
            "queues": (queue) => {
                return see(queue, "LJ")
            },
            "queues4p": (queue) => {
                if (queue.indexOf("S") < 2) return true;
                if (queue.indexOf("L") < 2 && queue.indexOf("S") < 3) return true;
                return false;
            },
            "notes": "1st minimal: {I} last (grace system)\n2nd minimal: {O} last\n 3rd/4th minimal: {S}/{Z} last ({S}{Z} reduction)\nFor the 3rd/4th minimal, the first {I} sometimes has to be placed horizontally, which is why 4x4 box doesnt work here"
        },
        "See {L}{J}": {
            "type": "qb",
            "saves": {
                "T": "50%",
                "O": "50%"
            },
            "fumen": "v115@Bhg0DewhDei0R4whili0R4glwhglDeg0ilwhJeAgH",
            "minimals": "v115@HhRpR4A8zhA8RpBtG8R4BtE8JeAgHHhRpBtA8zhA8R?pR4G8R4BtE8JeAgHHhQ4ywA8zhA8R4BtG8Q4wwBtE8JeAgH",
            "queues": (queue) => {
                return see(queue, "LJ")
            },
        },
        "See {T}{I}{J}": {
            "type": "qb",
            "saves": {
                "T": "25%",
                "O": "75%"
            },
            "fumen": "v115@Bhwhh0BewhglCewhg0Beg0whglCewhg0R4g0whhlBe?whR4h0whJeAgH",
            "minimals": "v115@9gBtRpwhh0R4whglBtglwhg0R4g0whjlwhg0R4g0wh?hlRpwhR4h0whJeAgH9gBthlwhh0R4whglBtglwhg0R4g0wh?glywwhg0R4g0whhlwwglwhR4h0whJeAgH",
            "queues": (queue) => {
                return see(queue, "TIJ")
            },
            "notes": "Don't confuse this with a see {I}{J} setup, because this setup needs {T} first to be 100%\n You can only do the first solve if {O} is last."
        },
        "See {T}{I}{L}": {
            "type": "qb",
            "saves": {
                "O": "100%"
            },
            "fumen": "v115@/gilEeh0jlzhg0BeglBeR4wwAeg0zhR4ywJeAgH",
            "minimals": "v115@RhBtC8R4i0A8BtA8R4C8g0JeAgH",
            "queues": (queue) => {
                return see(queue, "TIL")
            },
            "notes": "funny looking setup lol"
        },
        "4x4 box":
        {
            "type": "general",
            "saves": {
                "T": "82.14%",
                "O": "15.63%",
                "I": "0.95%",
                "L": "0.83%",
                "J": "0.44%"
            },
            "fumen": "v115@DhwhQ4hlFewhR4glFewhg0Q4glFewhi0JeAgHDhwwQ?axwFewwIewwAPQLHeSLJeAgHDhQLAeRaFeRLAeAtFeQLAex?wGexhg0JeAgH",
            "minimals": "v115@9gD8ili0D8glAtRpQ4g0D8BtRpR4D8AtzhQ4JeAgWZ?ARE45AwngHBFbcRAS0Q6Aymv2AUo78AZAAAA9gD8Q4zhAtD?8R4RpBtD8g0Q4RpAtglD8i0ilJeAAPZAR7fRB2ngHBFbcRA?SESEB4mv2AUo78AZAAAA9gD8ilRpwhD8glAti0whD8BtR4g?0whD8AtR4RpwhJeAAPZAR7nAB4ngHBFbcRASEi9A0mv2AUo?78AZAAAA9gD8RpzhD8RpR4Atg0D8ilBtg0D8glR4Ath0JeA?APZAR7P9AyngHBFbcRASEK6A2mv2AUo78AZAAAA9gD8zhRp?D8glQ4BtRpD8glR4i0D8hlQ4Btg0JeAAA9gD8zhR4D8h0Bt?hlD8g0RpBtglD8g0RpR4glJeAAPZAx5HOB1ngHBFbcRAS0H?VBymv2AUo78AZAAAA9gD8BtzhD8h0R4hlD8g0R4RpglD8g0?BtRpglJeAAA9gD8h0BthlD8g0RpBtglD8zhR4D8g0RpR4gl?JeAAPZAR4f2AwngHBFbcRAS0v2A0mv2AUo78AZAAAA9gD8h?0R4hlD8g0R4RpglD8BtzhD8g0BtRpglJeAAA9gD8h0AtR4g?lD8g0BtilD8g0AtR4RpD8zhRpJeAAPYAZ1A6AFrnRASo78A?Y+REBvfEEBwnAVB9gD8g0BtQ4hlD8i0R4glD8RpBtQ4glD8?RpzhJeAAA9gD8zhhlD8i0R4glD8Rpg0BtglD8RpR4BtJeAA?PYAYlm2AFrnRASo78AYekRBvfEEBwnAVB9gD8h0zhD8g0Bt?ilD8g0R4glRpD8R4BtRpJeAAA9gD8g0AtzhD8BtR4hlD8At?R4RpglD8i0RpglJeAAPYAX1h9AFrnRASo78A4cWEBvfEEBw?nAVB9gD8zhQ4glD8h0BtR4D8g0RpBtQ4D8g0RpilJeAAA9g?D8RpR4AtwhD8g0R4BtwhD8i0AtglwhD8RpilwhJeAAA9gD8?whQ4BtRpD8whR4BtglD8whg0Q4ilD8whi0RpJeAAA9gD8il?i0D8Q4zhAtD8R4RpBtD8glQ4RpAtg0JeAAPYAXlGEBFrnRA?So78A48x2AvfEEBwnAVB9gD8BtR4glwhD8h0ilwhD8g0BtR?pwhD8g0R4RpwhJeAAPYAWFjHBFrnRASo78A48o2AvfEEBwn?AVB9gD8g0BtR4whD8i0hlwhD8RpR4glwhD8RpBtglwhJeAA?A9gD8g0BtR4whD8i0hlwhD8RpBtglwhD8RpR4glwhJeAAA9?gD8BtR4glwhD8h0ilwhD8g0R4RpwhD8g0BtRpwhJeAAA9gD?8BtR4RpD8glBtg0RpD8glR4i0D8hlzhJeAAPYAWVsABFrnR?ASo78A4cEEBvfEEBwnAVB9gD8RpBtR4D8RpglR4g0D8ilBt?g0D8zhh0JeAAA9gD8h0RpR4D8BtRphlD8g0BtR4glD8g0zh?glJeAAPYAUFELBFrnRASo78AYbt2AvfEEBwnAVB9gD8BtRp?hlD8h0RpR4D8g0BtR4glD8g0zhglJeAAA9gD8Q4BtilD8R4?zhD8g0Q4BtRpD8i0glRpJeAAPYAUluABFrnRASo78AYbkRB?vfEEBwnAVB9gD8i0R4AtD8zhBtD8RpR4AtglD8Rpg0ilJeA?AA9gD8zhhlD8h0AtR4glD8g0BtywD8g0AtR4wwglJeAAPYA?UV85AFrnRASo78AYbU9AvfEEBwnAVB9gD8h0zhD8g0BtQ4h?lD8ywR4glD8g0wwBtQ4glJeAAA9gD8BtR4RpD8h0zhD8g0R?4ilD8g0BtglRpJeAAPYATVO6AFrnRASo78A4po9AvfEEBwn?AVB9gD8BtzhD8h0R4RpD8g0R4ilD8g0BtglRpJeAAA9gD8h?0BtR4D8zhhlD8g0RpBtglD8g0RpR4glJeAAA9gD8BtR4hlD?8h0zhD8g0R4RpglD8g0BtRpglJeAAA9gD8zhR4D8RpBthlD?8i0BtglD8Rpg0R4glJeAAA9gD8RpBtR4D8zhhlD8i0BtglD?8Rpg0R4glJeAAA9gD8whilRpD8whQ4BtRpD8whR4i0D8whg?lQ4Btg0JeAAA9gD8Rpi0whD8RpR4AtwhD8ilBtwhD8glR4A?tg0whJeAAA9gD8Q4BtilD8R4BtRpD8g0Q4zhD8i0glRpJeA?APYATVFVBFrnRASo78A4JELBvfEEBwnAVB9gD8i0R4AtD8R?pR4BtD8zhAtglD8Rpg0ilJeAAA9gD8Rpgli0D8ilR4AtD8R?pR4BtD8zhAtg0JeAAPYATlOOBFrnRASo78A45x2AvfEEBwn?AVB9gD8ilg0RpD8Q4Bti0D8R4BtRpD8glQ4zhJeAAA9gD8i?li0D8glAtzhD8BtR4wwg0D8AtR4ywJeAAPYATV0KBFrnRAS?o78A4pPEBvfEEBwnAVB9gD8ili0D8zhQ4g0D8glwwBtR4D8?ywBtQ4JeAAA9gD8BtzhD8glBti0D8glywR4D8hlwwR4g0Je?AAPYASF0RBFrnRASo78A4Zt2AvfEEBwnAVB9gD8zhR4D8il?R4g0D8Btywg0D8glBtwwh0JeAAA9gD8whh0R4AtD8whg0R4?BtD8whywAtglD8whg0wwilJeAAA9gD8Q4BthlwhD8R4Btgl?whD8g0Q4ywwhD8i0wwglwhJeAAA9gD8h0zhD8g0ywR4D8Bt?wwR4glD8g0BtilJeAAPYASV0KBFrnRASo78A4ZEEBvfEEBw?nAVB9gD8zhhlD8BtywglD8g0BtwwR4D8i0R4glJeAAA9gD8?Q4Bti0D8R4zhD8ilywD8glQ4Btwwg0JeAAPYASVU9AFrnRA?So78A4ZU9AvfEEBwnAVB9gD8ilR4AtD8zhBtD8ywi0D8glw?wR4Atg0JeAAA9gD8g0AtzhD8BtR4RpD8AtR4ilD8i0glRpJ?eAAPXARl42AFrnRASo78A4FazAVYt2AFr4AA9gD8zhQ4glD?8RpBtR4D8i0BtQ4D8Rpg0ilJeAAA9gD8g0R4wwhlD8R4ywg?lD8i0BtglD8zhBtJeAAPXARVVOBFrnRASo78A4iVzAVYt2A?Fr4AA9gD8h0wwBtglD8g0ywBtD8g0R4ilD8R4zhJeAAA9gD?8Q4Bti0D8R4Btwwg0D8ilywD8glQ4zhJeAAPXARFD6AFrnR?ASo78AYBazAVYt2AFr4AA9gD8ilR4AtD8glwwR4BtD8ywi0?D8zhAtg0JeAAA9gD8ili0D8ywR4AtD8glwwR4BtD8zhAtg0?JeAAPXAQlQVBFrnRASo78A4fMzAVYt2AFr4AA9gD8ili0D8?Q4BtywD8R4Btwwg0D8glQ4zhJeAAPXAQFsHBFrnRASo78A4?cezAVYt2AFr4AA9gD8ili0D8glywQ4g0D8RpBtR4D8RpwwB?tQ4JeAAPXAQFM6AFrnRASo78A48ZzAVYt2AFr4AA9gD8ywi?0D8ilR4AtD8glwwR4BtD8zhAtg0JeAAPXAQ15ABFrnRASo7?8A48QzAVYt2AFr4AA9gD8zhR4D8i0R4wwD8RpBtxwD8Rpg0?BtwwJeAAPXAQl/KBFrnRASo78AYbezAVYt2AFr4AA9gD8il?ywD8Q4Bti0D8R4Btwwg0D8glQ4zhJeAAPXAQVNEBFrnRASo?78AY7QzAVYt2AFr4AA9gD8ilAtR4D8glzhwwD8RpBtxwD8R?pAtR4wwJeAAPXAQF7KBFrnRASo78A4ZezAVYt2AFr4AA9gD?8i0BtwwD8zhxwD8Rpg0R4wwD8RpR4BtJeAAPXAQFb9AFrnR?ASo78A45ZzAVYt2AFr4AA9gD8BtzhD8wwBtilD8xwR4RpD8?wwR4glRpJeAAA9gD8Q4Bti0D8R4BtRpD8ilwwRpD8glQ4yw?g0JeAAPWAQl2KBFrnRASo78AYUaHBQecRAylAAA9gD8ilR4?AtD8RpR4BtD8Rpwwi0D8glywAtg0JeAAA9gD8h0R4RpD8g0?R4wwRpD8BtywglD8g0BtilJeAAPWAQlW9AFrnRASo78AYRa?HBQecRAylAAA9gD8RpBthlD8RpwwBtglD8g0ywR4D8i0R4g?lJeAAA"
        }
    },
    "IJLZ": {
        "See {S}, {S} before {Z}":
        {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9gQ4BehlEeR4BeglEeg0Q4BtglEei0BtAezhJeAgH",
            "minimals": "v115@9gA8BtB8whh0hlB8BtA8whg0RpglE8whg0RpglE8wh?D8JeAgH9gA8BtB8whglRpg0B8BtA8whglRpg0E8whhlh0E8?whD8JeAgH",
            "cover": 0.142857143,
            "queues": (queue) => {
                if (queue == "TZS" || queue == "ZTS") return false;
                return see(queue, "S")
            },
            "notes": "Simple shoe setup, complete the box with {L}{Z}, and just a simple {I}{J}{L}{O} 4x4 box on the left"
        },
        "See {Z}{S}, {Z} before {S}":
        {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@IhBtAeh0R4BeDtg0zhglAeBtAeg0R4ilJeAgH",
            "minimals": "v115@Hhh0hlzhRpg0B8glD8Rpg0B8glF8JeAgH",
            "cover": 0.142857143,
            "queues": (queue) => {
                if (see(queue, "OZS")) return true;
                if (queue.indexOf("Z") == 2) return false;
                return see(queue, "ZS")
            }
        },
        "See {J}{O}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@HhRpg0Beg0glCeRpj0glBtAezhh0hlBtJeAgH",
            "minimals": "v115@HhzhR4BthlC8R4B8BtglI8glJeAgH",
            "queues": (queue) => {
                return see(queue, "JO")
            }
        },
        "See {L}{O}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@KhRpBeilBtzhi0glAeBtRpilg0glJeAgH",
            "minimals": "v115@Hhh0R4Btzhg0R4B8BtC8g0I8JeAgH",
            "queues": (queue) => {
                return see(queue, "LO")
            }
        },
        "See {L}{Z}/{J}{Z}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@HhDtFeg0DtglDei0ilzhJeAgH",
            "minimals": "v115@HhzhRph0R4D8Rpg0R4glF8g0ilJeAgHHhzhRpilg0D?8RpglR4g0F8R4h0JeAgH",
            "queues": (queue) => {
                return see(queue, "JZ") || see(queue, "LZ")
            }
        },
        "See {I}{Z}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@BhAtHeBtCehlBtzhi0glAeCtzhg0glJeAgH",
            "minimals": "v115@Hhh0R4A8Rpilg0R4B8RpglB8g0I8JeAgH",
            "queues": (queue) => {
                return see(queue, "IZ")
            }
        },
        "See {O}{Z}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@GhAtRpFeBtzhglBti0RpilAeCtg0JeAgH",
            "minimals": "v115@Hhzhglh0R4C8ilg0R4G8g0D8JeAgH",
            "queues": (queue) => {
                return see(queue, "OZ")
            }
        },
        "See {I}{O}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@GhwhIewhg0Geglwhi0CeilwhJeAgH",
            "minimals": "v115@9gQ4Bthlwhi0A8R4BtglwhRpg0B8Q4BtglwhRpE8Bt?whD8JeAgH9gzhglR4RpA8BtilBtRpB8Btg0R4BtE8i0D8Je?AgH9gzhQ4gli0A8DtR4Rpg0B8DtQ4RpE8ilD8JeAgH9gzhR?4i0A8DthlRpg0B8DtglRpE8R4glD8JeAgH9gQ4i0zhAtA8R?4ilRpBtB8Q4glBtRpAtE8g0BtD8JeAgH",
            "queues": (queue) => {
                return see(queue, "IO")
            },
            "notes": "1st minimal: {S} before {Z}\n2nd minimal: {S} last\n3rd/4th minimal: {L} or {S} last\n 5th minimal: {J} last, {Z} before {L}",
        },
        "See {L}{J}, early {L}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@FhAtwhGeBtwhGeAtglwhFeilwhJeAgH",
            "minimals": "v115@9gQ4zhAth0B8R4RpBtg0C8g0Q4RpAtglg0C8i0ilD8?JeAgH9gBtRpR4h0B8glBtR4h0C8glzhh0C8hlRph0D8JeAg?H9gwhRpg0R4BtB8whRpg0glR4C8whi0glBtC8whi0hlD8Je?AgH9gwhRpg0R4BtB8whRpg0glBtC8whi0glR4C8whi0hlD8?JeAgH",
            "queues": (queue) => {
                return see(queue, "LJ")
            },
            "queues4p": (queue) => {
                if (queue.indexOf("L") < 3 && queue.indexOf("I") < 3) return true;
                if (queue.indexOf("L") < 2) return true;
                return false;
            },
            "notes": "1st minimal: {I} last (grace system)\n2nd minimal: {O} last\n 3rd/4th minimal: {S}/{Z} last ({S}{Z} reduction)"
        },
        "See {L}{J}, early {I}{J}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9gBtHeg0BtGei0GezhPeAgH",
            "minimals": "v115@9gB8hlQ4zhAtC8glR4RpBtC8glg0Q4RpAtglD8i0il?JeAgH9gB8hlBtRpR4C8hlBtR4g0C8hlzhg0D8hlRph0JeAg?H9gB8R4BtglRpwhC8Btg0glRpwhC8R4g0ilwhD8h0ilwhJe?AgH9gB8R4BtglRpwhC8R4g0glRpwhC8Btg0ilwhD8h0ilwh?JeAgH",
            "queues": (queue) => {
                return see(queue, "LJ")
            },
            "queues4p": (queue) => {
                return (queue.indexOf("I") < 2 && queue.indexOf("J") < 3)
            },
            "notes": "1st minimal: {I} last (grace system)\n2nd minimal: {O} last\n 3rd/4th minimal: {S}/{Z} last ({S}{Z} reduction)"
        },
        "See {L}{J}, early {Z}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9gilGeglAtg0GeBtg0GeAth0QeAgH",
            "minimals": "v115@9gC8whQ4zhAtC8whR4RpBtC8whg0Q4RpAtglC8whi0?ilJeAgH9gC8whBtRpR4C8whglBtR4g0C8whglzhg0C8whhl?Rph0JeAgH9gC8whRpBtR4C8whRpglR4g0C8whilBtg0C80h?h0JeAgH9gC8whRpBtR4C8whRpglBtg0C8whilR4g0C80hh0?JeAgH",
            "queues": (queue) => {
                return see(queue, "LJ")
            },
            "queues4p": (queue) => {
                if (queue.indexOf("Z") < 2) return true;
                if (queue.indexOf("J") < 2 && queue.indexOf("Z") < 3) return true;
                return false;
            },
            "notes": "1st minimal: {I} last (grace system)\n2nd minimal: {O} last\n 3rd/4th minimal: {S}/{Z} last ({S}{Z} reduction)\nFor the 3rd/4th minimal, the first {I} sometimes has to be placed horizontally, which is why 4x4 box doesnt work here"
        },
        "See {L}{J}": {
            "type": "qb",
            "saves": {
                "T": "50%",
                "O": "50%"
            },
            "fumen": "v115@9gwhDeglDewhBtilDewhg0Btili0whi0glDeg0JeAg?H",
            "minimals": "v115@HhA8zhA8BtRpF8R4RpE8R4BtA8JeAgHHhA8zhA8R4R?pF8BtRpE8R4BtA8JeAgHHhA8zhA8ywAtF8R4BtE8R4wwAtA?8JeAgH",
            "queues": (queue) => {
                return see(queue, "LJ")
            },
        },
        "See {T}{I}{L}": {
            "type": "qb",
            "saves": {
                "T": "25%",
                "O": "75%"
            },
            "fumen": "v115@9gwhBehlwhDewhglBeglwhCeg0whglBtglwhCeg0wh?hlBtwhBeh0JeAgH",
            "minimals": "v115@9gwhBthlwhRpR4whglBtglwhg0R4g0whglBtglwhj0?whhlBtwhRph0JeAgH9gwhBthlwhh0R4whglBtglwhg0R4g0?whglBtglwhywg0whhlBtwhg0wwh0JeAgH",
            "queues": (queue) => {
                return see(queue, "TIL")
            },
            "notes": "Don't confuse this with a see {I}{L} setup, because this setup needs {T} first to be 100%\n You can only do the first solve if {O} is last."
        },
        "See {T}{I}{J}": {
            "type": "qb",
            "saves": {
                "O": "100%"
            },
            "fumen": "v115@Chi0Bezhj0hlAewwBtBeg0BeglywBtzhglJeAgH",
            "minimals": "v115@RhilBtC8R4glC8BtA8R4A8JeAgH",
            "queues": (queue) => {
                return see(queue, "TIJ")
            },
            "notes": "funny looking setup lol"
        },
        "4x4 box":
        {
            "type": "general",
            "saves": {
                "T": "82.14%",
                "O": "15.63%",
                "I": "0.95%",
                "J": "0.83%",
                "L": "0.44%"
            },
            "fumen": "v115@9gh0AtwhFeg0BtwhFeg0AtglwhFeilwhPeAgH9giWw?hIewhGeglAtwhFeSaQeAgH9ghWAeQaFeAPAeglQaFehWAeQ?aFeQpxwQeAgH",
            "minimals": "v115@9gili0D8glAtRpQ4g0D8BtRpR4D8AtzhQ4D8JeAgWZ?ARE45AwngHBFbcRAS0Q6Aymv2AUo78AZAAAA9gQ4zhAtD8R?4RpBtD8g0Q4RpAtglD8i0ilD8JeAAPZAR7fRB2ngHBFbcRA?SESEB4mv2AUo78AZAAAA9gwhRpi0D8whilQ4g0D8whglBtR?4D8whRpBtQ4D8JeAAPZAR7nAB4ngHBFbcRASEi9A0mv2AUo?78AZAAAA9gzhRpD8glQ4BtRpD8glR4i0D8hlQ4Btg0D8JeA?APZAR7P9AyngHBFbcRASEK6A2mv2AUo78AZAAAA9gRpzhD8?RpR4Atg0D8ilBtg0D8glR4Ath0D8JeAAA9gBtzhD8h0R4hl?D8g0R4RpglD8g0BtRpglD8JeAAPZAx5HOB1ngHBFbcRAS0H?VBymv2AUo78AZAAAA9gzhR4D8h0BthlD8g0RpBtglD8g0Rp?R4glD8JeAAA9gh0R4hlD8g0R4RpglD8BtzhD8g0BtRpglD8?JeAAPZAR4f2AwngHBFbcRAS0v2A0mv2AUo78AZAAAA9gh0B?thlD8g0RpBtglD8zhR4D8g0RpR4glD8JeAAA9gg0BtQ4hlD?8i0R4glD8RpBtQ4glD8RpzhD8JeAAPYAZ1A6AFrnRASo78A?Y+REBvfEEBwnAVB9gh0AtR4glD8g0BtilD8g0AtR4RpD8zh?RpD8JeAAA9gh0zhD8g0BtilD8g0R4glRpD8R4BtRpD8JeAA?PYAYlm2AFrnRASo78AYekRBvfEEBwnAVB9gzhhlD8i0R4gl?D8Rpg0BtglD8RpR4BtD8JeAAA9gzhQ4glD8h0BtR4D8g0Rp?BtQ4D8g0RpilD8JeAAPYAX1h9AFrnRASo78A4cWEBvfEEBw?nAVB9gg0AtzhD8BtR4hlD8AtR4RpglD8i0RpglD8JeAAA9g?whQ4BtRpD8whR4BtglD8whg0Q4ilD8whi0RpD8JeAAA9gRp?R4AtwhD8g0R4BtwhD8i0AtglwhD8RpilwhD8JeAAA9gili0?D8Q4zhAtD8R4RpBtD8glQ4RpAtg0D8JeAAPYAXlGEBFrnRA?So78A48x2AvfEEBwnAVB9gwhg0BtR4D8whi0hlD8whRpR4g?lD8whRpBtglD8JeAAPYAWFjHBFrnRASo78A48o2AvfEEBwn?AVB9gwhBtR4glD8whh0ilD8whg0BtRpD8whg0R4RpD8JeAA?A9gwhBtR4glD8whh0ilD8whg0R4RpD8whg0BtRpD8JeAAA9?gwhg0BtR4D8whi0hlD8whRpBtglD8whRpR4glD8JeAAA9gR?pBtR4D8RpglR4g0D8ilBtg0D8zhh0D8JeAAPYAWVsABFrnR?ASo78A4cEEBvfEEBwnAVB9gBtR4RpD8glBtg0RpD8glR4i0?D8hlzhD8JeAAA9gBtRphlD8h0RpR4D8g0BtR4glD8g0zhgl?D8JeAAPYAUFELBFrnRASo78AYbt2AvfEEBwnAVB9gh0RpR4?D8BtRphlD8g0BtR4glD8g0zhglD8JeAAA9gi0R4AtD8zhBt?D8RpR4AtglD8Rpg0ilD8JeAAPYAUluABFrnRASo78AYbkRB?vfEEBwnAVB9gQ4BtilD8R4zhD8g0Q4BtRpD8i0glRpD8JeA?AA9gh0zhD8g0BtQ4hlD8ywR4glD8g0wwBtQ4glD8JeAAPYA?UV85AFrnRASo78AYbU9AvfEEBwnAVB9gzhhlD8h0AtR4glD?8g0BtywD8g0AtR4wwglD8JeAAA9gRpBtR4D8zhhlD8i0Btg?lD8Rpg0R4glD8JeAAPYATVO6AFrnRASo78A4po9AvfEEBwn?AVB9gzhR4D8RpBthlD8i0BtglD8Rpg0R4glD8JeAAA9gBtR?4hlD8h0zhD8g0R4RpglD8g0BtRpglD8JeAAA9gh0BtR4D8z?hhlD8g0RpBtglD8g0RpR4glD8JeAAA9gBtzhD8h0R4RpD8g?0R4ilD8g0BtglRpD8JeAAA9gBtR4RpD8h0zhD8g0R4ilD8g?0BtglRpD8JeAAA9gRpi0whD8RpR4AtwhD8ilBtwhD8glR4A?tg0whD8JeAAA9gwhilRpD8whQ4BtRpD8whR4i0D8whglQ4B?tg0D8JeAAA9gi0R4AtD8RpR4BtD8zhAtglD8Rpg0ilD8JeA?APYATVFVBFrnRASo78A4JELBvfEEBwnAVB9gQ4BtilD8R4B?tRpD8g0Q4zhD8i0glRpD8JeAAA9gilg0RpD8Q4Bti0D8R4B?tRpD8glQ4zhD8JeAAPYATlOOBFrnRASo78A45x2AvfEEBwn?AVB9gRpgli0D8ilR4AtD8RpR4BtD8zhAtg0D8JeAAA9gili?0D8zhQ4g0D8glwwBtR4D8ywBtQ4D8JeAAPYATV0KBFrnRAS?o78A4pPEBvfEEBwnAVB9gili0D8glAtzhD8BtR4wwg0D8At?R4ywD8JeAAA9gzhR4D8ilR4g0D8Btywg0D8glBtwwh0D8Je?AAPYASF0RBFrnRASo78A4Zt2AvfEEBwnAVB9gBtzhD8glBt?i0D8glywR4D8hlwwR4g0D8JeAAA9gQ4BthlwhD8R4Btglwh?D8g0Q4ywwhD8i0wwglwhD8JeAAA9gwhh0R4AtD8whg0R4Bt?D8whywAtglD8whg0wwilD8JeAAA9gzhhlD8BtywglD8g0Bt?wwR4D8i0R4glD8JeAAPYASV0KBFrnRASo78A4ZEEBvfEEBw?nAVB9gh0zhD8g0ywR4D8BtwwR4glD8g0BtilD8JeAAA9gil?R4AtD8zhBtD8ywi0D8glwwR4Atg0D8JeAAPYASVU9AFrnRA?So78A4ZU9AvfEEBwnAVB9gQ4Bti0D8R4zhD8ilywD8glQ4B?twwg0D8JeAAA9gzhQ4glD8RpBtR4D8i0BtQ4D8Rpg0ilD8J?eAAPXARl42AFrnRASo78A4FazAVYt2AFr4AA9gg0AtzhD8B?tR4RpD8AtR4ilD8i0glRpD8JeAAA9gh0wwBtglD8g0ywBtD?8g0R4ilD8R4zhD8JeAAPXARVVOBFrnRASo78A4iVzAVYt2A?Fr4AA9gg0R4wwhlD8R4ywglD8i0BtglD8zhBtD8JeAAA9gi?lR4AtD8glwwR4BtD8ywi0D8zhAtg0D8JeAAPXARFD6AFrnR?ASo78AYBazAVYt2AFr4AA9gQ4Bti0D8R4Btwwg0D8ilywD8?glQ4zhD8JeAAA9gili0D8Q4BtywD8R4Btwwg0D8glQ4zhD8?JeAAPXAQlQVBFrnRASo78A4fMzAVYt2AFr4AA9gili0D8yw?R4AtD8glwwR4BtD8zhAtg0D8JeAAPXAQFsHBFrnRASo78A4?cezAVYt2AFr4AA9gili0D8glAtywg0D8BtR4RpD8AtR4wwR?pD8JeAAPXAQFM6AFrnRASo78A48ZzAVYt2AFr4AA9gilywD?8Q4Bti0D8R4Btwwg0D8glQ4zhD8JeAAPXAQ15ABFrnRASo7?8A48QzAVYt2AFr4AA9gBtzhD8wwBtilD8xwR4RpD8wwR4gl?RpD8JeAAPXAQl/KBFrnRASo78AYbezAVYt2AFr4AA9gywi0?D8ilR4AtD8glwwR4BtD8zhAtg0D8JeAAPXAQVNEBFrnRASo?78AY7QzAVYt2AFr4AA9gBtQ4i0D8wwzhg0D8xwR4RpD8wwB?tQ4RpD8JeAAPXAQF7KBFrnRASo78A4ZezAVYt2AFr4AA9gw?wR4ilD8xwzhD8wwBtglRpD8R4BtRpD8JeAAPXAQFb9AFrnR?ASo78A45ZzAVYt2AFr4AA9gzhR4D8i0R4wwD8RpBtxwD8Rp?g0BtwwD8JeAAA9gilR4AtD8RpR4BtD8Rpwwi0D8glywAtg0?D8JeAAPWAQl2KBFrnRASo78AYUaHBQecRAylAAA9gQ4Bti0?D8R4BtRpD8ilwwRpD8glQ4ywg0D8JeAAA9gRpBthlD8Rpww?BtglD8g0ywR4D8i0R4glD8JeAAPWAQlW9AFrnRASo78AYRa?HBQecRAylAAA9gh0R4RpD8g0R4wwRpD8BtywglD8g0BtilD?8JeAAA"
        }
    },
    "IOSZ": {
        "See {I}": {
            "type": "qb",
            "fumen": "v115@KhBtEezhBtR4RpAezhR4AeRpJeAgH",
            "minimals": "v115@Hhh0R4BthlRpg0R4B8BtglRpg0F8glB8JeAgH",
            "saves": {
                "T": "100%"
            },
            "queues": (queue) => {
                if (see(queue, "I")) {
                    if (queue.indexOf("I") == 2) {
                        if (see(queue, "JT") || see(queue, "LT") || see(queue, "LJ")) return false;
                        return true;
                    }
                    return true;
                } else {
                    return false
                }
            }
        },
        "See {L}{O}": {
            "type": "qb",
            "fumen": "v115@KhRpBeilAeR4RpBtglRpR4zhBtRpJeAgH",
            "minimals": "v115@Hhh0R4Btzhg0R4B8BtC8g0I8JeAgH",
            "saves": {
                "T": "100%"
            },
            "queues": (queue) => {
                return see(queue, "LO")
            }
        },
        "See {J}{O}": {
            "type": "qb",
            "fumen": "v115@Hhi0BeRpCeRpg0R4RpBtAeRpR4zhBtJeAgH",
            "minimals": "v115@HhzhR4BthlC8R4B8BtglI8glJeAgH",
            "saves": {
                "T": "100%"
            },
            "queues": (queue) => {
                return see(queue, "JO")
            }
        },
        "See {L}{S}": {
            "type": "qb",
            "fumen": "v115@+gglQ4HeglR4BeQ4DehlQ4BtR4RpAezhBtQ4RpJeAg?H",
            "minimals": "v115@9gwhB8Bti0RpwhC8BtA8g0RpwhI8whI8JeAgH",
            "saves": {
                "T": "100%"
            },
            "queues": (queue) => {
                return see(queue, "LS")
            }
        },
        "See {J}{Z}": {
            "type": "qb",
            "fumen": "v115@EhAtg0DeAtBeBtg0AeRpBtR4Ath0AeRpAtR4zhKeAg?l",
            "minimals": "v115@9gRpilR4B8whRpglA8R4C8whI8whI8whJeAgH",
            "saves": {
                "T": "100%"
            },
            "queues": (queue) => {
                return see(queue, "JZ")
            }
        },
        "See {S}{Z}": {
            "type": "qb",
            "fumen": "v115@IhT4BtCeT4DtRpAezhBtAeRpJeAgH",
            "minimals": "v115@Hhh0zhhlRpg0F8glRpg0F8glB8JeAgH",
            "saves": {
                "T": "100%"
            },
            "queues": (queue) => {
                return see(queue, "SZ")
            }
        },
        "See {I}{J}{L}": {
            "type": "qb",
            "fumen": "v115@9gilzhi0glAtRpDeQ4g0BtRpDeR4AtzhDeQ4JeAgl",
            "minimals": "v115@HhD8RpR4F8RpBtG8R4BtA8JeAgHHhD8RpBtF8RpR4G?8R4BtA8JeAgHHhD8Q4ywF8R4BtG8Q4wwBtA8JeAgH",
            "saves": {
                "T": "50%",
                "O": "50%",
            },
            "queues": (queue) => {
                return see(queue, "IJL")
            }
        },
    },
    "JLSZ": {
        "See {I}{S}": {
            "type": "qb",
            "fumen": "v115@IhR4BeglBeQ4AeR4i0glBtR4zhg0hlBtQ4JeAgl",
            "minimals": "v115@RhilRpBti0glB8RpA8BtA8g0JeAgH",
            "saves": {
                "T": "100%",
            },
            "queues": (queue) => {
                return see(queue, "IS")
            }
        },
        "See {I}{Z}": {
            "type": "qb",
            "fumen": "v115@IhAtBeg0BeBtAeBtR4g0ilCtR4h0glzhJeAgl",
            "minimals": "v115@RhilR4Rpi0glA8R4A8RpB8g0JeAgH",
            "saves": {
                "T": "100%",
            },
            "queues": (queue) => {
                return see(queue, "IZ")
            }
        },
        "See {O}{S}": {
            "type": "qb",
            "fumen": "v115@9gQ4IeR4FeR4g0Q4BtAeRpR4gli0BtRpilJeAgl",
            "minimals": "v115@HhA8Bthlg0zhB8Btgli0F8glE8JeAgH",
            "saves": {
                "T": "100%",
            },
            "queues": (queue) => {
                return see(queue, "OS")
            }
        },
        "See {O}{Z}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@GhCtFeBtg0BtRpAeR4Atgli0RpR4ilJeAgl",
            "minimals": "v115@Hhzhglh0R4C8ilg0R4G8g0D8JeAgH",
            "queues": (queue) => {
                return see(queue, "OZ")
            }
        },
        "See {L}{S}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9gQ4FeglBeR4BeQ4BeglBeg0Q4BtR4Aeili0BtQ4Ae?ilJeAgH",
            "minimals": "v115@9gA8Bti0whA8RpB8BtA8g0whA8RpF8whI8whC8JeAg?H",
            "queues": (queue) => {
                return see(queue, "LS")
            }
        },
        "See {J}{Z}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@/gg0FeAtBeg0BeAtBeBti0AeBtR4Atgli0AeAtR4il?JeAgH",
            "minimals": "v115@9gRpA8whilR4A8RpA8whglA8R4E8whI8whF8JeAgH",
            "queues": (queue) => {
                return see(queue, "JZ")
            }
        },
        "See {S}{J}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@GhAtHeBtg0EeR4Atgli0BeR4ilJeAgH",
            "minimals": "v115@9gRpg0whilR4A8Rpg0whglAtR4C8h0whBtG8whAtE8?JeAgWXAV4f2AwngHBFbcRASUk9AvZNEBFr4AA9gilzhR4A8?glg0BtRpR4C8i0RpG8BtE8JeAAPXAzCYHBwngHBFbcRAS0P?EBvZNEBFr4AA9gBtglzhR4A8ili0R4C8BtRpg0G8RpE8JeA?APXAy/f2AwngHBFbcRASU7KBvZNEBFr4AA9gRpBtglh0R4A?8Rpilg0R4C8zhg0G8BtE8JeAAPXAR7XHBwngHBFbcRAS0mR?BvZNEBFr4AA",
            "queues": (queue) => {
                return see(queue, "SJ")
            },
            "notes": "just the general setup, with a 100% save {T} with 4 solves."
        },
        "See {Z}{L}": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9gQ4IeR4Heg0Q4BtEegli0BtBeilJeAgH",
            "minimals": "v115@9gA8Bti0whglRpB8BtQ4g0whglRpD8R4whhlF8Q4wh?C8JeAgWXAV4f2AwngHBFbcRASUk9AvZNEBFr4AA9gA8Btzh?i0B8BtRpR4glg0D8RpilF8R4C8JeAAPXAzCYHBwngHBFbcR?AS0PEBvZNEBFr4AA9gA8Btzhg0R4B8Btili0D8glRpR4F8R?pC8JeAAPXAy/f2AwngHBFbcRASU7KBvZNEBFr4AA9gA8Bth?lg0R4RpB8Btgli0RpD8glzhF8R4C8JeAAPXAR7XHBwngHBF?bcRAS0mRBvZNEBFr4AA",
            "queues": (queue) => {
                return see(queue, "ZL")
            },
            "notes": "just the general setup, with a 100% save {T} with 4 solves."
        },
        "Shoe+{J}":
        {
            "type": "general",
            "saves": {
                "T": "90.40%",
                "O": "6.39%",
                "I": "0.71%",
                "S": "2.26%",
                "Z": "0.24%"
            },
            "fumen": "v115@GhAtHeBtg0EeR4Atgli0BeR4ilJeAgH",
            "minimals": "v115@9gzhglh0R4A8Btilg0R4C8BtRpg0G8RpE8JeAgWaAV?7HOBwngHBFbcRASE5KBVRaHBQecRAylAAA9gRpg0whilR4A?8Rpg0whglAtR4C8h0whBtG8whAtE8JeAAPaA0FIOByngHBF?bcRASEhHBQRaHBQecRAylAAA9gilzhR4A8glRph0AtR4C8R?pg0BtG8g0AtE8JeAAPaA08fRBxngHBFbcRASEZ9AQUaHBQe?cRAylAAA9gi0zhR4A8Btg0glRpR4C8BtglRpG8hlE8JeAAP?aATE45A3ngHBFbcRAS0+UBSOaHBQecRAylAAA9gilzhR4A8?glg0BtRpR4C8i0RpG8BtE8JeAAPaAz//DBwngHBFbcRAS0O?OBYOaHBQecRAylAAA9gBtglzhR4A8ili0R4C8BtRpg0G8Rp?E8JeAAPaAS7HOB4ngHBFbcRAS0+5AUUaHBQecRAylAAA9gi?0whilR4A8Btg0whRpR4C8BtwhRpG8whglE8JeAAPZAxFg2A?1ngHBFbcRAS0ILBwmv2AUo78AZAAAA9gRpBtglh0R4A8Rpi?lg0R4C8zhg0G8BtE8JeAAA9gRpi0zhA8RpR4AtilC8R4Btg?lG8Atg0E8JeAAPZAR4/DB4ngHBFbcRAS0f9A4mv2AUo78AZ?AAAA9gBtglg0R4ywA8ilzhwwC8Bti0G8R4E8JeAAPYATVFV?BFrnRASo78A4JELBvfEEBwnAVB9gi0whilR4A8ywwhglAtR?4C8wwg0whBtG8whAtE8JeAAPXARFMVBFrnRASo78A4lMzAV?Yt2AFr4AA9gilh0AtywA8glRpzhwwC8Rpg0BtG8g0AtE8Je?AAA9gBtgli0ywA8ilzhwwC8BtRpg0G8RpE8JeAAPXAR15AB?FrnRASo78AYERzAVYt2AFr4AA9gQ4hlh0AtywA8R4glzhww?C8Q4glg0BtG8g0AtE8JeAAPXARl+5AFrnRASo78A4/ZzAVY?t2AFr4AA9gilzhR4A8glg0ywAtR4C8i0BtG8wwAtE8JeAAP?XARVMOBFrnRASo78A4fVzAVYt2AFr4AA9gzhilR4A8ywi0R?4C8wwBtglg0G8BtE8JeAAPXAQVeOBFrnRASo78AYeVzAVYt?2AFr4AA9gg0ilRpywA8i0zhwwC8glBtRpG8BtE8JeAAPXAQ?FsHBFrnRASo78A4cezAVYt2AFr4AA9gRpg0glBtywA8Rpi0?BtwwC8ilR4G8R4E8JeAAPXAQVtRBFrnRASo78AYbVzAVYt2?AFr4AA9gRpg0Q4BtywA8Rpg0R4BtwwC8h0ilG8glQ4E8JeA?APXAQ1IEBFrnRASo78A45QzAVYt2AFr4AA9gRphlwhh0R4A?8Rpwwglwhg0R4C8ywwhg0G8glwhE8JeAAA9gi0RpglywA8B?tg0zhwwC8BtilG8RpE8JeAAPWAQl2KBFrnRASo78AYUaHBQ?ecRAylAAA"
        }
    },
    "TISO": {
        "See {I}{L}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@/gh0Heg0BeR4CeRpg0wwR4zhRpywzhKeAgH",
            minimals: "v115@HhRpB8R4BthlRpA8R4B8BtglI8glJeAgH",
            queues: (queue) => {
                return see(queue, "IL")
            },
        },
        "See {J}{S}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@Jhh0R4wwCeRpg0R4ywR4Rpg0zhR4KeAgH",
            minimals: "v115@HhRpzhBthlRpE8BtglI8glJeAgH",
            queues: (queue) => {
                return see(queue, "JS")
            },
        },
        "See {L}{S}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@KhR4BewwhlRpT4ywglRpAeR4zhglJeAgH",
            minimals: "v115@HhRph0BtzhRpg0B8BtE8g0G8JeAgH",
            queues: (queue) => {
                return see(queue, "LS")
            },
        },
        "See {J}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@Hhi0BeRpCeRpg0R4RpywRpR4zhwwKeAgH",
            minimals: "v115@HhzhR4BthlC8R4B8BtglI8glJeAgH",
            queues: (queue) => {
                return see(queue, "JO")
            },
        },
        "See {S}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@GhwhCeywCewhTpwwT4whTpT4AewhJeAgH",
            minimals: "v115@Hhg0zhBthlA8i0C8BtglI8glA8JeAgH",
            queues: (queue) => {
                return see(queue, "SO")
            },
        },
        "See {Z}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@BhAtHeBtR4CeywAtR4TpAewwzhTpJeAgH",
            minimals: "v115@Hhh0R4A8zhglg0R4D8ilg0I8JeAgH",
            queues: (queue) => {
                return see(queue, "ZO")
            },
            notes: "sometimes not buildable with tetr.io's SRS+ rotation system (queue {T}{S}{O}{I})"
        },
        "See {I}{L}{Z}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@/gwhDehlwhBewhCeR4glwhRpwhBtR4wwglwhRpwhAe?BtywwhJeAgH",
            minimals: "v115@HhRpA8h0R4C8RpA8g0R4G8g0F8JeAgH",
            queues: (queue) => {
                return see(queue, "ILZ")
            },
        },
        "See {J}{L}{Z}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@DhAtg0BeilBeBtg0BeywR4Ath0RpglwwR4zhRpJeAg?H",
            minimals: "v115@RhzhR4B8RpC8R4C8RpJeAgH",
            queues: (queue) => {
                return see(queue, "JLZ")
            },
        },
        "See {S}": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@IhRpAeR4EeRpT4wwBezhR4ywKeAgH",
            minimals: "v115@9gh0ywBthlwhg0B8wwB8Btglwhg0G8glwhI8whJeAg?H",
            notes: "sometimes cannot build this setup if the queue is {O}{T}{S} or {T}{O}{S}, where you can build the {O}{S} qb instead",
            queues: (queue) => {
                if (queue == "OTS" || queue == "TOS") return false;
                return see(queue, "S")
            },
        },
        "See {Z}": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@JhBtCeRpCewwBtR4RpBeywR4zhJeAgH",
            minimals: "v115@9gwhh0ywR4hlwhg0B8wwR4B8glwhg0G8glwhI8JeAg?H",
            notes: "sometimes cannot build this setup if the queue is {O}{T}{Z} or {T}{O}{Z}, where you can build the {O}{Z} qb instead (unless that too, is unbuildable, where you can just do the 3p general setup idk)",
            queues: (queue) => {
                if (queue == "OTZ" || queue == "TOZ") return false;
                return see(queue, "Z")
            },
        },
        "{I}{T}{S} 3p": {
            type: "general",
            saves: {
                T: "80.87%",
                O: "17.90%",
                I: "0.99%",
                Z: "0.24%"
            },
            "fumen": "v115@GhwhIewhCeR4wwCewhBeR4ywBewhJeAgH",
            "minimals": "v115@9gRph0R4hlwhA8Rpg0R4BtglwhA8Rpg0C8BtwhA8Rp?E8glwhA8JeAgWaAU4f2AwngHBFbcRASEp2ARRaHBQecRAyl?AAA9gwhh0BthlRpA8whg0R4BtglRpA8whR4C8glRpA8whg0?E8RpA8JeAAA9gRpzhR4AtA8RpilR4BtA8RpglC8i0A8RpE8?Atg0A8JeAAPZAx/XHB2ngHBFbcRASU0RB0mv2AUo78AZAAA?A9gQ4BtzhRpA8R4Bti0RpA8ilC8g0RpA8glQ4E8RpA8JeAA?A9gh0wwBtzhA8g0ywBtilA8g0R4C8glRpA8R4E8RpA8JeAA?PZAx8P9A5ngHBFbcRASEaOBwmv2AUo78AZAAAA9gzhR4wwh?lA8i0R4ywglA8Rpg0C8BtglA8RpE8BtA8JeAAA9gRph0R4B?tglA8Rpg0R4zhA8Rpg0C8ilA8RpE8BtA8JeAAPYAZlf9AFr?nRASo78AYe22AvfEEBwnAVB9gg0R4BthlRpA8zhBtglRpA8?i0C8glRpA8R4E8RpA8JeAAA9gywBtzhA8h0R4BtilA8g0R4?C8glRpA8g0wwE8RpA8JeAAPYAVVt2AFrnRASo78AYLk9Avf?EEBwnAVB9gBtR4wwzhA8glBtywRpg0A8glR4C8Rpg0A8hlE?8h0A8JeAAPXARFDVBFrnRASo78A4iMzAVYt2AFr4AA9gzhw?wBtR4A8glRpywR4g0A8glRpC8Btg0A8hlE8h0A8JeAAA9gh?0wwBthlRpA8g0ywBtglRpA8g0R4C8glRpA8R4E8RpA8JeAA?PXAQ1pHBFrnRASo78A4MTzAVYt2AFr4AA9gRph0R4wwhlA8?Rpg0R4ywglA8Rpg0C8BtglA8RpE8BtA8JeAAA9gRpzhywA8?RpilBtwwg0A8RpglC8Btg0A8RpE8h0A8JeAAPXAQ1IEBFrn?RASo78A45QzAVYt2AFr4AA"
        }
    },
    "TIZO": {
        "See {I}{J}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@DhhlEeBtBeglBezhBtwwglRpAezhywRpJeAgH",
            minimals: "v115@Hhh0R4BtB8Rpg0R4B8BtA8Rpg0I8JeAgH",
            queues: (queue) => {
                return see(queue, "IJ")
            },
        },
        "See {L}{Z}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@KhwwBthlBeBtywBtglRpAeBtzhglRpJeAgH",
            minimals: "v115@Hhh0R4zhRpg0R4E8Rpg0I8JeAgH",
            queues: (queue) => {
                return see(queue, "LZ")
            },
        },
        "See {J}{Z}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@Hhh0wwBeBtCeg0ywDtRpg0zhBtAeRpJeAgH",
            minimals: "v115@HhzhR4hlRpC8R4B8glRpG8glB8JeAgH",
            queues: (queue) => {
                return see(queue, "JZ")
            },
        },
        "See {L}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@KhRpBeilywRpBtglRpAewwzhBtRpJeAgH",
            minimals: "v115@Hhh0R4Btzhg0R4B8BtC8g0I8JeAgH",
            queues: (queue) => {
                return see(queue, "LO")
            },
        },
        "See {Z}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@9gwhIewhCeywCewhDtwwTpwhAeDtTpJeAgH",
            minimals: "v115@HhA8h0R4zhglA8g0R4C8ilA8g0H8JeAgH",
            queues: (queue) => {
                return see(queue, "ZO")
            },
        },
        "See {S}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@ChQ4GeBtR4CeTpBtQ4ywTpzhwwKeAgH",
            minimals: "v115@Hhg0zhA8Bthli0D8BtglI8glJeAgH",
            queues: (queue) => {
                return see(queue, "SO")
            },
            notes: "sometimes not buildable with tetr.io's SRS+ rotation system (queue {T}{Z}{O}{I})"
        },
        "See {I}{J}{S}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@9gwhh0DewhBewhg0BtCewhBewhg0wwBtR4whRpwhyw?R4AewhRpJeAgH",
            minimals: "v115@HhC8BthlA8RpD8BtglA8RpF8glC8JeAgH",
            queues: (queue) => {
                return see(queue, "IJS")
            },
        },
        "See {L}{J}{S}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@/gglQ4HeglR4Bei0RphlQ4BtywRpzhBtwwg0JeAgH",
            minimals: "v115@RhRpB8BtzhRpC8BtC8JeAgH",
            queues: (queue) => {
                return see(queue, "LJS")
            },
        },
        "See {Z}": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@LhBtAeRpCewwDtRpBeywBtzhJeAgH",
            minimals: "v115@9gwhh0R4ywhlwhg0R4B8wwB8glwhg0G8glwhI8JeAg?H",
            notes: "sometimes cannot build this setup if the queue is {O}{T}{Z} or {T}{O}{Z}, where you can build the {O}{Z} qb instead",
            queues: (queue) => {
                if (queue == "OTZ" || queue == "TOZ") return false;
                return see(queue, "Z")
            },
        },
        "See {S}": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@IhRpCeR4CeRpBtR4wwBezhBtywKeAgH",
            minimals: "v115@9gh0Btywhlwhg0B8BtwwB8glwhg0G8glwhI8whJeAg?H",
            notes: "sometimes cannot build this setup if the queue is {O}{T}{S} or {T}{O}{S}, where you can build the {O}{S} qb instead (unless that too, is unbuildable, where you can just do the 3p general setup idk)",
            queues: (queue) => {
                if (queue == "OTS" || queue == "TOS") return false;
                return see(queue, "S")
            },
        },
        "{I}{T}{Z} 3p": {
            type: "general",
            saves: {
                T: "80.87%",
                O: "17.90%",
                I: "0.99%",
                Z: "0.24%"
            },
            "fumen": "v115@9gwhIewhIewhCewwBtCewhBeywBtLeAgH",
            "minimals": "v115@9gA8ywzhRpA8glwwR4i0RpA8glR4C8g0RpA8hlE8Rp?JeAgWaAU4f2AwngHBFbcRASEp2ARRaHBQecRAylAAA9gA8R?ph0R4hlwhA8Rpg0R4BtglwhA8Rpg0C8BtwhA8RpE8glwhJe?AgH9gA8Q4BtzhRpA8R4Bti0RpA8ilC8g0RpA8glQ4E8RpJe?AgWZAx/XHB2ngHBFbcRASU0RB0mv2AUo78AZAAAA9gA8Rpz?hR4AtA8RpilR4BtA8RpglC8i0A8RpE8Atg0JeAgH9gA8zhR?4wwhlA8i0R4ywglA8Rpg0C8BtglA8RpE8BtJeAgWZAx8P9A?5ngHBFbcRASEaOBwmv2AUo78AZAAAA9gA8h0wwBtzhA8g0y?wBtilA8g0R4C8glRpA8R4E8RpJeAgH9gA8g0R4BthlRpA8z?hBtglRpA8i0C8glRpA8R4E8RpJeAgWYAZlf9AFrnRASo78A?Ye22AvfEEBwnAVB9gA8Rph0R4BtglA8Rpg0R4zhA8Rpg0C8?ilA8RpE8BtJeAgH9gA8zhR4ywA8i0R4BthlA8Rpg0C8Btgl?A8RpE8wwglJeAgWYAVVt2AFrnRASo78AYLk9AvfEEBwnAVB?9gA8zhwwBtR4A8glRpywR4g0A8glRpC8Btg0A8hlE8h0JeA?gWXARFDVBFrnRASo78A4iMzAVYt2AFr4AA9gA8BtR4wwzhA?8glBtywRpg0A8glR4C8Rpg0A8hlE8h0JeAgH9gA8Rph0R4w?whlA8Rpg0R4ywglA8Rpg0C8BtglA8RpE8BtJeAgWXAQ1pHB?FrnRASo78A4MTzAVYt2AFr4AA9gA8h0wwBthlRpA8g0ywBt?glRpA8g0R4C8glRpA8R4E8RpJeAgH9gA8ywzhRpA8glwwR4?i0RpA8glR4C8g0RpA8hlE8RpJeAgWXAQ1IEBFrnRASo78A4?5QzAVYt2AFr4AA"
        }
    },
    "TISZ": {
        "See {S}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@GhwhAeR4BeQ4CewhR4wwBtR4RpwhAeywBtQ4RpwhJe?AgH",
            minimals: "v115@Hhh0BtzhglA8g0B8BtA8ilA8g0I8JeAgH",
            queues: (queue) => {
                return see(queue, "SO")
            },
        },
        "See {Z}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@9gwhIewhCeAtBeBtAewhRpBtR4wwBtwhRpAtR4ywKe?AgH",
            minimals: "v115@HhA8g0zhR4hlA8i0A8R4B8glI8glJeAgH",
            queues: (queue) => {
                return see(queue, "ZO")
            },
        },
        "See {L}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@KhBtBeglRpR4BtwwilRpAeR4ywzhJeAgH",
            minimals: "v115@Hhh0R4Btzhg0R4B8BtC8g0I8JeAgH",
            queues: (queue) => {
                return see(queue, "LO")
            },
        },
        "See {J}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@HhRpg0BeR4CeRpi0wwR4BtzhywBtKeAgH",
            minimals: "v115@HhzhR4BthlC8R4B8BtglI8glJeAgH",
            queues: (queue) => {
                return see(queue, "JO")
            },
        },
        "See {I}{S}{Z}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@AhR4GeR4IeBtEezhBtNeAgHAhxDBtEexDBeBtEeBPR?4CeTaRpzhJeAgH",
            minimals: "v115@9gi0B8R4hlwhRpB8R4ywwhRpg0B8BtwwglwhF8Btgl?whJeAgH9gg0R4B8ywRpR4B8Btwwili0B8BtglRpF8zhJeAA?A9gilB8R4g0RpBtB8R4wwi0glBtB8ywRpF8zhJeAAA",
            notes: "Mirror minimals if you can only build it on the right side\n1st minimal: {O} first\n2nd minimal: {L} first\n3rd minimal: {J} first",
            queues: (queue) => {
                return see(queue, "ISZ")
            }
        },
        "See {L}": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@JhBtEeglBewwBtR4ilAeywR4zhJeAgH",
            minimals: "v115@9gwhh0BtywR4whg0B8BtwwR4A8whg0H8whI8JeAgH",
            notes: "doesn't work if first two {s} are {O} and {S}, where you can do the {L}{O} or {O}{S} qb instead",
            queues: (queue) => {
                if (queue == "OSL" || queue == "SOL") return false;
                return see(queue, "L")
            }
        },
        "See {J}": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@Hhg0EeR4Bei0BtR4wwBezhBtywKeAgH",
            minimals: "v115@9gBtywR4hlwhA8BtwwR4B8glwhH8glwhI8whJeAgH",
            notes: "doesn't work if first two {s} are {O} and {Z}, where you can do the {J}{O} or {O}{Z} qb instead",
            queues: (queue) => {
                if (queue == "OZJ" || queue == "ZOJ") return false;
                return see(queue, "J")
            }
        },
        "See {T}": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@9gwhIewhCeBtDewhAeR4wwBtwwBewhR41wKeAgH",
            minimals: "v115@9gA8h0R4BthlwhA8g0R4B8BtglwhA8g0F8glwhI8wh?JeAgH",
            notes: "doesn't work if first two {s} are {L} and {O}, where you can do the {L}{O} qb, or mirror the setup",
            queues: (queue) => {
                return see(queue, "T")
            }
        },
        "See {I}{S}{Z} (easier)": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@Gh0hBtR4AtwhywT4BtwhAewwR4AeCtAewhJeAgH",
            minimals: "v115@9gilywi0U8glC8wwC8g0A8JeAgH",
            queues: (queue) => {
                return see(queue, "ISZ")
            }
        }
    },
    "TILO": {
        "See {S}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@9gwhIewhwwFehlwhxwR4TpglwhwwR4AeTpglJeAgH",
            minimals: "v115@HhA8Bthlg0zhB8Btgli0F8glE8JeAgH",
            queues: (queue) => {
                return see(queue, "SO")
            }
        },
        "See {Z}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@GhwhRpFewwwhRpglRpBtxwwhilRpAeBtwwwhJeAgH",
            minimals: "v115@Hhzhglh0R4C8ilg0R4G8g0D8JeAgH",
            queues: (queue) => {
                return see(queue, "ZO")
            }
        },
        "See {I}{Z}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@GhwhCeRpCewwwhilRpBtxwwhglzhAeBtwwwhJeAgH",
            minimals: "v115@HhRpilh0R4A8RpglB8g0R4G8g0D8JeAgH",
            queues: (queue) => {
                return see(queue, "IZ")
            }
        },
        "See {I}{S}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@9gwwIexwEeglQ4AewwzhRpglR4zhAeRphlQ4JeAgH",
            minimals: "v115@HhA8BthlRpi0B8BtglRpB8g0D8glE8JeAgH",
            queues: (queue) => {
                return see(queue, "IS")
            }
        },
        "See {J}{S}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@HhwwCeglRpg0BexwR4glRpi0wwR4AehlzhJeAgH",
            minimals: "v115@HhBthlzhRpA8BtglD8RpC8glF8JeAgH",
            queues: (queue) => {
                return see(queue, "JS")
            }
        },
        "See {L}{Z}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@KhwwBejlBtxwRpjlAeBtwwRpzhJeAgH",
            minimals: "v115@Hhh0R4Rpzhg0R4A8RpD8g0I8JeAgH",
            queues: (queue) => {
                return see(queue, "LZ")
            }
        },
        "See {I}{L}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@AhglDeRpwwilzhRpxwCeRpBeglwwzhRpilJeAgH",
            minimals: "v115@Rhi0A8R4BtD8g0R4B8BtA8JeAgH",
            queues: (queue) => {
                return see(queue, "ILO")
            }
        },
        "legs + {T}": {
            type: "general",
            saves: {
                T: "60.71%",
                O: "36.94%",
                I: "1.71%",
                L: "0.04%",
                J: "0.60%"
            },
            fumen: "v115@9gRpHeRpGewwilEexwglzhDewwJeAgH",
            minimals: "v115@9gB8ilwhh0R4B8glRpwhg0R4D8RpwhBtG8whg0BtA8?JeAgWaAy8fRBxngHBFbcRAS0W9AQIaHBQecRAylAAA9gB8R?pBtg0ilB8RpR4i0D8R4BtglG8zhA8JeAgWZAx53UBwngHBF?bcRASEy2Awmv2AUo78AZAAAA9gB8Rpg0ilR4B8Rpg0BtR4D?8h0glBtG8zhA8JeAgWZAx5/DBzngHBFbcRAS0XOB2mv2AUo?78AZAAAA9gB8i0Q4zhB8Btg0R4RpD8BtilG8glQ4RpA8JeA?gWZAR4nAByngHBFbcRAS0f9Awmv2AUo78AZAAAA9gB8Q4zh?Ath0B8R4RpBtg0D8Q4RpAtglG8ilg0A8JeAgWYAZlf9AFrn?RASo78AYe22AvfEEBwnAVB9gB8Q4BtRpwhh0B8R4Btglwhg?0D8Q4ilwhG8Rpwhg0A8JeAgWYAY1gHBFrnRASo78AYu2KBv?fEEBwnAVB9gB8RpilAtR4B8RpglzhD8i0BtG8g0AtR4A8Je?AgWYAX1h9AFrnRASo78A4cWEBvfEEBwnAVB9gB8Q4Btilh0?B8R4BtRpg0D8Q4zhG8glRpg0A8JeAgWYAW1ZOBFrnRASo78?A4M7KBvfEEBwnAVB9gB8ilwhg0AtR4B8glRpwhi0D8RpwhB?tG8whAtR4A8JeAgH9gB8g0ilRpR4B8i0zhD8glBtRpG8BtR?4A8JeAgWYAWl+UBFrnRASo78A4sW9AvfEEBwnAVB9gB8Btg?li0R4B8ilzhD8BtRpg0G8RpR4A8JeAgH9gB8Q4i0zhB8R4R?pilD8Q4RpBtG8g0glBtA8JeAgWYAVFM6AFrnRASo78AYb2R?BvfEEBwnAVB9gB8Q4BtRpilB8R4Bti0D8Q4zhG8Rpglg0A8?JeAgWYAV1IEBFrnRASo78AY7REBvfEEBwnAVB9gB8Btgli0?R4B8ilRpR4D8BtRpg0G8zhA8JeAgWYASVGLBFrnRASo78A4?ZNEBvfEEBwnAVB9gB8g0RpilR4B8i0BtR4D8RpglBtG8zhA?8JeAgH9gB8RpR4g0ilB8RpBti0D8R4BtglG8zhA8JeAgH9g?B8i0glRpR4B8Btg0zhD8BtglRpG8hlR4A8JeAgWYASlPEBF?rnRASo78A45oRBvfEEBwnAVB9gB8zhh0R4B8Bthlg0R4D8B?tglg0wwG8glywA8JeAgWAA9gB8g0zhywB8i0glBtwwD8ilR?4G8R4BtA8JeAgH9gB8g0zhywB8i0glR4wwD8ilBtG8R4BtA?8JeAgH9gB8Btglwhh0R4B8ilwhg0R4D8Btwhg0wwG8whywA?8JeAgH9gB8Q4zhywB8R4i0glwwD8Q4Btg0glG8BthlA8JeA?gH9gB8zhQ4ywB8BthlR4wwD8Btglg0Q4G8gli0A8JeAgH9g?B8Q4Bthlwhh0B8R4Btglwhg0D8Q4ywwhG8wwglwhg0A8JeA?gH9gB8Bthlh0R4B8zhg0R4D8Btglg0wwG8glywA8JeAgH9g?B8BtglwhQ4ywB8ilwhR4wwD8Btwhg0Q4G8whi0A8JeAgH9g?B8i0ilR4B8Btg0zhD8BtywG8glwwR4A8JeAgH9gB8Bti0ww?R4B8zhywD8BtilG8glg0R4A8JeAgH9gB8Q4Btywh0B8R4Bt?wwglg0D8Q4zhG8ilg0A8JeAgH9gB8Bthlh0R4B8zhywD8Bt?glg0wwG8glg0R4A8JeAgH9gB8Rpg0ilR4B8Rpg0glAtR4D8?h0BtwwG8AtywA8JeAgH9gB8Rpg0ywR4B8Rpg0glwwR4D8h0?glBtG8hlBtA8JeAgH9gB8ilh0ywB8glRpg0BtwwD8Rpg0R4?G8R4BtA8JeAgH9gB8ilwhBtR4B8glRpwhwwR4D8RpwhxwG8?whwwBtA8JeAgH9gB8Rpg0whBtR4B8Rpg0whwwR4D8h0whxw?G8whwwBtA8JeAgH"
        }
    },
    "TIJO": {
        "See {Z}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@Ghwhh0Fewwwhg0TpBtxwwhg0TpAeBtwwwhJeAgH",
            minimals: "v115@Hhzhglh0R4C8ilg0R4G8g0D8JeAgH",
            queues: (queue) => {
                return see(queue, "ZO")
            }
        },
        "See {S}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@9gwhIewhwwFeRpwhxwR4Rpg0RpwhwwR4AeRpi0JeAg?H",
            minimals: "v115@HhA8Bthlg0zhB8Btgli0F8glE8JeAgH",
            queues: (queue) => {
                return see(queue, "SO")
            }
        },
        "See {I}{S}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@9gwhIewhwwCeRpCewhxwR4Rpi0whwwR4Aezhg0JeAg?H",
            minimals: "v115@HhA8Bthli0RpB8BtglB8g0RpD8glE8JeAgH",
            queues: (queue) => {
                return see(queue, "IS")
            }
        },
        "See {I}{Z}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@GhwwAeAtg0EexwBtg0RpzhwwAth0RpAezhJeAgH",
            minimals: "v115@HhilRph0R4A8glB8Rpg0R4G8g0D8JeAgH",
            queues: (queue) => {
                return see(queue, "IZ")
            }
        },
        "See {L}{Z}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@JhglRpg0CewwilRpg0Btxwzhh0AeBtwwJeAgH",
            minimals: "v115@HhRpzhh0R4RpD8g0R4G8g0C8JeAgH",
            queues: (queue) => {
                return see(queue, "LZ")
            }
        },
        "See {J}{S}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@Hhj0BewwCej0RpxwR4zhRpwwR4KeAgH",
            minimals: "v115@HhzhRpBthlD8RpA8BtglI8glJeAgH",
            queues: (queue) => {
                return see(queue, "JS")
            }
        },
        "See {I}{J}{O}": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@9gRpDeg0CeRpzhi0wwg0BeRpCexwi0RpzhwwJeAgH",
            minimals: "v115@RhB8R4BtA8ilA8R4B8BtglB8JeAgH",
            queues: (queue) => {
                return see(queue, "IJO")
            }
        },
        "legs + {T}": {
            type: "general",
            saves: {
                T: "60.71%",
                O: "36.94%",
                I: "1.71%",
                J: "0.04%",
                L: "0.60%"
            },
            fumen: "v115@FhRpwwGeRpxwEei0wwDezhg0JeAgH",
            minimals: "v115@9gBthlwhi0C8BtglwhRpg0D8R4whRpD8R4glwhE8Je?AgWaAy8fRBxngHBFbcRAS0W9AQIaHBQecRAylAAA9gi0glR?4RpC8ilBtRpD8g0R4BtD8zhE8JeAgWZAx53UBwngHBFbcRA?SEy2Awmv2AUo78AZAAAA9gBti0glRpC8BtR4glRpD8R4g0h?lD8zhE8JeAgWZAx5/DBzngHBFbcRAS0XOB2mv2AUo78AZAA?AA9gzhAtilC8RpBtglR4D8i0R4D8RpAtg0E8JeAgWZAR4nA?ByngHBFbcRAS0f9Awmv2AUo78AZAAAA9ghlQ4zhAtC8glR4?RpBtD8g0Q4RpAtD8gli0E8JeAgWYAZlf9AFrnRASo78AYe2?2AvfEEBwnAVB9ghlwhRpR4AtC8glwhg0R4BtD8whi0AtD8g?lwhRpE8JeAgWYAY1gHBFrnRASo78AYu2KBvfEEBwnAVB9gB?tQ4i0RpC8zhg0RpD8R4ilD8BtQ4glE8JeAgWYAX1h9AFrnR?ASo78A4cWEBvfEEBwnAVB9ghli0R4AtC8glRpR4BtD8zhAt?D8glRpg0E8JeAgWYAW1ZOBFrnRASo78A4M7KBvfEEBwnAVB?9gBtQ4glwhi0C8ilwhRpg0D8R4whRpD8BtQ4whE8JeAgH9g?BtRpi0glC8zhilD8RpR4g0D8BtR4E8JeAgWYAWl+UBFrnRA?So78A4sW9AvfEEBwnAVB9gBtilg0R4C8zhi0D8glRpR4D8B?tRpE8JeAgH9gzhilAtC8i0RpBtD8R4RpAtD8R4g0glE8JeA?gWYAVFM6AFrnRASo78AYb2RBvfEEBwnAVB9gi0RpR4AtC8i?lR4BtD8zhAtD8glg0RpE8JeAgWYAV1IEBFrnRASo78AY7RE?BvfEEBwnAVB9gBtilg0R4C8BtRpi0D8glRpR4D8zhE8JeAg?WYASVGLBFrnRASo78A4ZNEBvfEEBwnAVB9gBti0RpglC8Bt?R4ilD8R4g0RpD8zhE8JeAgH9gi0glBtRpC8ilR4RpD8g0R4?BtD8zhE8JeAgH9gBtRpg0ilC8zhglR4D8Rpg0R4D8Bth0E8?JeAgWYASlPEBFrnRASo78A45oRBvfEEBwnAVB9gBthlzhC8?Btglh0R4D8wwglg0R4D8ywg0E8JeAgWAA9gywzhglC8wwR4?g0ilD8Bti0D8R4BtE8JeAgH9gywzhglC8wwBtg0ilD8R4i0?D8R4BtE8JeAgH9gBthlwhg0R4C8Btglwhi0D8wwglwhR4D8?ywwhE8JeAgH9gywzhAtC8wwg0ilBtD8g0glR4AtD8h0R4E8?JeAgH9gywAtzhC8wwBth0R4D8Atglg0R4D8ilg0E8JeAgH9?ghlwhh0R4AtC8glwhg0R4BtD8whywAtD8glwhg0wwE8JeAg?H9gBthlh0R4C8BtglzhD8wwglg0R4D8ywg0E8JeAgH9gywA?twhg0R4C8wwBtwhi0D8AtglwhR4D8ilwhE8JeAgH9gBti0i?lC8zhglR4D8ywR4D8Btwwg0E8JeAgH9gBtwwilR4C8ywzhD?8i0R4D8Btglg0E8JeAgH9ghlywR4AtC8glg0wwR4BtD8zhA?tD8gli0E8JeAgH9gBthlh0R4C8ywzhD8wwglg0R4D8Btglg?0E8JeAgH9gBti0glRpC8BtQ4g0glRpD8wwR4hlD8ywQ4E8J?eAgH9gBtywglRpC8Btwwg0glRpD8R4g0hlD8R4h0E8JeAgH?9gywhli0C8wwR4glRpg0D8BtglRpD8R4BtE8JeAgH9gBtR4?whi0C8BtwwwhRpg0D8xwwhRpD8R4wwwhE8JeAgH9gBtR4wh?glRpC8BtwwwhglRpD8xwwhhlD8R4wwwhE8JeAgH"
        }
    },
    "TJLS": {
        'See SO':{
            type:'qb',
            saves:{T:'100'},
            fumen:'v115@9gQ4IeR4FeR4g0Q4ywRpR4gli0wwAeRpilJeAgH',
            minimals:'v115@HhA8Bthlg0zhB8Btgli0F8glE8JeAgH',
            queues:(queue)=>{
            return see(queue,'SO')}
        },
        'See IZ':{
            type:'qb',
            saves:{T:'100'},
            fumen:'v115@GhwhAewwCeAtBeg0whywglBtR4g0whAeilAtR4h0wh?JeAgH',
            minimals:'v115@Hhh0RpilR4A8g0A8RpglA8R4B8g0I8JeAgH',
            queues:(queue)=>{
            return see(queue,'IZ')}
        },
        'See IS':{
            type:'qb',
            saves:{T:'100'},
            fumen:'v115@9gwhIewhglQ4CewwCewhglR4g0ywR4whhlQ4i0R4Ke?AgH',
            minimals:'v115@HhA8i0RpBthlC8g0RpA8BtglI8glJeAgH',
            queues:(queue)=>{
            return see(queue,'IS')}
        },
    },
    "TJSZ": { // From here, QB setups are needed
        "Tub": {
            type: "general",
            saves: {
                O: "97.98%",
                I: "1.15%",
                S: "0.87%"
            },
            fumen: "v115@9gQ4IeR4CewwDeg0Q4BtxwDei0BtwwNeAgH",
            minimals: "v115@9gA8Btywwhi0B8BtwwA8whglQ4g0F8whglR4F8whhl?Q4JeAgWaAUBwKB3ngHBFbcRASExABVLaHBQecRAylAAA9gA?8BtywzhB8BtwwA8h0R4F8g0R4glF8g0ilJeAAPaA05HOB1n?gHBFbcRASEB6AQOaHBQecRAylAAA9gA8ywR4zhB8wwR4A8B?thlF8g0BtglF8i0glJeAAA9gA8ywR4ilwhB8wwR4A8glAtg?0whF8Btg0whF8Ath0whJeAAPaAU4f2AwngHBFbcRASEp2AR?RaHBQecRAylAAA9gA8ywR4h0AtwhB8wwR4A8g0BtwhF8g0A?tglwhF8ilwhJeAAPaAz8nABzngHBFbcRAS02KBYIaHBQecR?AylAAA9gA8BtywQ4hlwhB8BtwwA8R4glwhF8g0Q4glwhF8i?0whJeAAA9gA8Btywh0R4B8BtwwA8g0R4glF8g0ilF8zhJeA?APaASBwKB3ngHBFbcRAS0uABUOaHBQecRAylAAA9gA8ywR4?BthlB8wwR4A8g0BtglF8i0glF8zhJeAAA9gA8ywR4ilwhB8?wwR4A8i0whF8Btg0whF8glBtwhJeAAPZAxFg2A1ngHBFbcR?AS0ILBwmv2AUo78AZAAAA9gA8ywR4BtglwhB8wwR4A8ilwh?F8g0BtwhF8i0whJeAAA9gA8Btywi0whB8BtwwA8ilwhF8gl?R4whF8R4g0whJeAAA9gA8Btywg0R4whB8BtwwA8i0whF8R4?glwhF8ilwhJeAAA9gA8Btywgli0B8BtwwA8glR4g0F8R4Rp?F8hlRpJeAAPXAQ1ZOBFrnRASo78A4cVzAVYt2AFr4AA9gA8?BtywzhB8BtwwA8h0hlF8g0RpglF8g0RpglJeAAPXAQVtRBF?rnRASo78AYbVzAVYt2AFr4AA9gA8Btywi0whB8BtwwA8Rpg?0whF8RpglwhF8ilwhJeAAPXAQVt2AFrnRASo78AYbMzAVYt?2AFr4AA9gA8Btywh0hlB8BtwwA8g0RpglF8g0RpglF8zhJe?AAPXAQFb9AFrnRASo78A45ZzAVYt2AFr4AA9gA8ywR4BtRp?B8wwR4A8h0RpF8g0BtglF8g0ilJeAAPXAQ1IEBFrnRASo78?A45QzAVYt2AFr4AA9gA8BtywRpR4B8BtwwA8RphlF8g0R4g?lF8i0glJeAAA",
            notes: "The first save {I} setup requires a 180 spin. Without 180, the solve percentage drops down to 99.76%"
        }
    },
    "TLSZ": {
        "Tub": {
            type: "general",
            saves: {
                O: "97.98%",
                I: "1.15%",
                Z: "0.87%"
            },
            fumen: "v115@GhAtDewwCeBtDexwR4AtglDewwR4ilJeAgH",
            minimals: "v115@9gilwhywR4A8glAtg0whA8wwR4B8Btg0whF8Ath0wh?F8JeAgWaAUBwKB3ngHBFbcRASExABVLaHBQecRAylAAA9gz?hywR4A8BthlA8wwR4B8g0BtglF8i0glF8JeAAPaA05HOB1n?gHBFbcRASEB6AQOaHBQecRAylAAA9gzhBtywA8h0R4A8Btw?wB8g0R4glF8g0ilF8JeAAA9gwhi0BtywA8whglQ4g0A8Btw?wB8whglR4F8whhlQ4F8JeAAPaAU4f2AwngHBFbcRASEp2AR?RaHBQecRAylAAA9gwhQ4hlBtywA8whR4glA8BtwwB8whg0Q?4glF8whi0F8JeAAPaAz8nABzngHBFbcRAS02KBYIaHBQecR?AylAAA9gwhh0AtywR4A8whg0BtA8wwR4B8whg0AtglF8whi?lF8JeAAA9gBthlywR4A8g0BtglA8wwR4B8i0glF8zhF8JeA?APaASBwKB3ngHBFbcRAS0uABUOaHBQecRAylAAA9gh0R4Bt?ywA8g0R4glA8BtwwB8g0ilF8zhF8JeAAA9gwhi0BtywA8wh?ilA8BtwwB8whglR4F8whR4g0F8JeAAPZAxFg2A1ngHBFbcR?AS0ILBwmv2AUo78AZAAAA9gwhg0R4BtywA8whi0A8BtwwB8?whR4glF8whilF8JeAAA9gwhilywR4A8whi0A8wwR4B8whBt?g0F8whglBtF8JeAAA9gwhBtglywR4A8whilA8wwR4B8whg0?BtF8whi0F8JeAAA9gilg0ywR4A8glBtg0A8wwR4B8RpBtF8?Rph0F8JeAAPXAQ1ZOBFrnRASo78A4cVzAVYt2AFr4AA9gzh?ywR4A8h0hlA8wwR4B8g0RpglF8g0RpglF8JeAAPXAQVtRBF?rnRASo78AYbVzAVYt2AFr4AA9gwhilywR4A8whglRpA8wwR?4B8whg0RpF8whi0F8JeAAPXAQVt2AFrnRASo78AYbMzAVYt?2AFr4AA9gh0hlywR4A8g0RpglA8wwR4B8g0RpglF8zhF8Je?AAPXAQFb9AFrnRASo78A45ZzAVYt2AFr4AA9gRpR4BtywA8?RphlA8BtwwB8g0R4glF8i0glF8JeAAPXAQ1IEBFrnRASo78?A45QzAVYt2AFr4AA9gBtRpywR4A8h0RpA8wwR4B8g0BtglF?8g0ilF8JeAAA",
            notes: "The first save {I} setup requires a 180 spin. Without 180, the solve percentage drops down to 99.76%"
        }
    },
    "TLZO": {
        "Heart + PCO": {
            type:"general",
            saves: {
                T : "31.19%",
                O : "86.90%",
            },
            fumen:"v115@GhwwRpFexwRpglDeBtwwilEeBtJeAgH",
            minimals:"v115@9gi0whywR4C8g0whglwwR4E8whglBtF8whhlBtB8Je?AgWaA053UB0ngHBFbcRASEB6AROaHBQecRAylAAA9gi0zhR?4C8g0ilR4E8glwwBtF8ywBtB8JeAAPaAz5vKBzngHBFbcRA?S0eHBZOaHBQecRAylAAA9gi0whilR4C8g0whglAtR4E8whB?twwF8whAtywB8JeAAPaAyFIOB2ngHBFbcRAS0eHBQIaHBQe?cRAylAAA9gzhglh0R4C8ilg0R4E8RpBtF8Rpg0BtB8JeAAP?aAy/HOBxngHBFbcRAS0W9AZRaHBQecRAylAAA9gzhh0ywC8?hlg0BtwwE8glg0R4F8glR4BtB8JeAAPaAS4f2A4ngHBFbcR?AS0m2ARLaHBQecRAylAAA9gzhBtywC8hlh0R4E8glg0R4F8?glg0BtwwB8JeAAPZAx83UBzngHBFbcRASU02Aymv2AUo78A?ZAAAA9gzhglBtR4C8ilwwR4E8g0ywF8i0BtB8JeAAPZAx53?5AxngHBFbcRAS0/KBwmv2AUo78AZAAAA9gzhR4glh0C8Bti?lg0E8BtRpF8R4Rpg0B8JeAAPZAR43UB1ngHBFbcRAS0nHBy?mv2AUo78AZAAAA9gzhQ4glywC8BtR4h0E8BtQ4g0F8ilg0w?wB8JeAAPYAZlILBFrnRASo78A4fU9AvfEEBwnAVB9gzhglB?tR4C8ilwwBtE8g0ywF8i0R4B8JeAAPYAZVWEBFrnRASo78A?YuILBvfEEBwnAVB9gzhglg0AtR4C8ili0E8RpBtF8RpAtR4?B8JeAAPYAZlf9AFrnRASo78AYe22AvfEEBwnAVB9gzhglBt?R4C8ilwwR4E8RpxwF8RpwwBtB8JeAAPYASF0RBFrnRASo78?A4Zt2AvfEEBwnAVB9gi0BtzhC8g0wwBtRpE8xwR4F8wwR4R?pB8JeAAPXARl+UBFrnRASo78AYhMzAVYt2AFr4AA9gi0RpB?tR4C8g0ilR4E8glywF8RpwwBtB8JeAAPXAQFsHBFrnRASo7?8A4cezAVYt2AFr4AA9gi0ilywC8g0glBtR4E8RpR4F8RpBt?wwB8JeAAPXAQ1x2AFrnRASo78A4cMzAVYt2AFr4AA9gzhgl?h0R4C8ilg0R4E8Rpg0wwF8RpywB8JeAAPXAQVtRBFrnRASo?78AYbVzAVYt2AFr4AA9gi0ilywC8g0glAtRpwwE8BtRpF8A?tzhB8JeAAPXAQ1oRBFrnRASo78A4ZVzAVYt2AFr4AA9gzhR?pywC8hlRpR4E8glg0R4F8gli0wwB8JeAAPWAQlW9AFrnRAS?o78AYRaHBQecRAylAAA",
            notes:"Setup is impossible to build with {O} and {T} first. Build any other setup if you can't build it."
        },
        "3p tub": {
            type:"general",
            saves: {
                O:"90.67%",
                I:"7.28%",
                S:"1.43%",
                Z:"0.62%"
            },
            fumen:"v115@MhglCewwEeglBtxwEehlBtwwJeAgH",
            minimals:"v115@9gzhglywR4BtilA8wwR4A8g0BtRpE8i0RpE8JeAgWa?A08vKB1ngHBFbcRASEZ9AQIaHBQecRAylAAA9gg0zhBtywi?0R4A8BtwwA8RpR4glE8RpilE8JeAAA9gQ4zhBtywR4ilA8B?twwA8g0Q4glRpE8i0RpE8JeAAPaAz5/DBzngHBFbcRAS0eH?BYOaHBQecRAylAAA9gzhAtywR4i0BtA8wwR4A8Rpg0AtglE?8RpilE8JeAAA9gilR4BtywglzhA8BtwwA8Rpi0E8RpR4g0E?8JeAAPaAy8fRBxngHBFbcRAS0W9AQIaHBQecRAylAAA9gBt?i0ywR4zhg0A8wwR4A8ilRpE8glBtRpE8JeAAA9gRpi0ywR4?RpBtg0A8wwR4A8ilBtE8glzhE8JeAAPZAREQ9AxngHBFbcR?AS0Q6A4mv2AUo78AZAAAA9gilRpBtywglR4RpA8BtwwA8R4?i0E8zhg0E8JeAAA9gwhilg0ywR4whglBtg0A8wwR4A8whRp?BtE8whRph0E8JeAAPZAx/XHB2ngHBFbcRASU0RB0mv2AUo7?8AZAAAA9gh0ilBtywg0zhA8BtwwA8g0R4RpE8R4glRpE8Je?AAPZAR+P9A5ngHBFbcRASUk9Awmv2AUo78AZAAAA9gi0hly?wR4zhglA8wwR4A8RpBtglE8Rpg0BtE8JeAAA9gBtilywR4h?0glRpA8wwR4A8g0BtRpE8g0zhE8JeAAPYAZlf9AFrnRASo7?8AYe22AvfEEBwnAVB9gi0R4BtywRpg0hlA8BtwwA8RpR4gl?E8zhglE8JeAAA9gRpi0BtywRpglQ4g0A8BtwwA8ilR4E8zh?Q4E8JeAAPYAZlOOBFrnRASo78AY+h9AvfEEBwnAVB9gilRp?ywR4glAtg0RpA8wwR4A8Bti0E8AtzhE8JeAAA9gh0ilywR4?BtglRpA8wwR4A8g0BtRpE8g0zhE8JeAAPYAXlGEBFrnRASo?78A48x2AvfEEBwnAVB9gi0hlBtywRpg0R4A8BtwwA8RpR4g?lE8zhglE8JeAAA9gg0R4RpBtywi0RpA8BtwwA8zhglE8R4i?lE8JeAAPYAUFELBFrnRASo78AYbt2AvfEEBwnAVB9gRpBtg?lywR4RpilA8wwR4A8g0zhE8i0BtE8JeAAA9gi0RpBtywilR?pA8BtwwA8glR4RpE8R4g0RpE8JeAAPYASlv2AFrnRASo78A?454KBvfEEBwnAVB9gilRpywR4glAtg0RpA8wwR4A8Btg0Rp?E8Ath0RpE8JeAAA9gQ4hlRpBtywR4glRpA8BtwwA8g0Q4gl?RpE8i0RpE8JeAAA9gh0AtRpywR4g0BtRpA8wwR4A8g0Atgl?RpE8ilRpE8JeAAPYASVd9AFrnRASo78A45Y9AvfEEBwnAVB?9gilRpywR4i0RpA8wwR4A8Btg0RpE8glBtRpE8JeAAPYASF?r2AFrnRASo78A4p2KBvfEEBwnAVB9gRpi0BtywRpglQ4g0A?8BtwwA8RpglR4E8RphlQ4E8JeAAPYASlmRBFrnRASo78A4p?m2AvfEEBwnAVB9gzhglBtywh0ilA8BtwwA8g0TpE8g0TpE8?JeAAPXARl+UBFrnRASo78AYhMzAVYt2AFr4AA9gBtglRpyw?R4ilRpA8wwR4A8g0BtRpE8i0RpE8JeAAPXARl+5AFrnRASo?78A4/ZzAVYt2AFr4AA9gg0R4RpBtywi0RpA8BtwwA8R4glR?pE8ilRpE8JeAAPXARV85AFrnRASo78A4vOzAVYt2AFr4AA9?gg0zhBtywi0RpA8BtwwA8RpilE8RpglRpE8JeAAPXAQ15AB?FrnRASo78A48QzAVYt2AFr4AA9gzhglywR4h0ilA8wwR4A8?g0TpE8g0TpE8JeAAPXAQ1h9AFrnRASo78A4sOzAVYt2AFr4?AA",
            notes:"The save {O} setups are similar to tub 7th, and the save {I} setups are similar to the save {O} regular tub 2nd"
        }
    },
    "TJSO": {
        "Heart + PCO": {
            type:"general",
            saves: {
                T : "31.19%",
                O : "86.90%",
            },
            fumen:"v115@9gwwIexwFeRpwwR4Deg0RpR4Eei0JeAgH",
            minimals:"v115@9gA8BtywwhilB8Btwwg0whglE8R4g0whE8R4h0whC8?JeAgWaA053UB0ngHBFbcRASEB6AROaHBQecRAylAAA9gA8B?tzhilB8Bti0glE8R4wwg0E8R4ywC8JeAAPaAz5vKBzngHBF?bcRAS0eHBZOaHBQecRAylAAA9gA8Bti0whilB8BtQ4g0whg?lE8wwR4whE8ywQ4whC8JeAAPaAyFIOB2ngHBFbcRAS0eHBQ?IaHBQecRAylAAA9gA8Bthlg0zhB8Btgli0E8R4RpE8R4glR?pC8JeAAPaAy/HOBxngHBFbcRAS0W9AZRaHBQecRAylAAA9g?A8ywhlzhB8wwR4glh0E8Btglg0E8R4Btg0C8JeAAPaAS4f2?A4ngHBFbcRAS0m2ARLaHBQecRAylAAA9gA8ywR4zhB8Bthl?h0E8Btglg0E8wwR4glg0C8JeAAPZAx83UBzngHBFbcRASU0?2Aymv2AUo78AZAAAA9gA8BtR4g0zhB8Btwwi0E8ywglE8R4?ilC8JeAAPZAx535AxngHBFbcRAS0/KBwmv2AUo78AZAAAA9?gA8hlg0BtzhB8gli0R4E8RpR4E8glRpBtC8JeAAPZAR43UB?1ngHBFbcRAS0nHBymv2AUo78AZAAAA9gA8ywg0AtzhB8hlB?tR4E8glAtR4E8wwgli0C8JeAAPYAZlILBFrnRASo78A4fU9?AvfEEBwnAVB9gA8BtR4g0zhB8R4wwi0E8ywglE8BtilC8Je?AAPYAZVWEBFrnRASo78AYuILBvfEEBwnAVB9gA8BtQ4glg0?zhB8ili0E8R4RpE8BtQ4RpC8JeAAPYAZlf9AFrnRASo78AY?e22AvfEEBwnAVB9gA8BtR4g0zhB8Btwwi0E8xwRpE8R4wwR?pC8JeAAPYASF0RBFrnRASo78A4Zt2AvfEEBwnAVB9gA8zhR?4ilB8RpR4wwglE8BtxwE8RpBtwwC8JeAAPXARl+UBFrnRAS?o78AYhMzAVYt2AFr4AA9gA8BtR4RpilB8Bti0glE8ywg0E8?R4wwRpC8JeAAPXAQFsHBFrnRASo78A4cezAVYt2AFr4AA9g?A8ywi0ilB8BtR4g0glE8BtRpE8wwR4RpC8JeAAPXAQ1x2AF?rnRASo78A4cMzAVYt2AFr4AA9gA8Bthlg0zhB8Btgli0E8w?wglRpE8ywRpC8JeAAPXAQVtRBFrnRASo78AYbVzAVYt2AFr?4AA9gA8ywi0ilB8wwRpQ4g0glE8RpR4E8zhQ4C8JeAAPXAQ?1oRBFrnRASo78A4ZVzAVYt2AFr4AA9gA8ywRpzhB8BtRph0?E8Btglg0E8wwilg0C8JeAAPWAQlW9AFrnRASo78AYRaHBQe?cRAylAAA",
            notes:"Setup is impossible to build with {O} and {T} first. Build any other setup if you can't build it."
        },
        "3p tub": {
            type:"general",
            saves: {
                O:"90.67%",
                I:"7.28%",
                Z:"1.43%",
                S:"0.62%"
            },
            fumen:"v115@HhwwCeg0EexwR4g0EewwR4h0OeAgH",
            minimals:"v115@9gBtywg0zhA8BtwwA8i0R4E8RpR4glE8RpilJeAgWa?A08vKB1ngHBFbcRASEZ9AQIaHBQecRAylAAA9gywR4zhglA?8wwR4A8BtilE8g0BtRpE8i0RpJeAAA9gywR4zhAtA8wwR4A?8i0BtE8Rpg0AtglE8RpilJeAAPaAz5/DBzngHBFbcRAS0eH?BYOaHBQecRAylAAA9gBtywQ4zhA8BtwwA8R4ilE8g0Q4glR?pE8i0RpJeAAA9gywR4Bti0A8wwR4A8zhg0E8ilRpE8glBtR?pJeAAPaAy8fRBxngHBFbcRAS0W9AQIaHBQecRAylAAA9gBt?ywilR4A8BtwwA8glzhE8Rpi0E8RpR4g0JeAAA9gBtywilRp?A8BtwwA8glR4RpE8R4i0E8zhg0JeAAPZAREQ9AxngHBFbcR?AS0Q6A4mv2AUo78AZAAAA9gywR4Rpi0A8wwR4A8RpBtg0E8?ilBtE8glzhJeAAA9gBtywgli0whA8BtwwA8glR4g0whE8R4?RpwhE8hlRpwhJeAAPZAx/XHB2ngHBFbcRASU0RB0mv2AUo7?8AZAAAA9gywR4i0hlA8wwR4A8zhglE8RpBtglE8Rpg0BtJe?AAPZAR+P9A5ngHBFbcRASUk9Awmv2AUo78AZAAAA9gBtywh?0ilA8BtwwA8g0zhE8g0R4RpE8R4glRpJeAAA9gBtywi0R4A?8BtwwA8Rpg0hlE8RpR4glE8zhglJeAAPYAZlf9AFrnRASo7?8AYe22AvfEEBwnAVB9gywR4BtilA8wwR4A8h0glRpE8g0Bt?RpE8g0zhJeAAA9gywR4ilRpA8wwR4A8glAtg0RpE8Bti0E8?AtzhJeAAPYAZlOOBFrnRASo78AY+h9AvfEEBwnAVB9gBtyw?Rpi0A8BtwwA8RpglQ4g0E8ilR4E8zhQ4JeAAA9gBtywi0hl?A8BtwwA8Rpg0R4E8RpR4glE8zhglJeAAPYAXlGEBFrnRASo?78A48x2AvfEEBwnAVB9gywR4h0ilA8wwR4A8BtglRpE8g0B?tRpE8g0zhJeAAA9gywR4RpBtglA8wwR4A8RpilE8g0zhE8i?0BtJeAAPYAUFELBFrnRASo78AYbt2AvfEEBwnAVB9gBtywg?0R4RpA8BtwwA8i0RpE8zhglE8R4ilJeAAA9gywR4RpilA8w?wR4A8Rpi0E8RpBtg0E8RpglBtJeAAPYASlv2AFrnRASo78A?454KBvfEEBwnAVB9gBtywRpi0A8BtwwA8RpglQ4g0E8Rpgl?R4E8RphlQ4JeAAA9gywR4Rph0AtA8wwR4A8Rpg0BtE8Rpg0?AtglE8RpilJeAAA9gBtywRpQ4hlA8BtwwA8RpR4glE8Rpg0?Q4glE8Rpi0JeAAPYASVd9AFrnRASo78A45Y9AvfEEBwnAVB?9gBtywRpi0A8BtwwA8RpilE8RpglR4E8RpR4g0JeAAPYASF?r2AFrnRASo78A4p2KBvfEEBwnAVB9gywR4ilRpA8wwR4A8g?lAtg0RpE8Btg0RpE8Ath0RpJeAAPYASlmRBFrnRASo78A4p?m2AvfEEBwnAVB9gywR4g0zhA8wwR4A8i0hlE8TpglE8Tpgl?JeAAPXARl+UBFrnRASo78AYhMzAVYt2AFr4AA9gBtywRpg0?R4A8BtwwA8Rpi0E8RpR4glE8RpilJeAAPXARl+5AFrnRASo?78A4/ZzAVYt2AFr4AA9gywR4RpBtglA8wwR4A8RpilE8Rpg?0BtE8Rpi0JeAAPXARV85AFrnRASo78A4vOzAVYt2AFr4AA9?gywR4zhglA8wwR4A8RpilE8i0RpE8Rpg0RpJeAAPXAQ15AB?FrnRASo78A48QzAVYt2AFr4AA9gBtywg0zhA8BtwwA8i0hl?E8TpglE8TpglJeAAPXAQ1h9AFrnRASo78A4sOzAVYt2AFr4?AA",
            notes:"The save {O} setups are similar to tub 7th, and the save {I} setups are similar to the save {O} regular tub 2nd"
        }
    },
    "TJZO": {
        "Heart + PCO": {
            type:"general",
            saves: {
                T : "31.19%",
                O : "86.90%",
            },
            fumen:"v115@Ghwwh0Fexwg0RpDeBtwwg0RpEeBtJeAgH",
            minimals:"v115@9gi0whywR4C8g0whglwwR4E8whglBtF8whhlBtB8Je?AgWaA053UB0ngHBFbcRASEB6AROaHBQecRAylAAA9gi0zhR?4C8g0ilR4E8glwwBtF8ywBtB8JeAAPaAz5vKBzngHBFbcRA?S0eHBZOaHBQecRAylAAA9gi0whilR4C8g0whglAtR4E8whB?twwF8whAtywB8JeAAPaAyFIOB2ngHBFbcRAS0eHBQIaHBQe?cRAylAAA9gzhglh0R4C8ilg0R4E8RpBtF8Rpg0BtB8JeAAP?aAy/HOBxngHBFbcRAS0W9AZRaHBQecRAylAAA9gzhh0ywC8?hlg0BtwwE8glg0R4F8glR4BtB8JeAAPaAS4f2A4ngHBFbcR?AS0m2ARLaHBQecRAylAAA9gzhBtywC8hlh0R4E8glg0R4F8?glg0BtwwB8JeAAPZAx83UBzngHBFbcRASU02Aymv2AUo78A?ZAAAA9gzhglBtR4C8ilwwR4E8g0ywF8i0BtB8JeAAPZAx53?5AxngHBFbcRAS0/KBwmv2AUo78AZAAAA9gzhR4glh0C8Bti?lg0E8BtRpF8R4Rpg0B8JeAAPZAR43UB1ngHBFbcRAS0nHBy?mv2AUo78AZAAAA9gzhQ4glywC8BtR4h0E8BtQ4g0F8ilg0w?wB8JeAAPYAZlILBFrnRASo78A4fU9AvfEEBwnAVB9gzhglB?tR4C8ilwwBtE8g0ywF8i0R4B8JeAAPYAZVWEBFrnRASo78A?YuILBvfEEBwnAVB9gzhglg0AtR4C8ili0E8RpBtF8RpAtR4?B8JeAAPYAZlf9AFrnRASo78AYe22AvfEEBwnAVB9gzhglBt?R4C8ilwwR4E8RpxwF8RpwwBtB8JeAAPYASF0RBFrnRASo78?A4Zt2AvfEEBwnAVB9gi0BtzhC8g0wwBtRpE8xwR4F8wwR4R?pB8JeAAPXARl+UBFrnRASo78AYhMzAVYt2AFr4AA9gi0RpB?tR4C8g0ilR4E8glywF8RpwwBtB8JeAAPXAQFsHBFrnRASo7?8A4cezAVYt2AFr4AA9gi0ilywC8g0glBtR4E8RpR4F8RpBt?wwB8JeAAPXAQ1x2AFrnRASo78A4cMzAVYt2AFr4AA9gzhgl?h0R4C8ilg0R4E8Rpg0wwF8RpywB8JeAAPXAQVtRBFrnRASo?78AYbVzAVYt2AFr4AA9gi0ilywC8g0glAtRpwwE8BtRpF8A?tzhB8JeAAPXAQ1oRBFrnRASo78A4ZVzAVYt2AFr4AA9gzhR?pywC8hlRpR4E8glg0R4F8gli0wwB8JeAAPWAQlW9AFrnRAS?o78AYRaHBQecRAylAAA"
        },
    },
    "TLSO": {
        "Heart + PCO": {
            type:"general",
            saves: {
                T : "31.19%",
                O : "86.90%",
            },
            fumen:"v115@9gwwIexwFehlwwR4DeRpglR4EeRpglJeAgH",
            minimals:"v115@9gA8BtywwhilB8Btwwg0whglE8R4g0whE8R4h0whC8?JeAgWaA053UB0ngHBFbcRASEB6AROaHBQecRAylAAA9gA8B?tzhilB8Bti0glE8R4wwg0E8R4ywC8JeAAPaAz5vKBzngHBF?bcRAS0eHBZOaHBQecRAylAAA9gA8Bti0whilB8BtQ4g0whg?lE8wwR4whE8ywQ4whC8JeAAPaAyFIOB2ngHBFbcRAS0eHBQ?IaHBQecRAylAAA9gA8Bthlg0zhB8Btgli0E8R4RpE8R4glR?pC8JeAAPaAy/HOBxngHBFbcRAS0W9AZRaHBQecRAylAAA9g?A8ywhlzhB8wwR4glh0E8Btglg0E8R4Btg0C8JeAAPaAS4f2?A4ngHBFbcRAS0m2ARLaHBQecRAylAAA9gA8ywR4zhB8Bthl?h0E8Btglg0E8wwR4glg0C8JeAAPZAx83UBzngHBFbcRASU0?2Aymv2AUo78AZAAAA9gA8BtR4g0zhB8Btwwi0E8ywglE8R4?ilC8JeAAPZAx535AxngHBFbcRAS0/KBwmv2AUo78AZAAAA9?gA8hlg0BtzhB8gli0R4E8RpR4E8glRpBtC8JeAAPZAR43UB?1ngHBFbcRAS0nHBymv2AUo78AZAAAA9gA8ywg0AtzhB8hlB?tR4E8glAtR4E8wwgli0C8JeAAPYAZlILBFrnRASo78A4fU9?AvfEEBwnAVB9gA8BtR4g0zhB8R4wwi0E8ywglE8BtilC8Je?AAPYAZVWEBFrnRASo78AYuILBvfEEBwnAVB9gA8BtQ4glg0?zhB8ili0E8R4RpE8BtQ4RpC8JeAAPYAZlf9AFrnRASo78AY?e22AvfEEBwnAVB9gA8BtR4g0zhB8Btwwi0E8xwRpE8R4wwR?pC8JeAAPYASF0RBFrnRASo78A4Zt2AvfEEBwnAVB9gA8zhR?4ilB8RpR4wwglE8BtxwE8RpBtwwC8JeAAPXARl+UBFrnRAS?o78AYhMzAVYt2AFr4AA9gA8BtR4RpilB8Bti0glE8ywg0E8?R4wwRpC8JeAAPXAQFsHBFrnRASo78A4cezAVYt2AFr4AA9g?A8ywi0ilB8BtR4g0glE8BtRpE8wwR4RpC8JeAAPXAQ1x2AF?rnRASo78A4cMzAVYt2AFr4AA9gA8Bthlg0zhB8Btgli0E8w?wglRpE8ywRpC8JeAAPXAQVtRBFrnRASo78AYbVzAVYt2AFr?4AA9gA8ywi0ilB8wwRpQ4g0glE8RpR4E8zhQ4C8JeAAPXAQ?1oRBFrnRASo78A4ZVzAVYt2AFr4AA9gA8ywRpzhB8BtRph0?E8Btglg0E8wwilg0C8JeAAPWAQlW9AFrnRASo78AYRaHBQe?cRAylAAA"
        },
    },
    "TJZI": {
        "Tub": {
            type: "general",
            saves: {
                O: "97.98%",
                I: "1.15%",
                Z: "0.87%"
            },
            fumen: "v115@GhwwDeg0CexwDei0BtwwDezhBtJeAgH",
            minimals: "v115@9gilwhywR4A8glAtg0whA8wwR4B8Btg0whF8Ath0wh?F8JeAgWaAUBwKB3ngHBFbcRASExABVLaHBQecRAylAAA9gz?hywR4A8BthlA8wwR4B8g0BtglF8i0glF8JeAAPaA05HOB1n?gHBFbcRASEB6AQOaHBQecRAylAAA9gzhBtywA8h0R4A8Btw?wB8g0R4glF8g0ilF8JeAAA9gwhi0BtywA8whglQ4g0A8Btw?wB8whglR4F8whhlQ4F8JeAAPaAU4f2AwngHBFbcRASEp2AR?RaHBQecRAylAAA9gwhQ4hlBtywA8whR4glA8BtwwB8whg0Q?4glF8whi0F8JeAAPaAz8nABzngHBFbcRAS02KBYIaHBQecR?AylAAA9gwhh0AtywR4A8whg0BtA8wwR4B8whg0AtglF8whi?lF8JeAAA9gBthlywR4A8g0BtglA8wwR4B8i0glF8zhF8JeA?APaASBwKB3ngHBFbcRAS0uABUOaHBQecRAylAAA9gh0R4Bt?ywA8g0R4glA8BtwwB8g0ilF8zhF8JeAAA9gwhi0BtywA8wh?ilA8BtwwB8whglR4F8whR4g0F8JeAAPZAxFg2A1ngHBFbcR?AS0ILBwmv2AUo78AZAAAA9gwhg0R4BtywA8whi0A8BtwwB8?whR4glF8whilF8JeAAA9gwhilywR4A8whi0A8wwR4B8whBt?g0F8whglBtF8JeAAA9gwhBtglywR4A8whilA8wwR4B8whg0?BtF8whi0F8JeAAA9gilg0ywR4A8glBtg0A8wwR4B8RpBtF8?Rph0F8JeAAPXAQ1ZOBFrnRASo78A4cVzAVYt2AFr4AA9gzh?ywR4A8h0hlA8wwR4B8g0RpglF8g0RpglF8JeAAPXAQVtRBF?rnRASo78AYbVzAVYt2AFr4AA9gwhilywR4A8whglRpA8wwR?4B8whg0RpF8whi0F8JeAAPXAQVt2AFrnRASo78AYbMzAVYt?2AFr4AA9gh0hlywR4A8g0RpglA8wwR4B8g0RpglF8zhF8Je?AAPXAQFb9AFrnRASo78A45ZzAVYt2AFr4AA9gRpR4BtywA8?RphlA8BtwwB8g0R4glF8i0glF8JeAAPXAQ1IEBFrnRASo78?A45QzAVYt2AFr4AA9gBtRpywR4A8h0RpA8wwR4B8g0BtglF?8g0ilF8JeAAA",
            notes: "This setup is unbuildable if {T} and {J} is first. Do another setup if you can't build this one. The first save {I} setup requires a 180 spin. Without 180, the solve percentage drops down to 99.76%"
        }
    },
    "TLSI": {
        "Tub": {
            type: "general",
            saves: {
                O: "97.98%",
                I: "1.15%",
                S: "0.87%"
            },
            fumen: "v115@9gwwIexwCeglDewwR4ilDeR4zhNeAgH",
            minimals: "v115@9gA8Btywwhi0B8BtwwA8whglQ4g0F8whglR4F8whhl?Q4JeAgWaAUBwKB3ngHBFbcRASExABVLaHBQecRAylAAA9gA?8BtywzhB8BtwwA8h0R4F8g0R4glF8g0ilJeAAPaA05HOB1n?gHBFbcRASEB6AQOaHBQecRAylAAA9gA8ywR4zhB8wwR4A8B?thlF8g0BtglF8i0glJeAAA9gA8ywR4ilwhB8wwR4A8glAtg?0whF8Btg0whF8Ath0whJeAAPaAU4f2AwngHBFbcRASEp2AR?RaHBQecRAylAAA9gA8ywR4h0AtwhB8wwR4A8g0BtwhF8g0A?tglwhF8ilwhJeAAPaAz8nABzngHBFbcRAS02KBYIaHBQecR?AylAAA9gA8BtywQ4hlwhB8BtwwA8R4glwhF8g0Q4glwhF8i?0whJeAAA9gA8Btywh0R4B8BtwwA8g0R4glF8g0ilF8zhJeA?APaASBwKB3ngHBFbcRAS0uABUOaHBQecRAylAAA9gA8ywR4?BthlB8wwR4A8g0BtglF8i0glF8zhJeAAA9gA8ywR4ilwhB8?wwR4A8i0whF8Btg0whF8glBtwhJeAAPZAxFg2A1ngHBFbcR?AS0ILBwmv2AUo78AZAAAA9gA8ywR4BtglwhB8wwR4A8ilwh?F8g0BtwhF8i0whJeAAA9gA8Btywi0whB8BtwwA8ilwhF8gl?R4whF8R4g0whJeAAA9gA8Btywg0R4whB8BtwwA8i0whF8R4?glwhF8ilwhJeAAA9gA8Btywgli0B8BtwwA8glR4g0F8R4Rp?F8hlRpJeAAPXAQ1ZOBFrnRASo78A4cVzAVYt2AFr4AA9gA8?BtywzhB8BtwwA8h0hlF8g0RpglF8g0RpglJeAAPXAQVtRBF?rnRASo78AYbVzAVYt2AFr4AA9gA8Btywi0whB8BtwwA8Rpg?0whF8RpglwhF8ilwhJeAAPXAQVt2AFrnRASo78AYbMzAVYt?2AFr4AA9gA8Btywh0hlB8BtwwA8g0RpglF8g0RpglF8zhJe?AAPXAQFb9AFrnRASo78A45ZzAVYt2AFr4AA9gA8ywR4BtRp?B8wwR4A8h0RpF8g0BtglF8g0ilJeAAPXAQ1IEBFrnRASo78?A45QzAVYt2AFr4AA9gA8BtywRpR4B8BtwwA8RphlF8g0R4g?lF8i0glJeAAA",
            notes: "This setup is unbuildable if {T} and {L} is first. Do another setup if you can't build this one. The first save {I} setup requires a 180 spin. Without 180, the solve percentage drops down to 99.76%"
        }
    },
    "TILZ": {
        "Tub": {
            type: "general",
            saves: {
                O: "97.98%",
                I: "1.15%",
                S: "0.87%"
            },
            fumen:"v115@GhwhDeglCewwwhDeglBtxwwhDehlBtwwwhJeAgH",
            minimals: "v115@9gilwhywR4A8glAtg0whA8wwR4B8Btg0whF8Ath0wh?F8JeAgWaAUBwKB3ngHBFbcRASExABVLaHBQecRAylAAA9gz?hywR4A8BthlA8wwR4B8g0BtglF8i0glF8JeAAPaA05HOB1n?gHBFbcRASEB6AQOaHBQecRAylAAA9gzhBtywA8h0R4A8Btw?wB8g0R4glF8g0ilF8JeAAA9gwhi0BtywA8whglQ4g0A8Btw?wB8whglR4F8whhlQ4F8JeAAPaAU4f2AwngHBFbcRASEp2AR?RaHBQecRAylAAA9gwhQ4hlBtywA8whR4glA8BtwwB8whg0Q?4glF8whi0F8JeAAPaAz8nABzngHBFbcRAS02KBYIaHBQecR?AylAAA9gwhh0AtywR4A8whg0BtA8wwR4B8whg0AtglF8whi?lF8JeAAA9gBthlywR4A8g0BtglA8wwR4B8i0glF8zhF8JeA?APaASBwKB3ngHBFbcRAS0uABUOaHBQecRAylAAA9gh0R4Bt?ywA8g0R4glA8BtwwB8g0ilF8zhF8JeAAA9gwhi0BtywA8wh?ilA8BtwwB8whglR4F8whR4g0F8JeAAPZAxFg2A1ngHBFbcR?AS0ILBwmv2AUo78AZAAAA9gwhg0R4BtywA8whi0A8BtwwB8?whR4glF8whilF8JeAAA9gwhilywR4A8whi0A8wwR4B8whBt?g0F8whglBtF8JeAAA9gwhBtglywR4A8whilA8wwR4B8whg0?BtF8whi0F8JeAAA9gilg0ywR4A8glBtg0A8wwR4B8RpBtF8?Rph0F8JeAAPXAQ1ZOBFrnRASo78A4cVzAVYt2AFr4AA9gzh?ywR4A8h0hlA8wwR4B8g0RpglF8g0RpglF8JeAAPXAQVtRBF?rnRASo78AYbVzAVYt2AFr4AA9gwhilywR4A8whglRpA8wwR?4B8whg0RpF8whi0F8JeAAPXAQVt2AFrnRASo78AYbMzAVYt?2AFr4AA9gh0hlywR4A8g0RpglA8wwR4B8g0RpglF8zhF8Je?AAPXAQFb9AFrnRASo78A45ZzAVYt2AFr4AA9gRpR4BtywA8?RphlA8BtwwB8g0R4glF8i0glF8JeAAPXAQ1IEBFrnRASo78?A45QzAVYt2AFr4AA9gBtRpywR4A8h0RpA8wwR4B8g0BtglF?8g0ilF8JeAAA",
            
            notes: "Without 180, the solve percentage drops down to 99.76%"
        }
    },
    "TIJS": {
        "Tub": {
            type: "general",
            saves: {
                O: "97.98%",
                I: "1.15%",
                Z: "0.87%"
            },
            fumen:"v115@9gwhIewhwwCeg0DewhxwR4g0DewhwwR4h0NeAgH",
            minimals: "v115@9gA8Btywwhi0B8BtwwA8whglQ4g0F8whglR4F8whhl?Q4JeAgWaAUBwKB3ngHBFbcRASExABVLaHBQecRAylAAA9gA?8BtywzhB8BtwwA8h0R4F8g0R4glF8g0ilJeAAPaA05HOB1n?gHBFbcRASEB6AQOaHBQecRAylAAA9gA8ywR4zhB8wwR4A8B?thlF8g0BtglF8i0glJeAAA9gA8ywR4ilwhB8wwR4A8glAtg?0whF8Btg0whF8Ath0whJeAAPaAU4f2AwngHBFbcRASEp2AR?RaHBQecRAylAAA9gA8ywR4h0AtwhB8wwR4A8g0BtwhF8g0A?tglwhF8ilwhJeAAPaAz8nABzngHBFbcRAS02KBYIaHBQecR?AylAAA9gA8BtywQ4hlwhB8BtwwA8R4glwhF8g0Q4glwhF8i?0whJeAAA9gA8Btywh0R4B8BtwwA8g0R4glF8g0ilF8zhJeA?APaASBwKB3ngHBFbcRAS0uABUOaHBQecRAylAAA9gA8ywR4?BthlB8wwR4A8g0BtglF8i0glF8zhJeAAA9gA8ywR4ilwhB8?wwR4A8i0whF8Btg0whF8glBtwhJeAAPZAxFg2A1ngHBFbcR?AS0ILBwmv2AUo78AZAAAA9gA8ywR4BtglwhB8wwR4A8ilwh?F8g0BtwhF8i0whJeAAA9gA8Btywi0whB8BtwwA8ilwhF8gl?R4whF8R4g0whJeAAA9gA8Btywg0R4whB8BtwwA8i0whF8R4?glwhF8ilwhJeAAA9gA8Btywgli0B8BtwwA8glR4g0F8R4Rp?F8hlRpJeAAPXAQ1ZOBFrnRASo78A4cVzAVYt2AFr4AA9gA8?BtywzhB8BtwwA8h0hlF8g0RpglF8g0RpglJeAAPXAQVtRBF?rnRASo78AYbVzAVYt2AFr4AA9gA8Btywi0whB8BtwwA8Rpg?0whF8RpglwhF8ilwhJeAAPXAQVt2AFrnRASo78AYbMzAVYt?2AFr4AA9gA8Btywh0hlB8BtwwA8g0RpglF8g0RpglF8zhJe?AAPXAQFb9AFrnRASo78A45ZzAVYt2AFr4AA9gA8ywR4BtRp?B8wwR4A8h0RpF8g0BtglF8g0ilJeAAPXAQ1IEBFrnRASo78?A45QzAVYt2AFr4AA9gA8BtywRpR4B8BtwwA8RphlF8g0R4g?lF8i0glJeAAA",
            
            notes: "Without 180, the solve percentage drops down to 99.76%"
        }
    },
    "TILJ": {
        "Tub": {
            type: "general",
            saves: {
                O: "97.98%",
                I: "1.15%",
                S: "0.87%"
            },
            fumen:"v115@GhwhDeglCeg0whDeglywg0whDehlwwh0whJeAgH",
            minimals: "v115@9gilwhywR4A8glAtg0whA8wwR4B8Btg0whF8Ath0wh?F8JeAgWaAUBwKB3ngHBFbcRASExABVLaHBQecRAylAAA9gz?hywR4A8BthlA8wwR4B8g0BtglF8i0glF8JeAAPaA05HOB1n?gHBFbcRASEB6AQOaHBQecRAylAAA9gzhBtywA8h0R4A8Btw?wB8g0R4glF8g0ilF8JeAAA9gwhi0BtywA8whglQ4g0A8Btw?wB8whglR4F8whhlQ4F8JeAAPaAU4f2AwngHBFbcRASEp2AR?RaHBQecRAylAAA9gwhQ4hlBtywA8whR4glA8BtwwB8whg0Q?4glF8whi0F8JeAAPaAz8nABzngHBFbcRAS02KBYIaHBQecR?AylAAA9gwhh0AtywR4A8whg0BtA8wwR4B8whg0AtglF8whi?lF8JeAAA9gBthlywR4A8g0BtglA8wwR4B8i0glF8zhF8JeA?APaASBwKB3ngHBFbcRAS0uABUOaHBQecRAylAAA9gh0R4Bt?ywA8g0R4glA8BtwwB8g0ilF8zhF8JeAAA9gwhi0BtywA8wh?ilA8BtwwB8whglR4F8whR4g0F8JeAAPZAxFg2A1ngHBFbcR?AS0ILBwmv2AUo78AZAAAA9gwhg0R4BtywA8whi0A8BtwwB8?whR4glF8whilF8JeAAA9gwhilywR4A8whi0A8wwR4B8whBt?g0F8whglBtF8JeAAA9gwhBtglywR4A8whilA8wwR4B8whg0?BtF8whi0F8JeAAA9gilg0ywR4A8glBtg0A8wwR4B8RpBtF8?Rph0F8JeAAPXAQ1ZOBFrnRASo78A4cVzAVYt2AFr4AA9gzh?ywR4A8h0hlA8wwR4B8g0RpglF8g0RpglF8JeAAPXAQVtRBF?rnRASo78AYbVzAVYt2AFr4AA9gwhilywR4A8whglRpA8wwR?4B8whg0RpF8whi0F8JeAAPXAQVt2AFrnRASo78AYbMzAVYt?2AFr4AA9gh0hlywR4A8g0RpglA8wwR4B8g0RpglF8zhF8Je?AAPXAQFb9AFrnRASo78A45ZzAVYt2AFr4AA9gRpR4BtywA8?RphlA8BtwwB8g0R4glF8i0glF8JeAAPXAQ1IEBFrnRASo78?A45QzAVYt2AFr4AA9gBtRpywR4A8h0RpA8wwR4B8g0BtglF?8g0ilF8JeAAA",
            
            notes: "Without 180, the solve percentage drops down to 99.76%"
        }
    }
}