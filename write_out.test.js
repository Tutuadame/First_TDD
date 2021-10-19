function write_out(){
    var out = "Hello, ";

    if(arguments.length == 0){
        console.log(out+"my friend.");
        return out+"my friend.";
    }
    
    switch(arguments.length){
        case 1: Name = arguments[0].toString();
                
                if( Name == Name.toUpperCase()){
                    out = "HELLO, ";
                    console.log(out+Name+".");
                    return out+Name+".";        
                }else{                                       
                    console.log(out+Name+".");
                    return out+Name+".";        
                }
                
        default: 
                for( let i = 0 ; i < arguments.length; i++){
                    if( i != arguments.length-1 && !arguments[i].isUppercase){
                        out = out + arguments[i]+", ";
                    }else if(!arguments[i].isUppercase){
                        out = out + "and "+arguments[i]+".";
                    }

                    out_2 = "HELLO, ";
                    if( i != arguments.length-1 && arguments[i].isUppercase){
                        out_2 = out_2 + arguments[i]+", ";
                    }else if(arguments[i].isUppercase){
                        out_2 = out_2 + "AND "+arguments[i]+".";
                    }
                }
                if(out_2 == "HELLO, "){
                    console.log(out);
                    return out;      
                }else{
                    console.log(out+out_2);
                    return out+out_2;      
                }
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
        out_local = "Hello, ";
        A="Béla",B="Endre";
        
        out_local += A +", and "+B+".";
        expect(write_out(A,B)).toBe(out_local);
    });

    test("should write out for uppercase",()=>{
        A = "JAY";
        expect(write_out(A)).toBe("HELLO, "+A+".");
    })

//    test("should write out for uppercase, mixed",()=>{
//        A = "JAY", B = "Sarah", C = "KEVIN";
//        expect(write_out()).toBe("Hello, "+B+"."+"HELLO,"+A+" AND "+B+".");
//    })
//
//    test("should write out for uppercase, mixed long",()=>{
//        A = "JAY", B = "Sarah", C = "KEVIN";
//        expect(write_out(A,B,C)).toBe("Hello, "+B+"."+"HELLO,"+A+" AND "+C+".");
//    })
});