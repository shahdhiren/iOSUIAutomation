
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().textFields()[0].tap();
target.frontMostApp().keyboard().typeString("Dhiren Shah");
target.frontMostApp().mainWindow().textViews()[0].tapWithOptions({tapOffset:{x:0.34, y:0.45}});
target.frontMostApp().keyboard().typeString("Description");
target.frontMostApp().mainWindow().buttons()["Next"].tap();
target.frontMostApp().mainWindow().buttons()["Click Here"].tap();
target.tap({x:85.50, y:256.50});
