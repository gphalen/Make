var Person = function(firstAndLast) {

 var x=arguments;

  var res = firstAndLast.split(" ");



  this.getFullName= function(){
    alert( res[0] +" " + res[1]);
  };

  this.getFirstName=function(){
    return res[0];
  };

  this.getLastName=function(){
    return res[1];
  };

  this.setFirstName=function(first){
    res[0]=first;
  };

  this.setLastName=function(last){
    res[1]=last;
  };

  this.setFullName=function(firstAndLast){
    var res2=firstAndLast.split(" ");
    res[0]=res2[0];
    res[1]=res2[1];
  };



};



var bob = new Person('Bob Ross');
bob.getFullName();
