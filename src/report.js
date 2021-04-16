var sketch = require('sketch')


export default function(context) {
	NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("https://github.com/kevintoepfer/select-n-slice/issues/new"));
}