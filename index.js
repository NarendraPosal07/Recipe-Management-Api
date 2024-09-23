const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const userRoutes = require('./routes/userRoute');
const recipeRoutes = require('./routes/recipeRoute');
const db = require('./db/db')
db
app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

