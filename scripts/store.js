'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars

const store = (function(){  
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false },
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id){
    return items.find(item => {
      if(item.id === id)
        return item;
    });
  }

  function addItem(name){
    try{
      if(typeof(name) === undefined || name === '')
        throw new Error;
      this.items.push({id:cuid(),name:name,checked:false});
    }catch(e){
      console.log(e);
    }
  }
  
  function findAndToggleChecked(id){
    const item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id,newName){
    try{
      if(typeof(name) === undefined || name === '')
        throw new Error;
      const item = this.findById(id);
      item.name = newName;
    }catch(e){
      console.log('Cannot Update Name ' + e.message);
    }
  }

  function findAndDelete(id){
    const item = findById(id);
    this.items.splice(this.items.indexOf(item),1);
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };
}());
