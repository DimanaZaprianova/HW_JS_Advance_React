function traverseDOM(node) {
    // recursion exit condition:
    if (!node) {
      return;
    }
  
    //*** the do what we want to do part ***//
    if (node.className == "red") {
      node.style.color = "red";
    }
  
    //*** the recursion (traverse) part ***//
    let childrens = node.children;
    // do the same for each children
    for (let i = 0, len = childrens.length; i < len; i++) {
      traverseDOM(childrens[i]);
    }
  }
  
  traverseDOM(document.body);
  