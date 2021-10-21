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

function change_the_end(arg){
    for(let i=arg[0].length; i>=0; i--){
        if(arg[0][i] == ","){
            Change_2 = arg[0].substring(i, arg[0].length);
            arg[0] = arg[0].substring(0,i);
            break;
        }
    }
    Change_2 = Change_2.replace(","," and");
    return "Hello, "+arg[0]+Change_2+".";
}

function write_out(){
    var out ="Hello, ";
    if(arguments.length == 0){        
        return out+"my friend.";
    }
    
    switch(arguments.length){
        case 1:
                if(arguments[0].includes(",")){
                    out = change_the_end(arguments);
                    return out;
                }else{
                    Name = arguments[0].toString();    
                    if( Name == Name.toUpperCase()){
                        out = "HELLO, ";                    
                        return out+Name+"!";
                    }else{                                                          
                        return out+Name+".";       
                    }
                }                
        default:
                low_2 = [];
                upper_2 = [];
                difference(arguments, low_2, upper_2);

                out = "Hello, ";
                out_2 = "AND HELLO, ";
                out = concatenate(out, low_2);
                out_2 = concatenate(out_2, upper_2);

                if(out_2 == "AND HELLO, "){    
                    console.log(out);               ;
                    return out;
                }else{
                    console.log((out+" ")+out_2);
                    return (out+" ")+out_2;
                }
            
    }
}
module.exports = write_out;