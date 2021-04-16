var sketch = require('sketch')


export default function(context) {
  var document = context.document;
  var currentPage = document.currentPage();
  var selection = context.selection;

  // check if at least 1 object is selected
  if(selection.count() == 0){
  	sketch.UI.message("⚠️ Please select at least 1 object.");
  	return;
  };

  // get selected objects
  var handler = context.document.eventHandlerManager().normalHandler();
  var whatUserSelected = handler.selectedRect();

  // get size and shape
  var originalLocation = whatUserSelected.origin;
  var originalSize = whatUserSelected.size;

  // set slice size
  var newSlice = MSSliceLayer.new();
  var sliceFrame = newSlice.frame();

  // apply slice size
  sliceFrame.setX(originalLocation.x);
  sliceFrame.setY(originalLocation.y);
  sliceFrame.setWidth(originalSize.width);
  sliceFrame.setHeight(originalSize.height);

  // add slice
  document.currentPage().addLayers([newSlice]);
};