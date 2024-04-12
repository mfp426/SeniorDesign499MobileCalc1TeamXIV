

const router = express.Router();

router.get('/api', async (req, res) => {
    res.json({"test": ["test1", "test2"]});
})