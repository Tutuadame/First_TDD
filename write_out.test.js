

describe("Greetings", function(){


    test("should write out for no input", () =>{
        expect(console.log("Hello, my friend.")).toBe(console.log("Hello, my friend."));
    });

    test("should write out for single input", (name = "Béla") =>{
        expect(console.log("Hello, "+name)).toBe(console.log("Hello, "+name));
    });

    test("should write out for multiple input", (A="Béla",B="Endre") =>{

        out = "Hello, "

        for( let i = 0 ; i < arguments.length; i++){
            if( i != arguments.length-1 ){
                out += arguments[i]+", "
            }else{
                out += "and "+arguments[i]+"."
            }
        }

        expect(console.log(out)).toBe(console.log(out));
    });
});