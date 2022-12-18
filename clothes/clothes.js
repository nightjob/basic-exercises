const person = {
    clothes: [],
    putOnClothes(item) {
        if (this.clothes.includes(item)) {
            throw new Error(`Mfer you are already wearing ${item}`)
        }
        this.clothes.push(item);
        console.log(this.clothes);
    }
};

person.putOnClothes("shirt");
person.putOnClothes("pants");
person.putOnClothes("fake smile")
person.putOnClothes("shirt");