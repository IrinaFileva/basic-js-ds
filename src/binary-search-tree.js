const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
  }

  #root = null;

  root(){
    return this.#root;
  };

  add(data){
    this.#root = append(this.#root, data);

    function append(node, data){
      if(!node){
        return new Node(data);
      };

      if(node.data === data){
        return node;
      };

      if(node.data > data){
        node.left = append(node.left, data);
      }
      else{
        node.right = append(node.right, data);
      };

      return node;
    };
  };

  has(data){

    return quest(this.#root, data);

    function quest(node, value){
      if(!node){
        return false;
      };

      if(node.data === value){
        return true;
      };

      if(value < node.data){
        return quest(node.left, data);
      }else{
        return quest(node.right, data);
      };
    };
  };
    

  find(data){

    return questNode(this.#root, data);

    function questNode(node, value){
      if(!node){
        return null;
      };

      if(node.data === value){
        return node;
      };

      if(value < node.data){
        return questNode(node.left, data);
      }else{
        return questNode(node.right, data);
      };
    };
  };

  remove(data){

    this.#root = killNode(this.#root, data);

    function killNode(node, value){

      if(!node){
        return null;
      };

      if(value < node.data){
        node.left = killNode(node.left, data);
        return node;
      }
      else if(value > node.data){
        node.right = killNode(node.right, data);
        return node;
      }
      else{
        if(!node.left && !node.right){
          return null;
        };

        if(!node.left){
          node = node.right;
          return node;
        };

        if(!node.right){
          node = node.left;
          return node;
        };

        let minRight = node.right;

        while(minRight.left){
          minRight = minRight.left;
        };

        node.data = minRight.data;

        node.right = killNode(node.right, minRight.data);

        return node;

      };
    };
  };

  min(){

   if(!this.#root){
    return null;
   };

   let elem = this.#root;

    while(elem.left){
      elem = elem.left;
    }
    
    return elem.data;
  };

  max(){
    
   if(!this.#root){
    return null;
   };

   let elem = this.#root;

    while(elem.right){
      elem = elem.right;
    };

    return elem.data;
  };
};

module.exports = {
  BinarySearchTree
};