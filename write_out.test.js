function write_out(){
    var out = "Hello, ";

    if(arguments.length == 0){
        console.log(out+"my friend.")
        return out+"my friend.";
    }
    
    switch(arguments.length){
        case 1: console.log("Hello, "+arguments[0]+".") 
                return out+arguments[0]+".";        
        default: 
                
                for( let i = 0 ; i < arguments.length; i++){
                    if( i != arguments.length-1 ){
                        out = out + arguments[i]+", "
                    }else{
                        out = out + "and "+arguments[i]+"."
                    }
                }
                console.log(out);
                return out;        
       }
}

describe("Greetings", function(){

    test("should write out for no input", () =>{  
        expect(write_out()).toBe("Hello, my friend.");
    });

    test("should write out for single input", (name = "Charlie") =>{
        expect(write_out(name)).toBe("Hello, "+name+".");
    });

    test("should write out for multiple input", () =>{
        out_2 = "Hello, ";
        A="Béla",B="Endre";
        
        out_2 += A +", and "+B+".";

        console.log(arguments.length)
        expect(write_out(A,B)).toBe(out_2);
    });

    test("should write out for uppercase",()=>{
        A = "JAY";
        expect(write_out(A)).toBe("HELLO"+A);
    })

    test("should write out for uppercase, mixed",()=>{
        A = "JAY", B = "Sarah", C = "KEVIN";
        expect(write_out()).toBe("Hello, "+B+"."+"HELLO,"+A+" AND "+B+".");
    })

    test("should write out for uppercase, mixed long",()=>{
        A = "JAY", B = "Sarah", C = "KEVIN";
        expect(write_out(A,B,C)).toBe("Hello, "+B+"."+"HELLO,"+A+" AND "+C+".");
    })
});