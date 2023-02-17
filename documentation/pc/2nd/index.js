
const qb = {
    "ILJO": {
        "See pieceLpieceZ":
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
        "See pieceJpieceS":
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
            "type": "regular",
            "saves": {
                "T": "96.43%",
                "O": "1.59%"
            },
            "fumen": "v115@Rhg0DeglBeRpi0ilBeRpJeAgH",
            "minimals": "v115@9gilR4AtxhRpglg0R4BtxhRpA8i0AtA8xhH8xhB8Je?AgWaA1CoAB4ngHBFbcRASEpRBZLaHBQecRAylAAA9gQ4Bti?0xhRpR4Btglg0xhRpA8Q4ilA8xhH8xhB8JeAAA9gQ4hlh0A?txhRpR4glg0BtxhRpA8Q4glg0AtA8xhH8xhB8JeAAPaA08n?ABzngHBFbcRASEB6AYOaHBQecRAylAAA9gilR4Atzhglg0R?4BtzhA8i0AtA8RpH8RpB8JeAAPaAT73UB4ngHBFbcRAS02K?BWLaHBQecRAylAAA9gQ4Btzhi0R4Btglzhg0A8Q4ilA8RpH?8RpB8JeAAPaAT4XHByngHBFbcRAS0eHBTUaHBQecRAylAAA?9gRpg0zhR4glRpi0BtilA8zhA8BtH8R4B8JeAAPaAS+HOB2?ngHBFbcRAS0W9AUUaHBQecRAylAAA9gQ4Bt0hRpR4i0hlwh?RpA8Q4Btg0A8glwhH8glwhB8JeAAPaAy8fRBxngHBFbcRAS?0W9AQIaHBQecRAylAAA9gRpilBti0RpglzhR4g0A8zhA8R4?H8BtB8JeAAPaAy5/DBzngHBFbcRAS0m2AYIaHBQecRAylAA?A9gQ4zhAtwhh0glR4RpBtwhilA8Q4RpAtA8whg0H8whg0B8?JeAAPZARB45A5ngHBFbcRASkO6A2mv2AUo78AZAAAA9gBtz?hhlRpzhR4h0RpA8BtR4A8g0glH8g0glB8JeAAPZAx/P9A0n?gHBFbcRASUELB4mv2AUo78AZAAAA9gzhglBti0ywzhR4g0A?8wwilA8R4H8BtB8JeAAPXAQFMVBFrnRASo78AYeMzAVYt2A?Fr4AA9gywR4Atwhh0glzhBtwhilA8wwR4AtA8whg0H8whg0?B8JeAAA",
            "notes": "As long as you do the pieceLpieceZ/pieceJpieceS qb when possible,<br>this setup is 100% save pieceT."
        }
    },
    "IJLS": {
        "See pieceZ, pieceZ before pieceS":
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
            "notes": "Simple shoe setup, complete the box with pieceJpieceS, and just a simple pieceIpieceJpieceLpieceO 4x4 box on the left"
        },
        "See pieceSpieceZ, pieceS before pieceZ":
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
        "See pieceLpieceO": {
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
        "See pieceJpieceO": {
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
        "See pieceJpieceS/pieceLpieceS": {
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
        "See pieceIpieceS": {
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
        "See pieceOpieceS": {
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
        "See pieceIpieceO": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9gwhIewhIewhg0Geglwhi0CeilJeAgH",
            "minimals": "v115@9gA8ilwhh0R4AtA8glRpwhg0R4BtB8Rpwhg0R4AtE8?whR4C8JeAgH9gA8RpBtg0zhA8RpR4i0R4B8R4BtglR4E8il?C8JeAgH9gA8ilg0AtzhA8glRpBtT4B8RpAtT4E8i0C8JeAg?H9gA8ilBtzhA8glRph0T4B8Rpg0T4E8g0BtC8JeAgH9gA8Q?4zhilAtA8R4Rpi0BtB8Q4RpR4g0AtE8R4glC8JeAgH",
            "queues": (queue) => {
                return see(queue, "IO")
            },
            "notes": "1st minimal: pieceZ before pieceS\n2nd minimal: pieceZ last\n3rd/4th minimal: pieceJ or pieceZ last\n 5th minimal: pieceL last, pieceS before pieceJ",
        },
        "See pieceLpieceJ, early pieceJ": {
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
            "notes": "1st minimal: pieceI last (grace system)\n2nd minimal: pieceO last\n 3rd/4th minimal: pieceS/pieceZ last (pieceSpieceZ reduction)"
        },
        "See pieceLpieceJ, early pieceIpieceL": {
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
            "notes": "1st minimal: pieceI last (grace system)\n2nd minimal: pieceO last\n 3rd/4th minimal: pieceS/pieceZ last (pieceSpieceZ reduction)"
        },
        "See pieceLpieceJ, early pieceS": {
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
            "notes": "1st minimal: pieceI last (grace system)\n2nd minimal: pieceO last\n 3rd/4th minimal: pieceS/pieceZ last (pieceSpieceZ reduction)\nFor the 3rd/4th minimal, the first pieceI sometimes has to be placed horizontally, which is why 4x4 box doesnt work here"
        },
        "See pieceLpieceJ": {
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
        "See pieceTpieceIpieceJ": {
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
            "notes": "Don't confuse this with a see pieceIpieceJ setup, because this setup needs pieceT first to be 100%\n You can only do the first solve if pieceO is last."
        },
        "See pieceTpieceIpieceL": {
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
            "type": "regular",
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
        "See pieceS, pieceS before pieceZ":
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
            "notes": "Simple shoe setup, complete the box with pieceLpieceZ, and just a simple pieceIpieceJpieceLpieceO 4x4 box on the left"
        },
        "See pieceZpieceS, pieceZ before pieceS":
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
        "See pieceJpieceO": {
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
        "See pieceLpieceO": {
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
        "See pieceLpieceZ/pieceJpieceZ": {
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
        "See pieceIpieceZ": {
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
        "See pieceOpieceZ": {
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
        "See pieceIpieceO": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@GhwhIewhg0Geglwhi0CeilwhJeAgH",
            "minimals": "v115@9gQ4Bthlwhi0A8R4BtglwhRpg0B8Q4BtglwhRpE8Bt?whD8JeAgH9gzhglR4RpA8BtilBtRpB8Btg0R4BtE8i0D8Je?AgH9gzhQ4gli0A8DtR4Rpg0B8DtQ4RpE8ilD8JeAgH9gzhR?4i0A8DthlRpg0B8DtglRpE8R4glD8JeAgH9gQ4i0zhAtA8R?4ilRpBtB8Q4glBtRpAtE8g0BtD8JeAgH",
            "queues": (queue) => {
                return see(queue, "IO")
            },
            "notes": "1st minimal: pieceS before pieceZ\n2nd minimal: pieceS last\n3rd/4th minimal: pieceL or pieceS last\n 5th minimal: pieceJ last, pieceZ before pieceL",
        },
        "See pieceLpieceJ, early pieceL": {
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
            "notes": "1st minimal: pieceI last (grace system)\n2nd minimal: pieceO last\n 3rd/4th minimal: pieceS/pieceZ last (pieceSpieceZ reduction)"
        },
        "See pieceLpieceJ, early pieceIpieceJ": {
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
            "notes": "1st minimal: pieceI last (grace system)\n2nd minimal: pieceO last\n 3rd/4th minimal: pieceS/pieceZ last (pieceSpieceZ reduction)"
        },
        "See pieceLpieceJ, early pieceZ": {
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
            "notes": "1st minimal: pieceI last (grace system)\n2nd minimal: pieceO last\n 3rd/4th minimal: pieceS/pieceZ last (pieceSpieceZ reduction)\nFor the 3rd/4th minimal, the first pieceI sometimes has to be placed horizontally, which is why 4x4 box doesnt work here"
        },
        "See pieceLpieceJ": {
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
        "See pieceTpieceIpieceL": {
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
            "notes": "Don't confuse this with a see pieceIpieceL setup, because this setup needs pieceT first to be 100%\n You can only do the first solve if pieceO is last."
        },
        "See pieceTpieceIpieceJ": {
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
            "type": "regular",
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
        "See pieceI": {
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
        "See pieceLpieceO": {
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
        "See pieceJpieceO": {
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
        "See pieceLpieceS": {
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
        "See pieceJpieceZ": {
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
        "See pieceSpieceZ": {
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
        "See pieceIpieceJpieceL": {
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
        "See pieceIpieceS": {
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
        "See pieceIpieceZ": {
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
        "See pieceOpieceS": {
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
        "See pieceOpieceZ": {
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
        "See pieceLpieceS": {
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
        "See pieceJpieceZ": {
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
        "See pieceSpieceJ": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@GhAtHeBtg0EeR4Atgli0BeR4ilJeAgH",
            "minimals": "v115@9gRpg0whilR4A8Rpg0whglAtR4C8h0whBtG8whAtE8?JeAgWXAV4f2AwngHBFbcRASUk9AvZNEBFr4AA9gilzhR4A8?glg0BtRpR4C8i0RpG8BtE8JeAAPXAzCYHBwngHBFbcRAS0P?EBvZNEBFr4AA9gBtglzhR4A8ili0R4C8BtRpg0G8RpE8JeA?APXAy/f2AwngHBFbcRASU7KBvZNEBFr4AA9gRpBtglh0R4A?8Rpilg0R4C8zhg0G8BtE8JeAAPXAR7XHBwngHBFbcRAS0mR?BvZNEBFr4AA",
            "queues": (queue) => {
                return see(queue, "SJ")
            },
            "notes": "just the general setup, with a 100% save pieceT with 4 solves."
        },
        "See pieceZpieceL": {
            "type": "qb",
            "saves": {
                "T": 100
            },
            "fumen": "v115@9gQ4IeR4Heg0Q4BtEegli0BtBeilJeAgH",
            "minimals": "v115@9gA8Bti0whglRpB8BtQ4g0whglRpD8R4whhlF8Q4wh?C8JeAgWXAV4f2AwngHBFbcRASUk9AvZNEBFr4AA9gA8Btzh?i0B8BtRpR4glg0D8RpilF8R4C8JeAAPXAzCYHBwngHBFbcR?AS0PEBvZNEBFr4AA9gA8Btzhg0R4B8Btili0D8glRpR4F8R?pC8JeAAPXAy/f2AwngHBFbcRASU7KBvZNEBFr4AA9gA8Bth?lg0R4RpB8Btgli0RpD8glzhF8R4C8JeAAPXAR7XHBwngHBF?bcRAS0mRBvZNEBFr4AA",
            "queues": (queue) => {
                return see(queue, "ZL")
            },
            "notes": "just the general setup, with a 100% save pieceT with 4 solves."
        },
        "Shoe+pieceJ":
        {
            "type": "regular",
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
        "See pieceIpieceL": {
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
        "See pieceJpieceS": {
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
        "See pieceLpieceS": {
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
        "See pieceJpieceO": {
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
        "See pieceSpieceO": {
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
        "See pieceZpieceO": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@BhAtHeBtR4CeywAtR4TpAewwzhTpJeAgH",
            minimals: "v115@Hhh0R4A8zhglg0R4D8ilg0I8JeAgH",
            queues: (queue) => {
                return see(queue, "ZO")
            },
            notes: "sometimes not buildable with tetr.io's SRS+ rotation system (queue pieceTpieceSpieceOpieceI)"
        },
        "See pieceIpieceLpieceZ": {
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
        "See pieceJpieceLpieceZ": {
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
        "See pieceS": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@IhRpAeR4EeRpT4wwBezhR4ywKeAgH",
            minimals: "v115@9gh0ywBthlwhg0B8wwB8Btglwhg0G8glwhI8whJeAg?H",
            notes: "sometimes cannot build this setup if the queue is pieceOpieceTpieceS or pieceTpieceOpieceS, where you can build the pieceOpieceS qb instead",
            queues: (queue) => {
                if (queue == "OTS" || queue == "TOS") return false;
                return see(queue, "S")
            },
        },
        "See pieceZ": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@JhBtCeRpCewwBtR4RpBeywR4zhJeAgH",
            minimals: "v115@9gwhh0ywR4hlwhg0B8wwR4B8glwhg0G8glwhI8JeAg?H",
            notes: "sometimes cannot build this setup if the queue is pieceOpieceTpieceZ or pieceTpieceOpieceZ, where you can build the pieceOpieceZ qb instead (unless that too, is unbuildable, where you can just do the 3p general setup idk)",
            queues: (queue) => {
                if (queue == "OTZ" || queue == "TOZ") return false;
                return see(queue, "Z")
            },
        },
        "pieceIpieceTpieceS 3p": {
            type: "regular",
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
        "See pieceIpieceJ": {
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
        "See pieceLpieceZ": {
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
        "See pieceJpieceZ": {
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
        "See pieceLpieceO": {
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
        "See pieceZpieceO": {
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
        "See pieceSpieceO": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@ChQ4GeBtR4CeTpBtQ4ywTpzhwwKeAgH",
            minimals: "v115@Hhg0zhA8Bthli0D8BtglI8glJeAgH",
            queues: (queue) => {
                return see(queue, "SO")
            },
            notes: "sometimes not buildable with tetr.io's SRS+ rotation system (queue pieceTpieceZpieceOpieceI)"
        },
        "See pieceIpieceJpieceS": {
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
        "See pieceLpieceJpieceS": {
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
        "See pieceZ": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@LhBtAeRpCewwDtRpBeywBtzhJeAgH",
            minimals: "v115@9gwhh0R4ywhlwhg0R4B8wwB8glwhg0G8glwhI8JeAg?H",
            notes: "sometimes cannot build this setup if the queue is pieceOpieceTpieceZ or pieceTpieceOpieceZ, where you can build the pieceOpieceZ qb instead",
            queues: (queue) => {
                if (queue == "OTZ" || queue == "TOZ") return false;
                return see(queue, "Z")
            },
        },
        "See pieceS": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@IhRpCeR4CeRpBtR4wwBezhBtywKeAgH",
            minimals: "v115@9gh0Btywhlwhg0B8BtwwB8glwhg0G8glwhI8whJeAg?H",
            notes: "sometimes cannot build this setup if the queue is pieceOpieceTpieceS or pieceTpieceOpieceS, where you can build the pieceOpieceS qb instead (unless that too, is unbuildable, where you can just do the 3p general setup idk)",
            queues: (queue) => {
                if (queue == "OTS" || queue == "TOS") return false;
                return see(queue, "S")
            },
        },
        "pieceIpieceTpieceZ 3p": {
            type: "regular",
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
        "See pieceSpieceO": {
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
        "See pieceZpieceO": {
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
        "See pieceLpieceO": {
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
        "See pieceJpieceO": {
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
        "See pieceIpieceSpieceZ": {
            type: "qb",
            saves: {
                "T": 100
            },
            fumen: "v115@AhR4GeR4IeBtEezhBtNeAgHAhxDBtEexDBeBtEeBPR?4CeTaRpzhJeAgH",
            minimals: "v115@9gi0B8R4hlwhRpB8R4ywwhRpg0B8BtwwglwhF8Btgl?whJeAgH9gg0R4B8ywRpR4B8Btwwili0B8BtglRpF8zhJeAA?A9gilB8R4g0RpBtB8R4wwi0glBtB8ywRpF8zhJeAAA",
            notes: "Mirror minimals if you can only build it on the right side\n1st minimal: pieceO first\n2nd minimal: pieceL first\n3rd minimal: pieceJ first",
            queues: (queue) => {
                return see(queue, "ISZ")
            }
        },
        "See pieceL": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@JhBtEeglBewwBtR4ilAeywR4zhJeAgH",
            minimals: "v115@9gwhh0BtywR4whg0B8BtwwR4A8whg0H8whI8JeAgH",
            notes: "doesn't work if first two pieces are pieceO and pieceS, where you can do the pieceLpieceO or pieceOpieceS qb instead",
            queues: (queue) => {
                if (queue == "OSL" || queue == "SOL") return false;
                return see(queue, "L")
            }
        },
        "See pieceJ": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@Hhg0EeR4Bei0BtR4wwBezhBtywKeAgH",
            minimals: "v115@9gBtywR4hlwhA8BtwwR4B8glwhH8glwhI8whJeAgH",
            notes: "doesn't work if first two pieces are pieceO and pieceZ, where you can do the pieceJpieceO or pieceOpieceZ qb instead",
            queues: (queue) => {
                if (queue == "OZJ" || queue == "ZOJ") return false;
                return see(queue, "J")
            }
        },
        "See pieceT": {
            type: "qb",
            saves: {
                "O": 100
            },
            fumen: "v115@9gwhIewhCeBtDewhAeR4wwBtwwBewhR41wKeAgH",
            minimals: "v115@9gA8h0R4BthlwhA8g0R4B8BtglwhA8g0F8glwhI8wh?JeAgH",
            notes: "doesn't work if first two pieces are pieceL and pieceO, where you can do the pieceLpieceO qb, or mirror the setup",
            queues: (queue) => {
                return see(queue, "T")
            }
        },
        "See pieceIpieceSpieceZ (easier)": {
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
        "See pieceSpieceO": {
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
        "See pieceZpieceO": {
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
        "See pieceIpieceZ": {
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
        "See pieceIpieceS": {
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
        "See pieceJpieceS": {
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
        "See pieceLpieceZ": {
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
        "See pieceIpieceLpieceO": {
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
        "legs + pieceT": {
            type: "regular",
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
        "See pieceZpieceO": {
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
        "See pieceSpieceO": {
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
        "See pieceIpieceS": {
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
        "See pieceIpieceZ": {
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
        "See pieceLpieceZ": {
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
        "See pieceJpieceS": {
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
        "See pieceIpieceJpieceO": {
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
        "legs + pieceT": {
            type: "regular",
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
}

const qbsearch = $("#qbsearch > input");

$("#qb").hide();
$("#oqb").hide();
$("#regular").hide();

qbsearch.on('keydown', function (e) {
    const key = e.key;
    const control = e.ctrlKey;
    if (control || e.key.length > 1) {

    }
    else if (!(/[TIJLOSZ]/gi.test(key))) {
        e.preventDefault();
    }
})
qbsearch.on('input', function (e) {
    var queue = qbsearch.val();
    qbsearch.val(queue.toUpperCase());
    queue = qbsearch.val();
    if (queue.length < 4) {
        $("#qb").hide();
        $("#oqb").hide();
        $("#regular").hide();
    }
    else if (queue.length == 4) {
        loop1: for (const [fourpiece, value] of Object.entries(qb)) {
            for (const i of fourpiece) {
                if (!(queue.includes(i))) {
                    continue loop1;
                }
            }
            LoadGeneralSetups(value);
            LoadQueueBasedSetups(queue, value);
        }
    } else if (queue.length == 7) {
        loop1: for (const [fourpiece, value] of Object.entries(qb)) {
            if (fourpiece.split('').some(i => !queue.split('').splice(0, 4).join('').includes(i))) continue;
            for (const char of queue.split('').splice(4).join('')) {
                if (queue.split('').splice(4).join('').indexOf(char) != queue.split('').splice(4).join('').lastIndexOf(char)) {
                    $("#qb").hide();
                    $("#oqb").hide();
                    $("#regular").hide();
                    return;
                }
            }
            LoadGeneralSetups(value);


            //check for dupes


            LoadQueueBasedSetups(queue, value);
        }

    } else {
        return;
    }
})




//loading fumens



for (const element of document.getElementsByTagName("fumen")) {
    const fumen = new Fumen(element)
}
//fumencanvas("v115@Hhglg0Hegli0FehlReAgHHhAtIeAtCPFeAtSeAgH");

//$("#fumeninfo").hide();
$(document).on("keydown", async function (e) {
    if (e.key.toLowerCase() == "m") {
        for (const fumen of fumens) {
            fumen.mirror();
        }
    }
})






const see = (queue, pieces) => {
    for (const piece of pieces) {
        if (!queue.includes(piece)) {
            return false;
        }
    }
    return true;
}


async function LoadQueueBasedSetups(queue, value) {

    $("#qb").empty()
    $("#qb").show();
    const queueBasedTitle = document.createElement('h2');

    $(queueBasedTitle).text("Queue based setups")

    $("#qb").append(queueBasedTitle)

    //check if qb exists
    if (queue.length == 7) {
        var hasQb = false;
        for (const [name, setup] of Object.entries(value)) {
            if (setup.type != 'qb') continue;
            if (queue.length == 7) {
                if (setup.queues(queue.split('').splice(4).join(''))) hasQb = true;
            }

            if (setup.queues4p) {
                if (queue.length == 4) {
                    if (setup.queues4p(queue)) hasQb = true;


                } else if (queue.length == 7) {
                    if (setup.queues4p(queue.split('').splice(0, 4).join(''))) hasQb = true;
                }
            }

        }

        if (!hasQb) {
            $("#qb").hide();
        }

    }

    for (const [name, setup] of Object.entries(value)) {
        if (setup.type != 'qb') continue;
        if (queue.length == 7) {
            if (!setup.queues(queue.split('').splice(4).join(''))) continue;
        }

        if (setup.queues4p) {
            if (queue.length == 4) {
                if (!setup.queues4p(queue)) continue;


            } else if (queue.length == 7) {
                if (!setup.queues4p(queue.split('').splice(0, 4).join(''))) continue;
            }
        }

        const setupDiv = document.createElement('div')

        $(setupDiv).addClass("setup")
        const fumenDiv = document.createElement('div')
        $(fumenDiv).html(processText(name))
        const fumen = new Fumen(document.createElement('fumen'))
        fumen.setFumen(setup.fumen);
        $(fumenDiv).append(fumen.element);


        const savesDiv = document.createElement('div');

        $(savesDiv).html(processText(`Save${Object.keys(setup.saves).length == 1 ? `: piece${Object.keys(setup.saves)[0]}` : 's:'}`))

        if (Object.keys(setup.saves).length > 1) {
            for (const [save, percent] of Object.entries(setup.saves)) {
                $(savesDiv).html(processText(`${$(savesDiv).html()}\npiece${save}:${percent}`))
            }

        }

        const minimalDiv = document.createElement('div')
        $(minimalDiv).html(decoder.decode(setup.minimals).length == 1 ? 'Solve' : `Minimals (${decoder.decode(setup.minimals).length})`)

        const minimalsfumen = new Fumen(document.createElement('fumen'))
        minimalsfumen.setFumen(setup.minimals);
        if (queue.length == 7) minimalsfumen.load();
        $(minimalDiv).append(minimalsfumen.element);

        setupDiv.append(fumenDiv, savesDiv, minimalDiv)

        if (setup.notes) {
            const notesDiv = document.createElement('div')
            $(notesDiv).html(processText(`Notes:<br><br>${setup.notes}`))
            $(setupDiv).append(notesDiv);

        }
        $("#qb").append(setupDiv);
    }
}

async function LoadGeneralSetups(value) {

    $("#regular").empty()
    $("#regular").show();
    const regularTitle = document.createElement('h2');

    $(regularTitle).text("General setups")
    $("#regular").append(regularTitle)
    for (const [name, setup] of Object.entries(value)) {
        if (setup.type != 'regular') continue;
        const setupDiv = document.createElement('div')
        setupDiv.classList.add("setup")
        $(setupDiv).addClass("setup")
        const fumenDiv = document.createElement('div');
        $(fumenDiv).addClass("fumen")
        $(fumenDiv).html(processText(name))
        const fumen = new Fumen(document.createElement('fumen'))
        fumen.setFumen(setup.fumen);
        $(fumenDiv).append(fumen.element);




        const savesDiv = document.createElement('div');
        $(savesDiv).addClass("saves")

        $(savesDiv).html(`Saves:`)

        for (const [save, percent] of Object.entries(setup.saves)) {
            $(savesDiv).html(processText(`${$(savesDiv).html()}<br>piece${save}:${percent}`))
        }

        const minimalDiv = document.createElement('div')
        $(minimalDiv).addClass("minimals")

        $(minimalDiv).html(processText(`Minimals (${decoder.decode(setup.minimals).length})`))
        const minimalsfumen = new Fumen(document.createElement('fumen'))
        minimalsfumen.setFumen(setup.minimals);
        $(minimalDiv).append(minimalsfumen.element);


        setupDiv.append(fumenDiv, savesDiv, minimalDiv);

        if (setup.notes) {
            const notesDiv = document.createElement('div')

            $(notesDiv).html(processText(`Notes:<br><br>${setup.notes}`))
            $(setupDiv).append(notesDiv);

        }


        $("#regular").append(setupDiv);
    }
}






function processText(str) {
    str = str.replaceAll("pieceT", "<piece class='t'>T</piece>")
    str = str.replaceAll("pieceI", "<piece class='i'>I</piece>")
    str = str.replaceAll("pieceJ", "<piece class='j'>J</piece>")
    str = str.replaceAll("pieceL", "<piece class='l'>L</piece>")
    str = str.replaceAll("pieceO", "<piece class='o'>O</piece>")
    str = str.replaceAll("pieceS", "<piece class='s'>S</piece>")
    str = str.replaceAll("pieceZ", "<piece class='z'>Z</piece>")
    str = str.replaceAll("\n", "<br>")
    return str;
}