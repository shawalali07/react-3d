const originalConsoleLog = console.log;

console.log = function (message, data) {
  const styledMessage = "%c" + message + "===>";
  const style = "font-size: 18px;";
  originalConsoleLog.apply(console, [styledMessage, style, data]);
};
