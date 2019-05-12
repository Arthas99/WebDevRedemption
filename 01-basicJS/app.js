// ECMAScript 6
{
    // String Interpolation

    let west = "West";
    // ${} -> "Injector" you can pass function or variable here... 
    console.log(`Wild Wild ${west}`); // Wild Wild West

}

{
    // Default parameters

    function makeBountyMessage(bandit, defaultBounty = 7000, alive = true ) {
        return `WANTED: ${bandit} BOUNTY: ${defaultBounty} ALIVE: ${alive}`;
    }

    console.log("Default parameter values: ", makeBountyMessage(`Buffalo Bill`)); // Default parameter values:  WANTED: Buffalo Bill BOUNTY: 7000 ALIVE: true
    console.log("Default parameter values: ", makeBountyMessage(`Annie 2Guns`, 100000, true)); // Default parameter values:  WANTED: Annie 2Guns BOUNTY: 100000 ALIVE: true

}

{

    //  Destructuring 

    /**
     * 
     */

    let { foo, bar } = { foo: "Buffalo", bar: "Bill" };
    console.log(foo); // Buffalo
    console.log(bar); // Bill

    /**
     * Same as
     */

     {
        let obj = {
            foo: "Buffalo",
            bar: "Bill"
         }
         let { foo, bar} =  obj;
         /**
          * This is shorthand, instead of writing obj.foo or obj.bar 
          * od
          * let foo = obj.foo;
          */
     }



}

{
    // Rest Parameter

    /**
     * Rest parameter take all parameters 
     * which are sent and stores them as array
     */

    function f(x, y, ...a) {
        return a;
    }

    console.log("Rest Parameter", f("Web", "Redemption", "BEST", "Mostar", "Course")); // Rest Parameter [ 'BEST', 'Mostar', 'Course' ]

}

{

    // Spread Parameter

    /**
     * Oposite of rest parameter
     * 
     */

    let params = ["Web", "Dev", "Redemption"]
    let other = ["BEST", "MOSTAR", ...params] // [ 'BEST', 'MOSTAR', 'Web', 'Dev', 'Redemption' ]

    let str = "foo"
    let chars = [...str] // [ "f", "o", "o" ]

}

{
    // Property Shorthand

    /**
     * On creation of object now we don't need to 
     * specify a key of our object, if we pass
     * only variable, it will generate key as
     * name as the variable
     */

    // Before
    {
        let x = 0, y = 0;
        let obj = { x: x, y: y };
        console.log(`Propery before: `, obj) // Propery before:  { x: 0, y: 0 }
    }
    // Now
    {
        let x = 0, y = 0
        let obj = { x, y }
        console.log(`Propery after: `, obj) // Propery after:  { x: 0, y: 0 }

    }
}

{
    // Computed Property names


    // Now we can make dynamic keys inside objects

    let obj = {
        BEST: "Mostar",
        ["Web" + "Dev"]: "Redemption"
    }
    console.log(obj); // { BEST: 'Mostar', WebDev: 'Redemption' }
}


{
    // Combining objects

    let dest = { quux: 0 };
    let src1 = { foo: 1, bar: 2 };
    let src2 = { foo: 3, baz: 4 };
    Object.assign(dest, src1, src2);
    console.log("======== COMBINING OBJECTS ========")
    console.log(dest.quux === 0); // true
    console.log(dest.foo === 3); // true
    console.log(dest.bar === 2); // true
    console.log(dest.baz === 4); // true
    console.log("================")

    /**
     * If there are the source arrays with same key
     * The key will have value of last array
     * 
     * In this example foo is inside src1 and src2
     * Value of dest.foo is from src2 object
     */
}

/**
 * If you like Object-oriented programing (OOP)
 */
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

    console.log(bank); // Bank { id: 'Bank Dodge City', floors: 2, rooms: 5, trezors: 1 }

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
    console.log(`Default jail 1: `, defaultJail); // Default jail 1:  Jail { id: 'default', floors: 55, rooms: 55, sherif: 'CENSURED' }

    const defaultJail2 = MegaJail.DEFAULT_JAIL;
    console.log(`Default jail 2: `, defaultJail2); // Default jail 2:  Jail { id: 'default', floors: 55, rooms: 55, sherif: 'CENSURED' }

    const customMegaJail = new MegaJail("Jail Bandera Texas", 100, 100, "W.W. Waters");
    console.log(customMegaJail);
    /**
     * MegaJail {
     *  id: 'Jail Bandera Texas',
     *  floors: 100,
     *  rooms: 100,
     *  sherif: 'W.W. Waters' }
     */

}
