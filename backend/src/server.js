const app = require("./app");
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log('USER:', process.env.DB_USER);
    console.log('DB:', process.env.DB_NAME);
});