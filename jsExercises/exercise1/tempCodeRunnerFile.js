if (str === "") 
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);