'use strict';

/* global cuid */

const Item = (function(){
  function validateName(name){
    try{
      if(typeof(name) === undefined || name.length === 0)
        throw new TypeError('Name does not exist.', 'Item.js', 7);        
    }catch(e){
      throw e; // is this the right way to do it? SBS      
    }
  }

  function create(name){
    return {
      id : cuid(),
      name : name,
      checked : false,
    };
  }

  return { 
    validateName,
    create,
  };
}() );
