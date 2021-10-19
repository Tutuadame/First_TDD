function write_out(){
    var out ="Hello, ";
    if(arguments.length == 0){
        //console.log(out+"my friend.");
        return out+"my friend.";
    }
    
    switch(arguments.length){
        case 1:
                Name = arguments[0].toString();    
                if( Name == Name.toUpperCase()){
                    out = "HELLO, ";
                    //console.log(out+Name+".");
                    return out+Name+".";        
                }else{                                       
                    //console.log(out+Name+".");
                    return out+Name+".";        
                }
                
        default:
                low = [];
                upper = [];
                for(let i = 0 ; i < arguments.length; i++){
                    Name = arguments[i].toString();
                    if(Name == Name.toUpperCase()){
                        upper.push(Name);
                    }else{
                        low.push(Name);
                    }
                }

                out = "Hello, ";
                out_2 = "AND HELLO, ";
                for(let i=0;i<low.length;i++){
                    if(low.length == 1){
                        out += low[i]+".";
                        break;
                    }
                    if(i != low.length-1 && low.length != 1){
                        out += low[i]+", ";
                    }else if(low.length != 1){                       
                        out += "and "+low[i]+".";                        
                    }
                }
                //console.log(out);
                for(let i=0;i<upper.length;i++){
                    if(upper.length == 1){
                        out_2 += upper[i]+"!";
                        break;
                    }
                    if(i != upper.length-1 && upper.length != 1){
                        out_2 += upper[i]+", ";
                    }else if(upper.length != 1){
                        out_2 += "AND "+upper[i]+"!";
                    }
                }

                if(out_2 == "AND HELLO, "){
                    //console.log(out);
                    return out;
                }else{
                    //console.log(out+out_2);
                    return (out+" ")+out_2;
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

    test("should write out for uppercase, mixed",()=>{
        A = "JAY", B = "Sarah", C = "KEVIN";
        expect(write_out(A,B,C)).toBe("Hello, "+B+"."+" AND HELLO, "+A+", AND "+C+"!");
    })

    test("should write out for uppercase, mixed",()=>{
        A = "JAY", B = "Sarah", C = "KEVIN", D = "Maya", E = "Charlotte";
        expect(write_out(A,B,C,D,E)).toBe("Hello, "+B+", "+D+", and "+E+"."+" AND HELLO, "+A+", AND "+C+"!");
    })
});