// router product
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET requests to /products'
	});
});

router.post('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling POST requests to /products'
	});
});

router.get('/:productId', (req, res, next) => {
	const id = req.params.productId;
	if (id === 'special') {
		res.status(200).json({
			message : 'You discovered the special ID',
			id : id
		});
	} else {
		res.status(200).json({
			message : 'hey you, who tf are you'
		});
	};
});

router.patch('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'Handling PATCH requests to /products'
	});
});

router.delete('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'Handling DELETE requests to /products'
	});
});

module.exports = router;