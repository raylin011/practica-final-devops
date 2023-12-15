
const saludar = require('./app');



test("de esperar un hola mundo", ()=>{
    expect(saludar()).toBe("hola mundo")
})