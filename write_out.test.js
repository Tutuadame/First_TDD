const write_out = require('./index.js');

describe("Greetings", function(){

    test("should write out for no input", () =>{  
        expect(write_out()).toBe("Hello, my friend.");
    });

    test("should write out for single input", (name = "Charlie") =>{
        expect(write_out(name)).toBe("Hello, "+name+".");
    });

    test("should write out for multiple input", () =>{
        out_local = "Hello, ";
        A="Béla",B="Endre";
        
        out_local += A +", and "+B+".";
        expect(write_out(A,B)).toBe(out_local);
    });

    test("should write out for uppercase",()=>{
        A = "JAY";
        expect(write_out(A)).toBe("HELLO, "+A+".");
    })

    test("should write out for uppercase, mixed",()=>{
        A = "JAY", B = "Sarah", C = "KEVIN";
        expect(write_out(A,B,C)).toBe("Hello, "+B+"."+" AND HELLO, "+A+", AND "+C+"!");
    })

    test("should write out for uppercase, mixed",()=>{
        A = "JAY", B = "Sarah", C = "KEVIN", D = "Maya", E = "Charlotte";
        expect(write_out(A,B,C,D,E)).toBe("Hello, "+B+", "+D+", and "+E+"."+" AND HELLO, "+A+", AND "+C+"!");
    })

    test("should write out for single input separated with commas",()=>{
        A = "Jay, Sarah, Kevin, Maya, Charlotte";
        Change = "";
        for(let i=A.length; i>=0; i--){
            if(A[i] == ","){
                Change = A.substring(i,A.length);
                A = A.substring(0,i);
                break;
            }
        }
        
        Change = Change.replace(","," and");
        console.log(Change);

        expect(write_out("Jay, Sarah, Kevin, Maya, Charlotte")).toBe("Hello, "+A+Change+".");
    })

});