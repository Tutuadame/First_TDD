const write_out = require('./index.js');

function difference(arg,low_array, upper_array){
    for(let i = 0 ; i < arg.length; i++){
        Name = arg[i].toString();
        if(Name == Name.toUpperCase()){
            upper_array.push(Name);
        }else{
            low_array.push(Name);
        }
    }
}

function concatenate(the_string, the_array){
    for(let i=0;i<the_array.length;i++){
        if(the_array.length == 1){
            the_string += the_array[i]+".";
            break;
        }
        if(i != the_array.length-1 && the_array.length != 1){
            the_string += the_array[i]+", ";
        }else if(the_array.length != 1){                       
            if(the_string[1] == the_string[1].toUpperCase()){
                the_string += "AND "+the_array[i]+"!";
            }else{
                the_string += "and "+the_array[i]+".";                        
            }
            
        }
    }
    return the_string;
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
        expect(write_out(A)).toBe("HELLO, "+A+"!");
    })

    test("should write out for uppercase, mixed",()=>{
        A = "JAY", B = "Sarah", C = "KEVIN";
        arg = [];
        low = [];
        upper = [];

        arg.push(A);arg.push(B);arg.push(C);

        difference(arg,low,upper);
        result = "Hello, ";
        result_2 = " AND HELLO, ";
        result = concatenate(result, low);
        result_2 = concatenate(result_2, upper);

        expect(write_out(A,B,C)).toBe(result+result_2);
    })

    test("should write out for uppercase, mixed long",()=>{
        A = "JAY", B = "Sarah", C = "KEVIN", D = "Maya", E = "Charlotte";

        arg = [];
        low = [];
        upper = [];

        arg.push(A);arg.push(B);arg.push(C);arg.push(D);arg.push(E);

        difference(arg,low,upper);
        result = "Hello, ";
        result_2 = " AND HELLO, ";
        result = concatenate(result, low);
        result_2 = concatenate(result_2, upper);
        expect(write_out(A,B,C,D,E)).toBe(result+result_2);
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