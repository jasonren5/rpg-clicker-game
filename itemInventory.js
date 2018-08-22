class Item {
    constructor(slotName, stat1, stat2, stat3, stat4) {
        this.slot = slotName;
        this.stat1 = stat1;
        this.stat2 = stat2;
        this.stat3 = stat3;
        this.stat4 = stat4;
    }
}

class Stat {
    constructor(attribType, value) {
        this.attribute = attribType;
        this.value = value;
    }
}