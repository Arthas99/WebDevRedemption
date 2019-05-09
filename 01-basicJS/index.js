// ECMAScript 6
{

    ()
}
{
    // String Interpolation

    let west = "West";
    console.log(`Wild Wild ${west}`);

}

{
    // Default parameters

    function makeBountyMessage(bandit, defaultBounty = 7000, alive = true, ) {
        return `WANTED: ${bandit} BOUNTY: ${defaultBounty} ALIVE: ${alive}`;
    }

    console.log("Default parameter values: ", makeBountyMessage(`Buffalo Bill`));

}

{

    let { foo, bar } = { foo: "Buffalo", bar: "Bill" };
    console.log(foo);
    console.log(bar);

}

{
    // Rest Parameter

    function f(x, y, ...a) {
        return a;
    }

    console.log("Rest Parameter", f("Web", "Redemption", "BEST", "Mostar", "Course"));

}

{

    // Spread Parameter

    let params = ["Web", "Dev", "Redemption"]
    let other = ["BEST", "MOSTAR", ...params] // [ 'BEST', 'MOSTAR', 'Web', 'Dev', 'Redemption' ]

    let str = "foo"
    let chars = [...str] // [ "f", "o", "o" ]

}

{
    // Property Shorthand


    // Before
    {
        let x = 0, y = 0;
        let obj = { x: x, y: y };
        console.log(`Propery before: `, obj)
    }
    // Now
    {
        let x = 0, y = 0
        let obj = { x, y }
        console.log(`Propery after: `, obj)

    }
}

{
    // Computed Property names

    let obj = {
        BEST: "Mostar",
        ["Web" + "Dev"]: "Redemption"
    }
    console.log(obj);
}


{
    // Combining objects

    let dest = { quux: 0 };
    let src1 = { foo: 1, bar: 2 };
    let src2 = { foo: 3, baz: 4 };
    Object.assign(dest, src1, src2);
    console.log("======== COMBINING OBJECTS ========")
    console.log(dest.quux === 0);
    console.log(dest.foo === 3);
    console.log(dest.bar === 2);
    console.log(dest.baz === 4);
    console.log("================")

}


{
    // Classes

    class Building {
        constructor(id, floors, rooms) {
            this.id = id;
            this.makeFlors(floors, rooms);
        }
        makeFlors(x, y) {
            this.floors = x;
            this.rooms = y;
        }
    }

    class Bank extends Building {
        constructor(id, floors, rooms, trezors) {
            super(id, floors, rooms);
            this.trezors = trezors;
        }
    }
    class Jail extends Building {
        constructor(id, floors, rooms, sherif) {
            super(id, floors, rooms);
            this.sherif = sherif;
        }
    }


    const bank = new Bank("Bank Dodge City", 2, 5, 1);

    console.log(bank);

    class MegaJail extends Jail {
        constructor(id, floors, rooms, sherif) {
            super(id, floors, rooms, sherif);
        }
        static defaultJail() {
            return new Jail("default", 55, 55, "CENSURED");
        }

        static get DEFAULT_JAIL() {
            return new Jail("default", 55, 55, "CENSURED");
        }
    }

    const defaultJail = MegaJail.defaultJail();
    console.log(`Default jail 1: `, defaultJail);

    const defaultJail2 = MegaJail.DEFAULT_JAIL;
    console.log(`Default jail 2: `, defaultJail2);

    const customMegaJail = new MegaJail("Jail Bandera Texas", 100, 100, "W.W. Waters");
    console.log(customMegaJail);

}
