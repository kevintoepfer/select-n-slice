var sketch = require('sketch')


export default function(context, value) {

  var document = context.document;
  var currentPage = document.currentPage();
  var selection = context.selection;
  var slicePadding;

  // check if at least 1 object is selected
  if(selection.count() == 0){
  	sketch.UI.message("⚠️ Please select at least 1 object.");
  	return;
  };

  // ask for padding
  sketch.UI.getInputFromUser(
    "How much padding do you want?", { initialValue: '100' },
    (err, value) => {
      if (err) {
        return
      } else {
        slicePadding = value;

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
        sliceFrame.setX(originalLocation.x - slicePadding);
        sliceFrame.setY(originalLocation.y - slicePadding);
        sliceFrame.setWidth(originalSize.width + slicePadding * 2);
        sliceFrame.setHeight(originalSize.height + slicePadding * 2);

        // add slice
        document.currentPage().addLayers([newSlice]);
      }
    }
  );
};