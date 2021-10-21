function write_out(){
    var out ="Hello, ";
    if(arguments.length == 0){        
        return out+"my friend.";
    }
    
    switch(arguments.length){
        case 1:
                Name = arguments[0].toString();    
                if( Name == Name.toUpperCase()){
                    out = "HELLO, ";                    
                    return out+Name+".";        
                }else{                                                          
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
                    return out;
                }else{
                    return (out+" ")+out_2;
                }
    }
}
module.exports = write_out;